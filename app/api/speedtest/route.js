import supabase from "@/app/Config/supabase"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Introduce artificial latency
    await new Promise(resolve => setTimeout(resolve, 100)); // 100ms delay

    // Generate a random 1MB string
    const testData = 'A'.repeat(1024 * 1024);
    return NextResponse.json({ data: testData });
  } catch (error) {
    console.error('GET request error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { downloadSpeed, uploadSpeed, latency } = await request.json();
    
    // Store the speed test results in Supabase
    const { data, error } = await supabase
      .from('speed_tests')
      .insert({ 
        download_speed: downloadSpeed, 
        upload_speed: uploadSpeed,
        latency: latency 
      });
    
    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to store speed test results' }, { status: 500 });
    } else {
      return NextResponse.json({ message: 'Speed test results stored successfully' });
    }
  } catch (error) {
    console.error('POST request error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
