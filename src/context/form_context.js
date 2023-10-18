import React, { useState, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/form_reducer";
import {
  ADD_NEW_CAMPAIGN,
  ADD_NEW_CLIENT,
  ADD_NEW_EXPENSE,
  ADD_NEW_FEEDBACK,
  ADD_NEW_INSURANCE,
  ADD_NEW_INVENTORY,
  ADD_NEW_INVOICE,
  ADD_NEW_JOBCARD,
  ADD_NEW_NOTES,
  ADD_NEW_PAYMENT,
  ADD_NEW_QUOTE,
  ADD_NEW_SUPPLIER,
  ADD_NEW_TASK,
  ADD_NEW_TEAM,
  ADD_NEW_UPDATE,
  ADD_NEW_WORK,
  CHANGE_TOGGLE_STATE,
  NEW_CAMPAIGN_FORM,
  NEW_CLIENT_FORM,
  NEW_EXPENSE_FORM,
  NEW_FEEDBACK_FORM,
  NEW_INSURANCE_FORM,
  NEW_INVENTORY_FORM,
  NEW_INVOICE_FORM,
  NEW_JOBCARD_FORM,
  NEW_NOTES_FORM,
  NEW_PAYMENT_FORM,
  NEW_QUOTE_FORM,
  NEW_SUPPLIER_FORM,
  NEW_TASK_FORM,
  NEW_TEAM_FORM,
  NEW_UPDATE_FORM,
  NEW_VEHICLE_FORM,
  NEW_VEHICLE_TOGGLE,
  NEW_WORK_FORM,
  SEND_SMS,
  SMS_FORM,
  ADD_NEW_PARTS,
  NEW_PARTS_FORM,
  NEW_PROJECT_FORM,
  ADD_PROJECT_FORM,
  FUEL_RANGE,
  CANVAS_URL,
  ADD_T0_CLIENT_LIST,
  ADD_SINGLE_CLIENT,
  ADD_T0_JOB_LIST,
  ADD_SINGLE_JOB,
  ADD_CLIENT_BEGIN,
  SINGLE_CLIENT_BEGIN,
  ADD_INSURANCE_LIST,
  ADD_SINGLE_INSURANCE,
  ADD_SINGLE_TEAM,
  ADD_TEAM_LIST,
  SELECT_JOB_CLIENT,
  SINGLE_ERROR_BEGIN,
  ADD_TO_INVOICELIST,
  ADD_TO_PAYMENTLIST,
  ADD_TO_QUOTELIST,
  UPDATE_PROJECT_JOBCARD,
  ADD_TO_SUPPLIERLIST,
  EDIT_SUPPLIER_DETAILS,
  FILL_SUPPLIER_FORM,
  CLEAR_SUPPLIER_DATA,
} from "@/action";
const initialState = {
  // showModal1: true,
  // showModal2: false,
  clientForm: {
    names: "",
    phone: "",
    email: "",
    address: "",
    gender: "",
  },
  clientList: [],
  newVehicleForm: {
    toggle1: true,
    toggle2: false,
  },
  insuranceForm: {
    coyName: "",
    phone: "",
    email: "",
    address: "",
  },
  insuranceList: [],
  quoteForm: {
    job: "",
    itemDesc: "",
    quantity: "1",
    unitCost: "",
    tax: "",
    total: "",
    notes: "",
  },
  quoteList: [],
  invoiceForm: {
    job: "",
    itemDesc: "",
    quantity: "1",
    unitCost: "",
    tax: "",
    total: "",
    notes: "",
    invoiceDate: "",
    paymentDate: "",
    paymentDetails: "",
  },
  invoiceList: [],
  paymentsForm: {
    job: {
      id: 1,
      make: "toyota",
      regNo: "23DHDH56",
    },
    client: {
      id: 300,
      fullName: "",
      phone: "",
    },
    amount: "",
    paymentDate: "",
    paymentMethod: "Cash",
    notes: "",
  },
  paymentsList: [],
  inventoryForm: {
    itemName: "",
    quantity: "",
    quantityUnit: "Units",
    restock: "",
    unitCost: "",
    supplier: "",
    itemCode: "",
    shelfNumber: "",
  },
  inventoryList: [],
  supplierForm: {
    supplierName: "",
    phone: "",
    email: "",
    address: "",
    vat: "",
  },
  supplierList: [],
  teamForm: {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    role: "Staff",
    type: "Full Time",
    status: "Active",
    address: "Select State",
  },
  teamList: [],
  campaignForm: {
    campaignTitle: "",
    send: "",
    message: "",
  },
  campaignList: [],
  notesForm: {
    note: "",
  },
  notesList: [],
  jobCardForm: {
    project: 0,
    body: "",
    mechanical: "",
    electrical: "",
    approval: "",
  },
  jobCardList: [],
  taskForm: {
    taskTitle: "",
    assign: "",
    status: "",
    taskDesc: "",
    taskCost: "",
    dueDate: "",
    dueTime: "",
    required: "",
  },
  taskList: [],
  expenseForm: {
    source: "",
    itemName: "",
    supplier: "",
    quantity: "",
    quantityUnit: "",
    total: "",
    expense: "",
    type: "",
    status: "",
    paymentDue: "",
  },
  expenseList: [],
  updateForm: {
    fullName: "",
    phone: "",
    email: "",
    address: "",
  },
  updateList: [],
  feedbackForm: {
    experience: "",
    comment: "",
  },
  feedbackList: [],
  smsForm: {
    sendTo: "",
    phone: "",
    message: "",
  },
  smsList: [],
  workForm: {
    taskTitle: "",
    assignTo: "",
    status: "",
    taskCost: "",
    taskDesc: "",
    dueDate: "",
    dueTime: "",
    requiredParts: "",
  },
  workList: [],
  partsForm: {
    name: "",
    title: "",
  },
  partsList: [],
  projectForm: {
    client: {
      id: 300,
      fullName: "",
      phone: "",
      email: "",
      address: "",
      gender: "",
    },
    valetFullName: "",
    valetPhone: "",
    valetEmail: "",
    valetId: "",
    make: "",
    model: "",
    regNo: "",
    vin: "",
    engNo: "",
    milleageIn: "",
    milleageUnit: "",
    color: "",
    carYear: "",
    insurance: "",
    dateIn: "",
    timeIn: 809,
    status: "in Progress",
    startDate: "",
    expectedDate: "",
    roadTest: "",
    towingDetails: "",
    insuranceCovered: "",
    bookNotes: "",
    accident: "",
    workRequest: "",
    fuelRange: "",
    toggleStates: {
      wiper: false,
      mirrors: false,
      badge: false,
      spareWheel: false,
      doorLocks: false,
      fireExt: false,
      tankCap: false,
      tankLid: false,
      relay: false,
      horns: false,
      oilFilter: false,
      radCap: false,
      battMk: false,
      arielAuto: false,
      seatBelts: false,
      radioSpeaker: false,
      rearMirror: false,
      wSpanner: false,
      wTriangle: false,
      bootMats: false,
    },
  },
  projectList: [],
  fRange: "82",
  canvasUrl: "",
  singleClient: {},
  client_loading: false,
  client_error: false,
  single_loading: false,
  single_error: false,
  jobList: [],
  singleJob: {
    jobCardList: [],
  },
  singleInsurance: {},
  singleTeam: {},
};

const FormContext = React.createContext();

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // fetching from data local api

  const fetchQuote = async () => {
    try {
      const res = await fetch("api/quote");
      const data = await res.json();
      dispatch({ type: ADD_TO_QUOTELIST, payload: data });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchInvoice = async () => {
    try {
      const res = await fetch("api/invoice");
      const data = await res.json();
      dispatch({ type: ADD_TO_INVOICELIST, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
  const fetchPayment = async () => {
    try {
      const res = await fetch("api/payment");
      const data = await res.json();
      dispatch({ type: ADD_TO_PAYMENTLIST, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
  const fetchClients = async () => {
    dispatch({ type: ADD_CLIENT_BEGIN });
    try {
      const res = await fetch("api/client");
      const data = await res.json();
      dispatch({ type: ADD_T0_CLIENT_LIST, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
  const fetchSuppliers = async () => {
    dispatch({ type: ADD_CLIENT_BEGIN });
    try {
      const res = await fetch("api/supplier");
      const data = await res.json();
      dispatch({ type: ADD_TO_SUPPLIERLIST, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
  const fetchJobs = async () => {
    try {
      const res = await fetch("api/jobs");
      const data = await res.json();
      dispatch({ type: ADD_T0_JOB_LIST, payload: data });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchInsurance = async () => {
    try {
      const res = await fetch("api/insurance");
      const data = await res.json();
      dispatch({ type: ADD_INSURANCE_LIST, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
  const fetchTeamMembers = async () => {
    try {
      const res = await fetch("api/team");
      const data = await res.json();
      dispatch({ type: ADD_TEAM_LIST, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
  //end of fetching from data local api

  //fetching single page from api
  const fetchSingleJob = async (id) => {
    dispatch({ type: SINGLE_CLIENT_BEGIN });
    try {
      const response = await fetch(`/api/jobs/page?id=${id}`);
      const data = await response.json();
      dispatch({ type: ADD_SINGLE_JOB, payload: data });
    } catch (error) {
      dispatch({ type: SINGLE_ERROR_BEGIN });
      console.error("Error fetching data:", error);
    }
  };
  const fetchSingleClient = async (id) => {
    dispatch({ type: SINGLE_CLIENT_BEGIN });
    try {
      const response = await fetch(`/api/client/page?id=${id}`);
      const data = await response.json();
      dispatch({ type: ADD_SINGLE_CLIENT, payload: data });
    } catch (error) {
      dispatch({ type: SINGLE_ERROR_BEGIN });
      console.error("Error fetching data:", error);
    }
  };

  const fetchSingleInsurance = async (id) => {
    try {
      const response = await fetch(`/api/insurance/page?id=${id}`);
      const data = await response.json();
      dispatch({ type: ADD_SINGLE_INSURANCE, payload: data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchSingleMember = async (id) => {
    try {
      const response = await fetch(`/api/team/page?id=${id}`);
      const data = await response.json();
      dispatch({ type: ADD_SINGLE_TEAM, payload: data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //end of fetching single pages from api

  //posting data to api
  const addNewNotes = async () => {
    try {
      const response = await fetch("/api/client/addNotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientId: state.singleClient.id,
          note: state.notesForm.note,
        }),
      });

      const data = await response.json();
      dispatch({ type: ADD_NEW_NOTES, payload: data });
      console.log(data);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const addNewJobCard = async () => {
    try {
      const response = await fetch("/api/jobs/addJobCard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobCard: state.jobCardForm,
        }),
      });

      const data = await response.json();
      dispatch({ type: ADD_NEW_JOBCARD, payload: data });
      console.log(data);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const addProjectForm = async () => {
    try {
      const response = await fetch("/api/jobs", {
        method: "POST",
        body: JSON.stringify({ jobForm: state.projectForm }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      dispatch({ type: ADD_PROJECT_FORM, payload: data });
    } catch (err) {
      console.log(err);
    }
  };

  const addNewClient = async () => {
    try {
      const response = await fetch("/api/client", {
        method: "POST",
        body: JSON.stringify({ clientForm: state.clientForm }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      dispatch({ type: ADD_NEW_CLIENT, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
  const addNewSupplier = async () => {
    try {
      const response = await fetch("/api/supplier", {
        method: "POST",
        body: JSON.stringify({ supplierForm: state.supplierForm }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      dispatch({ type: ADD_NEW_SUPPLIER, payload: data });
    } catch (err) {
      console.log(err);
    }
  };

  const editSupplier = async (id) => {
    try {
      const response = await fetch("/api/supplier/editDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          supplierId: id,
          supplierForm: state.supplierForm,
        }),
      });

      const data = await response.json();
      dispatch({ type: EDIT_SUPPLIER_DETAILS, payload: data });
      console.log(data);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  //end of posting data to api

  const handleSelectClient = (e) => {
    const value = JSON.parse(e.target.value);
    dispatch({ type: SELECT_JOB_CLIENT, payload: value });
  };
  const saveImage = (img) => {
    dispatch({ type: CANVAS_URL, payload: img });
    console.log(img);
  };
  const fuelRange = (e) => {
    const range = e.target.value;
    dispatch({ type: FUEL_RANGE, payload: range });
  };

  const newClientForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_CLIENT_FORM, payload: { name, value } });
  };

  const handleToggleChange = (id, newEnabled) => {
    dispatch({
      type: CHANGE_TOGGLE_STATE,
      payload: { id, enabled: newEnabled },
    });
  };
  const newProjectForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_PROJECT_FORM, payload: { name, value } });
  };
  const fillSupplierForm = (supplier) => {
    dispatch({ type: FILL_SUPPLIER_FORM, payload: supplier });
    console.log(supplier);
  };

  const newInsuranceData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_INSURANCE_FORM, payload: { name, value } });
  };
  const addNewInsurance = () => {
    dispatch({ type: ADD_NEW_INSURANCE });
  };
  const newQuoteData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_QUOTE_FORM, payload: { name, value } });
  };
  const addNewQuote = () => {
    dispatch({ type: ADD_NEW_QUOTE });
  };
  const newInvoiceData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_INVOICE_FORM, payload: { name, value } });
  };
  const addNewInvoice = () => {
    dispatch({ type: ADD_NEW_INVOICE });
  };
  const newPaymentData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_PAYMENT_FORM, payload: { name, value } });
  };
  const addNewPayment = () => {
    dispatch({ type: ADD_NEW_PAYMENT });
  };
  const newInventoryData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_INVENTORY_FORM, payload: { name, value } });
  };
  const addNewInventory = () => {
    dispatch({ type: ADD_NEW_INVENTORY });
  };
  const newSupplierData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_SUPPLIER_FORM, payload: { name, value } });
  };
  const clearSupplierForm = () => {
    dispatch({ type: CLEAR_SUPPLIER_DATA });
  };

  const newTeamMemberData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_TEAM_FORM, payload: { name, value } });
  };
  const addNewTeamMember = () => {
    dispatch({ type: ADD_NEW_TEAM });
  };
  const newCampaignData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_CAMPAIGN_FORM, payload: { name, value } });
  };
  const addNewCampaign = () => {
    dispatch({ type: ADD_NEW_CAMPAIGN });
  };
  const newNotesData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_NOTES_FORM, payload: { name, value } });
  };

  const newJobCardData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_JOBCARD_FORM, payload: { name, value } });
  };
  const updateProjectJobCard = () => {
    dispatch({ type: UPDATE_PROJECT_JOBCARD });
  };
  const newTaskData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_TASK_FORM, payload: { name, value } });
  };
  const addNewTask = () => {
    dispatch({ type: ADD_NEW_TASK });
  };
  const newExpenseData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_EXPENSE_FORM, payload: { name, value } });
  };
  const addNewExpense = () => {
    dispatch({ type: ADD_NEW_EXPENSE });
  };
  const newUpdateData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_UPDATE_FORM, payload: { name, value } });
  };
  const addNewUpdate = () => {
    dispatch({ type: ADD_NEW_UPDATE });
  };
  const newFeedbackData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_FEEDBACK_FORM, payload: { name, value } });
  };
  const addNewFeedback = () => {
    dispatch({ type: ADD_NEW_FEEDBACK });
  };
  const newWorkData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_WORK_FORM, payload: { name, value } });
  };
  const addNewWork = () => {
    dispatch({ type: ADD_NEW_WORK });
  };
  const newSms = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: SMS_FORM, payload: { name, value } });
  };
  const sendSms = () => {
    dispatch({ type: SEND_SMS });
  };
  const newVehicleData = (id, newEnabled) => {
    dispatch({
      type: NEW_VEHICLE_TOGGLE,
      payload: { id, enabled: newEnabled },
    });
  };
  const newPartsForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_PARTS_FORM, payload: { name, value } });
  };
  const addnewParts = () => {
    dispatch({ type: ADD_NEW_PARTS });
  };
  // functions to load when pages start
  useEffect(() => {
    fetchInvoice();
    fetchInsurance();
    fetchPayment();
    fetchClients();
    fetchJobs();
    fetchQuote();
    fetchSuppliers();
  }, []);
  return (
    <FormContext.Provider
      value={{
        ...state,
        fetchSuppliers,
        editSupplier,
        fillSupplierForm,
        clearSupplierForm,
        fetchClients,
        updateProjectJobCard,
        fetchQuote,
        fetchPayment,
        fetchInvoice,
        fetchSingleClient,
        fetchJobs,
        fetchSingleJob,
        fetchInsurance,
        fetchSingleInsurance,
        fetchTeamMembers,
        fetchSingleMember,
        handleSelectClient,
        saveImage,
        fuelRange,
        addProjectForm,
        newProjectForm,
        newClientForm,
        newPartsForm,
        addnewParts,
        addNewClient,
        newVehicleData,
        newInsuranceData,
        addNewInsurance,
        newQuoteData,
        addNewQuote,
        newInvoiceData,
        addNewInvoice,
        newPaymentData,
        addNewPayment,
        newInventoryData,
        addNewInventory,
        newSupplierData,
        addNewSupplier,
        newTeamMemberData,
        addNewTeamMember,
        newCampaignData,
        addNewCampaign,
        newNotesData,
        addNewNotes,
        newJobCardData,
        addNewJobCard,
        newTaskData,
        addNewTask,
        newExpenseData,
        addNewExpense,
        newUpdateData,
        addNewUpdate,
        newFeedbackData,
        addNewFeedback,
        newSms,
        sendSms,
        newWorkData,
        addNewWork,
        handleToggleChange,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
