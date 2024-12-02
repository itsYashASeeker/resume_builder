"use client"
import Image from "next/image";
import EmailSVG from "@/assets/email.svg"
import PhoneSVG from "@/assets/phone.svg"
import LocationSVG from "@/assets/location.svg"
import DownArrowSVG from "@/assets/down-arrow.svg"
import ChevronDownSVG from "@/assets/chevron-down.svg"
import AddPlusRoundSVG from "@/assets/add-square-round.svg"
import { useState } from "react";


export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-screen bg-slate-200 flex justify-center items-center px-8 py-12 gap-12 font-sans">
      <div className="w-1/2 h-full bg-white rounded-md font-serif overflow-auto">
        <div className="w-full flex flex-col justify-start items-start ">
          <div className="flex flex-col justify-center items-center py-6 w-full bg-slate-800">
            <p className="font-bold text-2xl">Yash Chauhan</p>
            <p className="text-slate-200">Full Stack Developer</p>
            <div className="flex flex-wrap justify-center gap-3 text-slate-300 mt-2">
              <div className="flex gap-1 justify-center items-center">
                <Image src={EmailSVG} alt="Email" className="w-4 h-4" />
                <p>yash@gmail.com</p>
              </div>
              <div className="flex gap-1 justify-center items-center">
                <Image src={PhoneSVG} alt="Email" className="w-4 h-4" />
                <p>+91 9900992233</p>
              </div>
              <div className="flex gap-1 justify-center items-center">
                <Image src={LocationSVG} alt="Email" className="w-4 h-4" />
                <p>Mumbai, India</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start gap-3 items-start w-full px-8 py-6 text-slate-900">
            <section className="w-full flex-col justify-start items-start">
              <p className="font-bold text-md uppercase">Education</p>
              <div className="w-12 h-1 bg-slate-900 rounded"></div>
              <div className="flex flex-col gap-2">
                <section className="w-full flex-col justify-start items-start text-sm">
                  <div className="flex justify-between items-start py-1">
                    <div className="flex flex-col">
                      <p className="font-semibold ">KJSIT</p>
                      <p className=" text-slate-900 underline">Bachelor of Technology, Computer Science</p>
                    </div>
                    <p className="w-content">2015 - 2021</p>
                  </div>
                  <p className="text-slate-700 pl-2" style={{ fontSize: '0.9rem' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </section>
                <section className="w-full flex-col justify-start items-start">
                  <div className="flex justify-between items-start py-1">
                    <div className="flex flex-col">
                      <p className="font-semibold">KJSIT</p>
                      <p className="text-sm text-slate-900 underline">Bachelor of Technology, Computer Science</p>
                    </div>
                    <p className="w-content">2015 - 2021</p>
                  </div>
                  <p className="text-slate-700 pl-2 text-sm" style={{ fontSize: '0.9rem' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </section>
              </div>

            </section>
            <section className="w-full flex-col justify-start items-start">
              <p className="font-bold text-lg uppercase">Skills</p>
              <div className="w-12 h-1 bg-slate-900 rounded"></div>
              <div className="flex flex-wrap gap-2 py-3 ">
                <div className="border border-1 border-slate-300 px-3  rounded-lg w-fit"
                  style={{ fontSize: '0.9rem' }}
                >
                  NextJS
                </div>
                <div className="border border-1 border-slate-300 px-3  rounded-lg w-fit"
                  style={{ fontSize: '0.9rem' }}
                >
                  NextJS
                </div>
                <div className="border border-1 border-slate-300 px-3  rounded-lg w-fit"
                  style={{ fontSize: '0.9rem' }}
                >
                  NextJS
                </div>
              </div>

            </section>
            <section className="w-full flex-col justify-start items-start">
              <p className="font-bold text-lg uppercase">Language</p>
              <div className="w-12 h-1 bg-slate-900 rounded"></div>
              <ul className="flex flex-wrap gap-2 py-3 list-disc px-6 gap-6">
                <li style={{ fontSize: '0.9rem' }}>
                  Hello
                </li>
                <li style={{ fontSize: '0.9rem' }}>
                  Hello
                </li>
                <li style={{ fontSize: '0.9rem' }}>
                  Hello
                </li>
                <li style={{ fontSize: '0.9rem' }}>
                  Hello
                </li>
                <li style={{ fontSize: '0.9rem' }}>
                  Hello
                </li>
                <li style={{ fontSize: '0.9rem' }}>
                  Hello
                </li>
              </ul>

            </section>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full bg-white rounded-md px-4">
        <div className="flex flex-col justify-start items-start gap-6 w-full py-4">
          <button className={`w-full flex flex-col rounded-lg text-slate-900 overflow-hidden flex-col shadow-lg
            border border-4 border-violet-100 px-6 py-3
          `}
          >
            <p className="py-2 font-semibold text-2xl text-purple-800">Name</p>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex gap-1 justify-start items-center">
                <Image src={EmailSVG} alt="Email" className="w-4 h-4" />
                <p>yash@gmail.com</p>
              </div>
              <div className="flex gap-1 justify-start items-center">
                <Image src={PhoneSVG} alt="Email" className="w-4 h-4" />
                <p>+91 9900992233</p>
              </div>
              <div className="flex gap-1 justify-start items-center">
                <Image src={LocationSVG} alt="Email" className="w-4 h-4" />
                <p>Mumbai, India</p>
              </div>
            </div>
          </button>
          <div className={`w-full flex justify-between items-center  rounded-lg text-slate-900 overflow-hidden flex-col shadow-lg
            border border-4 border-violet-100
          `}
          >
            <button className={`flex justify-between items-center w-full px-4 py-2
            ${open ? 'bg-violet-100' : ''}
            `}
              onClick={() => setOpen(!open)}
            >
              {open ?
                <input value={'Experience'} placeholder="Section Name" className="text-xl w-fit px-3 py-1 bg-violet-50 rounded focus:outline-none"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                /> :
                <span className="text-xl">Experience</span>
              }
              <Image src={ChevronDownSVG} alt="Down Arrow" className={`w-6 h-6 ${open ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            <div className={`w-full flex justify-start items-start flex-col  transition-all duration-300 ease-in-out
            ${open ? ' overflow-auto h-auto' : 'h-0 overflow-hidden'}
            `}>
              <button className="px-4 py-3 border-violet-100  border-b-4 w-full">
                <div className="flex items-start flex-col">
                  <p className="font-semibold text-slate-600">ABC</p>
                  <p className="text-slate-600">Software Developer</p>
                </div>
              </button>
              <div className="py-3 flex justify-center items-center w-full">
                <button className="flex justify-center items-center gap-2 bg-violet-50 px-4 py-1 rounded-lg opacity-70 hover:opacity-100">
                  <Image src={AddPlusRoundSVG} alt="Add" className="w-5" />
                  <span className="text-lg">Experience</span>
                </button>

              </div>
              {/* {
                open ?
                  <div className="w-full flex justify-start items-start py-2 px-3 flex-col ">
                    <p>Hello world</p>
                    <p>Hello world</p>
                    <p>Hello world</p>
                    <p>Hello world</p>
                    <p>Hello world</p>

                  </div>
                  : <></>
              } */}


            </div>


          </div>
        </div>
      </div>

    </div>
  );
}
