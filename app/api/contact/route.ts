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

// Translations
const translations = {
  de: {
    subject: "Vielen Dank für Ihr Interesse an Linetrace",
    thankYou: "Vielen Dank",
    received: "Wir haben Ihre Demo-Anfrage erhalten und freuen uns darauf, Ihnen zu zeigen, wie Linetrace die Produktion bei",
    canHelp: "digitalisieren kann.",
    whatsNext: "Wie geht es weiter",
    step1: "Unser Team wird Ihre Anfrage prüfen",
    step2: "Wir melden uns innerhalb von <strong>24 Stunden</strong>, um eine Demo zu vereinbaren",
    step3: "Sie werden sehen, wie Linetrace Ihre Schichtdokumentation transformiert",
    questions: "Bei Fragen können Sie gerne auf diese E-Mail antworten.",
    visitWebsite: "Website besuchen",
    tagline: "Digitale Schichtdokumentation für die Produktion",
    noMessage: "Keine Nachricht angegeben",
  },
  en: {
    subject: "Thank you for your interest in Linetrace",
    thankYou: "Thank you",
    received: "We have received your demo request and are excited to show you how Linetrace can help digitize production at",
    canHelp: ".",
    whatsNext: "What happens next",
    step1: "Our team will review your request",
    step2: "We will reach out within <strong>24 hours</strong> to schedule a demo",
    step3: "You will see how Linetrace transforms your shift documentation",
    questions: "If you have any questions, feel free to reply to this email.",
    visitWebsite: "Visit Our Website",
    tagline: "Digital Shift Documentation for Production",
    noMessage: "No message provided",
  },
};

type Locale = "de" | "en";

function getTranslations(locale: string) {
  return translations[locale as Locale] || translations.en;
}

// Email template for internal notification (to Riccardo)
function generateNotificationEmail(data: {
  name: string;
  email: string;
  company: string;
  message: string;
  locale: string;
}) {
  const t = getTranslations(data.locale);
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
                  <td style="background-color: #3B82F6; width: 40px; height: 40px; border-radius: 10px; text-align: center; vertical-align: middle;">
                    <span style="color: white; font-size: 18px; font-weight: bold;">L</span>
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
              <table role="presentation" style="width: 100%; background-color: #F8FAFC; border-bottom: 1px solid #E2E8F0;">
                <tr>
                  <td style="padding: 24px 32px;">
                    <p style="margin: 0; font-size: 13px; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">New Demo Request (${data.locale.toUpperCase()})</p>
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
                        <td style="padding-top: 20px;">
                          <p style="margin: 0 0 4px; font-size: 12px; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px;">Company</p>
                          <p style="margin: 0; font-size: 16px; color: #0F172A; font-weight: 600;">${data.company}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Message -->
                    <table role="presentation" style="width: 100%; margin-bottom: 32px;">
                      <tr>
                        <td>
                          <p style="margin: 0 0 8px; font-size: 12px; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                          <div style="background-color: #F8FAFC; border-radius: 8px; padding: 16px; border-left: 3px solid #3B82F6;">
                            <p style="margin: 0; font-size: 15px; color: #334155; line-height: 1.6;">${data.message || t.noMessage}</p>
                          </div>
                        </td>
                      </tr>
                    </table>

                    <!-- Button -->
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td align="center">
                          <a href="mailto:${data.email}?subject=Re: Your Linetrace Demo Request" style="display: inline-block; background-color: #3B82F6; color: #FFFFFF; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 14px;">
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
  company: string;
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
                  <td style="background-color: #3B82F6; width: 44px; height: 44px; border-radius: 12px; text-align: center; vertical-align: middle;">
                    <span style="color: white; font-size: 20px; font-weight: bold;">L</span>
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
                      ${t.thankYou}, ${firstName}
                    </h1>

                    <p style="margin: 0 0 24px; font-size: 16px; color: #475569; line-height: 1.7; text-align: center;">
                      ${t.received} <strong style="color: #0F172A;">${data.company}</strong>${t.canHelp}
                    </p>

                    <!-- Divider -->
                    <div style="height: 1px; background-color: #E2E8F0; margin: 32px 0;"></div>

                    <!-- What's Next -->
                    <h2 style="margin: 0 0 20px; font-size: 16px; font-weight: 600; color: #0F172A;">
                      ${t.whatsNext}
                    </h2>

                    <table role="presentation" style="width: 100%; margin-bottom: 32px;">
                      <tr>
                        <td style="padding: 12px 0; vertical-align: top; width: 32px;">
                          <div style="width: 24px; height: 24px; background-color: #F0FDF4; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: 600; color: #10B981;">1</div>
                        </td>
                        <td style="padding: 12px 0 12px 12px; vertical-align: top;">
                          <p style="margin: 0; font-size: 15px; color: #334155; line-height: 1.5;">${t.step1}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; vertical-align: top; width: 32px;">
                          <div style="width: 24px; height: 24px; background-color: #F0FDF4; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: 600; color: #10B981;">2</div>
                        </td>
                        <td style="padding: 12px 0 12px 12px; vertical-align: top;">
                          <p style="margin: 0; font-size: 15px; color: #334155; line-height: 1.5;">${t.step2}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; vertical-align: top; width: 32px;">
                          <div style="width: 24px; height: 24px; background-color: #F0FDF4; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: 600; color: #10B981;">3</div>
                        </td>
                        <td style="padding: 12px 0 12px 12px; vertical-align: top;">
                          <p style="margin: 0; font-size: 15px; color: #334155; line-height: 1.5;">${t.step3}</p>
                        </td>
                      </tr>
                    </table>

                    <p style="margin: 0 0 32px; font-size: 15px; color: #64748B; line-height: 1.6; text-align: center;">
                      ${t.questions}
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
    const { name, email, company, message, locale = "en" } = body;

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const t = getTranslations(locale);

    // Send notification email to Riccardo
    await transporter.sendMail({
      from: `"Linetrace" <${process.env.SMTP_USER}>`,
      to: NOTIFICATION_EMAIL,
      replyTo: email,
      subject: `New Demo Request: ${name} from ${company}`,
      html: generateNotificationEmail({ name, email, company, message, locale }),
    });

    // Send confirmation email to the customer
    await transporter.sendMail({
      from: `"Linetrace" <${process.env.SMTP_USER}>`,
      to: email,
      replyTo: NOTIFICATION_EMAIL,
      subject: t.subject,
      html: generateConfirmationEmail({ name, company, locale }),
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
