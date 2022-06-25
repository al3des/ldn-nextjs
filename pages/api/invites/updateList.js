const { verifyWebhookSignature } = require("@graphcms/utils");

export default function handler(req, res) {
console.log(req.body)
res.json(req.body)
}
