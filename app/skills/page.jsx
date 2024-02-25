import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import js from '@/public/skillsimages/js.png';
import java from '@/public/skillsimages/java.png';
import html from '@/public/skillsimages/html.png';
import css from '@/public/skillsimages/css.png';
import mongo from '@/public/skillsimages/mongo.png';
import react from '@/public/skillsimages/react.png';
import next from '@/public/skillsimages/nextjs.png';
import mysql from '@/public/skillsimages/mysql.png';
import tailwind from '@/public/skillsimages/tailwind.png';
import sass from '@/public/skillsimages/sass.png';
import Skill from './skill';
import Skills from './skills';

const SkillsPage = () => {
  return (
    <div className='w-full h-[2200px] md:h-[2000px] flex justify-between items-center flex-col bg-[rgba(0,0,0,0.9)]'>
      <Header/>
      <h1 className='text-[25px] md:h-[150px] md:text-[35px] h-[110px] flex justify-center items-center font-extrabold text-purple-300 text-center'>Navigating the Digital Frontier:<br />A Polyglot Developer's Odyssey.</h1>
      <div className='w-full h-[2000px] md:h-[1600px] flex flex-col justify-between items-center'>
        <Skills heading={'Programming Languages'}>
          <Skill name={'JavaScript'} img={js} text={'Strong proficiency in JavaScript, including ES6 features and modern development practices.'} />
          <Skill name={'Java'} img={java} text={'Experience with Java programming, including application development and debugging.'} />
        </Skills>
        <Skills heading={'Frameworks and Libraries'}>
          <Skill name={'React.js'} img={react} text={'Specialize in building dynamic user interfaces using React.js, leveraging its component-based architecture.'} />
          <Skill name={'Next.js'} img={next} text={'Implemented server-side rendering and optimized web applications using Next.js.'} />
          <Skill name={'TailwindCSS'} img={tailwind} text={'Proficient in using Tailwind CSS to create responsive and visually appealing designs.'} />
        </Skills>
        <Skills heading={'Databases'}>
          <Skill name={'MongoDB'} img={mongo} text={'Utilized MongoDB for data storage in several projects, understanding its NoSQL database concepts.'} />
          <Skill name={'MySQL'} img={mysql} text={'Skilled in managing relational databases with MySQL, including data modeling and query optimization.'} />
        </Skills>
        <Skills heading={'Basic Web Development Tools'}>
          <Skill name={'HTML'} img={html} text={'Solid understanding of HTML and its latest standards for structuring web content.'} />
          <Skill name={'CSS'} img={css} text={'Proficient in CSS for styling web pages, including CSS preprocessors like SASS and SCSS.'} />
          <Skill name={'SASS/SCSS'} img={sass} text={'Used SASS/SCSS to streamline CSS development, creating maintainable stylesheets for large projects.'} />
        </Skills>
      </div>
      <Footer />
    </div>
  );
};

export default SkillsPage;
