import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming JSON body
    const data = await req.json();

    // Extract form data
    const { name, email, phone, company, country, industry, comments } = data;

    // Make a request to the Google Apps Script Web App URL
    const response = await fetch('https://script.google.com/macros/s/AKfycbxfwnrJ86FKDpEAWz-Afzx63-F9JqFSgnnGtcNPUiDMPVgWv7jghOc3KR6d31mhq7b-/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        company,
        country,
        industry,
        comments,
      }),
    });

    // Parse the JSON response from the Google Apps Script
    const responseData = await response.json();

    // If the request was successful, return success response
    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: 'Data saved successfully',
      });
    } else {
      return NextResponse.json({
        success: false,
        message: responseData.error || 'Unknown error from Google Apps Script',
      });
    }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: `Error: could not send request`,
    });
  }
}
