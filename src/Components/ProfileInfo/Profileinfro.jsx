import React, { useState } from 'react'
import { Eye, EyeOff, Lock, User,SidebarClose } from "lucide-react";

const Profileinfro = ({Fillinfo,setFillinfo}) => {
  const[ number,setnumber]=useState("")
  const[parentsnum,setparentsnum]=useState("")
  const[school,setschool]=useState("")
  const[dob,setdob] =useState("")
  const[std,setstd]=useState('')
  const [gender,setGender]=useState("")
  const[target,settaregt]=useState("")
  const handleClose = () => {
    setFillinfo(false)
  };
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
        <div className='bg-white m-[50px] rounded-[24px] border border-grey-light'>
          <div className='mt-[15px] text-[#7F7F7F] flex justify-end items-center text-right mr-[20px]'>
          <button className=" cursor-pointer" onClick={handleClose}>
                <SidebarClose size={24} />
        </button>
          </div>

        <div
            id="signin_page"
            className=""
          >
            <div className="signin-box ">
              <div className="flex justify-center items-center flex-col mt-[43px] mb-[35px]">
                <h2 className="text-[36px] font-bold">Information</h2>
                <p className="text-[16px] items-center text-left max-w-[65%] font-normal">
                  Fill the Information to gt started
                </p>
              </div>
              
              <form className="flex flex-col mx-[46px]">
                <div className='flex justify-between gap-7 items-center'>
                <div className="flex mb-[20px] items-center justify-start gap-[20px] border border-[#D9D8D8] text-[#7F7F7F] py-[8px] rounded-[9px]">
                  <input
                    className="focus:outline-none pl-[10px] md:mr-[50px]"
                    type="number"
                    placeholder="Enter Full Name"
                    value={number}
                    maxLength={10}
                    onChange={(e) => setnumber(e.target.value)}
                    required
                  ></input>
                </div>

                <div className="flex mb-[20px] items-center justify-start gap-[20px] border border-[#D9D8D8] text-[#7F7F7F] py-[8px] rounded-[9px]">
              
                  <input
                    className="focus:outline-none pl-[10px] md:mr-[50px]"
                    type=""
                    placeholder="Enter Your Parents Number"
                    maxLength={10}
                    value={parentsnum}
                    onChange={(e) => setparentsnum(e.target.value)}
                    required
                  ></input>
                </div>
                </div>

                <div className='flex justify-between gap-7 items-center'>
                <div className="flex mb-[20px] items-center justify-start gap-[20px] border border-[#D9D8D8] text-[#7F7F7F] py-[8px] rounded-[9px]">
                  <input
                    className="focus:outline-none pl-[10px] md:mr-[50px]"
                    type="number"
                    placeholder="DOB(dd/mm/yy)"
                    value={dob}
                    maxLength={6}
                    onChange={(e) => setdob(e.target.value)}
                    required
                  ></input>
                </div>

                <div className="flex mb-[20px] items-center justify-start gap-[20px] border border-[#D9D8D8] text-[#7F7F7F] py-[8px] rounded-[9px]">
                  <input
                    className="focus:outline-none pl-[10px] md:mr-[50px]"
                    type=""
                    placeholder="Enter Your Parents Number"
                    maxLength={10}
                    value={std}
                    onChange={(e) => setstd(e.target.value)}
                    required
                  ></input>
                </div>
                </div>

                <div className='flex justify-between gap-7 items-center'>
                  <div className="flex w-full mb-[20px] items-center justify-start gap-[20px] border border-[#D9D8D8] text-[#7F7F7F] py-[8px] rounded-[9px]">
                   <select
                         className="focus:outline-none pl-[10px] md:mr-[50px]"
                         value={gender}
                         onChange={(e) => setGender(e.target.value)}
                         required
                       >
                         <option value="">Select Gender</option>
                         <option value="male">Male</option>
                         <option value="female">Female</option>
                         <option value="other">Other</option>
                       </select>
                  </div>

                  <div className="flex mb-[20px] w-full items-center justify-start gap-[20px] border border-[#D9D8D8] text-[#7F7F7F] py-[8px] rounded-[9px]">
                        <select
                          className="focus:outline-none pl-[10px] md:mr-[50px]"
                          value={target}
                          onChange={(e) => settaregt(e.target.value)}
                          required
                        >
                          <option value="">Select Target</option>
                          <option value="iitjee">IIT-JEE</option>
                          <option value="neet">NEET</option>
                          <option value="10th">10TH Boards</option>
                          <option value="12th">12TH Boards</option>
                        </select>
                  </div>
                </div>     
                  
                <div className="flex items-center justify-start gap-[20px] border border-[#D9D8D8] text-[#7F7F7F] py-[8px] rounded-[9px]">
                
                  <input
                    className="focus:outline-none md:mr-[50px] "
                    type="text"
                    placeholder="School"
                    value={school}
                    onChange={(e) => setschool(e.target.value)}
                    required
                  ></input>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <button className="py-[14px] text-[18px] mt-[26px] font-semibold rounded-[9px] bg-[#9654F4] w-full text-center text-white">
                    Submit
                  </button>
              

                <div className="m-3 w-full">
              </div>
                </div>
              </form>  
             
            </div>
          </div>
        </div>
      </div>
  )
}

export default Profileinfro
