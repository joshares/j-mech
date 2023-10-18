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
  CHANGE_TOGGLE_STATE,
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
  EDIT_SUPPLIER_FORM,
  FILL_SUPPLIER_FORM,
  CLEAR_SUPPLIER_DATA,
} from "@/action";
import { parse } from "postcss";
const date = new Date();
const options = { month: "long", day: "numeric", year: "numeric" };
let formattedDate = date.toLocaleDateString("en-US", options);

const dateConvert = (date) => {
  const dateStr = date;
  const newDate = new Date(dateStr);
  const options = { month: "short", day: "numeric", year: "numeric" };
  return newDate.toLocaleDateString("en-US", options);
};

const form_reducer = (state, action) => {
  if (action.type === ADD_TO_SUPPLIERLIST) {
    return {
      ...state,
      supplierList: action.payload,
      client_loading: false,
    };
  }
  if (action.type === UPDATE_PROJECT_JOBCARD) {
    const value = state.singleJob.id;
    console.log(value);
    return { ...state, jobCardForm: { ...state.jobCardForm, project: value } };
  }
  if (action.type === SELECT_JOB_CLIENT) {
    console.log(action.payload);
    const { id, fullName, phone, address, gender, email } = action.payload;

    return {
      ...state,
      projectForm: {
        ...state.projectForm,
        client: {
          id: id,
          fullName: fullName,
          phone: phone,
          address: address,
          gender: gender,
          email: email,
        },
      },
    };
  }
  if (action.type === ADD_TEAM_LIST) {
    return {
      ...state,
      teamList: action.payload,
    };
  }
  if (action.type === ADD_TO_PAYMENTLIST) {
    return {
      ...state,
      paymentsList: action.payload,
    };
  }
  if (action.type === ADD_TO_INVOICELIST) {
    return {
      ...state,
      invoiceList: action.payload,
    };
  }
  if (action.type === ADD_TO_QUOTELIST) {
    return {
      ...state,
      quoteList: action.payload,
    };
  }
  if (action.type === ADD_SINGLE_TEAM) {
    return {
      ...state,
      singleTeam: action.payload,
    };
  }

  if (action.type === ADD_INSURANCE_LIST) {
    return {
      ...state,
      insuranceList: action.payload,
    };
  }
  if (action.type === ADD_SINGLE_INSURANCE) {
    return {
      ...state,
      singleInsurance: action.payload,
    };
  }
  if (action.type === SINGLE_CLIENT_BEGIN) {
    return {
      ...state,
      single_loading: true,
      single_error: false,
    };
  }
  if (action.type === SINGLE_ERROR_BEGIN) {
    return {
      ...state,
      single_error: true,
    };
  }
  if (action.type === ADD_CLIENT_BEGIN) {
    return {
      ...state,
      client_loading: true,
    };
  }
  if (action.type === ADD_T0_CLIENT_LIST) {
    return {
      ...state,
      clientList: action.payload,
      client_loading: false,
    };
  }
  if (action.type === ADD_SINGLE_CLIENT) {
    return {
      ...state,
      single_loading: false,
      singleClient: action.payload,
    };
  }
  if (action.type === ADD_T0_JOB_LIST) {
    return {
      ...state,
      jobList: action.payload,
    };
  }
  if (action.type === ADD_SINGLE_JOB) {
    return {
      ...state,
      singleJob: action.payload,
      single_loading: false,
    };
  }
  if (action.type === CANVAS_URL) {
    return {
      ...state,
      canvasUrl: action.payload,
    };
  }
  if (action.type === FUEL_RANGE) {
    return {
      ...state,
      fRange: action.payload,
    };
  }
  if (action.type === NEW_PROJECT_FORM) {
    const { name, value } = action.payload;
    return {
      ...state,
      projectForm: {
        ...state.projectForm,
        [name]: value,
      },
    };
  }
  if (action.type === ADD_PROJECT_FORM) {
    return {
      ...state,
      jobList: action.payload,
      single_loading: false,
      projectForm: {
        client: "",
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
        timeIn: "",
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
    };
  }
  if (action.type === NEW_CLIENT_FORM) {
    const { name, value } = action.payload;
    return { ...state, clientForm: { ...state.clientForm, [name]: value } };
  }
  if (action.type === CHANGE_TOGGLE_STATE) {
    const { id, enabled } = action.payload;
    return {
      ...state,
      projectForm: {
        ...state.projectForm,
        toggleStates: {
          ...state.projectForm.toggleStates,
          [id]: enabled,
        },
      },
    };
  }
  if (action.type === ADD_NEW_CLIENT) {
    return {
      ...state,
      clientList: [...state.clientList, action.payload],
      clientForm: {
        ...state.clientForm,
        names: "",
        phone: "",
        email: "",
        address: "",
        gender: "",
      },
    };
  }
  if (action.type === NEW_INSURANCE_FORM) {
    const { name, value } = action.payload;
    return {
      ...state,
      insuranceForm: { ...state.insuranceForm, [name]: value },
    };
  }
  if (action.type === ADD_NEW_INSURANCE) {
    const { coyName, phone, email, address } = state.insuranceForm;

    let addInsurance = {};
    if (coyName && phone && email && address) {
      addInsurance = {
        companyName: coyName,
        phone: phone,
        email: email,
        address: address,
        date: formattedDate,
      };
    }
    return {
      ...state,
      insuranceList: [...state.insuranceList, addInsurance],
      insuranceForm: {
        ...state.insuranceForm,
        coyName: "",
        phone: "",
        email: "",
        address: "",
      },
    };
  }
  if (action.type === NEW_VEHICLE_FORM) {
    const { name, value } = action.payload;
    return {
      ...state,
      newVehicleForm: { ...state.newVehicleForm, [name]: value },
    };
  }
  if (action.type === NEW_VEHICLE_TOGGLE) {
    const { id, enabled } = action.payload;
    return {
      ...state,
      newVehicleForm: { ...state.newVehicleForm, [id]: enabled },
    };
  }
  if (action.type === NEW_QUOTE_FORM) {
    const { name, value } = action.payload;
    return {
      ...state,
      quoteForm: { ...state.quoteForm, [name]: value },
    };
  }
  if (action.type === ADD_NEW_QUOTE) {
    const { job, itemDesc, quantity, unitCost, tax, total, notes } =
      state.quoteForm;
    let addQuote = {};
    if (job && itemDesc && quantity && unitCost && tax && total) {
      addQuote = {
        job: job,
        itemDescription: itemDesc,
        quantity: quantity,
        unitCost: unitCost,
        tax: tax,
        total: total,
        notes: notes,
        date: formattedDate,
      };
      console.log(addQuote);
    } else {
      return { ...state };
    }
    return {
      ...state,
      quoteList: [...state.quoteList, addQuote],
      quoteForm: {
        job: "",
        itemDescription: "",
        quantity: "",
        unitCost: "",
        tax: "",
        total: "",
        notes: "",
      },
    };
  }
  if (action.type === NEW_INVOICE_FORM) {
    const { name, value } = action.payload;
    return {
      ...state,
      invoiceForm: { ...state.invoiceForm, [name]: value },
    };
  }
  if (action.type === ADD_NEW_INVOICE) {
    const {
      job,
      itemDesc,
      quantity,
      unitCost,
      tax,
      total,
      notes,
      invoiceDate,
      paymentDate,
      paymentDetails,
    } = state.invoiceForm;
    let addInvoice = {};
    if (
      job &&
      itemDesc &&
      quantity &&
      unitCost &&
      tax &&
      total &&
      invoiceDate &&
      paymentDate &&
      paymentDetails
    ) {
      addInvoice = {
        job: job,
        itemDescription: itemDesc,
        quantity: quantity,
        unitCost: unitCost,
        tax: tax,
        total: total,
        notes: notes,
        paymentDetails: paymentDetails,
        invoiceDate: dateConvert(invoiceDate),
        paymentDate: dateConvert(paymentDate),
      };
      console.log(addInvoice);
    } else {
      return { ...state };
    }
    return {
      ...state,
      invoiceList: [...state.invoiceList, addInvoice],
      invoiceForm: {
        job: "",
        itemDescription: "",
        quantity: "",
        unitCost: "",
        tax: "",
        total: "",
        notes: "",
        paymentDetails: "",
      },
    };
  }
  if (action.type === NEW_PAYMENT_FORM) {
    const { name, value } = action.payload;
    return {
      ...state,
      paymentsForm: { ...state.paymentsForm, [name]: value },
    };
  }
  if (action.type === ADD_NEW_PAYMENT) {
    const { job, amount, paymentDate, paymentMethod, notes } =
      state.paymentsForm;

    let addPayment = {};
    if (job && amount && paymentDate && paymentMethod) {
      addPayment = {
        job: job,
        amount: amount,
        paymentDate: dateConvert(paymentDate),
        paymentMethod: paymentMethod,
        notes: notes,
      };
    }
    return {
      ...state,
      paymentsList: [...state.insuranceList, addPayment],
      paymentsForm: {
        ...state.paymentsForm,
        job: "",
        amount: "",
        paymentDate: "",
        paymentMethod: "",
        notes: "",
      },
    };
  }
  if (action.type === NEW_INVENTORY_FORM) {
    const { name, value } = action.payload;
    return {
      ...state,
      inventoryForm: { ...state.inventoryForm, [name]: value },
    };
  }
  if (action.type === ADD_NEW_INVENTORY) {
    const {
      itemName,
      quantity,
      quantityUnit,
      restock,
      unitCost,
      supplier,
      itemCode,
      shelfNumber,
    } = state.inventoryForm;
    let addInventory = {};
    if (
      itemName &&
      quantity &&
      quantityUnit &&
      restock &&
      unitCost &&
      supplier &&
      itemCode &&
      shelfNumber
    ) {
      addInventory = {
        itemName,
        quantity,
        quantityUnit,
        restock,
        unitCost,
        supplier,
        itemCode,
        shelfNumber,
      };
    } else {
      return { ...state };
    }
    return {
      ...state,
      inventoryList: [...state.inventoryList, addInventory],
      inventoryForm: {
        itemName: "",
        quantity: "",
        quantityUnit: "",
        restock: "",
        unitCost: "",
        supplier: "",
        itemCode: "",
        shelfNumber: "",
      },
    };
  }
  if (action.type === NEW_SUPPLIER_FORM) {
    const { name, value } = action.payload;
    return {
      ...state,
      supplierForm: { ...state.supplierForm, [name]: value },
    };
  }
  if (action.type === EDIT_SUPPLIER_FORM) {
    const { name, value } = action.payload;
    return {
      ...state,
      editSupplierForm: { ...state.editSupplierForm, [name]: value },
    };
  }
  if (action.type === ADD_NEW_SUPPLIER) {
    // const { supplierName, phone, email, address, vat } = state.supplierForm;
    return {
      ...state,
      supplierList: [...state.supplierList, action.payload],
      supplierForm: {
        ...state.supplierForm,
        supplierName: "",
        phone: "",
        email: "",
        address: "",
        vat: "",
      },
    };
  }
  if (action.type === EDIT_SUPPLIER_DETAILS) {
    // const { supplierName, phone, email, address, vat } = state.supplierForm;
    return {
      ...state,
      supplierList: action.payload,
      supplierForm: {
        ...state.supplierForm,
        supplierName: "",
        phone: "",
        email: "",
        address: "",
        vat: "",
      },
    };
  }
  if (action.type === FILL_SUPPLIER_FORM) {
    const newSupplierForm = action.payload.supplierForm;
    return {
      ...state,
      supplierForm: newSupplierForm,
    };
  }
  if (action.type === CLEAR_SUPPLIER_DATA) {
    return {
      ...state,
      supplierForm: {
        ...state.supplierForm,
        supplierName: "",
        phone: "",
        email: "",
        address: "",
        vat: "",
      },
    };
  }
  if (action.type === NEW_TEAM_FORM) {
    const { name, value } = action.payload;
    return {
      ...state,
      teamForm: { ...state.teamForm, [name]: value },
    };
  }
  if (action.type === ADD_NEW_TEAM) {
    const { firstName, lastName, phone, email, role, type, status, address } =
      state.teamForm;

    let addTeam = {};
    if (
      firstName &&
      lastName &&
      phone &&
      email &&
      role &&
      type &&
      status &&
      address
    ) {
      addTeam = {
        firstName,
        lastName,
        phone,
        email,
        role,
        type,
        status,
        address,
        date: formattedDate,
      };
    }
    return {
      ...state,
      teamList: [...state.teamList, addTeam],
      teamForm: {
        ...state.teamForm,
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        role: "",
        type: "",
        status: "",
        address: "",
      },
    };
  }
  if (action.type === NEW_CAMPAIGN_FORM) {
    const { name, value } = action.payload;
    return {
      ...state,
      campaignForm: { ...state.campaignForm, [name]: value },
    };
  }
  if (action.type === ADD_NEW_CAMPAIGN) {
    const { campaignTitle, send, message } = state.campaignForm;

    let addCampaign = {};
    if (campaignTitle && send && message) {
      addCampaign = {
        campaignTitle,
        send,
        message,
      };
    }
    return {
      ...state,
      campaignList: [...state.campaignList, addCampaign],
      campaignForm: {
        ...state.campaignForm,
        campaignTitle: "",
        send: "",
        message: "",
      },
    };
  }
  if (action.type === NEW_NOTES_FORM) {
    const { name, value } = action.payload;
    return { ...state, notesForm: { ...state.notesForm, [name]: value } };
  }
  if (action.type === ADD_NEW_NOTES) {
    return {
      ...state,
      singleClient: {
        ...state.singleClient,
        notesList: [...state.singleClient?.notesList, action.payload],
      },
      notesForm: {
        ...state.notesForm,
        note: "",
      },
    };
  }
  if (action.type === NEW_JOBCARD_FORM) {
    const { name, value } = action.payload;
    return { ...state, jobCardForm: { ...state.jobCardForm, [name]: value } };
  }
  if (action.type === ADD_NEW_JOBCARD) {
    return {
      ...state,
      jobList: action.payload,
      singleJob: {
        ...state.singleJob,
        jobCardList: [...state.singleJob?.jobCardList, state.jobCardForm],
      },
      jobCardForm: {
        ...state.jobCardForm,
        project: "",
        body: "",
        mechanical: "",
        electrical: "",
        approval: "",
      },
    };
  }
  if (action.type === NEW_TASK_FORM) {
    const { name, value } = action.payload;
    return { ...state, taskForm: { ...state.taskForm, [name]: value } };
  }
  if (action.type === ADD_NEW_TASK) {
    const {
      taskTitle,
      assign,
      status,
      taskDesc,
      taskCost,
      dueDate,
      dueTime,
      required,
    } = state.taskForm;
    let addTask = {};
    if (
      (taskTitle,
      assign && status && taskDesc && taskCost && dueDate && dueTime)
    ) {
      addTask = {
        taskTitle,
        assign,
        status,
        taskDesc,
        taskCost,
        dueDate,
        dueTime,
        required,
      };
    }
    return {
      ...state,
      taskList: [...state.taskList, addTask],
      taskForm: {
        ...state.taskForm,
        taskTitle: "",
        assign: "",
        status: "",
        taskDesc: "",
        taskCost: "",
        dueDate: "",
        dueTime: "",
        required: "",
      },
    };
  }
  if (action.type === NEW_EXPENSE_FORM) {
    const { name, value } = action.payload;
    return { ...state, expenseForm: { ...state.expenseForm, [name]: value } };
  }
  if (action.type === ADD_NEW_EXPENSE) {
    const {
      source,
      itemName,
      supplier,
      quantity,
      quantityUnit,
      total,
      expense,
      type,
      status,
      paymentDue,
    } = state.expenseForm;
    let addExpense = {};
    if (
      source &&
      itemName &&
      supplier &&
      quantity &&
      quantityUnit &&
      total &&
      expense &&
      type &&
      status &&
      paymentDue
    ) {
      addExpense = {
        source,
        itemName,
        supplier,
        quantity,
        quantityUnit,
        total,
        expense,
        type,
        status,
        paymentDue,
      };
      console.log(addExpense);
    }
    return {
      ...state,
      expenseList: [...state.expenseList, addExpense],
      expenseForm: {
        ...state.expenseForm,
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
    };
  }
  if (action.type === NEW_UPDATE_FORM) {
    const { name, value } = action.payload;
    return { ...state, updateForm: { ...state.updateForm, [name]: value } };
  }
  if (action.type === ADD_NEW_UPDATE) {
    const { fullName, phone, email, address } = state.updateForm;
    let addUpdate = {};
    if (fullName && phone && email && address) {
      addUpdate = {
        fullName,
        phone,
        email,
        address,
      };
    }
    return {
      ...state,
      updateList: [...state.updateList, addUpdate],
      updateForm: {
        ...state.updateForm,
        fullName: "",
        phone: "",
        email: "",
        address: "",
      },
    };
  }
  if (action.type === NEW_FEEDBACK_FORM) {
    const { name, value } = action.payload;
    return { ...state, feedbackForm: { ...state.feedbackForm, [name]: value } };
  }
  if (action.type === ADD_NEW_FEEDBACK) {
    const { experience, comment } = state.feedbackForm;
    let addFeedback = {};
    if (experience && comment) {
      addFeedback = {
        experience,
        comment,
      };
    }
    return {
      ...state,
      feedbackList: [...state.feedbackList, addFeedback],
      feedbackForm: {
        ...state.feedbackForm,
        experience: "",
        comment: "",
      },
    };
  }
  if (action.type === SMS_FORM) {
    const { name, value } = action.payload;
    return { ...state, smsForm: { ...state.smsForm, [name]: value } };
  }
  if (action.type === SEND_SMS) {
    const { sendTo, phone, message } = state.smsForm;
    let addSms = {};
    if (sendTo && phone && message) {
      addSms = {
        sendTo,
        phone,
        message,
      };
    }
    return {
      ...state,
      smsList: [...state.smsList, addSms],
      smsForm: {
        ...state.smsForm,
        message: "",
      },
    };
  }
  if (action.type === NEW_WORK_FORM) {
    const { name, value } = action.payload;
    return { ...state, workForm: { ...state.workForm, [name]: value } };
  }
  if (action.type === ADD_NEW_WORK) {
    const {
      taskTitle,
      assignTo,
      status,
      taskCost,
      taskDesc,
      dueDate,
      dueTime,
      requiredParts,
    } = state.workForm;
    let addWork = {};
    if (
      taskTitle &&
      assignTo &&
      status &&
      taskCost &&
      taskDesc &&
      dueDate &&
      dueTime &&
      requiredParts
    ) {
      addWork = {
        taskTitle,
        assignTo,
        status,
        taskCost,
        taskDesc,
        dueDate,
        dueTime,
        requiredParts,
      };
      console.log(addWork);
    }
    return {
      ...state,
      workList: [...state.workList, addWork],
      workForm: {
        ...state.workForm,
        taskTitle: "",
        assignTo: "",
        status: "",
        taskCost: "",
        taskDesc: "",
        dueDate: "",
        dueTime: "",
        requiredParts: "",
      },
    };
  }
  if (action.type === NEW_PARTS_FORM) {
    const { name, value } = action.payload;
    return { ...state, partsForm: { ...state.partsForm, [name]: value } };
  }
  if (action.type === ADD_NEW_PARTS) {
    const { name, title } = state.clientForm;
    let partList = {};
    partList = {
      partnName: name,
      partTitle: title,
    };
    return {
      ...state,
      partsList: [...state.partsList, partList],
      partsForm: {
        ...state.partsForm,
        name: "",
        title: "",
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};
export default form_reducer;
