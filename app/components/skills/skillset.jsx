import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
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
import github from '@/public/skillsimages/github.png';
import Skill from './skill';
import Skills from './skills';

const SkillsPage = () => {
  return (
    <div className='w-[80%] md:w-[60%] mb-5 h-[650px] md:h-[900px] flex justify-between items-center flex-col'>
      <h1 className='text-[25px] md:h-[50px] md:text-[35px] min-h-[50px] flex justify-center items-center font-extrabold text-white text-center'>My Skills</h1>
      <div className='w-full h-[600px] md:h-[850px] flex flex-col justify-around items-center'>
        <Skills heading={'Programming Languages'}>
          <Skill name={'JavaScript'} img={js} text={'Strong proficiency in JavaScript, including ES6 features and modern development practices.'} />
          <Skill name={'Java'} img={java} text={'Experience with Java programming, including application development and debugging.'} />
        </Skills>
        <Skills heading={'Frameworks and Libraries'}>
          <Skill name={'React.js'} img={react} text={'Specialize in building dynamic user interfaces using React.js, leveraging its component-based architecture.'} />
          <Skill name={'Next.js'} img={next} text={'Implemented server-side rendering and optimized web applications using Next.js.'} />
          <Skill name={'TailwindCSS'} img={tailwind} text={'Proficient in using Tailwind CSS to create responsive and visually appealing designs.'} />
        </Skills>
        <Skills heading={'Version Controls'}>
          <Skill name={'GitHub'} img={github} text={'Familiar with Git and GitHub for version control, including branching, merging, and pull requests.'} />
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
    </div>
  );
};

export default SkillsPage;
