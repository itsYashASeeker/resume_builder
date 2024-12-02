import Image from "next/image";
import EmailSVG from "@/assets/email.svg"
import PhoneSVG from "@/assets/phone.svg"
import LocationSVG from "@/assets/location.svg"

export default function Home() {
  return (
    <div className="w-full h-screen bg-slate-200 flex justify-center items-center px-8 py-12 gap-12">
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
      <div className="w-1/2 h-full bg-white rounded-md">

      </div>

    </div>
  );
}
