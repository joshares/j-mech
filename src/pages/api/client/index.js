import { clientsList } from "../../../../data/client";
const date = new Date();
const options = { month: "long", day: "numeric", year: "numeric" };
let formattedDate = date.toLocaleDateString("en-US", options);

export default function handler(req, res) {
  if (req.method === "GET") {
    // Handle GET request
    const data = { message: "This is a GET request" };
    res.status(200).json(clientsList);
  } else if (req.method === "POST") {
    // Handle POST request
    const { body } = req;
    const data = { message: "This is a POST request", body };
    const clientForm = req.body.clientForm;
    const newClient = {
      id: Date.now(),
      clientDetails: clientForm,
      notesList: [],
      date: formattedDate,
    };
    clientsList.push(newClient);
    res.status(201).json(newClient);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
