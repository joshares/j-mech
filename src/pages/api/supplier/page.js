import { supplierList } from "../../../../data/supplier";
export default function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;
    const object = supplierList.find((obj) => obj.id === Number(id));

    if (object) {
      res.status(200).json(object);
    } else {
      res.status(404).json({ message: "Object not found" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
