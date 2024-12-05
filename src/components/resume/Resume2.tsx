"use client"
import Image from "next/image";
import EmailSVG from "@/assets/email.svg"
import PhoneSVG from "@/assets/phone.svg"
import LocationSVG from "@/assets/location.svg"
import { formatDateToMonthYear } from "@/utils";


const dummyData = {
    profile: {
        name: 'John Doe',
        phone: '123-456-7890',
        location: 'New York, NY',
        email: 'john.doe@example.com'
    },
    skill: [
        'JavaScript',
        'React',
        'Node.js',
        'CSS',
        'HTML',
        'TypeScript',
        'Redux',
        'GraphQL',
        'Docker',
        'Git'
    ],
    experience: [
        {
            profile: 'Software Engineer',
            company: 'ABC Technologies',
            start: '2020-07-01',
            end: '2022-08-01',
            description: 'Developed and maintained web applications using modern technologies like JavaScript, React, and Node.js. Collaborated closely with cross-functional teams to create software solutions that improved business operations and enhanced user experiences. ',
            present: false
        },
        {
            profile: 'Frontend Developer',
            company: 'XYZ Corp',
            start: '2022-09-01',
            end: '2023-06-01',
            description: 'Focused on UI/UX of the company’s main web platform. Implemented responsive design, optimized performance, and ensured a seamless user experience across devices. Worked with design teams to bring mockups to life and conducted usability testing to gather feedback and iterate on designs. Played a key role in migrating the platform to a modern React-based architecture.',
            present: false
        },
        {
            profile: 'Backend Developer',
            company: 'Tech Innovations',
            start: '2023-07-01',
            end: 'Present',
            description: 'Lead the development of backend systems, focusing on building robust APIs, handling database management, and ensuring scalability. Worked extensively with Node.js and Express to create RESTful APIs and integrated third-party services. Actively involved in cloud infrastructure (AWS) and used Docker to containerize services. Led a team to implement microservices architecture, resulting in improved maintainability and scalability of applications.',
            present: true
        }
    ],
    education: [
        {
            degree: 'Bachelor of Science in Computer Science',
            school: 'XYZ University',
            start: '2016-09-01',
            end: '2020-06-01',
            description: 'Studied core computer science subjects, including software development, data structures, algorithms, databases, and web development. Worked on various projects, including a capstone project where I developed a full-stack web application that automated inventory management for small businesses. Participated in hackathons and coding competitions, where I earned recognition for problem-solving skills.',
            present: false
        }
    ],
    certificate: [
        {
            name: 'Full Stack Web Development',
            by: 'Coursera',
            description: 'Completed an intensive online course covering both front-end and back-end web development. Learned the fundamentals of JavaScript, HTML, CSS, and React on the front-end, and Node.js and Express for back-end development. The course also introduced databases, authentication, and testing, which allowed me to develop full-stack web applications from scratch.',
            date: '2021-12-01'
        },
        {
            name: 'Docker Essentials',
            by: 'Udemy',
            description: 'Gained practical knowledge of containerization using Docker, including creating Dockerfiles, managing Docker containers, and deploying applications using Docker Compose. This certificate enhanced my ability to work with cloud infrastructure and helped me build more portable and scalable applications.',
            date: '2022-02-01'
        }
    ]
};

export default function Resume2({ dummy, data }: any) {
    if (dummy) {
        data = dummyData;
    }

    return (
        <div className="w-1/2 h-full bg-white rounded-md overflow-auto">
            <div className="w-full flex flex-col justify-start items-start ">
                <div className="flex flex-col justify-center items-center py-4 w-full px-8">
                    <p className="font-bold text-2xl w-full text-left text-sky-900">{data?.profile?.name ? data?.profile?.name : ''}</p>
                    <div className="w-full h-0.5 bg-sky-900"></div>
                    <div className="flex flex-wrap justify-start w-full gap-3 text-sky-900 text-sm mt-1">
                        {data?.profile?.email ?
                            <div className="flex gap-1 justify-center items-center">
                                <p >{data?.profile?.email ? data?.profile?.email : ''} |</p>
                            </div> : <></>}

                        {data?.profile?.phone ? <div className="flex gap-1 justify-center items-center">
                            <p>{data?.profile?.phone ? data?.profile?.phone : ''} |</p>
                        </div> : <></>}
                        {data?.profile?.location ? <div className="flex gap-1 justify-center items-center">
                            <p>{data?.profile?.location ? data?.profile?.location : ''}</p>
                        </div> : <></>}
                    </div>
                </div>
                <div className="flex flex-col justify-start gap-3 items-start w-full px-8 py-4 text-sky-900">
                    {data?.experience && data.experience.length > 0 ?
                        <section className="w-full flex-col justify-start items-start">
                            <p className="font-bold text-md uppercase">Experience</p>
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
                    {data?.skill && data?.skill.length > 0 ?
                        <section className="w-full flex-col justify-start items-start">
                            <p className="font-bold text-lg uppercase">Skills</p>
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
                </div>
            </div>
        </div >
    )
}