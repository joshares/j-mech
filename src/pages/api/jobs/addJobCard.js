import { jobList } from "../../../../data/job";

export default function handler(req, res) {
  const { body } = req;
  const data = { message: "This is a POST request", body };
  const { jobCard } = req.body;
  const id = parseInt(jobCard.project, 10);
  // Find the client object with the given clientId\
  const job = jobList.find((job) => job.id === id);
  console.log(job);
  console.log(jobCard);

  if (job) {
    // Add the new jobCard to the job's notesList
    // const newJobCard = { id: Date.now(), jobCard };
    job.jobCardList.push(jobCard);

    res.status(202).json(jobList);
  } else {
    res.status(404).json({ success: false, message: "Client not found" });
  }
}
