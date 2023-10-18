import { insuranceList } from "../../../../data/insurance";

export default function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;
    const object = insuranceList.find((obj) => obj.id === id);

    if (object) {
      res.status(200).json(object);
    } else {
      res.status(404).json({ message: "Object not found" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
