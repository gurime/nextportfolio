import { NextResponse } from "next/server";
import supabase from "../Config/supabase";

export async function GET(request, { params }) {
  const { shortcode } = params;

  console.log(`Attempting to redirect shortcode: ${shortcode}`);

  try {
    console.log('Querying Supabase');

    const { data: urlData, error } = await supabase
      .from('urls')
      .select('url')
      .eq('shortCode', shortcode)  // Changed from 'short_code' to 'shortCode'
      .single();

    console.log('Supabase query result:', urlData);

    if (error) throw error;

    if (urlData && urlData.url) {
      console.log(`Redirecting to: ${urlData.url}`);
      return NextResponse.redirect(urlData.url);
    } else {
      console.log('Shortcode not found, redirecting to home');
      return NextResponse.redirect(new URL('/', request.url));
    }
  } catch (error) {
    console.error('Error in GET function:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}