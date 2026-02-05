import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const NOTIFICATION_EMAILS = ["riccardo.destratis@pandata.de", "hi@pandata.de"];

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Translations
const translations = {
  de: {
    subject: "Sie sind auf der Warteliste!",
    thankYou: "Hallo",
    onWaitlist: "Vielen Dank für Ihr Interesse an Linetrace!",
    confirmed: "Sie stehen jetzt auf unserer Warteliste. Wir werden Sie kontaktieren, sobald wir bereit sind, Ihnen einen Zugang zu ermöglichen.",
    meanwhile: "In der Zwischenzeit können Sie gerne auf unserer Website mehr erfahren.",
    visitWebsite: "Website besuchen",
    tagline: "Digitale Schichtdokumentation für die Produktion",
    signature: "Mit freundlichen Grüßen,",
    team: "Das Linetrace Team",
  },
  en: {
    subject: "You're on the waitlist!",
    thankYou: "Hi",
    onWaitlist: "Thank you for your interest in Linetrace!",
    confirmed: "You're now on our waitlist. We'll reach out as soon as we're ready to give you access.",
    meanwhile: "In the meantime, feel free to learn more on our website.",
    visitWebsite: "Visit Our Website",
    tagline: "Digital Shift Documentation for Production",
    signature: "Best regards,",
    team: "The Linetrace Team",
  },
};

type Locale = "de" | "en";

function getTranslations(locale: string) {
  return translations[locale as Locale] || translations.en;
}

// Email template for internal notification (to team)
function generateNotificationEmail(data: {
  name: string;
  email: string;
  company: string;
  locale: string;
}) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #F8FAFC;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 48px 24px;">
        <table role="presentation" style="width: 100%; max-width: 560px; border-collapse: collapse;">

          <!-- Logo -->
          <tr>
            <td style="padding-bottom: 32px;">
              <table role="presentation">
                <tr>
                  <td style="width: 40px; height: 40px; vertical-align: middle;">
                    <img src="https://shiftify-five.vercel.app/icon.svg" alt="Linetrace" width="40" height="40" style="display: block; border-radius: 10px;" />
                  </td>
                  <td style="padding-left: 12px;">
                    <span style="font-size: 20px; font-weight: 700; color: #0F172A;">Linetrace</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Card -->
          <tr>
            <td style="background-color: #FFFFFF; border-radius: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); overflow: hidden;">

              <!-- Header -->
              <table role="presentation" style="width: 100%; background-color: #F0FDF4; border-bottom: 1px solid #BBF7D0;">
                <tr>
                  <td style="padding: 24px 32px;">
                    <p style="margin: 0; font-size: 13px; color: #15803D; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Neue Wartelisten-Anmeldung (${data.locale.toUpperCase()})</p>
                  </td>
                </tr>
              </table>

              <!-- Content -->
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="padding: 32px;">

                    <!-- Contact Details -->
                    <table role="presentation" style="width: 100%; margin-bottom: 24px;">
                      <tr>
                        <td style="padding-bottom: 20px; border-bottom: 1px solid #F1F5F9;">
                          <p style="margin: 0 0 4px; font-size: 12px; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
                          <p style="margin: 0; font-size: 16px; color: #0F172A; font-weight: 600;">${data.name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 20px 0; border-bottom: 1px solid #F1F5F9;">
                          <p style="margin: 0 0 4px; font-size: 12px; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                          <p style="margin: 0;">
                            <a href="mailto:${data.email}" style="font-size: 16px; color: #3B82F6; font-weight: 600; text-decoration: none;">${data.email}</a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 20px 0; border-bottom: 1px solid #F1F5F9;">
                          <p style="margin: 0 0 4px; font-size: 12px; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px;">Company</p>
                          <p style="margin: 0; font-size: 16px; color: #0F172A; font-weight: 600;">${data.company}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 20px;">
                          <p style="margin: 0 0 4px; font-size: 12px; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px;">Language</p>
                          <p style="margin: 0; font-size: 16px; color: #0F172A; font-weight: 600;">${data.locale.toUpperCase()}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Button -->
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td align="center">
                          <a href="mailto:${data.email}?subject=Re: Linetrace Waitlist" style="display: inline-block; background-color: #3B82F6; color: #FFFFFF; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 14px;">
                            Reply to ${data.name.split(' ')[0]}
                          </a>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 32px 0; text-align: center;">
              <p style="margin: 0; font-size: 13px; color: #94A3B8;">
                ${new Date().toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
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
}

// Confirmation email template for the customer
function generateConfirmationEmail(data: {
  name: string;
  locale: string;
}) {
  const t = getTranslations(data.locale);
  const firstName = data.name.split(' ')[0];
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #F8FAFC;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 48px 24px;">
        <table role="presentation" style="width: 100%; max-width: 560px; border-collapse: collapse;">

          <!-- Logo -->
          <tr>
            <td style="padding-bottom: 32px; text-align: center;">
              <table role="presentation" style="display: inline-block;">
                <tr>
                  <td style="width: 44px; height: 44px; vertical-align: middle;">
                    <img src="https://shiftify-five.vercel.app/icon.svg" alt="Linetrace" width="44" height="44" style="display: block; border-radius: 12px;" />
                  </td>
                  <td style="padding-left: 12px;">
                    <span style="font-size: 22px; font-weight: 700; color: #0F172A;">Linetrace</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Card -->
          <tr>
            <td style="background-color: #FFFFFF; border-radius: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); overflow: hidden;">

              <!-- Content -->
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="padding: 48px 40px;">

                    <!-- Heading -->
                    <h1 style="margin: 0 0 24px; font-size: 28px; font-weight: 700; color: #0F172A; text-align: center;">
                      ${t.thankYou}, ${firstName}!
                    </h1>

                    <p style="margin: 0 0 16px; font-size: 16px; color: #475569; line-height: 1.7; text-align: center;">
                      ${t.onWaitlist}
                    </p>

                    <p style="margin: 0 0 24px; font-size: 16px; color: #475569; line-height: 1.7; text-align: center;">
                      ${t.confirmed}
                    </p>

                    <p style="margin: 0 0 32px; font-size: 15px; color: #64748B; line-height: 1.6; text-align: center;">
                      ${t.meanwhile}
                    </p>

                    <!-- Button -->
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td align="center">
                          <a href="https://www.pandata.de" style="display: inline-block; background-color: #3B82F6; color: #FFFFFF; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 14px;">
                            ${t.visitWebsite}
                          </a>
                        </td>
                      </tr>
                    </table>

                    <!-- Signature -->
                    <div style="margin-top: 32px; text-align: center;">
                      <p style="margin: 0 0 4px; font-size: 15px; color: #475569;">${t.signature}</p>
                      <p style="margin: 0; font-size: 15px; color: #0F172A; font-weight: 600;">${t.team}</p>
                    </div>

                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 32px 0; text-align: center;">
              <p style="margin: 0 0 8px; font-size: 14px; font-weight: 600; color: #0F172A;">Linetrace</p>
              <p style="margin: 0; font-size: 13px; color: #64748B;">${t.tagline}</p>
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
    const { name, email, company, locale = "en" } = body;

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const t = getTranslations(locale);

    // Send notification email to team
    await transporter.sendMail({
      from: `"Linetrace" <${process.env.SMTP_USER}>`,
      to: NOTIFICATION_EMAILS,
      replyTo: email,
      subject: `Neue Wartelisten-Anmeldung: ${company}`,
      html: generateNotificationEmail({ name, email, company, locale }),
    });

    // Send confirmation email to the customer
    await transporter.sendMail({
      from: `"Linetrace" <${process.env.SMTP_USER}>`,
      to: email,
      replyTo: NOTIFICATION_EMAILS[0],
      subject: t.subject,
      html: generateConfirmationEmail({ name, locale }),
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
