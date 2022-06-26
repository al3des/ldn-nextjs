import { createInvite, getAllInvites } from "../../../src/lib/graphcms";

export default async (req, res) => {
  try {
    const data = await createInvite(req.query.nickname);
    const list = await getAllInvites();
    return res.status(200).json({ message: "invites!", count: list.length });
  } catch (error) {
    const { message, code } = error;
    res.status(400).json({
      message: error.message,
    });
  }
};
