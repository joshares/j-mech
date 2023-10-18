import { supplierList } from "../../../../data/supplier";

export default function handler(req, res) {
  const { body } = req;
  const data = { message: "This is a POST request", body };
  const { supplierId, supplierForm } = req.body;
  // Find the supplier object with the given supplierId\
  const supplier = supplierList.find((supplier) => supplier.id === supplierId);

  if (supplier) {
    // Add the new supplierForm to the supplier's notesList
    // const newNotes = { id: Date.now(), supplierForm };
    supplier.supplierForm = supplierForm;

    res.status(202).json(supplierList);
  } else {
    res.status(404).json({ success: false, message: "Client not found" });
  }
}
