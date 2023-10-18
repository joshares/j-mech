import { clientsList } from "../../../../data/client";

export default function handler(req, res) {
  const { body } = req;
  const data = { message: "This is a POST request", body };
  const { clientId, note } = req.body;
  // Find the client object with the given clientId\
  const client = clientsList.find((client) => client.id === clientId);

  if (client) {
    // Add the new note to the client's notesList
    const newNotes = { id: Date.now(), note };
    client.notesList.push(newNotes);

    res.status(202).json(newNotes);
  } else {
    res.status(404).json({ success: false, message: "Client not found" });
  }
}
