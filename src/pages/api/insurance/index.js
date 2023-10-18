import { insuranceList } from "../../../../data/insurance";
export default function handler(req, res) {
  if (req.method === "GET") {
    // Handle GET request
    const data = { message: "This is a GET request" };
    res.status(200).json(insuranceList);
  } else if (req.method === "POST") {
    // Handle POST request
    const { body } = req;
    const data = { message: "This is a POST request", body };
    res.status(200).json(insuranceList);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
