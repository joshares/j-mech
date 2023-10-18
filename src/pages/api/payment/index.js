import { paymentsList } from "../../../../data/payment";

export default function handler(req, res) {
  if (req.method === "GET") {
    // Handle GET request
    const data = { message: "This is a GET request" };
    res.status(200).json(paymentsList);
  } else if (req.method === "POST") {
    // const { body } = req;
    // const data = { message: "This is a POST request", body };
    // const jobForm = req.body.jobForm;
    // const newForm = {
    //   id: Date.now(),
    //   jobForm: jobForm,
    // };
    // paymentsList.push(newForm);
    // res.status(201).json(jobList);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
