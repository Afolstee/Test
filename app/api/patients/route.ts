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
    const jessicaTaylor = patients.find((p: any) => p.name === "Jessica Taylor");
    
    if (!jessicaTaylor) {
      return NextResponse.json(
        { message: "Patient not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(jessicaTaylor);
  } catch (error) {
    console.error("Error fetching patient data:", error);
    return NextResponse.json(
      { 
        message: "Failed to fetch patient data",
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
