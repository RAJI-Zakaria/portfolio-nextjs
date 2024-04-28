import { EmailTemplate } from "@/app/_components";
import { NextRequest } from "next/server";
import * as React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    console.log("Sending email...");
    // show all req body
    const { email, message } = await req.json();

    //check before send email

    if (!email || !message) {
      return Response.json({ error: "Please provide an email and message" });
    }

    const { data, error } = await resend.emails.send({
      from: "Zakaria <zakariaraji.me@gmail.com>",
      to: [email],
      subject: "Reaching out from Contact Form",
      react: EmailTemplate({ email, message }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
