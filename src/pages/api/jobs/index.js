import { jobList } from "../../../../data/job";
export default function handler(req, res) {
  if (req.method === "GET") {
    // Handle GET request
    const data = { message: "This is a GET request" };
    res.status(200).json(jobList);
  } else if (req.method === "POST") {
    const { body } = req;
    const data = { message: "This is a POST request", body };
    const jobForm = req.body.jobForm;
    const newForm = {
      id: Date.now(),
      jobCardList: [],
      task: [],
      expenses: [],
      jobForm: jobForm,
    };
    jobList.push(newForm);
    res.status(201).json(jobList);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
