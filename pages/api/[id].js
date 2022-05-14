export default function handler(req, res) {
  const {
    query: { id },
  } = req;

  return res.json({ user: { id, name: "Duncan" } });
}
