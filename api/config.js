export default function handler(req, res) {
  res.status(200).json({
    vapi: {
      publicKey: process.env.VAPI_PUBLIC_KEY,
      assistantId: process.env.VAPI_ASSISTANT_ID
    }
  });
}