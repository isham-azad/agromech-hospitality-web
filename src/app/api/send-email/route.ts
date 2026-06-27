import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      subject,
      service,
      message,
      catalogue,
      address,
      city,
      zipcode,
      vatnumber,
      country
    } = body;

    // Convert local logo to base64 Data URI
    let logoBase64 = "";
    try {
      const logoPath = path.join(process.cwd(), "public", "images", "logo-white.png");
      const logoBuffer = fs.readFileSync(logoPath);
      logoBase64 = `data:image/png;base64,${logoBuffer.toString("base64")}`;
    } catch (err) {
      console.error("Failed to read logo asset:", err);
      logoBase64 = "https://agromechhospitality.com/images/logo-white.png";
    }

    const isCatalogue = !!catalogue;
    const isEnquiry = !!service;

    let subjectText = "";
    if (isCatalogue) {
      subjectText = `Catalogue Download Request: ${catalogue} - ${name}`;
    } else if (isEnquiry) {
      subjectText = subject || `New Enquiry from ${name} - Solutions Needed: ${service}`;
    } else {
      subjectText = subject || `General Contact Inquiry from ${name}`;
    }

    const plainText = isCatalogue
      ? `
Catalogue Download Request
==========================
Catalogue Requested: ${catalogue}
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Country: ${country || "N/A"}
Address: ${address || "N/A"}
City: ${city || "N/A"}
Zipcode: ${zipcode || "N/A"}
VAT Number: ${vatnumber || "N/A"}
      `
      : isEnquiry
        ? `
New Solutions Enquiry
=====================
Name: ${name}
Email: ${email}
Phone: ${phone}
Solution Requested: ${service}

Message:
${message}
      `
        : `
General Contact Message
=======================
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company || "Not Specified"}
Subject: ${subject || "No Subject"}

Message:
${message}
      `;

    // 1. HTML Template for Catalogue Requests
    const catalogueHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Catalogue Download Request</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f4f4f7; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f4f7; padding: 40px 0;">
          <tr>
            <td align="center">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);">
                <!-- Header Banner -->
                <tr>
                  <td align="center" style="background-color: #221F51; padding: 40px 20px; border-bottom: 4px solid #FD8E0E;">
                    <img src="${logoBase64}" alt="Agromech Hospitality" style="max-width: 180px; height: auto; display: block; margin-bottom: 10px;" />
                    <span style="color: #ffffff; opacity: 0.6; font-size: 11px; font-weight: bold; letter-spacing: 0.3em; text-transform: uppercase; display: block;">Catalogue Download Request</span>
                  </td>
                </tr>

                <!-- Content Area -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <p style="margin: 0 0 25px 0; font-size: 16px; color: #4a4a4a; line-height: 1.5; font-weight: 300;">
                      A user has requested a catalogue download. Details are outlined below:
                    </p>

                    <!-- Details Table -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 30px; border: 1px solid #eef0f3; border-radius: 8px; overflow: hidden;">
                      <tr style="background-color: #f9fafb;">
                        <td style="padding: 14px 20px; font-size: 13px; font-weight: bold; color: #6b7280; width: 150px; border-bottom: 1px solid #eef0f3;">Full Name</td>
                        <td style="padding: 14px 20px; font-size: 14px; color: #1f2937; font-weight: 600; border-bottom: 1px solid #eef0f3;">${name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 14px 20px; font-size: 13px; font-weight: bold; color: #6b7280; border-bottom: 1px solid #eef0f3;">Email Address</td>
                        <td style="padding: 14px 20px; font-size: 14px; border-bottom: 1px solid #eef0f3;"><a href="mailto:${email}" style="color: #FD8E0E; text-decoration: none; font-weight: 600;">${email}</a></td>
                      </tr>
                      <tr style="background-color: #f9fafb;">
                        <td style="padding: 14px 20px; font-size: 13px; font-weight: bold; color: #6b7280; border-bottom: 1px solid #eef0f3;">Phone Number</td>
                        <td style="padding: 14px 20px; font-size: 14px; border-bottom: 1px solid #eef0f3;"><a href="tel:${phone}" style="color: #1f2937; text-decoration: none; font-weight: 600;">${phone}</a></td>
                      </tr>
                      <tr>
                        <td style="padding: 14px 20px; font-size: 13px; font-weight: bold; color: #6b7280; border-bottom: 1px solid #eef0f3;">Company</td>
                        <td style="padding: 14px 20px; font-size: 14px; color: #1f2937; border-bottom: 1px solid #eef0f3;">${company}</td>
                      </tr>
                      <tr style="background-color: #f9fafb;">
                        <td style="padding: 14px 20px; font-size: 13px; font-weight: bold; color: #6b7280; border-bottom: 1px solid #eef0f3;">Country</td>
                        <td style="padding: 14px 20px; font-size: 14px; color: #1f2937; border-bottom: 1px solid #eef0f3;">${country || "N/A"}</td>
                      </tr>
                      <tr style="background-color: #fffaf0;">
                        <td style="padding: 14px 20px; font-size: 13px; font-weight: bold; color: #6b7280; border-bottom: 1px solid #eef0f3;">Catalogue Requested</td>
                        <td style="padding: 14px 20px; font-size: 14px; color: #FD8E0E; font-weight: bold; border-bottom: 1px solid #eef0f3;">${catalogue}</td>
                      </tr>
                    </table>

                    <!-- Additional Details Block -->
                    <div style="background-color: #f9fafb; border-left: 4px solid #FD8E0E; border-radius: 4px; padding: 24px;">
                      <h4 style="margin: 0 0 10px 0; font-size: 13px; font-weight: bold; color: #374151; text-transform: uppercase; letter-spacing: 0.05em;">Address & Corporate Details</h4>
                      <p style="margin: 0; font-size: 14px; color: #4b5563; line-height: 1.6; margin-bottom: 0;">
                        <strong>Address:</strong> ${address || "N/A"}<br/>
                        <strong>City:</strong> ${city || "N/A"}<br/>
                        <strong>Zipcode:</strong> ${zipcode || "N/A"}<br/>
                        <strong>VAT Number:</strong> ${vatnumber || "N/A"}
                      </p>
                    </div>
                  </td>
                </tr>

                <!-- Footer Section -->
                <tr>
                  <td align="center" style="background-color: #f9fafb; padding: 30px 20px; border-top: 1px solid #eef0f3; text-align: center;">
                    <a href="https://agromechhospitality.com" target="_blank" style="color: #221F51; text-decoration: none; font-size: 12px; font-weight: bold;">agromechhospitality.com</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // 2. HTML Template for Solutions Enquiry
    const enquiryHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Solutions Enquiry</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f4f4f7; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f4f7; padding: 40px 0;">
          <tr>
            <td align="center">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);">
                <!-- Header Banner -->
                <tr>
                  <td align="center" style="background-color: #221F51; padding: 40px 20px; border-bottom: 4px solid #FD8E0E;">
                    <img src="${logoBase64}" alt="Agromech Hospitality" style="max-width: 180px; height: auto; display: block; margin-bottom: 10px;" />
                    <span style="color: #ffffff; opacity: 0.6; font-size: 11px; font-weight: bold; letter-spacing: 0.3em; text-transform: uppercase; display: block;">New Solutions Enquiry</span>
                  </td>
                </tr>

                <!-- Content Area -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <p style="margin: 0 0 25px 0; font-size: 16px; color: #4a4a4a; line-height: 1.5; font-weight: 300;">
                      A prospective client has requested solutions information. Details are outlined below:
                    </p>

                    <!-- Details Table -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 30px; border: 1px solid #eef0f3; border-radius: 8px; overflow: hidden;">
                      <tr style="background-color: #f9fafb;">
                        <td style="padding: 14px 20px; font-size: 13px; font-weight: bold; color: #6b7280; width: 150px; border-bottom: 1px solid #eef0f3;">Full Name</td>
                        <td style="padding: 14px 20px; font-size: 14px; color: #1f2937; font-weight: 600; border-bottom: 1px solid #eef0f3;">${name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 14px 20px; font-size: 13px; font-weight: bold; color: #6b7280; border-bottom: 1px solid #eef0f3;">Email Address</td>
                        <td style="padding: 14px 20px; font-size: 14px; border-bottom: 1px solid #eef0f3;"><a href="mailto:${email}" style="color: #FD8E0E; text-decoration: none; font-weight: 600;">${email}</a></td>
                      </tr>
                      <tr style="background-color: #f9fafb;">
                        <td style="padding: 14px 20px; font-size: 13px; font-weight: bold; color: #6b7280; border-bottom: 1px solid #eef0f3;">Phone Number</td>
                        <td style="padding: 14px 20px; font-size: 14px; border-bottom: 1px solid #eef0f3;"><a href="tel:${phone}" style="color: #1f2937; text-decoration: none; font-weight: 600;">${phone}</a></td>
                      </tr>
                      <tr style="background-color: #fffaf0;">
                        <td style="padding: 14px 20px; font-size: 13px; font-weight: bold; color: #6b7280; border-bottom: 1px solid #eef0f3;">Solution Needed</td>
                        <td style="padding: 14px 20px; font-size: 14px; color: #FD8E0E; font-weight: bold; border-bottom: 1px solid #eef0f3;">${service}</td>
                      </tr>
                    </table>

                    <!-- Message Block -->
                    <div style="background-color: #f9fafb; border-left: 4px solid #FD8E0E; border-radius: 4px; padding: 24px;">
                      <h4 style="margin: 0 0 10px 0; font-size: 13px; font-weight: bold; color: #374151; text-transform: uppercase; letter-spacing: 0.05em;">Message Outline</h4>
                      <p style="margin: 0; font-size: 14px; color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                    </div>
                  </td>
                </tr>

                <!-- Footer Section -->
                <tr>
                  <td align="center" style="background-color: #f9fafb; padding: 30px 20px; border-top: 1px solid #eef0f3; text-align: center;">
                    <a href="https://agromechhospitality.com" target="_blank" style="color: #221F51; text-decoration: none; font-size: 12px; font-weight: bold;">agromechhospitality.com</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // 3. HTML Template for General Contact Form
    const contactHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>General Contact Message</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f4f4f7; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f4f7; padding: 40px 0;">
          <tr>
            <td align="center">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);">
                <!-- Header Banner -->
                <tr>
                  <td align="center" style="background-color: #221F51; padding: 40px 20px; border-bottom: 4px solid #FD8E0E;">
                    <img src="${logoBase64}" alt="Agromech Hospitality" style="max-width: 180px; height: auto; display: block; margin-bottom: 10px;" />
                    <span style="color: #ffffff; opacity: 0.6; font-size: 11px; font-weight: bold; letter-spacing: 0.3em; text-transform: uppercase; display: block;">General Contact Message</span>
                  </td>
                </tr>

                <!-- Content Area -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <p style="margin: 0 0 25px 0; font-size: 16px; color: #4a4a4a; line-height: 1.5; font-weight: 300;">
                      You have a new general inquiry message from the contact page. Details are outlined below:
                    </p>

                    <!-- Details Table -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 30px; border: 1px solid #eef0f3; border-radius: 8px; overflow: hidden;">
                      <tr style="background-color: #f9fafb;">
                        <td style="padding: 14px 20px; font-size: 13px; font-weight: bold; color: #6b7280; width: 150px; border-bottom: 1px solid #eef0f3;">Full Name</td>
                        <td style="padding: 14px 20px; font-size: 14px; color: #1f2937; font-weight: 600; border-bottom: 1px solid #eef0f3;">${name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 14px 20px; font-size: 13px; font-weight: bold; color: #6b7280; border-bottom: 1px solid #eef0f3;">Email Address</td>
                        <td style="padding: 14px 20px; font-size: 14px; border-bottom: 1px solid #eef0f3;"><a href="mailto:${email}" style="color: #FD8E0E; text-decoration: none; font-weight: 600;">${email}</a></td>
                      </tr>
                      <tr style="background-color: #f9fafb;">
                        <td style="padding: 14px 20px; font-size: 13px; font-weight: bold; color: #6b7280; border-bottom: 1px solid #eef0f3;">Phone Number</td>
                        <td style="padding: 14px 20px; font-size: 14px; border-bottom: 1px solid #eef0f3;"><a href="tel:${phone}" style="color: #1f2937; text-decoration: none; font-weight: 600;">${phone}</a></td>
                      </tr>
                      <tr>
                        <td style="padding: 14px 20px; font-size: 13px; font-weight: bold; color: #6b7280; border-bottom: 1px solid #eef0f3;">Company</td>
                        <td style="padding: 14px 20px; font-size: 14px; color: #1f2937; border-bottom: 1px solid #eef0f3;">${company || "Not Specified"}</td>
                      </tr>
                      <tr style="background-color: #f9fafb;">
                        <td style="padding: 14px 20px; font-size: 13px; font-weight: bold; color: #6b7280; border-bottom: 1px solid #eef0f3;">Subject</td>
                        <td style="padding: 14px 20px; font-size: 14px; color: #1f2937; font-weight: 600; border-bottom: 1px solid #eef0f3;">${subject || "No Subject"}</td>
                      </tr>
                    </table>

                    <!-- Message Block -->
                    <div style="background-color: #f9fafb; border-left: 4px solid #FD8E0E; border-radius: 4px; padding: 24px;">
                      <h4 style="margin: 0 0 10px 0; font-size: 13px; font-weight: bold; color: #374151; text-transform: uppercase; letter-spacing: 0.05em;">Message Outline</h4>
                      <p style="margin: 0; font-size: 14px; color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                    </div>
                  </td>
                </tr>

                <!-- Footer Section -->
                <tr>
                  <td align="center" style="background-color: #f9fafb; padding: 30px 20px; border-top: 1px solid #eef0f3; text-align: center;">
                    <a href="https://agromechhospitality.com" target="_blank" style="color: #221F51; text-decoration: none; font-size: 12px; font-weight: bold;">agromechhospitality.com</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY is not configured in environmental variables.");
    }

    const fromEmail = process.env.RESEND_FROM;
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: `${fromEmail}, anusha@agromechhospitality.com`,
        reply_to: email,
        subject: subjectText,
        text: plainText,
        html: isCatalogue ? catalogueHtml : isEnquiry ? enquiryHtml : contactHtml,
      }),
    });

    const resData = await res.json();
    if (!res.ok) {
      throw new Error(resData.message || "Failed to send email via Resend");
    }
    return NextResponse.json({ success: true, message: "Email sent successfully via Resend" });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
