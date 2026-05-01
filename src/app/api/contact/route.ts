import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectDescription: string;
  budget?: string;
  timeline?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.projectDescription) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // TODO: Implement lead storage
    // - Send to email
    // - Store in database (MongoDB)
    // - Integrate with CRM
    // - Send confirmation to user

    // For now, log the data (in production, store it)
    console.log("New lead received:", {
      ...body,
      timestamp: new Date().toISOString(),
    });

    // Send confirmation response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your inquiry! We'll get back to you soon.",
        data: {
          id: Math.random().toString(36).substr(2, 9),
          email: body.email,
          receivedAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process your request" },
      { status: 500 }
    );
  }
}

// Handle preflight requests
export async function OPTIONS() {
  return NextResponse.json({ ok: true });
}
