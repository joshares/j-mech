import { supplierList } from "../../../../data/supplier";

export default function handler(req, res) {
  if (req.method === "GET") {
    // Handle GET request
    const data = { message: "This is a GET request" };
    res.status(200).json(supplierList);
  } else if (req.method === "POST") {
    const { body } = req;
    // const data = { message: "This is a POST request", body };
    const supplierForm = req.body.supplierForm;
    const newForm = {
      id: Date.now(),
      balance: "",
      ad: "",
      supplied: "1",
      supplierForm: supplierForm,
    };
    supplierList.push(newForm);
    res.status(201).json(newForm);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
