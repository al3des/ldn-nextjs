const { verifyWebhookSignature } = require ("@graphcms/utils");

export default async function handler(req, res) {
  const secret = process.env.GRAPHCMS_WEBHOOK_SECRET;

  const body = req.body; // Typically req.body
  const signature = req.headers["gcms-signature"]; // Typically req.headers['gcms-signature']
  // const isValid = true
  try {
    const isValid = verifyWebhookSignature({ body, signature, secret });
    if (isValid) {
        await res.unstable_revalidate('/invites/list');
      return res.status(200).json({ message: "success, revalidated" });
    }
  } catch (error) {
    return res.status(403).json({ error: "Not authorized." + error });
  }
}
