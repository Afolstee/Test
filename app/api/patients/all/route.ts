import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const username = "coalition";
    const password = "skills-test";
    const authString = Buffer.from(`${username}:${password}`).toString('base64');
    
    const response = await fetch(
      "https://fedskillstest.coalitiontechnologies.workers.dev",
      {
        headers: {
          'Authorization': `Basic ${authString}`
        },
        cache: 'no-store'
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const patients = await response.json();
    return NextResponse.json(patients);
  } catch (error) {
    console.error("Error fetching patients data:", error);
    return NextResponse.json(
      { 
        message: "Failed to fetch patients data",
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
