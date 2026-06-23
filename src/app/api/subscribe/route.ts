import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email } = body;

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY is not configured in environmental variables.");
    }

    // 1. Resolve or create Audience ID in Resend
    let audienceId = process.env.RESEND_AUDIENCE_ID;
    if (!audienceId) {
      try {
        const audListRes = await fetch("https://api.resend.com/audiences", {
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
          },
        });

        if (audListRes.ok) {
          const audListData = await audListRes.json();
          if (audListData.data && audListData.data.length > 0) {
            audienceId = audListData.data[0].id;
          }
        }

        // If no audience exists, create a default one
        if (!audienceId) {
          const createAudRes = await fetch("https://api.resend.com/audiences", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${resendApiKey}`,
            },
            body: JSON.stringify({ name: "Newsletter Subscribers" }),
          });

          if (createAudRes.ok) {
            const createAudData = await createAudRes.json();
            audienceId = createAudData.id;
          } else {
            const errData = await createAudRes.json();
            console.error("Failed to create Resend audience:", errData);
          }
        }
      } catch (err) {
        console.error("Error resolving/creating Resend audience:", err);
      }
    }

    // 2. Add contact to the Audience in Resend
    if (audienceId) {
      try {
        let firstName = name || "Subscriber";
        let lastName = "";
        if (name && name.trim().includes(" ")) {
          const parts = name.trim().split(/\s+/);
          firstName = parts[0];
          lastName = parts.slice(1).join(" ");
        }

        const addContactRes = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            email: email,
            first_name: firstName,
            last_name: lastName,
            unsubscribed: false,
          }),
        });

        if (!addContactRes.ok) {
          const contactErrData = await addContactRes.json();
          console.warn("Resend contact creation warning/error:", contactErrData);
        }
      } catch (err) {
        console.error("Error adding contact to Resend audience:", err);
      }
    } else {
      console.warn("Could not resolve a Resend Audience ID. Skipping contact creation.");
    }

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

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Newsletter Subscription</title>
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
                    <span style="color: #ffffff; opacity: 0.6; font-size: 11px; font-weight: bold; letter-spacing: 0.3em; text-transform: uppercase; display: block;">Newsletter Subscription</span>
                  </td>
                </tr>

                <!-- Content Area -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <p style="margin: 0 0 25px 0; font-size: 16px; color: #4a4a4a; line-height: 1.5; font-weight: 300;">
                      Great news! A new user has subscribed to the newsletter mailing list. Details are outlined below:
                    </p>

                    <!-- Details Table -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 30px; border: 1px solid #eef0f3; border-radius: 8px; overflow: hidden;">
                      <tr style="background-color: #f9fafb;">
                        <td style="padding: 14px 20px; font-size: 13px; font-weight: bold; color: #6b7280; width: 140px; border-bottom: 1px solid #eef0f3;">Subscriber Name</td>
                        <td style="padding: 14px 20px; font-size: 14px; color: #1f2937; font-weight: 600; border-bottom: 1px solid #eef0f3;">${name || "Subscriber"}</td>
                      </tr>
                      <tr>
                        <td style="padding: 14px 20px; font-size: 13px; font-weight: bold; color: #6b7280; border-bottom: 1px solid #eef0f3;">Email Address</td>
                        <td style="padding: 14px 20px; font-size: 14px; border-bottom: 1px solid #eef0f3;"><a href="mailto:${email}" style="color: #FD8E0E; text-decoration: none; font-weight: 600;">${email}</a></td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Footer Section -->
                <tr>
                  <td align="center" style="background-color: #f9fafb; padding: 30px 20px; border-top: 1px solid #eef0f3; text-align: center;">
                    <p style="margin: 0; font-size: 12px; color: #9ca3af;">
                      This notification was generated automatically from the newsletter form on Agromech Hospitality portal.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const fromEmail = process.env.RESEND_FROM || "onboarding@resend.dev";
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: "ishamazad@gmail.com",
        subject: `New Newsletter Subscription - ${name || "Subscriber"}`,
        html: htmlContent,
      }),
    });

    const resData = await res.json();
    if (!res.ok) {
      throw new Error(resData.message || "Failed to send subscription email");
    }
    return NextResponse.json({ success: true, message: "Subscribed successfully" });
  } catch (error: any) {
    console.error("Error subscribing:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to subscribe" },
      { status: 500 }
    );
  }
}
