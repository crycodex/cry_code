import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const resend = new Resend(process.env.RESEND_API_KEY ?? "re_6VJgRkvK_6gpXbi3XDaM8tst7UcnTa943");
const RECIPIENT_EMAIL = "isnotcristhian@gmail.com";
function validateFormData(data) {
  if (typeof data !== "object" || data === null) return false;
  const { name, email, message } = data;
  return typeof name === "string" && name.trim().length > 0 && typeof email === "string" && email.trim().length > 0 && typeof message === "string" && message.trim().length > 0;
}
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    if (!validateFormData(body)) {
      return new Response(
        JSON.stringify({ error: "Invalid form data. All fields are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const { name, email, message } = body;
    const { data, error } = await resend.emails.send({
      from: "Cry Code Contact <onboarding@resend.dev>",
      to: [RECIPIENT_EMAIL],
      replyTo: email,
      subject: `New contact from ${name} - cry.code`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New message from your website</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 16px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `
    });
    if (error) {
      console.error("Resend error:", error);
      return new Response(
        JSON.stringify({ error: "Failed to send email. Please try again later." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(
      JSON.stringify({ success: true, id: data?.id }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Unexpected error sending email:", err);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
const prerender = false;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
