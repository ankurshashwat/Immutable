import React from "react";
import { ImmutableContext } from "../context/context";

const AddFir = () => {
  const { sendTransaction, formData, handleChange } =
    useContext(ImmutableContext);
  const handleSubmit = (e) => {
    const {
      address,
      aadhar,
      fullname,
      contact,
      place,
      date,
      time,
      offence,
      witness,
      complaint,
    } = formData;

    e.preventDefault();
    console.table(formData);
    if (
      !address ||
      !aadhar ||
      !fullname ||
      !contact ||
      !place ||
      !date ||
      !time ||
      !offence ||
      !witness ||
      !complaint
    )
      return alert("All Fields Required");

    sendTransaction();
    return (
      <>
        <div className="editWrapper flex flex-col justify-center items-center h-full w-full py-[20px]">
          <div className="editForm flex flex-col items-center text-base py-8 min-w-fit">
            <div className="headerWrapper flex flex-row items-center justify-between my-[40px] w-full text-base">
              <div className="header items-center flex justify-start items-start text-black font-bold">
                Your Details
              </div>
            </div>
            <div className="font-bold text-black">Aadhar ID</div>
            <input
              className=" white-glassmorphism input flex w-full h-full border-none outline-none text-black hover: cursor-pointer mb-4"
              type="text"
              placeholder="Enter your Aadhar ID"
              onChange={(e) => handleChange(e, "aadhar")}
            />
            <div className="font-bold text-black">Full Name</div>
            <input
              className=" white-glassmorphism input flex w-full h-full border-none outline-none text-black hover: cursor-pointer mb-4"
              type="text"
              placeholder="Enter Full Name"
              onChange={(e) => handleChange(e, "fullname")}
            />
            <div className="font-bold text-black">Contact Number</div>
            <input
              className=" white-glassmorphism input flex w-full h-full border-none outline-none text-black hover: cursor-pointer mb-4"
              type="text"
              placeholder="Enter Contact Number"
              onChange={(e) => handleChange(e, "contact")}
            />

            <div className="headerWrapper flex flex-row items-center justify-between my-[40px] w-full text-base">
              <div className="header items-center flex text-black justify-start items-start font-bold">
                Incident
              </div>
            </div>
            <div className="font-bold text-black">Place of Occurence</div>
            <input
              className=" white-glassmorphism input flex w-full h-full border-none outline-none text-black hover: cursor-pointer mb-4"
              type="text"
              placeholder="Enter Place of Occurence"
              onChange={(e) => handleChange(e, "place")}
            />
            <div className="font-bold text-black">
              Date of Occurence (DDMMYYYY)
            </div>
            <input
              className=" white-glassmorphism input flex w-full h-full border-none outline-none text-black hover: cursor-pointer mb-4"
              type="text"
              placeholder="Enter Date of Occurence"
              onChange={(e) => handleChange(e, "date")}
            />
            <div className="font-bold text-black">Time of Occurence (HHMM)</div>
            <input
              className=" white-glassmorphism input flex w-full h-full border-none outline-none text-black hover: cursor-pointer mb-4"
              type="text"
              placeholder="Enter Time of occurence"
              onChange={(e) => handleChange(e, "time")}
            />
            <div className="headerWrapper flex flex-row items-center justify-between my-[40px] w-full text-base">
              <div className="header items-center flex text-black justify-start items-start font-bold">
                Offence
              </div>
            </div>
            <div className="font-bold text-black">Nature of Offence</div>
            <input
              className="white-glassmorphism input flex w-full h-full border-none outline-none text-black hover: cursor-pointer mb-4"
              type="text"
              placeholder="Enter Nature of Offence"
              onChange={(e) => handleChange(e, "offence")}
            />
            <div className="font-bold text-black">Details of Witness</div>
            <textarea
              className="white-glassmorphism input flex w-full h-full border-none outline-none text-black hover: cursor-pointer mb-4"
              type="text"
              placeholder="Enter Details of Witness"
              onChange={(e) => handleChange(e, "witness")}
            />
            <div className="font-bold text-black">
              Briefly lay down the facts of the case
            </div>
            <textarea
              className="white-glassmorphism input flex w-full h-full border-none outline-none text-black hover: cursor-pointer mb-4"
              type="text"
              placeholder="Enter Complaint"
              onChange={(e) => handleChange(e, "complaint")}
            />
          </div>
          <div
            className="RegisterButton flex flex-col items-center justify-center text-base text-white bg-black rounded-full border-2 border-black hover: cursor-pointer py-[10px] px-[15px]"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            REGISTER FIR
          </div>
          <br />
        </div>
      </>
    );
  };
};
export default AddFir;
