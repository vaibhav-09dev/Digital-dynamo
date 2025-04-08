import { NextResponse } from 'next/server';
import { Resend } from 'resend';
const resend = new Resend('re_VFRUKYDV_24uFswxnGdewtnKiSTBooJoA');
export async function GET() {
    try {
        console.log("Sending email...");
      const response=  await resend.emails.send({
            from: 'Digital Dynamo <onboarding@resend.dev>',
            to: ['vaibhav722322@gmail.com'],
            subject: "New request",
            text: "you got a new request",
        });
        console.log("Email sent:", response);
        return NextResponse.json({ message: "email sent 9" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ message: "error sending email", error: error.message }, { status: 500 });
    }
}
 