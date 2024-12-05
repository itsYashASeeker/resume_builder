"use client"
import Image from "next/image";
import EmailSVG from "@/assets/email.svg"
import PhoneSVG from "@/assets/phone.svg"
import LocationSVG from "@/assets/location.svg"
import DownArrowSVG from "@/assets/down-arrow.svg"
import ChevronDownSVG from "@/assets/chevron-down.svg"
import AddPlusRoundSVG from "@/assets/add-square-round.svg"
import PlusSVG from "@/assets/plus.svg"
import { useEffect, useState } from "react";
import AddMenu from "@/components/AddMenu";
import { DatePicker } from "@/components/DatePicker";
import EditorComponent from "@/components/Editor";
import CrossSVG from "@/assets/cross.svg";
import { Checkbox } from "@/components/ui/checkbox"



export default function Home() {

  const educationObjectT = {
    degree: '',
    school: '',
    start: '',
    end: '',
    description: '',
    present: false
  }

  const experienceObjectT = {
    profile: '',
    company: '',
    start: '',
    end: '',
    description: '',
    present: false
  }

  const certificateObjectT = {
    name: '',
    by: ''
  }

  const profileObjectT = {
    name: '',
    phone: '',
    location: '',
    email: ''
  }

  const [open, setOpen] = useState('');
  const [data, setData] = useState<any>({
    profile: null,
    skill: [],
    experience: [],
    education: [],
    certificate: []
  })
  const [sections, setSections] = useState(['Skill', 'Experience', 'Education', 'Certificate'])
  const [current, setCurrent] = useState<any>(['', {}, { isEdit: -1 }])
  const [edit, setEdit] = useState<any>(['', {}, 0])

  function createSection(section: any) {
    section = section.toLowerCase();
    if (section == "education") {
      setCurrent([section, educationObjectT, { isEdit: -1 }])
    }
    else if (section == "certificate") {
      setCurrent([section, certificateObjectT, { isEdit: -1 }])
    }
    else if (section == "experience") {
      setCurrent([section, experienceObjectT, { isEdit: -1 }])
    }
    else if (section == "profile") {
      setCurrent([section, data?.profile ? data.profile : profileObjectT, { isEdit: -1 }])
    }
    else if (section == "skill") {
      setCurrent([section, { skill: '' }, { isEdit: -1 }])
    }
  }

  function editSection(section: any, data: any, i: any) {
    section = section.toLowerCase();
    setCurrent([section, data, { isEdit: i }])
  }

  function cancelCurrent() {
    setCurrent(['', {}, { isEdit: -1 }]);
  }

  function saveCurrent() {
    if (current[0] == '') return;
    if (current[2].isEdit >= 0) {
      var dataClone = { ...data };
      dataClone[current[0]][current[2].isEdit] = current[1];
      setData({ ...dataClone })
    }
    else {
      if (current[0] == "profile") {
        setData({ ...data, [current[0]]: current[1] })
      }
      // else {
      //   setData({ ...data, [current[0]]: [...data[current[0]], current[1]] })
      // }
    }
    setOpen(current[0]);
    setCurrent(['', {}, { isEdit: -1 }]);
  }

  useEffect(() => {
    console.log(data);
  }, [data])

  // useEffect(() => {
  //   console.log(current);
  // }, [current])

  function onChange(e: any) {
    if (!e.target.name) {
      return;
    }
    const changedData = { ...current[1], [e.target.name]: e.target.value }
    setCurrent([current[0], changedData, current[2]])
    updateData(changedData);
  }

  function updateData(changedData: any) {
    var dataClone = { ...data };
    if (current[2].isEdit >= 0) {
      dataClone[current[0]][current[2].isEdit] = changedData;
      setData({ ...dataClone })
    }
    else {
      if (current[0] == "profile") {
        setData({ ...data, [current[0]]: changedData })
      }
      else {
        if (changedData?.hasIndex >= 0) {
          dataClone[current[0]][changedData.hasIndex] = changedData;
          setData({ ...data, [current[0]]: dataClone[current[0]] })
        }
        else {
          changedData.hasIndex = dataClone[current[0]].length;
          setData({ ...data, [current[0]]: [...data[current[0]], changedData] })
        }
      }
    }
  }

  function formatDateToMonthYear(dateString: any) {
    if (!dateString) return '';
    const date = new Date(dateString);
    const month = date.toLocaleString('en-US', { month: 'long' }).slice(0, 3);
    const year = date.getFullYear();
    const formattedDate = `${month},${year}`;
    console.log(formattedDate);
    return formattedDate;
  }

  function openAccordion(section: string) {
    if (open == section) {
      setOpen('');
    }
    else {
      setOpen(section);
    }
  }

  return (
    <div className="w-full h-screen bg-slate-200 flex justify-center items-center px-8 py-12 gap-12 font-sans">
      {/* Resume Start */}
      <div className="w-1/2 h-full bg-white rounded-md font-serif overflow-auto">
        <div className="w-full flex flex-col justify-start items-start ">
          <div className="flex flex-col justify-center items-center py-6 w-full bg-slate-800">
            <p className="font-bold text-2xl text-white">{data?.profile?.name ? data?.profile?.name : ''}</p>
            {/* <p className="text-slate-200">Full Stack Developer</p> */}
            <div className="flex flex-wrap justify-center gap-3 text-slate-300 mt-2">
              {data?.profile?.email ? <div className="flex gap-1 justify-center items-center">
                <Image src={EmailSVG} alt="Email" className="w-4 h-4" />
                <p>{data?.profile?.email ? data?.profile?.email : ''}</p>
              </div> : <></>}
              {data?.profile?.phone ? <div className="flex gap-1 justify-center items-center">
                <Image src={PhoneSVG} alt="Email" className="w-4 h-4" />
                <p>{data?.profile?.phone ? data?.profile?.phone : ''}</p>
              </div> : <></>}
              {data?.profile?.location ? <div className="flex gap-1 justify-center items-center">
                <Image src={LocationSVG} alt="Email" className="w-4 h-4" />
                <p>{data?.profile?.location ? data?.profile?.location : ''}</p>
              </div> : <></>}
            </div>
          </div>
          <div className="flex flex-col justify-start gap-3 items-start w-full px-8 py-6 text-slate-900">
            {data?.experience && data.experience.length > 0 ?
              <section className="w-full flex-col justify-start items-start">
                <p className="font-bold text-md uppercase">Experience</p>
                <div className="w-12 h-1 bg-slate-900 rounded"></div>
                <div className="flex flex-col gap-2">
                  {
                    data?.experience.map((exp: any, i: any) => {
                      return (
                        <section className="w-full flex-col justify-start items-start text-sm" key={i}>
                          <div className="flex justify-between items-start py-1">
                            <div className="flex flex-col">
                              <p className="font-semibold ">{exp?.company}</p>
                              <p className=" text-slate-900 underline">{exp?.profile}</p>
                            </div>
                            <p className="w-content">{formatDateToMonthYear(exp?.start) + " - " + (exp?.present ? 'Present' : formatDateToMonthYear(exp?.end))}</p>
                          </div>
                          <p className="text-slate-700 pl-2" style={{ fontSize: '0.9rem' }} dangerouslySetInnerHTML={{ __html: exp?.description }}>
                            {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
                          </p>
                        </section>
                      )
                    })
                  }
                </div>
              </section>
              : <></>
            }
            {data?.education && data.education.length > 0 ?
              <section className="w-full flex-col justify-start items-start">
                <p className="font-bold text-md uppercase">Education</p>
                <div className="w-12 h-1 bg-slate-900 rounded"></div>
                <div className="flex flex-col gap-2">
                  {
                    data?.education.map((exp: any, i: any) => {
                      return (
                        <section className="w-full flex-col justify-start items-start text-sm" key={i}>
                          <div className="flex justify-between items-start py-1">
                            <div className="flex flex-col">
                              <p className="font-semibold ">{exp?.school}</p>
                              <p className=" text-slate-900 underline">{exp?.degree}</p>
                            </div>
                            <p className="w-content">{formatDateToMonthYear(exp?.start) + " - " + exp?.present ? 'Present' : formatDateToMonthYear(exp?.end)}</p>
                          </div>
                          <p className="text-slate-700 pl-2" style={{ fontSize: '0.9rem' }} dangerouslySetInnerHTML={{ __html: exp?.description }}>
                            {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
                          </p>
                        </section>
                      )
                    })
                  }
                </div>
              </section>
              : <></>
            }
            {data?.skill && data?.skill.length > 0 ?
              <section className="w-full flex-col justify-start items-start">
                <p className="font-bold text-lg uppercase">Skills</p>
                <div className="w-12 h-1 bg-slate-900 rounded"></div>
                <div className="flex flex-wrap gap-2 py-3 ">
                  {data?.skill.map((skill: any, i: any) => {
                    return (
                      <div className="border border-1 border-slate-300 px-3  rounded-lg w-fit"
                        style={{ fontSize: '0.9rem' }}
                        key={i}
                      >
                        {skill}
                      </div>
                    )
                  })}
                </div>

              </section>
              : <></>
            }
            {data?.certificate && data.certificate.length > 0 ?
              <section className="w-full flex-col justify-start items-start">
                <p className="font-bold text-md uppercase">Certificate</p>
                <div className="w-12 h-1 bg-slate-900 rounded"></div>
                <div className="flex flex-col gap-2">
                  {
                    data?.certificate.map((exp: any, i: any) => {
                      return (
                        <section className="w-full flex-col justify-start items-start text-sm" key={i}>
                          <div className="flex justify-between items-start py-1">
                            <div className="flex flex-col">
                              <p className="font-semibold ">{exp?.name}</p>
                              <p className=" text-slate-900 underline">{exp?.by}</p>
                            </div>
                          </div>
                        </section>
                      )
                    })
                  }
                </div>
              </section>
              : <></>
            }
            {/* <section className="w-full flex-col justify-start items-start">
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

            </section> */}
          </div>
        </div>
      </div >
      {/* Resume End */}
      {/* Cards */}
      {
        !current[0] ?
          <div className="relative w-1/2 bg-white rounded-md px-4 overflow-auto"
            style={{ height: 'calc(100vh - 100px)' }}
          >
            <div className="flex flex-col justify-start items-start gap-6 w-full py-8">
              {/* Profile */}
              <button className={`w-full flex flex-col rounded-lg text-slate-900 overflow-hidden flex-col shadow-lg
            border border-4 border-violet-100 px-6 py-3
          `}
                onClick={() => { createSection('profile') }}
              >
                <p className={`py-2 font-semibold text-2xl text-purple-800 ${data?.profile && data.profile?.name ? 'opacity-100' : 'opacity-70'}`}>{data.profile ? data.profile?.name : 'Name'}</p>
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex gap-1 justify-start items-center">
                    <Image src={EmailSVG} alt="Email" className="w-4 h-4" />
                    <p className={`${data.profile && data.profile?.email ? 'text-slate-900' : 'text-slate-600'}`}>{data.profile && data.profile?.email ? data.profile?.email : 'Email'}</p>
                  </div>
                  <div className="flex gap-1 justify-start items-center">
                    <Image src={PhoneSVG} alt="Phone" className="w-4 h-4" />
                    <p className={`${data.profile && data.profile?.phone ? 'text-slate-900' : 'text-slate-600'}`}>{data.profile && data.profile?.phone ? data.profile?.phone : 'Phone'}</p>
                  </div>
                  <div className="flex gap-1 justify-start items-center">
                    <Image src={LocationSVG} alt="Location" className="w-4 h-4" />
                    <p className={`${data.profile && data.profile?.location ? 'text-slate-900' : 'text-slate-600'}`}>{data.profile && data.profile?.location ? data.profile?.location : 'Location'}</p>
                  </div>
                </div>
              </button>
              {/* Experience */}
              {data?.experience && data?.experience.length > 0 ?
                <div className={`w-full flex justify-between items-center  rounded-lg text-slate-900 overflow-hidden flex-col shadow-lg
            border border-4 border-violet-100
          `}
                >
                  <button className={`flex justify-between items-center w-full px-4 py-2
            ${open == 'experience' ? 'bg-violet-100' : ''}
            `}
                    onClick={() => openAccordion('experience')}
                  >
                    <span className="text-xl">Experience</span>
                    {/* {open ?
                    <input value={'Experience'} placeholder="Section Name" className="text-xl w-fit px-3 py-1 bg-violet-50 rounded focus:outline-none"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                    /> :
                    <span className="text-xl">Experience</span>
                  } */}
                    <Image src={ChevronDownSVG} alt="Down Arrow" className={`w-6 h-6 ${open == 'experience' ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                  <div className={`w-full flex justify-start items-start flex-col  transition-all duration-300 ease-in-out
            ${open == "experience" ? ' overflow-auto h-auto' : 'h-0 overflow-hidden'}
            `}>
                    {
                      data?.experience.map((item: any, index: any) => (
                        <button key={index} className={`px-4 py-3 border-violet-100  border-b-4 w-full`}
                          onClick={(e: any) => {
                            e.stopPropagation();
                            editSection('experience', item, index);
                          }}
                        >
                          <div className="flex items-start flex-col">
                            <p className="font-semibold text-slate-600">{item.company}</p>
                            <p className="text-slate-600">{item.profile}</p>
                          </div>
                        </button>
                      ))
                    }
                    <div className="py-3 flex justify-center items-center w-full">
                      <button className="flex justify-center items-center gap-2 bg-violet-50 px-4 py-1 rounded-lg opacity-70 hover:opacity-100"
                        onClick={(e: any) => {
                          e.stopPropagation();
                          createSection('experience');
                        }}
                      >
                        <Image src={AddPlusRoundSVG} alt="Add" className="w-5" />
                        <span className="text-lg">Experience</span>
                      </button>

                    </div>
                  </div>


                </div>
                : <></>
              }
              {/* Education */}
              {data?.education && data?.education.length > 0 ?
                <div className={`w-full flex justify-between items-center  rounded-lg text-slate-900 overflow-hidden flex-col shadow-lg
            border border-4 border-violet-100
          `}
                >
                  <button className={`flex justify-between items-center w-full px-4 py-2
            ${open == 'education' ? 'bg-violet-100' : ''}
            `}
                    onClick={() => openAccordion('education')}
                  >
                    <span className="text-xl">Education</span>
                    <Image src={ChevronDownSVG} alt="Down Arrow" className={`w-6 h-6 ${open == 'education' ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                  <div className={`w-full flex justify-start items-start flex-col  transition-all duration-300 ease-in-out
            ${open == 'education' ? ' overflow-auto h-auto' : 'h-0 overflow-hidden'}
            `}>
                    {
                      data?.education.map((item: any, index: any) => (
                        <button key={index} className={`px-4 py-3 border-violet-100  border-b-4 w-full`}
                          onClick={(e: any) => {
                            e.stopPropagation();
                            editSection('education', item, index);
                          }}
                        >
                          <div className="flex items-start flex-col">
                            <p className="font-semibold text-slate-600">{item.degree}</p>
                            <p className="text-slate-600">{item.school}</p>
                          </div>
                        </button>
                      ))
                    }
                    <div className="py-3 flex justify-center items-center w-full">
                      <button className="flex justify-center items-center gap-2 bg-violet-50 px-4 py-1 rounded-lg opacity-70 hover:opacity-100"
                        onClick={(e: any) => {
                          e.stopPropagation();
                          createSection('education');
                        }}
                      >
                        <Image src={AddPlusRoundSVG} alt="Add" className="w-5" />
                        <span className="text-lg">Education</span>
                      </button>

                    </div>
                  </div>


                </div>
                : <></>
              }
              {/* Skill */}
              {data?.skill && data?.skill.length > 0 ?
                <div className={`w-full flex justify-between items-center  rounded-lg text-slate-900 overflow-hidden flex-col shadow-lg
            border border-4 border-violet-100
          `}
                >
                  <button className={`flex justify-between items-center w-full px-4 py-2
            ${open == 'skill' ? 'bg-violet-100' : ''}
            `}
                    onClick={() => openAccordion('skill')}
                  >
                    <span className="text-xl">Skill</span>
                    <Image src={ChevronDownSVG} alt="Down Arrow" className={`w-6 h-6 ${open == 'skill' ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                  <div className={`w-full flex justify-start items-start flex-col  transition-all duration-300 ease-in-out
            ${open == 'skill' ? ' overflow-auto h-auto' : 'h-0 overflow-hidden'}
            `}>
                    <button className={`px-4 py-3 border-violet-100  border-b-4 w-full`}
                      onClick={(e: any) => {
                        e.stopPropagation();
                      }}
                    >
                      <p className="w-full text-left ">{data?.skill.join(', ')}</p>
                    </button>
                    <div className="py-3 flex justify-center items-center w-full">
                      <button className="flex justify-center items-center gap-2 bg-violet-50 px-4 py-1 rounded-lg opacity-70 hover:opacity-100"
                        onClick={(e: any) => {
                          e.stopPropagation();
                          editSection('skill', { skills: data?.skill, current: '' }, 0);
                        }}
                      >
                        <Image src={AddPlusRoundSVG} alt="Add" className="w-5" />
                        <span className="text-lg">Skill</span>
                      </button>

                    </div>
                  </div>


                </div>
                : <></>
              }
              {/* Certificate */}
              {data?.certificate && data?.certificate.length > 0 ?
                <div className={`w-full flex justify-between items-center  rounded-lg text-slate-900 overflow-hidden flex-col shadow-lg
            border border-4 border-violet-100
          `}
                >
                  <button className={`flex justify-between items-center w-full px-4 py-2
            ${open == 'certificate' ? 'bg-violet-100' : ''}
            `}
                    onClick={() => openAccordion('certificate')}
                  >
                    <span className="text-xl">Certificate</span>
                    <Image src={ChevronDownSVG} alt="Down Arrow" className={`w-6 h-6 ${open == 'certificate' ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                  <div className={`w-full flex justify-start items-start flex-col  transition-all duration-300 ease-in-out
            ${open == 'certificate' ? ' overflow-auto h-auto' : 'h-0 overflow-hidden'}
            `}>
                    {
                      data?.certificate.map((item: any, index: any) => (
                        <button key={index} className={`px-4 py-3 border-violet-100  border-b-4 w-full`}
                          onClick={(e: any) => {
                            e.stopPropagation();
                            editSection('certificate', item, index);
                          }}
                        >
                          <div className="flex items-start flex-col">
                            <p className="font-semibold text-slate-600">{item.name}</p>
                            <p className="text-slate-600">{item.by}</p>
                          </div>
                        </button>
                      ))
                    }
                    <div className="py-3 flex justify-center items-center w-full">
                      <button className="flex justify-center items-center gap-2 bg-violet-50 px-4 py-1 rounded-lg opacity-70 hover:opacity-100"
                        onClick={(e: any) => {
                          e.stopPropagation();
                          createSection('certificate');
                        }}
                      >
                        <Image src={AddPlusRoundSVG} alt="Add" className="w-5" />
                        <span className="text-lg">Certificate</span>
                      </button>

                    </div>
                  </div>


                </div>
                : <></>
              }
            </div>
            <div className="fixed bottom-4 right-4 w-full flex justify-end items-start  w-full">
              <AddMenu sections={sections} createSection={createSection} />
            </div>
          </div>
          : <></>
      }
      {/* Profile Edit */}
      {
        current[0] == "profile" ?
          <div className="relative w-1/2 h-full bg-white rounded-md px-4">
            <div className="w-full flex justify-start items-start w-full px-4 py-6 flex-col">
              <p className="font-bold text-2xl text-violet-900">Edit Personal Details</p>
              <div className="flex justify-start items-start flex-col py-6 gap-4 w-full">
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-semibold text-slate-800">Full Name</label>
                  <input type="text" className="w-full px-3 py-2 rounded-lg border border-1 border-slate-300 focus:outline-none text-black" placeholder="Your Name"
                    value={current[1]?.name}
                    name="name"
                    onChange={onChange}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-semibold text-slate-800">Phone</label>
                  <input type="text" className="w-full px-3 py-2 rounded-lg border border-1 border-slate-300 focus:outline-none text-black" placeholder="Your phone"
                    value={current[1]?.phone}
                    name="phone"
                    onChange={onChange}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-semibold text-slate-800">Email</label>
                  <input type="email" className="w-full px-3 py-2 rounded-lg border border-1 border-slate-300 focus:outline-none text-black" placeholder="Your email"
                    value={current[1]?.email}
                    name="email"
                    onChange={onChange}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-semibold text-slate-800">Location</label>
                  <input type="text" className="w-full px-3 py-2 rounded-lg border border-1 border-slate-300 focus:outline-none text-black" placeholder="Your location"
                    value={current[1]?.location}
                    name="location"
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="  w-full flex justify-end items-start gap-4">
                <button className="px-6 py-2 rounded-2xl border-slate-300 bg-slate-100 text-slate-900 hover:opacity-80"
                  onClick={cancelCurrent}
                >Close</button>
                <button className="px-6 py-2 rounded-2xl border-slate-300 bg-violet-800 text-slate-100 hover:opacity-80"
                  onClick={saveCurrent}
                >Save</button>
              </div>
            </div>

          </div>
          :
          <></>
      }
      {/* Experience Add/Edit */}
      {
        current[0] == "experience" ?
          <div className="relative w-1/2 h-full bg-white rounded-md px-4">
            <div className="w-full flex justify-start items-start w-full px-4 py-6 flex-col">
              <p className="font-bold text-2xl text-violet-900">{current[2].isEdit >= 0 ? 'Edit' : 'Add'} Experience</p>
              <div className="flex justify-start items-start flex-col py-6 gap-4 w-full">
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-semibold text-slate-800">Company</label>
                  <input type="text" className="w-full px-3 py-2 rounded-lg border border-1 border-slate-300 focus:outline-none text-black" placeholder="Company"
                    value={current[1]?.company}
                    name="company"
                    onChange={onChange}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-semibold text-slate-800">Job Profile</label>
                  <input type="text" className="w-full px-3 py-2 rounded-lg border border-1 border-slate-300 focus:outline-none text-black" placeholder="Job Profile"
                    value={current[1]?.profile}
                    name="profile"
                    onChange={onChange}
                  />
                </div>

                <div className="flex gap-6 w-full">
                  <div className="flex flex-col gap-1 ">
                    <label className="font-semibold text-slate-800">Start Date</label>
                    <DatePicker
                      date={current[1]?.start}
                      setDate={(date: any) => {
                        const changedData = { ...current[1], start: date }
                        setCurrent([current[0], changedData, current[2]])
                        updateData(changedData)
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1 ">
                    <label className="font-semibold text-slate-800">End Date</label>
                    <DatePicker
                      date={current[1]?.end}
                      disabled={current[1].present}
                      setDate={(date: any) => {
                        const changedData = { ...current[1], end: date }
                        setCurrent([current[0], changedData, current[2]])
                        updateData(changedData)
                      }}
                    />
                  </div>

                </div>
                <div className="flex h-full items-center justify-center gap-2">
                  <Checkbox
                    id="presentExp"
                    checked={current[1].present}
                    onCheckedChange={() => {
                      const changedData = { ...current[1], present: !current[1].present }
                      setCurrent([current[0], changedData, current[2]])
                      updateData(changedData)
                    }}
                  />
                  <label
                    htmlFor="presentExp">Present</label>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-semibold text-slate-800">Description</label>
                  <EditorComponent
                    value={current[1]?.description}
                    setValue={(value: any) => {
                      const changedData = { ...current[1], description: value }
                      setCurrent([current[0], changedData, current[2]])
                      updateData(changedData)
                    }}
                  />
                </div>

              </div>
              <div className="  w-full flex justify-end items-start gap-4">
                <button className="px-6 py-2 rounded-2xl border-slate-300 bg-slate-100 text-slate-900 hover:opacity-80"
                  onClick={cancelCurrent}
                >Close</button>
                <button className="px-6 py-2 rounded-2xl border-slate-300 bg-violet-800 text-slate-100 hover:opacity-80"
                  onClick={saveCurrent}
                >{current[2].isEdit >= 0 ? 'Edit' : 'Save'} </button>
              </div>
            </div>

          </div>
          :
          <></>
      }
      {/* Education Add/Edit */}
      {
        current[0] == "education" ?
          <div className="relative w-1/2 h-full bg-white rounded-md px-4">
            <div className="w-full flex justify-start items-start w-full px-4 py-6 flex-col">
              <p className="font-bold text-2xl text-violet-900">{current[2].isEdit >= 0 ? 'Edit' : 'Add'} Education</p>
              <div className="flex justify-start items-start flex-col py-6 gap-4 w-full">
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-semibold text-slate-800">School</label>
                  <input type="text" className="w-full px-3 py-2 rounded-lg border border-1 border-slate-300 focus:outline-none text-black" placeholder="School"
                    value={current[1]?.school}
                    name="school"
                    onChange={onChange}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-semibold text-slate-800">Degree</label>
                  <input type="text" className="w-full px-3 py-2 rounded-lg border border-1 border-slate-300 focus:outline-none text-black" placeholder="Degree"
                    value={current[1]?.degree}
                    name="degree"
                    onChange={onChange}
                  />
                </div>

                <div className="flex gap-6 w-full">
                  <div className="flex flex-col gap-1 ">
                    <label className="font-semibold text-slate-800">Start Date</label>
                    <DatePicker
                      date={current[1]?.start}
                      setDate={(date: any) => {
                        const changedData = { ...current[1], start: date }
                        setCurrent([current[0], changedData, current[2]])
                        updateData(changedData)
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1 ">
                    <label className="font-semibold text-slate-800">End Date</label>
                    <DatePicker
                      date={current[1]?.end}
                      disabled={current[1].present}
                      setDate={(date: any) => {
                        const changedData = { ...current[1], end: date }
                        setCurrent([current[0], changedData, current[2]])
                        updateData(changedData)
                      }}
                    />
                  </div>

                </div>
                <div className="flex h-full items-center justify-center gap-2">
                  <Checkbox
                    id="pursuingEd"
                    checked={current[1].present}
                    onCheckedChange={() => {
                      const changedData = { ...current[1], present: !current[1].present }
                      setCurrent([current[0], changedData, current[2]])
                      updateData(changedData)
                    }}
                  />
                  <label
                    htmlFor="pursuingEd">Pursuing</label>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-semibold text-slate-800">Description</label>
                  <EditorComponent
                    value={current[1]?.description}
                    setValue={(value: any) => {
                      const changedData = { ...current[1], description: value }
                      setCurrent([current[0], changedData, current[2]])
                      updateData(changedData)
                    }}
                  />
                </div>

              </div>
              <div className="  w-full flex justify-end items-start gap-4">
                <button className="px-6 py-2 rounded-2xl border-slate-300 bg-slate-100 text-slate-900 hover:opacity-80"
                  onClick={cancelCurrent}
                >Close</button>
                <button className="px-6 py-2 rounded-2xl border-slate-300 bg-violet-800 text-slate-100 hover:opacity-80"
                  onClick={saveCurrent}
                >{current[2].isEdit >= 0 ? 'Edit' : 'Save'} </button>
              </div>
            </div>

          </div>
          :
          <></>
      }
      {/* Skill Add/Edit */}
      {
        current[0] == "skill" ?
          <div className="relative w-1/2 h-full bg-white rounded-md px-4">
            <div className="w-full flex justify-start items-start w-full px-4 py-6 flex-col">
              <p className="font-bold text-2xl text-violet-900">{current[2].isEdit >= 0 ? 'Edit' : 'Add'} Skill</p>
              <div className="flex justify-start items-start flex-col py-6 gap-4 w-full">
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  {data?.skill.map((skill: any, i: any) => {
                    return (
                      <div className="flex gap-1 w-content px-2 py-1 bg-slate-200 rounded-lg" key={i}>
                        <p>{skill}</p>
                        <button className="hover:bg-red-300 rounded-full"
                          onClick={() => {
                            var dataClone = { ...data };
                            dataClone.skill = dataClone.skill.filter((_: any, index: any) => index !== i);
                            setData({ ...dataClone });
                          }}
                        >
                          <Image src={CrossSVG} alt="Cross" className="w-4 h-4" />
                        </button>
                      </div>
                    )
                  })}
                </div>

                <div className="flex gap-1 w-full">
                  <input type="text" className="w-full px-3 py-1 rounded-lg border border-1 border-slate-300 focus:outline-none text-black" placeholder="Skill"
                    name="skill"
                    value={current[1]?.skill}
                    onChange={(e: any) => {
                      setCurrent([current[0], { ...current[1], skill: e.target.value }, current[2]])
                    }}
                  />
                  <button className="px-4 py-1 rounded-lg border-slate-300 bg-violet-700 text-slate-100 hover:opacity-80"
                    onClick={() => {
                      var dataClone = { ...data };
                      dataClone.skill.push(current[1].skill);
                      setData({ ...dataClone });
                      setCurrent([current[0], { skill: '' }, current[2]]);
                      setOpen('skill');
                    }}
                  >Add</button>
                </div>
              </div>
              <div className="  w-full flex justify-end items-start gap-4">
                <button className="px-6 py-2 rounded-2xl border-slate-300 bg-slate-100 text-slate-900 hover:opacity-80"
                  onClick={cancelCurrent}
                >Close</button>
              </div>
            </div>

          </div>
          :
          <></>
      }
      {/* Certificate Add/Edit */}
      {
        current[0] == "certificate" ?
          <div className="relative w-1/2 h-full bg-white rounded-md px-4">
            <div className="w-full flex justify-start items-start w-full px-4 py-6 flex-col">
              <p className="font-bold text-2xl text-violet-900">{current[2].isEdit >= 0 ? 'Edit' : 'Add'} Certificate</p>
              <div className="flex justify-start items-start flex-col py-6 gap-4 w-full">
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-semibold text-slate-800">Name</label>
                  <input type="text" className="w-full px-3 py-2 rounded-lg border border-1 border-slate-300 focus:outline-none text-black" placeholder="Name"
                    value={current[1]?.name}
                    name="name"
                    onChange={onChange}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-semibold text-slate-800">Issuer</label>
                  <input type="text" className="w-full px-3 py-2 rounded-lg border border-1 border-slate-300 focus:outline-none text-black" placeholder="Issuer"
                    value={current[1]?.by}
                    name="by"
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="  w-full flex justify-end items-start gap-4">
                <button className="px-6 py-2 rounded-2xl border-slate-300 bg-slate-100 text-slate-900 hover:opacity-80"
                  onClick={cancelCurrent}
                >Close</button>
                <button className="px-6 py-2 rounded-2xl border-slate-300 bg-violet-800 text-slate-100 hover:opacity-80"
                  onClick={saveCurrent}
                >{current[2].isEdit >= 0 ? 'Edit' : 'Save'} </button>
              </div>
            </div>

          </div>
          :
          <></>
      }
    </div >
  );
}
