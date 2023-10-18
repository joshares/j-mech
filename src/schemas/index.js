import * as yup from "yup";

export const newClientSchema = yup.object().shape({
  email: yup.string().email("please enter a valid email").required("Required"),
  phone: yup
    .string()
    .matches(/^\+?[0-9]{7,15}$/, "enter a valid number")
    .required("Required"),
  address: yup.string().min(2).required("Required"),
  names: yup.string().min(3).required("Required"),
  gender: yup.string().required("Required"),
});
export const newMessageSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(/^\+?[0-9]{7,15}$/, "enter a valid number")
    .required("Required"),
  message: yup.string().required("Required"),
  sendTo: yup.string().required("required"),
});
export const newJobSchema = yup.object().shape({
  project: yup.number().required("required"),
});
export const newQuoteSchema = yup.object().shape({
  job: yup.string().required("required"),
  itemDesc: yup.string().required("required"),
});
export const newInvoiceSchema = yup.object().shape({
  job: yup.string().required("required"),
  itemDesc: yup.string().required("required"),
});
export const newPaymentSchema = yup.object().shape({
  job: yup.string().required("required"),
  amount: yup
    .string()
    .matches(/[0-9]{0,}$/, "enter a valid number")
    .required("required"),
});
export const newItemSchema = yup.object().shape({
  itemName: yup.string().required("required"),
  quantity: yup.string().required("required"),
});
export const newSupplierSchema = yup.object().shape({
  supplierName: yup.string().required("required"),
  email: yup.string().email("please enter a valid email"),
  phone: yup.string().matches(/^\+?[0-9]{7,15}$/, "enter a valid number"),
});
export const newCampaignSchema = yup.object().shape({
  campaignTitle: yup.string().required("Required"),
  send: yup.string().required("Required"),
  message: yup.string().required("required"),
});
export const newTeamSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  phone: yup
    .string()
    .matches(/^\+?[0-9]{7,15}$/, "enter a valid number")
    .required("required"),
  email: yup.string().email("please enter a valid email"),
});
export const newTaskSchema = yup.object().shape({
  taskTitle: yup.string().required("Required"),
  assign: yup.string().required("Required"),
  dueDate: yup.string().required("required"),
});
export const newInsuranceSchema = yup.object().shape({
  email: yup.string().email("please enter a valid email").required("Required"),
  phone: yup
    .string()
    .matches(/^\+?[0-9]{7,15}$/, "enter a valid number")
    .required("Required"),
  address: yup.string().min(2).required("Required"),
  coyName: yup.string().min(3).required("Required"),
});
export const newFeedbackSchema = yup.object().shape({
  experience: yup.string().required("Required"),
  comment: yup.string().min(3).required("Required"),
});
export const newPartsandExpSchema = yup.object().shape({
  itemName: yup.string().required("Required"),
  quantity: yup.string().required("Required"),
  total: yup.string().required("Required"),
});
export const newNotesSchema = yup.object().shape({
  note: yup.string().required("Required"),
});
export const newUpdateInfoSchema = yup.object().shape({
  email: yup.string().email("please enter a valid email").required("Required"),
  phone: yup
    .string()
    .matches(/^\+?[0-9]{7,15}$/, "enter a valid number")
    .required("Required"),
  address: yup.string().min(2).required("Required"),
  fullName: yup.string().min(3).required("Required"),
});
export const newWorkRequestedSchema = yup.object().shape({
  taskTitle: yup.string().required("Required"),
  assignTo: yup.string().required("Required"),
  taskDesc: yup.string().required("Required"),
  taskCost: yup.string().required("Required"),
});
export const newPartsSchema = yup.object().shape({
  name: yup.string().required("Required"),
});
export const newVehicleSchema = yup.object().shape({
  client: yup.string().required("Required"),
  valetPhone: yup.string().matches(/^\+?[0-9]{7,15}$/, "enter a valid number"),
  valetEmail: yup.string().email("please enter a valid email"),
  make: yup.string().required("Required"),
  model: yup.string().required("Required"),
  engNo: yup.string().required("Required"),
  insurance: yup.string().required("Required"),
});
