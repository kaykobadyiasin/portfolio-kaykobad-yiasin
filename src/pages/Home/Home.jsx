import React, { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import project from '../../assets/project/matribhumi-city.png'
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
                        <div className='w-full bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 rounded-md p-[1px]'>
                            <div className='bg-[#060817] rounded-md p-4'>
                                <div className='flex gap-5 mb-5'>
                                    <div>
                                        <img src="https://studio.skill.jobs/media/logo/Weero.png" className='w-14 h-14 object-cover rounded-md' alt="" />
                                    </div>
                                    <div>
                                        <h2 className='font-semibold text-xl capitalize text-slate-300'>Frontend developer web intern</h2>
                                        <h4 className='font-semibold'>Weero Digital</h4>
                                        <h6 className='text-md'>Aug 2023 - Nov 2023</h6>
                                    </div>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque magni omnis odio aspernatur obcaecati, tempore eos nobis facilis et iste!</p>
                                </div>
                                <div className='flex flex-wrap gap-3 mt-5'>
                                    <span className='border flex justify-center items-center px-5 py-1 rounded-md'>Next.js</span>
                                    <span className='border flex justify-center items-center px-5 py-1 rounded-md'>Team Work</span>
                                </div>
                            </div>
                        </div>
                        <div className='w-full bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 rounded-md p-[1px]'>
                            <div className='bg-[#060817] rounded-md p-4'>
                                <div className='flex gap-5 mb-5'>
                                    <div>
                                        <img src="https://studio.skill.jobs/media/logo/Weero.png" className='w-14 h-14 object-cover rounded-md' alt="" />
                                    </div>
                                    <div>
                                        <h2 className='font-semibold text-xl capitalize text-slate-300'>Frontend developer web intern</h2>
                                        <h4 className='font-semibold'>Weero Digital</h4>
                                        <h6 className='text-md'>Aug 2023 - Nov 2023</h6>
                                    </div>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque magni omnis odio aspernatur obcaecati, tempore eos nobis facilis et iste!</p>
                                </div>
                                <div className='flex flex-wrap gap-3 mt-5'>
                                    <span className='border flex justify-center items-center px-5 py-1 rounded-md'>React</span>
                                    <span className='border flex justify-center items-center px-5 py-1 rounded-md'>JavaScript</span>
                                    <span className='border flex justify-center items-center px-5 py-1 rounded-md'>Tailwind</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* projects  */}
                <div className='xl:mx-0 mx-5 mt-36'>
                    <h2 className='text-3xl font-semibold pb-5 text-center border-b-2 border-gray-700 text-slate-300'>Projects</h2>
                    <div className='flex flex-col gap-8 my-20'>
                        <div className='flex xl:flex-row-reverse flex-col-reverse items-center  border-gray-700 p-5 rounded-lg text-gray-400'>
                            <div className='xl:ml-20 ml-0 border-gray-700 xl:border-l-2 xl:pl-20 xl:mt-0 mt-10'>
                                <div className='flex flex-col gap-5'>
                                    <h3 className='text-xl font-semibold text-slate-300 capitalize'>Real Easted Property Booking Website <span className='text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 bg-clip-text'>( </span>Matribhumi City BD<span className='text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 bg-clip-text'> )</span> </h3>
                                    <div className='flex flex-wrap gap-3'>
                                        <span className='border min-w-16 flex justify-center items-center px-3 py-1 rounded-md'>React</span>
                                        <span className='border min-w-16 flex justify-center items-center px-3 py-1 rounded-md'>JavaScript</span>
                                        <span className='border min-w-16 flex justify-center items-center px-3 py-1 rounded-md'>Tailwind</span>
                                        <span className='border min-w-16 flex justify-center items-center px-3 py-1 rounded-md'>MERN Stack</span>
                                    </div>
                                </div>
                                <ul className='my-5  w-full list-inside list-disc text-justify'>
                                    <div className='pl-5 space-y-5'>
                                        <li className='flex gap-4 '>
                                            <span>•</span> {/* You can replace this with your preferred list marker */}
                                            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quis esse harum aut nulla ipsa provident, aperiam magni qui laborum animi minus corporis accusantium sint numquam eaque. Quibusdam dolores repudiandae quae minima aliquam consequatur a quos. Optio consequatur dolorem porro laboriosam, impedit voluptas sunt maxime. Repellendus possimus repudiandae accusamus facere.</span>
                                        </li>
                                        <li className='flex gap-4'>
                                            <span>•</span>
                                            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat nobis tempore nostrum repellat asperiores, amet natus. Soluta, praesentium fugit!</span>
                                        </li>
                                        <li className='flex gap-4'>
                                            <span>•</span>
                                            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat nobis tempore nostrum repellat asperiores, amet natus. Soluta, praesentium fugit!</span>
                                        </li>
                                    </div>
                                </ul>
                                <div className='flex items-center gap-5 mt-3'>
                                    <Link to={'https://matribhumicitybd.netlify.app/'} target='_blank' className=' text-lg rounded-md px-8 py-2 bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 text-white'>Visit Site</Link>
                                    <Link to={'https://drive.google.com/file/d/1KPbt_p1DeYt0MtVysOIRDo--eXoY7ocg/view'} target='_blank' className=' text-lg rounded-md px-8 py-2 border'>Visit to code</Link>
                                </div>
                            </div>
                            <div className=''>
                                <div className='xl:h-[500px] h-[400px] bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 shadow-2xl shadow-cyan-500/50 xl:w-[500px] overflow-hidden rounded-md '>
                                    <img src={project} className='w-full rounded-md' alt="" />
                                </div>
                            </div>
                        </div>
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
                            <button type="submit" className="text-white bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>

                    </div>
                </div>
            </div >
        </div>
    );
};

export default Home;