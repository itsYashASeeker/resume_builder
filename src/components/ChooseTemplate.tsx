import { Button } from "@/components/ui/button"
import Resume1Image from "@/assets/resume1.png"
import Resume2Image from "@/assets/resume2.png"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function ChooseTemplate({ open, setOpen, selectedTemplate, setSelectedTemplate }: any) {

    function chooseTemplate(template_number: any) {
        setSelectedTemplate(template_number)
    }

    return (
        <>
            {
                open ?
                    <div className="fixed top-0 left-0 w-full h-screen bg-opacity-50 bg-white z-[50] flex justify-center items-center">
                        < div className="max-w-[90vw] max-h-[90vh] relative overflow-auto flex justify-start items-start flex-col bg-white rounded-lg p-4 border-2 border-slate-400 gap-4" >
                            <p className="font-bold text-lg">Please select Resume Template</p>
                            <div className="w-full flex gap-4">
                                <button className={`w-content h-content rounded-lg overflow-hidden  border-4 ${selectedTemplate == 1 ? 'border-violet-300' : 'border-slate-50'} `}
                                    onClick={() => chooseTemplate(1)}
                                >
                                    <Image src={Resume1Image} alt="Resume 1" className="w-full h-auto" />
                                </button>
                                <button className={`w-content h-content rounded-lg overflow-hidden  border-4 ${selectedTemplate == 2 ? 'border-violet-300' : 'border-slate-50'} `}
                                    onClick={() => chooseTemplate(2)}
                                >
                                    <Image src={Resume2Image} alt="Resume 2" className="w-full h-auto" />
                                </button>
                            </div>
                            <div className="w-full flex justify-end">
                                <Button
                                    onClick={() => {
                                        localStorage.setItem('resume_template', selectedTemplate.toString())
                                        setOpen(false)
                                    }}
                                    disabled={selectedTemplate == 0}
                                >Continue</Button>
                            </div>

                        </div >

                    </div >
                    : <></>
            }
        </>
    )
}
