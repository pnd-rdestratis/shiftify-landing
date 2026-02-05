import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const NOTIFICATION_EMAIL = "riccardo.destratis@pandata.de";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Email template for internal notification (to Riccardo)
function generateNotificationEmail(data: {
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
                      New Demo Request
                    </p>
                  </td>
                  <td align="right" style="vertical-align: top;">
                    <div style="background: rgba(255,255,255,0.2); border-radius: 12px; padding: 12px 16px;">
                      <span style="color: #FFFFFF; font-size: 24px;">🎯</span>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color: #FFFFFF; padding: 40px;">

              <!-- Alert Banner -->
              <div style="background: linear-gradient(135deg, #10B981 0%, #059669 100%); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
                <p style="margin: 0; color: #FFFFFF; font-size: 15px; font-weight: 600;">
                  ✨ New lead from the Linetrace landing page!
                </p>
              </div>

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
                    <a href="mailto:${data.email}?subject=Re: Your Linetrace Demo Request" style="display: inline-block; background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%); color: #FFFFFF; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 14px;">
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
                    <p style="margin: 0; color: #94A3B8; font-size: 13px;">Internal Notification</p>
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

// Confirmation email template for the customer
function generateConfirmationEmail(data: {
  name: string;
  company: string;
}) {
  const firstName = data.name.split(' ')[0];
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
                      Digital Shift Documentation for Production
                    </p>
                  </td>
                  <td align="right" style="vertical-align: top;">
                    <div style="background: rgba(255,255,255,0.2); border-radius: 12px; padding: 12px 16px;">
                      <span style="color: #FFFFFF; font-size: 24px;">✅</span>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color: #FFFFFF; padding: 40px;">

              <!-- Greeting -->
              <h2 style="margin: 0 0 24px; color: #0F172A; font-size: 24px; font-weight: 700;">
                Thank you, ${firstName}!
              </h2>

              <p style="margin: 0 0 20px; color: #334155; font-size: 16px; line-height: 1.7;">
                We have received your demo request for <strong>Linetrace</strong> and are excited to show you how we can help digitize production at <strong>${data.company}</strong>.
              </p>

              <!-- What's Next Card -->
              <div style="background: linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%); border-radius: 12px; padding: 24px; margin: 24px 0; border: 1px solid #BBF7D0;">
                <h3 style="margin: 0 0 16px; color: #166534; font-size: 16px; font-weight: 700;">
                  📋 What happens next?
                </h3>
                <ul style="margin: 0; padding: 0 0 0 20px; color: #15803D; font-size: 15px; line-height: 1.8;">
                  <li>Our team will review your request</li>
                  <li>We'll reach out within <strong>24 hours</strong> to schedule a personalized demo</li>
                  <li>You'll see how Linetrace can transform your shift documentation</li>
                </ul>
              </div>

              <p style="margin: 0 0 24px; color: #334155; font-size: 16px; line-height: 1.7;">
                In the meantime, if you have any questions, feel free to reply to this email.
              </p>

              <!-- CTA -->
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td align="center">
                    <a href="https://shiftify-five.vercel.app" style="display: inline-block; background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%); color: #FFFFFF; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 14px;">
                      Visit Our Website
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
                    <p style="margin: 0 0 16px; color: #94A3B8; font-size: 13px;">The modern shopfloor solution for digital production</p>
                    <p style="margin: 0; color: #64748B; font-size: 12px;">
                      Pandata GmbH<br>
                      Stuttgart, Germany
                    </p>
                  </td>
                  <td align="right" style="vertical-align: top;">
                    <p style="margin: 0; color: #64748B; font-size: 12px;">
                      ${new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}
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

    // Send notification email to Riccardo
    await transporter.sendMail({
      from: `"Linetrace" <${process.env.SMTP_USER}>`,
      to: NOTIFICATION_EMAIL,
      replyTo: email,
      subject: `🎯 New Demo Request: ${name} from ${company}`,
      html: generateNotificationEmail({ name, email, company, message }),
    });

    // Send confirmation email to the customer
    await transporter.sendMail({
      from: `"Linetrace" <${process.env.SMTP_USER}>`,
      to: email,
      replyTo: NOTIFICATION_EMAIL,
      subject: `Thank you for your interest in Linetrace!`,
      html: generateConfirmationEmail({ name, company }),
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
