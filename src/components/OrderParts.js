import React, { useState } from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { TiArrowUnsorted } from "react-icons/ti";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

/************React DND does not work on Strict Mode */
const listOfParts = [
  {
    id: "1",
    label: "1). Wiper",
  },
  {
    id: "2",
    label: "2). Ext/Mirrors P/M",
  },
  {
    id: "3",
    label: "3). Ext/Badge/Stickers",
  },
  {
    id: "4",
    label: "4). Spare Wheel",
  },
  {
    id: "5",
    label: "5). Door Locks",
  },
  {
    id: "6",
    label: "6). Fire Extinguisher",
  },
  {
    id: "7",
    label: "7). Fuel Tank Cap",
  },
  {
    id: "8",
    label: "8). Fuel Tank Lid Lock",
  },
  {
    id: "9",
    label: "9). Relays",
  },
  {
    id: "10",
    label: "10). Horns",
  },
  {
    id: "11",
    label: "11). Oil Filter Cap",
  },
  {
    id: "12",
    label: "12). Radiator Cap",
  },
  {
    id: "13",
    label: "13). Battery MK",
  },
  {
    id: "14",
    label: "14). Arial Auto/MAN",
  },
  {
    id: "15",
    label: "15). Seat Belts",
  },
  {
    id: "16",
    label: "16). Radio Speaker",
  },
  {
    id: "17",
    label: "17). Rear View Mirror",
  },
  {
    id: "18",
    label: "18). W/Spanner",
  },
  {
    id: "19",
    label: "19). W/Triangle",
  },
  {
    id: "20",
    label: "20). Boot Mats",
  },
];

const Parts = ({ label }) => {
  return (
    <div className="grid grid-cols-[2em,1fr] w-full border items-center pl-3 text-sm">
      <TiArrowUnsorted />
      <p className="py-2.5 border border-transparent border-l-gray-400 pl-2">
        {label}
      </p>
    </div>
  );
};

const OrderParts = ({ orderPart, setOrderPart }) => {
  const cancelButtonRef = useRef(null);
  const [parts, setParts] = useState(listOfParts);

  const handleDragDrop = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;
    if (type === "group") {
      const reorderedParts = [...parts];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;
      const [removedParts] = reorderedParts.splice(sourceIndex, 1);
      reorderedParts.splice(destinationIndex, 0, removedParts);
      return setParts(reorderedParts);
    }
  };

  return (
    <Transition.Root show={orderPart} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setOrderPart}
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-5/6 sm:w-full sm:max-w-xl">
                <div className="border bg-white rounded-lg capitalize text-[#526484] pt-4 flex flex-col">
                  <div className="pb-4 px-4 border border-transparent border-b-gray-300 flex justify-between items-center text-xl">
                    <h3>Add Part</h3>
                    <AiOutlineClose
                      className="text-2xl cursor-pointer text-[#526484]"
                      onClick={() => setOrderPart(false)}
                    />
                  </div>
                  <DragDropContext onDragEnd={handleDragDrop}>
                    <p className="text-sm mt-3 px-4">Arrange parts order</p>
                    <div className="mt-3 grid gap-4 px-4 pb-4">
                      <Droppable droppableId="ROOT" type="group">
                        {(provided) => (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            {parts.map((part, index) => (
                              <Draggable
                                draggableId={part.id}
                                key={part.id}
                                index={index}
                              >
                                {(provided) => (
                                  <div
                                    className="grid grid-cols-[2em,1fr] w-full border items-center pl-3 text-sm"
                                    {...provided.dragHandleProps}
                                    {...provided.draggableProps}
                                    ref={provided.innerRef}
                                  >
                                    <TiArrowUnsorted />
                                    <p className="py-2.5 border border-transparent border-l-gray-400 pl-2">
                                      {part.label}
                                    </p>
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder }
                          </div>
                        )}
                      </Droppable>
                    </div>
                  </DragDropContext>
                  <div className="flex mt-auto border py-4 bg-gray-200 justify-end gap-2 px-4">
                    <article
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-blue-400 font-bold text-blue-700 cursor-pointer"
                      onClick={() => setOrderPart(false)}
                    >
                      <MdOutlineCancel />
                      <p className="text-xs">cancel</p>
                    </article>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default OrderParts;
