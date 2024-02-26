'use client'
import React from 'react'
import Image from 'next/image'
import img from '@/public/img3.jpg'
import resume from '@/app/assets/resume.pdf'
import Social from './Social'
import Typewriter from 'typewriter-effect';
const Front = () => {
    const handleDownload = () => {
        const pdfFilePath = resume;
        const fullUrl = `${window.location.origin}${pdfFilePath}`;
        window.open(fullUrl, '_blank');
    };
    return (
        <div className='w-full text-white flex justify-center items-center flex-col'>
            <div id="first" className='h-[750px] w-full md:w-[90%] flex justify-around items-center flex-col  md:flex-row-reverse sm:flex-row-reverse'>
                <Image src={img} className='w-[200px] md:w-[300px] sm:w-[250px] rounded-xl'></Image>
                <div id="text" className='w-[70%] flex justify-between items-center flex-col h-[350px] md:h-[400px] text-[30px] md:w-[50%] md:text-[50px] sm:text-[45px] text-center md:text-left sm:text-left'>
                    <div className='w-full h-[200px]'>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString(`Hey there! I'm <div id='name'> Kartikey Mishra </div>`)
                                    .callFunction(() => {
                                        console.log('String typed out!');
                                    })
                                    .pauseFor(1000)
                                    .start();
                                typewriter.typeString(`A React Developer`)
                                    .callFunction(() => {
                                        console.log('String typed out!');
                                    })
                                    .pauseFor(1000)
                                    .start()
                                    .deleteChars(18)
                                typewriter.typeString(`A NextJS Developer`)
                                    .callFunction(() => {
                                        console.log('String typed out!');
                                    })
                                    .pauseFor(1000)
                                    .start()
                            }
                            }
                        />
                    </div>
                    <button className='w-[250px] duration-[0.5s] border p-1.5 text-[20px] border-blue-700 hover:bg-blue-500 '
                        onClick={handleDownload}>
                        Download Resume
                    </button>
                    <Social />
                </div>
            </div>
            <hr />
            <div id="second" className=' h-[450px] md: w-[90%] md:w-[60%] flex items-center justify-center flex-col'>
                <h1 className='md:text-[40px] sm:[30px] text-[20px] underline'>About me</h1>
                <p className='text-justify p-3 md:p-0 text-[13px] sm:text-[16px] md:text-[18px]'>A third-year Computer Science and Engineering student on a mission to craft seamless digital experiences. Proficient in HTML, CSS, and JavaScript, I specialize in React.js and Next.js for modern, efficient web development. As I navigate the dynamic world of tech, my academic journey enriches my coding skills, focusing on data structures and algorithms. Join me as I explore the endless possibilities of technology and strive to leave a positive impact through code. Let's build the future together!</p>
            </div>
        </div>
    )
}

export default Front