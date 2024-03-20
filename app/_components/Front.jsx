'use client'
import Image from "next/image";
import profile from '@/public/kartikey.jpg'
import Typewriter from 'typewriter-effect';
import resume from '@/public/resume.pdf'
import Social from "./Social";
export default function Home() {
    const handleDownload = () => {
        const pdfFilePath = resume;
        const fullUrl = `${window.location.origin}${pdfFilePath}`;
        window.open(fullUrl, '_blank');
    };
    return (
        <div className="w-full h-screen flex justify-around items-center flex-col text-white
        md:w-[80%] md:flex-row-reverse md:justify-around
        ">
            <Image src={profile} className="w-[250px] md:w-[400px] rounded-lg"></Image>
            <div id="text" className='sm:h-[500px] w-[70%] flex justify-around items-center md:items-start sm:items-start sm:justify-around flex-col h-[300px] md:h-[400px] text-[30px] md:w-[50%] md:text-[50px] sm:text-[45px] text-center md:text-left sm:text-left'>
                <div className='w-full h-[150px] sm:h-[220px] md:h-[300px]'>
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
                            typewriter.typeString(`A NextJS Developer.`)
                                .callFunction(() => {
                                    console.log('String typed out!');
                                })
                                .pauseFor(1000)
                                .start()
                        }}
                    />
                </div>
                <button className='w-[250px] duration-[0.5s] border rounded-[30px] p-1.5 text-[20px] border-blue-700 hover:bg-blue-500' onClick={handleDownload}>
                    Download Resume
                </button>
            </div>

        </div>
    );
}
