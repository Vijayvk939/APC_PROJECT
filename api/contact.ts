import nodemailer from "nodemailer";

// Load local environment file if available in Node runtime
try {
  if (typeof process.loadEnvFile === "function") {
    process.loadEnvFile();
  }
} catch {
  // Ignored in environments where .env is not present (e.g. production serverless)
}

// Configuration for Agape Pentecostal Church
const SITE_NAME = process.env.CONTACT_SITE_NAME || process.env.SITE_NAME || "Agape Pentecostal Church";
const SITE_URL = process.env.SITE_URL || "https://agapepentecostalchurch.com";

function getTransporter() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error("SMTP credentials are not configured. Please set SMTP_USER and SMTP_PASS environment variables.");
  }

  // Configure Gmail SMTP transporter using Gmail App Password from environment
  return nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user,
      pass,
    },
  });
}

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function sendContactEmail(data: ContactPayload) {
  const { name, email, phone, message } = data;

  if (!name || !email || !message) {
    throw new Error("Missing required fields: name, email, and message are required.");
  }

  const smtpUser = process.env.SMTP_USER || "";
  const contactTo = process.env.CONTACT_TO_EMAIL || smtpUser;
  const smtpFrom = process.env.SMTP_FROM || (smtpUser ? `${SITE_NAME} <${smtpUser}>` : SITE_NAME);

  if (!contactTo) {
    throw new Error("Recipient email is not configured. Please set CONTACT_TO_EMAIL or SMTP_USER in environment variables.");
  }

  const transporter = getTransporter();

  const cleanPhone = phone ? phone.replace(/[^\d+]/g, "") : "";
  const phoneLineHtml = cleanPhone
    ? `<tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #dee2e6;">
          <span style="color: #6c757d; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Mobile Number</span>
          <p style="margin: 5px 0 0 0; color: #212529; font-size: 16px; font-weight: 500;">
            <a href="tel:${cleanPhone}" style="color: #8B0000; text-decoration: none; font-weight: 600;">${phone}</a>
          </p>
        </td>
       </tr>`
    : "";

  const formattedDate = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const mailOptions = {
    from: smtpFrom,
    to: contactTo,
    replyTo: email,
    subject: `New Prayer Request / Message from ${name} | ${SITE_NAME}`,
    html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Message | ${SITE_NAME}</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
          <tr>
            <td style="background: linear-gradient(135deg, #6b0000 0%, #8B0000 50%, #a80e22 100%); padding: 35px 40px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 0.5px;">
                <a href="${SITE_URL}" style="color: #ffffff; text-decoration: none;">${SITE_NAME}</a>
              </h1>
              <p style="color: #fca5a5; margin: 8px 0 0 0; font-size: 14px;">Prayer Request & Pastoral Care Notification</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px;">
              <h2 style="color: #8B0000; margin: 0 0 16px 0; font-size: 20px; font-weight: 600; border-bottom: 2px solid #e9ecef; padding-bottom: 12px;">New Prayer Request & Message</h2>
              <p style="color: #495057; font-size: 15px; line-height: 1.6; margin: 0 0 25px 0;">You have received a new prayer request or contact message from the church website. Details are provided below:</p>
              
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8f9fa; border-radius: 8px; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 25px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #dee2e6;">
                          <span style="color: #6c757d; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Name</span>
                          <p style="margin: 5px 0 0 0; color: #212529; font-size: 16px; font-weight: 600;">${name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #dee2e6;">
                          <span style="color: #6c757d; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Email</span>
                          <p style="margin: 5px 0 0 0; color: #212529; font-size: 16px; font-weight: 500;">
                            <a href="mailto:${email}" style="color: #8B0000; text-decoration: none; font-weight: 600;">${email}</a>
                          </p>
                        </td>
                      </tr>
                      ${phoneLineHtml}
                      <tr>
                        <td style="padding: 14px 0 0 0;">
                          <span style="color: #6c757d; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Prayer Request / Message</span>
                          <p style="margin: 10px 0 0 0; color: #212529; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message.replace(/\n/g, "<br>")}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center" style="padding: 5px 0 25px 0;">
                    <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #6b0000 0%, #8B0000 100%); color: #ffffff; text-decoration: none; padding: 14px 35px; border-radius: 6px; font-size: 15px; font-weight: 600; letter-spacing: 0.3px;">Reply to ${name}</a>
                  </td>
                </tr>
              </table>

              <p style="color: #6c757d; font-size: 13px; line-height: 1.6; margin: 0; text-align: center;">Submitted on ${formattedDate} via the <a href="${SITE_URL}" style="color: #8B0000; text-decoration: none;">${SITE_NAME}</a> website contact form.</p>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f8f9fa; padding: 25px 40px; text-align: center; border-top: 1px solid #e9ecef;">
              <p style="margin: 0 0 6px 0; font-size: 14px; font-weight: 700;">
                <a href="${SITE_URL}" style="color: #6c757d; text-decoration: none;">${SITE_NAME}</a>
              </p>
              <p style="color: #6c757d; margin: 0 0 4px 0; font-size: 12px;">Bhavanipuram & Gollapudi Sanctuaries, Vijayawada, Andhra Pradesh, India</p>
              <p style="color: #adb5bd; margin: 6px 0 0 0; font-size: 12px;">
                <a href="tel:+919390232344" style="color: #8B0000; text-decoration: none; font-weight: 600;">+91 9390232344</a> | 
                <a href="mailto:agapepentecostalchurchapc@gmail.com" style="color: #8B0000; text-decoration: none; font-weight: 600;">agapepentecostalchurchapc@gmail.com</a> | 
                <a href="${SITE_URL}" style="color: #8B0000; text-decoration: none; font-weight: 600;">agapepentecostalchurch.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    text: (() => {
      const phoneTxt = cleanPhone ? `Mobile:   ${cleanPhone}\n` : "";
      return `${SITE_NAME.toUpperCase()} - NEW PRAYER REQUEST / CONTACT MESSAGE

================================================

You have received a new contact submission / prayer request via the church website (${SITE_URL}).

SENDER INFORMATION
------------------------------------------------
Name:     ${name}
Email:    ${email}
${phoneTxt}
PRAYER REQUEST / MESSAGE
------------------------------------------------
${message}

------------------------------------------------
Received: ${formattedDate}
Reply directly to this email to respond to ${name}.

---
${SITE_NAME}
Website: ${SITE_URL}
Vijayawada, Andhra Pradesh, India
Phone: +91 9390232344
Email: agapepentecostalchurchapc@gmail.com
`;
    })(),
  };

  await transporter.sendMail(mailOptions);
}

// Standard Vercel Serverless Function handler (Node.js runtime)
export default async function handler(req: any, res: any) {
  // Support Web standard Request if called with a single Request argument
  if (!res && req instanceof Request) {
    return POST(req);
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const { name, email, phone, message } = body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields (name, email, message)" });
    }

    await sendContactEmail({ name, email, phone, message });
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Error sending contact email:", error);
    return res.status(500).json({ error: error.message || "Failed to send email" });
  }
}

// Web API standard export for Next.js / modern Vercel Edge/Serverless runtimes
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields (name, email, message)" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    await sendContactEmail({ name, email, phone, message });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error sending contact email:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send email" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
