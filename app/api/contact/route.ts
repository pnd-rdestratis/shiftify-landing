import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function generateEmailHTML(data: {
  name: string;
  email: string;
  company: string;
  message: string;
}) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #F8FAFC;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse;">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%); padding: 40px 40px 30px; border-radius: 16px 16px 0 0;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td>
                    <h1 style="margin: 0; color: #FFFFFF; font-size: 28px; font-weight: 700;">
                      Linetrace
                    </h1>
                    <p style="margin: 8px 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">
                      New Contact Request
                    </p>
                  </td>
                  <td align="right" style="vertical-align: top;">
                    <div style="background: rgba(255,255,255,0.2); border-radius: 12px; padding: 12px 16px;">
                      <span style="color: #FFFFFF; font-size: 24px;">📬</span>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color: #FFFFFF; padding: 40px;">

              <!-- Contact Info Card -->
              <table role="presentation" style="width: 100%; background-color: #F8FAFC; border-radius: 12px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="padding-bottom: 16px; border-bottom: 1px solid #E2E8F0;">
                          <p style="margin: 0 0 4px; color: #64748B; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
                          <p style="margin: 0; color: #0F172A; font-size: 16px; font-weight: 600;">${data.name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 16px 0; border-bottom: 1px solid #E2E8F0;">
                          <p style="margin: 0 0 4px; color: #64748B; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                          <p style="margin: 0;">
                            <a href="mailto:${data.email}" style="color: #3B82F6; font-size: 16px; font-weight: 600; text-decoration: none;">${data.email}</a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 16px;">
                          <p style="margin: 0 0 4px; color: #64748B; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Company</p>
                          <p style="margin: 0; color: #0F172A; font-size: 16px; font-weight: 600;">${data.company}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <div style="margin-bottom: 32px;">
                <p style="margin: 0 0 12px; color: #64748B; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                <div style="background-color: #F8FAFC; border-left: 4px solid #3B82F6; padding: 20px; border-radius: 0 8px 8px 0;">
                  <p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${data.message || "No message provided"}</p>
                </div>
              </div>

              <!-- CTA -->
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td align="center">
                    <a href="mailto:${data.email}" style="display: inline-block; background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%); color: #FFFFFF; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 14px;">
                      Reply to ${data.name.split(' ')[0]}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0F172A; padding: 32px 40px; border-radius: 0 0 16px 16px;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td>
                    <p style="margin: 0 0 8px; color: #FFFFFF; font-size: 16px; font-weight: 600;">Linetrace</p>
                    <p style="margin: 0; color: #94A3B8; font-size: 13px;">Digital Shift Documentation for Production</p>
                  </td>
                  <td align="right" style="vertical-align: top;">
                    <p style="margin: 0; color: #64748B; font-size: 12px;">
                      ${new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: `"Linetrace Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New Contact Request from ${name} - ${company}`,
      html: generateEmailHTML({ name, email, company, message }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
