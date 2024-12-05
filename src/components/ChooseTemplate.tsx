import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import Resume1Image from "@/assets/resume1.png"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function ChooseTemplate() {
    const [open, setOpen] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState(0);

    useEffect(() => {
        const resumeTemplate = localStorage.getItem('resume_template');
        if (!resumeTemplate) {
            setOpen(true)
        }
    }, [])

    function chooseTemplate(template_number: any) {
        localStorage.setItem('resume_template', template_number.toString())
        setSelectedTemplate(template_number)
    }

    return (
        <AlertDialog
            open={open}
        >
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Please select a Resume!</AlertDialogTitle>
                    <div className="w-full flex justify-center gap-4 items-center">
                        <button className={`w-content h-content rounded-lg overflow-hidden p-1 border-2 ${selectedTemplate == 1 ? 'border-violet-300' : 'border-slate-200'} `}
                            onClick={() => chooseTemplate(1)}
                        >
                            <Image src={Resume1Image} alt="Resume 1" className="w-96 h-auto" />
                        </button>
                    </div>
                    <AlertDialogDescription>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction
                        onClick={() => { setOpen(false) }}
                        disabled={selectedTemplate == 0}
                    >Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
