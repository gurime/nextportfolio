import { NextResponse } from 'next/server';
import supabase from "@/app/Config/supabase";

export async function POST(request) {
  try {
    const { url } = await request.json();
    const shortCode = Math.random().toString(36).substring(2, 8);

    // Insert the new URL into the Supabase table
    const { data, error } = await supabase
      .from('urls')
      .insert([
        { shortCode, url }  // Changed from short_code to shortCode
      ])
      .select();

    if (error) throw error;

    return NextResponse.json({ 
      success: true, 
      shortCode, 
      createdAt: data[0].created_at 
    }, { status: 201 });
  } catch (error) {
    console.error('Error in POST function:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "This endpoint only accepts POST requests" }, { status: 405 });
}