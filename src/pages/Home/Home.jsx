import React, { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import project from '../../assets/project/matribhumi-city.png'
import project2 from '../../assets/project/Image-Gallery.png'
import project3 from '../../assets/project/freedom-yoga.png'
import project4 from '../../assets/project/portfolio-website.png'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const skills = [
    { _id: 1, iconName: "HTML", iconIn: 'logos:html-5' },
    { _id: 2, iconName: "CSS", iconIn: 'logos:css-3' },
    { _id: 3, iconName: "JavaScript", iconIn: 'vscode-icons:file-type-js-official' },
    { _id: 4, iconName: "typescript", iconIn: 'logos:typescript-icon' },
    { _id: 5, iconName: "nodejs", iconIn: 'logos:nodejs' },
    { _id: 6, iconName: "react.js", iconIn: 'logos:react' },
    { _id: 7, iconName: "next.js", iconIn: 'skill-icons:nextjs-light' },
    { _id: 8, iconName: "materialui", iconIn: 'devicon:materialui' },
    { _id: 9, iconName: "sass", iconIn: 'devicon:sass' },
    { _id: 10, iconName: "tailwind CSS", iconIn: 'logos:tailwindcss-icon' },
    { _id: 11, iconName: "bootstrap", iconIn: 'logos:bootstrap' },
    { _id: 12, iconName: "express.js", iconIn: 'skill-icons:expressjs-light' },
    { _id: 13, iconName: "mongoDB", iconIn: 'logos:mongodb-icon' },
    { _id: 14, iconName: "redux", iconIn: 'logos:redux' },
    { _id: 15, iconName: "firebase", iconIn: 'logos:firebase' },
    { _id: 16, iconName: "vscode", iconIn: 'devicon:vscode' },
    { _id: 17, iconName: "postman", iconIn: 'devicon:postman' },
    { _id: 18, iconName: "git", iconIn: 'devicon:git' },
    { _id: 19, iconName: "github", iconIn: 'skill-icons:github-light' },
    { _id: 20, iconName: "netlify", iconIn: 'logos:netlify-icon' },
    { _id: 21, iconName: "vercel", iconIn: 'skill-icons:vercel-dark' },
    { _id: 22, iconName: "figma", iconIn: 'devicon:figma' },
    { _id: 23, iconName: "adobe xd", iconIn: 'devicon:xd' },
    { _id: 24, iconName: "adobe photoshop", iconIn: 'devicon:photoshop' },
]
// const skills = [
//     { icon: 'akar-icons:html-fill' },
//     { icon: 'akar-icons:css-fill' },
//     { icon: 'cib:js' },
//     { icon: 'simple-icons:typescript' },
//     { icon: 'logos:nodejs' },
//     { icon: 'mdi:react' },
//     { icon: 'devicon-plain:nextjs' },
//     { icon: 'devicon-plain:materialui' },
//     { icon: 'fa6-brands:sass' },
//     { icon: 'mdi:tailwind' },
//     { icon: 'ri:bootstrap-fill' },
//     { icon: 'skill-icons:expressjs-light' },
//     { icon: 'bxl:mongodb' },
//     { icon: 'akar-icons:redux-fill' },
//     { icon: 'devicon-plain:firebase-wordmark' },
//     { icon: 'akar-icons:vscode-fill' },
//     { icon: 'simple-icons:postman' },
//     { icon: 'mdi:git' },
//     { icon: 'mdi:github' },
//     { icon: 'simple-icons:netlify' },
//     { icon: 'solar:figma-bold' },
//     { icon: 'simple-icons:adobexd' },
//     { icon: 'devicon-plain:photoshop' },
// ]



const projects = [
    {
        "_id": "1",
        "title": "Project - 1",
        "description": "Real estate property booking website (Matribhumi City BD)",
        "technologies": ["React", "JavaScript", "Tailwind", "MERN Stack"],
        "features": [
            "Real Estate website user can book properties, and admin can add, edit, delete new properties.",
            "Users can visit the company through the book visit form before booking the property.",
            "User can't log in to the admin dashboard. Only admin can access the dashboard through email and password."
        ],
        "links": {
            "visitSite": "https://matribhumicitybd.netlify.app/"
        },
        "image": `${project}`
    },
    {
        "_id": "2",
        "title": "Project - 2",
        "description": "Selected images can delete and add new images ( Simple Image Gallery )",
        "technologies": ["React", "JavaScript", "Tailwind"],
        "features": [
            "Developed a React.js-powered image gallery with seamless uploads and additions for a dynamic visual experience.",
            "Implemented user-friendly controls for selecting and deleting specific or multiple images, enhancing user control.",
            "Optimized gallery performance by saving uploaded images in local storage, ensuring responsiveness and efficiency."
        ],
        "links": {
            "visitSite": "https://customizable-image-gallery.netlify.app/",
            "visitCode": "https://github.com/kaykobadyiasin/Image-Gallery-Task"
        },
        "image": `${project2}`
    },
    {
        "_id": "3",
        "title": "Project - 3",
        "description": "Yoga class booking through stripe payment method and visit instructors classes ( Freedom Yoga )",
        "technologies": ["React", "JavaScript", "Tailwind", "MERN"],
        "features": [
            "Implemented Firebase Authentication for a secure user entry point on the Freedom Yoga platform.",
            "Enhanced user navigation for easy class bookings with specific instructors.",
            "Stripe secured payments, user-friendly class management."
        ],
        "links": {
            "visitSite": "https://freedom-yoga-6b25a.web.app/"
        },
        "image": `${project3}`
    },
    {
        "_id": "4",
        "title": "Project - 4",
        "description": "Display own skills, experience, projects, education, and contact info ( Portfolio Website )",
        "technologies": ["React", "JavaScript", "Tailwind"],
        "features": [
            "Initiate React project and integrate Tailwind CSS for styling.",
            "Construct React components for portfolio sections using JavaScript for dynamic content.",
            "Optimize code for performance and responsiveness; deploy the portfolio using platforms like Netlify or Vercel."
        ],
        "links": {
            "visitSite": "https://kaykobadyiasin-portfolio.netlify.app/",
            "visitCode": "https://github.com/kaykobadyiasin/portfolio-kaykobad-yiasin"
        },
        "image": `${project4}`
    },
]


const experiences = [

    {
        "_id": "2",
        "position": "Full Stack Developer",
        "company": "Matribhumi Group",
        "duration": "Dec 2023 - Present",
        "logo": "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/400089755_716584007188431_5954228664237433551_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=_M1vwJB8ZlYAX8Ocx8T&_nc_ht=scontent.fdac14-1.fna&oh=00_AfABidEIRvIpSfFCQH6uQqTfp7m-UDI-5ZNHeJ5H4AD8mA&oe=65B102C4",
        "description": "Innovative Full Stack Developer at Matribhumi City, excelling in React.js and Next.js, with a proven track record in effective problem-solving and collaborative teamwork.",
        "skills": ["React.js", "Team Work", "Next.js", "Problem Solving"]
    },
    {
        "_id": "1",
        "position": "Frontend developer intern",
        "company": "Weero Digital",
        "duration": "Aug 2023 - Nov 2023",
        "logo": "https://studio.skill.jobs/media/logo/Weero.png",
        "description": "React.js Intern at Weero Digital. Demonstrated strong teamwork, problem-solving, and adaptability in fast-paced projects.",
        "skills": ["React.js", "Team Work", "Problem Solving"]
    }
]




const Home = () => {

    const [itemIndex, setItemIndex] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
        reset()
    }

    setTimeout(() => {
        setItemIndex(null)
    }, 8000)



    return (
        <div>
            <Banner />
            <div className='min-h-screen container mx-auto'>
                {/* skills  */}
                <section id='skills' className='xl:mx-0 mx-5 mt-36'>
                    <h2 className='text-3xl font-semibold pb-5 text-center border-b-2 border-gray-700 text-slate-300'>Skills</h2>

                    <div className='grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-8 my-20'>
                        {skills.map((item, index) => (

                            <div key={index} className={`p-2 flex gap-5 items-center justify-center relative cursor-pointer`}>
                                <Icon onMouseOver={() => setItemIndex(item?._id)} icon={item?.iconIn} className="text-3xl border p-4 rounded-lg w-20 h-20" />
                                <div className='absolute -bottom-6'>

                                    <span className={`bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 rounded-lg px-6 py-1 capitalize transition-all duration-300 ${(itemIndex == item._id) ? 'opacity-100' : 'opacity-0'}`}>{item?.iconName}</span>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </section>

                {/* experience  */}
                <div className='xl:mx-0 mx-5 mt-36'>
                    <h2 className='text-3xl font-semibold pb-5 text-center border-b-2 border-gray-700 text-slate-300'>Experience</h2>
                    <div className='my-20 grid lg:grid-cols-2 gap-5 text-gray-400'>

                        {
                            experiences?.map((item, index) => (
                                <div key={index} className='w-full bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 rounded-md p-[1px]'>
                                    <div className='bg-[#060817] rounded-md p-4 min-h-full'>
                                        <div className='flex gap-5 mb-5'>
                                            <div>
                                                <img src={item?.logo} className='w-14 h-14 object-cover rounded-md' alt="" />
                                            </div>
                                            <div>
                                                <h2 className='font-semibold text-xl capitalize text-slate-300'>{item?.position}</h2>
                                                <h4 className='font-semibold'>{item?.company}</h4>
                                                <h6 className='text-md'>{item?.duration}</h6>
                                            </div>
                                        </div>
                                        <div>
                                            <p>{item?.description}</p>
                                        </div>
                                        <div className='flex flex-wrap gap-3 mt-5'>
                                            {
                                                item?.skills?.map((skill, index) => (

                                                    <span key={index} className='border flex justify-center items-center px-5 py-1 rounded-md'>{skill}</span>

                                                ))}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>

                {/* projects  */}
                <div className='xl:mx-0 mx-5 mt-36'>
                    <h2 className='text-3xl font-semibold pb-5 text-center border-b-2 border-gray-700 text-slate-300'>Projects</h2>
                    <div className='flex flex-col gap-14 my-20'>
                        {
                            projects?.map((item, index) => (
                                <div key={index}>
                                    <div className='flex xl:flex-row-reverse flex-col-reverse items-center justify-between border-gray-700 p-5 rounded-lg text-gray-400'>
                                        <div className='lg:w-[70%] xl:ml-20 ml-0 border-gray-700 xl:border-l-2 xl:pl-20 xl:mt-0 mt-10'>
                                            <div className='flex flex-col gap-5'>
                                                <h5>{item?.title}</h5>
                                                <h3 className='text-xl font-semibold text-slate-300 capitalize'>{item?.description}</h3>
                                                <div className='flex flex-wrap gap-3'>

                                                    {
                                                        item?.technologies?.map((technology, index) => (
                                                            <div key={index}>
                                                                <span className='border min-w-16 flex justify-center items-center px-3 py-1 rounded-md'>{technology}</span>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <ul className='my-5  w-full list-inside list-disc '>

                                                {
                                                    item?.features?.map((feature, index) => (
                                                        <div key={index} className='pl-5 my-3'>
                                                            <li className='flex gap-4 '>
                                                                <span>•</span>
                                                                <span>{feature}</span>
                                                            </li>
                                                        </div>
                                                    ))
                                                }
                                            </ul>
                                            <div className='flex items-center gap-5 mt-3'>
                                                {item?.links?.visitSite ?
                                                    <Link to={item?.links?.visitSite} target='_blank' className=' text-lg rounded-md px-8 py-2 hover:bg-gradient-to-l transition-all duration-300 bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 text-white'>Visit Site</Link> : <></>
                                                }

                                                {item?.links?.visitCode ?
                                                    <Link to={item?.links?.visitCode} target='_blank' className=' text-lg rounded-md px-8 py-2 border hover:bg-white hover:text-[#060817] transition-all duration-300'>Visit Github code</Link> : <></>
                                                }
                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='xl:h-[500px] h-[400px] bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 shadow-2xl shadow-cyan-500/50 xl:w-[500px] overflow-hidden rounded-md '>
                                                <img src={item?.image} className='w-full rounded-md' alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>


                {/* education  */}
                <div className='xl:mx-0 mx-5 mt-36'>
                    <h2 className='text-3xl font-semibold pb-5 text-center border-b-2 border-gray-700 text-slate-300'>Education</h2>
                    <div className='my-20 grid lg:grid-cols-2 gap-5 text-gray-400'>
                        <div className='bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 rounded-md p-[1px]'>
                            <div className='bg-[#060817] rounded-md p-4'>
                                <div className='flex gap-5 mb-5'>
                                    <div>
                                        <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/300061492_478416740960658_2837380305705383488_n.png?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=KdZXqoSYA4AAX8aYuw9&_nc_ht=scontent.fdac14-1.fna&oh=00_AfB6G0-kbomR-KUn2j0aYnlwuZKHVZdcUpeWrAqrRGp3aA&oe=65ACE717" className='w-14 h-14 object-cover rounded-md' alt="" />
                                    </div>
                                    <div>
                                        <h2 className='font-semibold text-xl capitalize text-slate-300'>Diploma Engineering</h2>
                                        <h4 className='font-semibold'>Graphic Arts Institute - Dhaka</h4>
                                        <h6 className='text-md'>Aug 2019 - Dec 2023</h6>
                                    </div>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque magni omnis odio aspernatur obcaecati, tempore eos nobis facilis et iste!</p>
                                </div>
                                <div className='flex flex-wrap gap-3 mt-5'>
                                    <span className='border flex justify-center items-center px-5 py-1 rounded-md'>Graphic Design</span>
                                    <span className='border flex justify-center items-center px-5 py-1 rounded-md'>Web Design</span>
                                    <span className='border flex justify-center items-center px-5 py-1 rounded-md'>Web Development</span>
                                </div>
                            </div>
                        </div>
                        <div className='bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 rounded-md p-[1px]'>
                            <div className='bg-[#060817] rounded-md p-4'>
                                <div className='flex gap-5 mb-5'>
                                    <div>
                                        <img src="https://4.bp.blogspot.com/-OfihZ17KAZw/WO8UP-5N1KI/AAAAAAAAGwQ/tVNzn3HhM_EikSStjsRt1fnBseTZ-RFjgCLcB/s1600/bangladesh-technical-education-board.jpg" className='w-14 h-14 object-cover rounded-md' alt="" />
                                    </div>
                                    <div>
                                        <h2 className='font-semibold text-xl capitalize text-slate-300'>Secondary School Certificate</h2>
                                        <h4 className='font-semibold'>Purbahura High School - Cumilla</h4>
                                        <h6 className='text-md'>Nov 2019 - Passed</h6>
                                    </div>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque magni omnis odio aspernatur obcaecati, tempore eos nobis facilis et iste!</p>
                                </div>
                                <div className='flex flex-wrap gap-3 mt-5'>
                                    <span className='border flex justify-center items-center px-5 py-1 rounded-md'>Electrical Works</span>
                                    <span className='border flex justify-center items-center px-5 py-1 rounded-md'>Thechnology</span>
                                    <span className='border flex justify-center items-center px-5 py-1 rounded-md'>Repair Electronics</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* contact  */}
                <div className='xl:mx-0 mx-5 mt-36'>
                    <h2 className='text-3xl font-semibold pb-5 text-center border-b-2 border-gray-700 text-slate-300'>Contact</h2>
                    <div className='my-20'>


                        <form form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type='name' {...register("name", { required: true })} id='name' className="block py-2.5 px-0 rounded w-full text-md text-slate-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                <label htmlFor="name" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type='email' {...register("email", { required: true })} id='email' className="block py-2.5 px-0 rounded w-full text-md text-slate-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                <label htmlFor='email' className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type='phone' {...register("phone", { required: true })} id='phone' className="block py-2.5 px-0 rounded w-full text-md text-slate-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                <label htmlFor='phone' className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                            </div>
                            <label htmlFor='message' className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Your message</label>
                            <textarea id="message" rows="4" className="mb-8 block py-2.5 px-0 rounded w-full text-md text-slate-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder='Your message'></textarea>
                            <button type="submit" className="text-white bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 hover:bg-gradient-to-l transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>

                    </div>
                </div>
            </div >
        </div>
    );
};

export default Home;