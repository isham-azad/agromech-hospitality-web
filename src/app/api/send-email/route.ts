import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, service, message } = body;

    // Config SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || "", // SMTP username
        pass: process.env.SMTP_PASS || "", // SMTP password
      },
    });

    // Email content
    const mailOptions = {
      from: `"Agromech Hospitality" <info@agromechhospitality.com>`,
      // to: "info@agromechhospitality.com, anusha@agromechhospitality.com",
      to: "ishamazad@gmail.com",
      replyTo: email,
      subject: subject || `New Inquiry from ${name} - ${service || "Hospitality Solutions"}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
${company ? `Company: ${company}\n` : ""}${service ? `Solutions Needed: ${service}\n` : ""}
Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #221F51; border-bottom: 2px solid #D4AF37; padding-bottom: 10px; text-transform: uppercase; font-size: 20px;">New Website Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 150px;">Name:</td>
              <td style="padding: 8px 0; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px 0; color: #333;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Company:</td>
              <td style="padding: 8px 0; color: #333;">${company}</td>
            </tr>
            ` : ""}
            ${service ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Solutions Needed:</td>
              <td style="padding: 8px 0; color: #D4AF37; font-weight: bold;">${service}</td>
            </tr>
            ` : ""}
          </table>
          <div style="margin-top: 30px; padding: 15px; background-color: #f9f9f9; border-radius: 6px;">
            <h3 style="margin-top: 0; color: #221F51; font-size: 16px;">Message:</h3>
            <p style="white-space: pre-wrap; color: #555; line-height: 1.6; margin-bottom: 0;">${message}</p>
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
