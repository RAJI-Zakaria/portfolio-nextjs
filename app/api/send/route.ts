import { EmailTemplate } from "@/app/_components";
import { NextRequest } from "next/server";
import * as React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

//Notice : This function is going to send emails to my own email address instead of sending confirmation email to the user
export async function POST(req: NextRequest) {
  try {
    console.log("Sending email...");
    // show all req body
    const { email, message } = await req.json();

    const receivers = {
      authorized: "zakaria@airakaz.fr",
      personal: "zakariaraji.me@gmail.com",
    };

    //check before send email

    if (!email || !message) {
      return Response.json({ error: "Please provide an email and message" });
    }

    const { data, error } = await resend.emails.send({
      from: receivers.authorized,
      to: "X <" + receivers.personal + ">",
      subject: "Reaching out from Contact Form",
      react: EmailTemplate({ email, message }) as React.ReactElement,
    });

    if (error) {
      console.log(error);
      return Response.json({ error });
    }
    console.log("Email sent successfully!", data);
    return Response.json({ data });
  } catch (error) {
    console.log("Error sending email", error);
    return Response.json({ error });
  }
}
