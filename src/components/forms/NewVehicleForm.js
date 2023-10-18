import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { BsShieldCheck } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import Test from "../FuelGuage";
import DropDownSelect from "../DropDownSelect";
import VehicleInput from "../VehicleInput";
import ToggleInputForm from "../ToggleInputForm";
import DatePicker from "../DatePicker";
import { useFormContext } from "@/context/form_context";
import VehicleRequiredPrompt from "../VehicleRequiredPrompt";
import * as yup from "yup";
import Canvas from "../MotorCanvas";
import { useFormik } from "formik";
import SuccessPrompt from "../SuccessPrompt";

const Form1 = ({ handleChangeNext }) => {
  const [clicked, setClicked] = useState(false);
  const [clientHolder, setClientHolder] = useState("");
  let id = "";
  const {
    newVehicleForm: { toggle1, toggle2 },
    projectForm: {
      client,
      make,
      model,
      regNo,
      vin,
      engNo,
      milleageIn,
      milleageUnit,
      color,
      carYear,
      insurance,
      dateIn,
      timeIn,
      status,
      startDate,
      expectedDate,
      roadTest,
      towingDetails,
      insuranceCovered,
      valetFullName,
      valetPhone,
      valetEmail,
      valetId,
    },
    newVehicleData,
    newProjectForm,
    clientList,
    handleSelectClient,
    projectForm,
    insuranceList,
  } = useFormContext();

  // validationSchema for file1
  const newVehicleSchema = yup.object().shape({
    client: yup.string().required("This field is required"),
    valetFullName: clicked && yup.string().required("This field is required"),
    valetPhone: clicked
      ? yup
          .string()
          .matches(/^\+?[0-9]{7,15}$/, "enter a valid number")
          .required("This field is required")
      : yup.string(),
    valetEmail: clicked
      ? yup.string().email("please enter a valid email")
      : yup.string(),
    make: yup.string().required("This field is required"),
    model: yup.string().required("This field is required"),
    engNo: yup.string().required("This field is required"),
    insurance: yup.string().required("This field is required"),
    insuranceCovered:
      toggle2 && yup.string().required("This field is required"),
  });

  const onSubmit = async (values) => {
    handleChangeNext();
  };
  const {
    values,
    handleBlur,
    isSubmitting,
    touched,
    handleChange,
    handleSubmit,
    errors,
  } = useFormik({
    initialValues: {
      client: clientHolder,
      valetFullName: valetFullName,
      valetEmail: valetEmail,
      valetPhone: valetPhone,
      make: make,
      model: model,
      insurance: insurance,
      engNo: engNo,
      insuranceCovered: id,
    },
    validationSchema: newVehicleSchema,
    onSubmit,
  });
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 px-4 pb-4">
        <div className="text-sm grid gap-2 relative">
          <label>Client</label>
          <select
            name="client"
            value={values.client}
            onChange={(e) => {
              handleChange(e);
              handleSelectClient(e);
              console.log(JSON.parse(e.target.value), projectForm);
              // newProjectForm(e);
            }}
            onBlur={handleBlur}
            className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize  "
          >
            <option>Select Client</option>
            <optgroup label="New Client">
              <option>create new client</option>
            </optgroup>
            <optgroup label="select client">
              {clientList &&
                clientList.map((client, i) => {
                  const { names, phone, address, gender, email } =
                    client.clientDetails;
                  const id = client.id;
                  return (
                    <option
                      value={JSON.stringify({
                        id: id,
                        fullName: names,
                        phone: phone,
                        email: email,
                        address: address,
                        gender: gender,
                      })}
                      className="h-4 p-5"
                      key={id}
                    >
                      {names} - {phone}
                    </option>
                  );
                })}
            </optgroup>
          </select>

          {errors.client && touched.client && (
            <VehicleRequiredPrompt message={errors.client} />
          )}
        </div>
        <ToggleInputForm
          label={"The vehicle was brought in by the client himself/herself"}
          id="toggle1"
          checked={toggle1}
          onChange={(newEnabled) => {
            newVehicleData("toggle1", newEnabled);
            setClicked(!clicked);
          }}
        />
        {toggle1 ? (
          ""
        ) : (
          <div className="block">
            <p className="text-xs text-[#8094ae] font-normal mb-2">
              Enter the details of the person who brought the car on behalf of
              the client.
            </p>
            <div className="grid sm:grid-cols-4 gap-4">
              <div className="text-sm grid gap-2 relative">
                <label>Full Name</label>
                <input
                  type="text"
                  name="valetFullName"
                  value={values.valetFullName}
                  onChange={(e) => {
                    handleChange(e);
                    newProjectForm(e);
                  }}
                  onBlur={handleBlur}
                  className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                  placeholder="Full Name"
                />
                {errors.valetFullName && touched.valetFullName && (
                  <VehicleRequiredPrompt message={errors.valetFullName} />
                )}
              </div>
              <div className="text-sm grid gap-2 relative">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="valetPhone"
                  value={values.valetPhone}
                  onChange={(e) => {
                    handleChange(e);
                    newProjectForm(e);
                  }}
                  onBlur={handleBlur}
                  className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                  placeholder="Phone Number"
                />
                {errors.valetPhone && touched.valetPhone && (
                  <VehicleRequiredPrompt message={errors.valetPhone} />
                )}
              </div>
              <div className="text-sm grid gap-2 relative">
                <label>Email Address</label>
                <input
                  type="email"
                  name="valetEmail"
                  value={values.valetEmail}
                  onChange={(e) => {
                    handleChange(e);
                    newProjectForm(e);
                  }}
                  onBlur={handleBlur}
                  className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                  placeholder="Email Address"
                />
                {errors.valetEmail && touched.valetEmail && (
                  <VehicleRequiredPrompt message={errors.valetEmail} />
                )}
              </div>
              <div className="text-sm grid gap-2">
                <label>ID Number</label>
                <input
                  type="text"
                  name="valetId"
                  value={valetId}
                  onChange={newProjectForm}
                  className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                  placeholder="ID Number"
                />
              </div>
            </div>
          </div>
        )}
        <hr />
        <div className="text-sm grid gap-2">
          <div className="grid md:grid-cols-4 gap-6 py-4 ">
            <DropDownSelect
              label={"Make"}
              select={"Select Make"}
              option={"Toyota"}
              name="make"
              value={values.make}
              onChange={(e) => {
                handleChange(e);
                newProjectForm(e);
              }}
              onBlur={handleBlur}
              error={errors.make}
              touched={touched.make}
            />

            <DropDownSelect
              label={"Model"}
              select={"Select Model"}
              option={"Model S"}
              name="model"
              value={values.model}
              onChange={(e) => {
                handleChange(e);
                newProjectForm(e);
              }}
              onBlur={handleBlur}
              error={errors.model}
              touched={touched.model}
            />
            <VehicleInput
              label={"Registration Number"}
              name="regNo"
              onChange={newProjectForm}
              value={regNo}
            />

            <VehicleInput
              label={"VIN / Chasis No"}
              name="vin"
              onChange={newProjectForm}
              value={vin}
            />
            <VehicleInput
              label={"Engine No"}
              name="engNo"
              value={values.engNo}
              onChange={(e) => {
                handleChange(e);
                newProjectForm(e);
              }}
              onBlur={handleBlur}
              error={errors.engNo}
              touched={touched.engNo}
            />

            <VehicleInput
              label={"Milleage In"}
              name="milleageIn"
              onChange={newProjectForm}
              value={milleageIn}
            />
            <DropDownSelect
              label={"Milleage Unit"}
              option={"Kilometers"}
              name="milleageUnit"
              onChange={newProjectForm}
              value={milleageUnit}
            />
            <div className="text-sm grid gap-2 relative">
              <label>Color</label>
              <input
                type="color"
                name="color"
                onChange={newProjectForm}
                value={color}
                placeholder="Color"
                className="outline-none border w-full rounded-md h-10 py-1.5 px-2 font-medium capitalize"
              />
            </div>
            <DropDownSelect
              label={"Car Year"}
              name="carYear"
              onChange={newProjectForm}
              value={carYear}
              select={"1972"}
              option={"1973"}
            />
            <VehicleInput
              label={"Insurance Company"}
              name="insurance"
              value={values.insurance}
              onChange={(e) => {
                handleChange(e);
                newProjectForm(e);
              }}
              onBlur={handleBlur}
              error={errors.insurance}
              touched={touched.insurance}
            />
            <DatePicker
              label={"Date IN"}
              name="dateIn"
              setDate={newProjectForm}
              date={dateIn}
            />
            <div className="text-sm grid gap-2">
              <label>Time IN</label>
              <input
                type="time"
                name="timeIn"
                value={timeIn}
                onChange={newProjectForm}
                className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
              />
            </div>
            <DropDownSelect
              label={"Status"}
              name="status"
              onChange={newProjectForm}
              value={status}
              option={"In Progress"}
            />
            <DatePicker
              label={"Start Date"}
              name="startDate"
              setDate={newProjectForm}
              date={startDate}
            />
            <DatePicker
              label={"Expected Completion Date"}
              name="expectedDate"
              setDate={newProjectForm}
              date={expectedDate}
            />
            <DatePicker
              label={"Road Test"}
              option={"None"}
              name="roadTest"
              setDate={newProjectForm}
              date={roadTest}
            />
          </div>
          <label>Towing Details / Notes</label>
          <input
            // name="title"
            type="text"
            name="towingDetails"
            onChange={newProjectForm}
            value={towingDetails}
            // value={title}
            //   onChange={updateCampaignDetails}
            className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
            placeholder="Towing Details / Notes"
          />
        </div>
        <hr />
        <ToggleInputForm
          label={"Repair cost covered by insurance"}
          id="toggle2"
          checked={toggle2}
          onChange={(newEnabled) => newVehicleData("toggle2", newEnabled)}
        />
        {toggle2 && (
          <div className="text-sm grid gap-2 relative">
            <label>Insurance Company</label>
            <select
              name="insuranceCovered"
              // onChange={newProjectForm}
              value={values.insuranceCovered}
              onChange={(e) => {
                handleChange(e);
                newProjectForm(e);
              }}
              onBlur={handleBlur}
              className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
              // value={user}
            >
              <option>Select Insurance Company</option>
              {insuranceList &&
                insuranceList.map((insurance, i) => {
                  const { fullName, phone } = insurance?.company;
                  id = insurance.id;
                  return (
                    <option value={id} className="h-4 p-5" key={id}>
                      {fullName} - {phone}
                    </option>
                  );
                })}
              {/* <option>All clients</option> */}
            </select>

            {errors.insuranceCovered && touched.insuranceCovered && (
              <VehicleRequiredPrompt message={errors.insuranceCovered} />
            )}
          </div>
        )}
      </div>
      <div className="flex items-center mt-auto border py-4 bg-gray-200 justify-start gap-4 px-4">
        <button
          disabled={isSubmitting}
          type="submit"
          className="flex items-center gap-2 px-4 py-3 bg-blue-700 rounded-md border border-blue-400 font-bold text-white cursor-pointer"
          onClick={() => console.log(values)}
        >
          <p className="text-xs">Next</p>
        </button>
      </div>
    </form>
  );
};
const Form2 = ({ handleChangeNext, handleChangePrev }) => {
  const {
    projectForm: {
      toggleStates: {
        wiper,
        mirrors,
        badge,
        spareWheel,
        doorLocks,
        fireExt,
        tankCap,
        tankLid,
        relay,
        horns,
        oilFilter,
        radcap,
        battMk,
        arielAuto,
        seatBelts,
        radioSpeaker,
        rearMirror,
        wSpanner,
        wTriangle,
        bootMats,
      },
      bookNotes,
    },
    newProjectForm,
    handleToggleChange,
  } = useFormContext();

  return (
    <form>
      <article className="px-4 pb-4 font-medium">
        <h2 className="text-sm">Vehicle parts check.</h2>
        <div className="grid md:grid-cols-3 my-4 gap-y-8">
          <ToggleInputForm
            label={"Wiper"}
            id="wiper"
            checked={wiper}
            onChange={(newEnabled) => handleToggleChange("wiper", newEnabled)}
          />
          <ToggleInputForm
            label={"Ext/Mirrors P/M"}
            id="mirrors"
            checked={mirrors}
            onChange={(newEnabled) => handleToggleChange("mirrors", newEnabled)}
          />
          <ToggleInputForm
            label={"Ext/Badge/Stickers"}
            id="badge"
            checked={badge}
            onChange={(newEnabled) => handleToggleChange("badge", newEnabled)}
          />
          <ToggleInputForm
            label={"Spare Wheel"}
            id="spareWheel"
            checked={spareWheel}
            onChange={(newEnabled) =>
              handleToggleChange("spareWheel", newEnabled)
            }
          />
          <ToggleInputForm
            label={"Door Locks"}
            id="doorLocks"
            checked={doorLocks}
            onChange={(newEnabled) =>
              handleToggleChange("doorLocks", newEnabled)
            }
          />
          <ToggleInputForm
            label={"Fire Extinguisher"}
            id="fireExt"
            checked={fireExt}
            onChange={(newEnabled) => handleToggleChange("fireExt", newEnabled)}
          />
          <ToggleInputForm
            label={"Fuel Tank Cap"}
            id="tankCap"
            checked={tankCap}
            onChange={(newEnabled) => handleToggleChange("tankCap", newEnabled)}
          />
          <ToggleInputForm
            label={"Fuel Tank Lid Lock"}
            id="tankLid"
            checked={tankLid}
            onChange={(newEnabled) => handleToggleChange("tankLid", newEnabled)}
          />
          <ToggleInputForm
            label={"Relay"}
            id="relay"
            checked={relay}
            onChange={(newEnabled) => handleToggleChange("relay", newEnabled)}
          />
          <ToggleInputForm
            label={"Horns"}
            id="horns"
            checked={horns}
            onChange={(newEnabled) => handleToggleChange("horns", newEnabled)}
          />
          <ToggleInputForm
            label={"Oil Filter Cap"}
            id="oilFilter"
            checked={oilFilter}
            onChange={(newEnabled) =>
              handleToggleChange("oilFilter", newEnabled)
            }
          />
          <ToggleInputForm
            label={"Radiator Cap"}
            id="radCap"
            checked={radcap}
            onChange={(newEnabled) => handleToggleChange("radCap", newEnabled)}
          />
          <ToggleInputForm
            label={"Battery MK"}
            id="battMk"
            checked={battMk}
            onChange={(newEnabled) => handleToggleChange("battMk", newEnabled)}
          />
          <ToggleInputForm
            label={"Arial Auto/MAN"}
            id="arielAuto"
            checked={arielAuto}
            onChange={(newEnabled) =>
              handleToggleChange("arielAuto", newEnabled)
            }
          />
          <ToggleInputForm
            label={"Seat Belts"}
            id="seatBelts"
            checked={seatBelts}
            onChange={(newEnabled) =>
              handleToggleChange("seatBelts", newEnabled)
            }
          />
          <ToggleInputForm
            label={"Radio Speaker"}
            id="radioSpeaker"
            checked={radioSpeaker}
            onChange={(newEnabled) =>
              handleToggleChange("radioSpeaker", newEnabled)
            }
          />
          <ToggleInputForm
            label={"Rear View Mirror"}
            id="rearMirror"
            checked={rearMirror}
            onChange={(newEnabled) =>
              handleToggleChange("rearMirror", newEnabled)
            }
          />
          <ToggleInputForm
            label={"W/Spanner"}
            id="wSpanner"
            checked={wSpanner}
            onChange={(newEnabled) =>
              handleToggleChange("wSpanner", newEnabled)
            }
          />
          <ToggleInputForm
            label={"W/Triangle"}
            id="wTriangle"
            checked={wTriangle}
            onChange={(newEnabled) =>
              handleToggleChange("wTriangle", newEnabled)
            }
          />
          <ToggleInputForm
            label={"Boot Mats"}
            id="bootMats"
            checked={bootMats}
            onChange={(newEnabled) =>
              handleToggleChange("bootMats", newEnabled)
            }
          />
        </div>
        <hr />
        <div className="grid gap-2 mt-5">
          <label>Bookings In Notes</label>
          <textarea
            name="bookNotes"
            value={bookNotes}
            onChange={newProjectForm}
            className="outline-none border relative text-[#8094ae]  min-h-[8em] px-2 rounded-md font-medium"
          />
          <small className="text-[#8094ae] italic">
            Serial numbers, part description/condition, additional parts etc
          </small>
        </div>
      </article>
      <div className="flex items-center mt-auto border py-4 bg-gray-200 justify-start gap-4 px-4">
        <button
          className="flex items-center gap-2 px-4 py-3 bg-blue-700 rounded-md border border-blue-400 font-bold text-white cursor-pointer"
          onClick={handleChangeNext}
        >
          <p className="text-xs">Next</p>
        </button>
        <article
          className="flex items-center gap-2 px-4 py-3 bg-blue-700 rounded-md border border-blue-400 font-bold text-white cursor-pointer"
          onClick={handleChangePrev}
        >
          <p className="text-xs">Prev</p>
        </article>
      </div>
    </form>
  );
};
const Form3 = ({ handleChangeNext, handleChangePrev }) => {
  return (
    <main>
      <div className="min-h-[50vh] px-4 border-2 border-transparent border-b-gray-300 mb-2">
        <hr />
        <div className="text-xs text-center font-normal my-3">
          Mark for dents and scratches. Use{" "}
          <div className="w-[10px] h-[10px] rounded-full bg-[#ff0000] inline-block"></div>{" "}
          Red color for dents and{" "}
          <div className="w-[10px] h-[10px] rounded-full bg-[#1418FF] inline-block"></div>{" "}
          Blue color for scratches. This can not be updated once saved.
        </div>
        <div className="grid min-h-[35vh]">
          <div className="w-4/6 min-h-[25vh] mx-auto ">
            <Canvas />
          </div>
        </div>
        <hr className="mt-4" />
        <div className="text-xs italic font-normal text-center my-4">
          Dents marking selected
        </div>
      </div>
      <div className="flex items-center mt-auto border py-4 bg-gray-200 justify-start gap-4 px-4">
        <button
          className="flex items-center gap-2 px-4 py-3 bg-blue-700 rounded-md border border-blue-400 font-bold text-white cursor-pointer"
          onClick={handleChangeNext}
        >
          <p className="text-xs">Next</p>
        </button>
        <article
          className="flex items-center gap-2 px-4 py-3 bg-blue-700 rounded-md border border-blue-400 font-bold text-white cursor-pointer"
          onClick={handleChangePrev}
        >
          <p className="text-xs">Prev</p>
        </article>
      </div>
    </main>
  );
};
const Form4 = ({ handleChangePrev, setOpen }) => {
  const [success, setSuccess] = useState(false);
  const {
    projectForm: { workRequest, accident },
    newProjectForm,
    addProjectForm,
  } = useFormContext();
  const handleSubmit = () => {
    setSuccess(true);
    addProjectForm();
  };
  return (
    <form>
      <div className="px-4 grid grid-cols-[1.7fr,1fr] gap-8 font-medium">
        <div>
          <div className="grid gap-2">
            <label>Pre Accident / Other Defects</label>
            <textarea
              name="accident"
              value={accident}
              onChange={newProjectForm}
              className="outline-none border relative text-[#8094ae]  min-h-[8em] px-2 rounded-md font-medium"
            />
          </div>
          <div className="flex flex-col gap-3 my-4">
            <label>Work Requested / Owners Instructions</label>
            <input
              name="workRequest"
              value={workRequest}
              onChange={newProjectForm}
              className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
              placeholder="Work Requested / Owners Instructions"
            />
            <input
              className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
              placeholder="Work Requested / Owners Instructions"
            />
            <div className="flex p-2 bg-blue-100 rounded-md text-blue-500 items-center gap-3 mr-auto">
              <BiPlus />
              <span>Add Item</span>
            </div>
          </div>
        </div>
        <Test />
      </div>
      <div className="flex items-center mt-auto border py-4 bg-gray-200 justify-start gap-4 px-4 w-full">
        <article
          className="flex items-center gap-2 px-4 py-3 bg-blue-700 rounded-md border border-blue-400 font-bold text-white cursor-pointer"
          onClick={handleChangePrev}
        >
          <p className="text-xs">Prev</p>
        </article>
        <article
          className="flex  items-center gap-2 px-4 py-3 bg-blue-700 rounded-md border border-blue-400 font-bold text-white cursor-pointer"
          onClick={() => handleSubmit()}
        >
          <p className="text-xs">Submit</p>
        </article>
      </div>
      <SuccessPrompt
        message="project created successfully"
        open={success}
        setOpen={setSuccess}
        setModals={setOpen}
      />
    </form>
  );
};

const NewVehicleForm = ({ open, setOpen }) => {
  const handleChangeNext = () => {
    if (nextPage === stages.length - 1) {
      return;
    }
    setNextPage(nextPage + 1);
  };
  const handleChangePrev = () => {
    if (nextPage === 0) {
      return;
    }
    setNextPage(nextPage - 1);
  };
  const stages = [
    {
      component: <Form1 handleChangeNext={handleChangeNext} />,
    },
    {
      component: (
        <Form2
          handleChangeNext={handleChangeNext}
          handleChangePrev={handleChangePrev}
        />
      ),
    },
    {
      component: (
        <Form3
          handleChangeNext={handleChangeNext}
          handleChangePrev={handleChangePrev}
        />
      ),
    },
    {
      component: (
        <Form4 handleChangePrev={handleChangePrev} setOpen={setOpen} />
      ),
    },
  ];
  const [nextPage, setNextPage] = useState(0);
  const currentPage = stages[nextPage];

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-60 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 md:w-full lg:w-5/6 ">
                <div className="border bg-white rounded-lg capitalize font-medium text-gray-700 pt-4 flex flex-col">
                  <div className="pb-4 px-4 border border-transparent border-b-gray-300 flex justify-between items-center text-xl">
                    <h3>Job</h3>
                    <AiOutlineClose
                      className="text-2xl cursor-pointer text-gray-500"
                      onClick={() => setOpen(false)}
                    />
                  </div>
                  <p className="text-md my-5 normal-case px-4">
                    Create a new Job
                  </p>
                  <div className="px-4 pb-2 my-2">
                    <ul className="grid grid-cols-4 items-center justify-between text-blue-500 text-sm">
                      <li className="relative cursor-pointer">
                        <p>1. CLIENT & VEHICLE DETAIL</p>
                        <div
                          className={`h-[2px] bg-[#0971fe] -bottom-[0.7em] absolute block w-full`}
                        ></div>
                      </li>
                      <li className="relative cursor-pointer">
                        <p>2. VEHICLE CHECK IN</p>
                        <div
                          className={`${
                            (nextPage === 1) |
                              (nextPage === 2) |
                              (nextPage === 3) &&
                            `h-[2px] bg-[#0971fe] -bottom-[0.7em] absolute block w-full`
                          } `}
                        ></div>
                      </li>
                      <li className="relative cursor-pointer">
                        <p>3. DENTS AND SCRATCHES</p>
                        <div
                          className={`${
                            (nextPage === 2) | (nextPage === 3) &&
                            `h-[2px] bg-[#0971fe] -bottom-[0.7em] absolute block w-full`
                          } `}
                        ></div>
                      </li>
                      <li className="relative cursor-pointer">
                        <p>4. DEFECTS & FUEL LEVEL</p>
                        <div
                          className={`${
                            nextPage === 3 &&
                            `h-[2px] bg-[#0971fe] -bottom-[0.7em] absolute block w-full`
                          } `}
                        ></div>
                      </li>
                    </ul>
                  </div>
                  {currentPage.component}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default NewVehicleForm;
