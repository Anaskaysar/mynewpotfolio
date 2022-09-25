import React from 'react';

// import img
import Image from '../../assets/img/My images/About 2 New.jpg';
import './about.css'

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24 '>
          <div className='image'>
            <img
              // className='object-cover h-full w-[566px] md:mx-auto lg:mx-0  rounded-2xl border-8 border-white-600'
              className=''
              src={Image}
              alt=''
            />
          </div>
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Kaysarul Anas Apurba
              </h2>
              <p className='mb-4 text-accent'>
               BSc Eng in CSE, NSU, Web Developer, ML/AI Enthusiastic
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8 text-justify '>
                I have completed my graduation from NSU at the year 2022 and my passion is in Computer Science.
                My interests include web development, artificial intelligence, machine learning and natural language processing. I also have experience in working as a MERN stack developer.
                <br />      
                <br/>           
                I am currently doing a research under my thesis supervisor on Natural Language Processing.
              </p>
            </div>
            <div>
              <h3 className='font-semibold'>North South University (NSU)</h3>
              <ul>
                <li>Bachelor Of Science in Computer Science and Engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
