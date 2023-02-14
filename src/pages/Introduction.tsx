import React from 'react'
import { Link } from 'react-router-dom'
import Mom from '../assets/images/mom.jpg'
import Dad from '../assets/images/dad.jpg'
import Daughter from '../assets/images/daughter.jpg'

const title = 'go todo';
const colors = ["red", "yellow", "blue", "green", "purple", "pink", "orange"];

const randomColor = () => {
  return colors[(Math.random() * colors.length + 1) >> 0];
};

function Introduction() {
  return (
    <>
      <div className='flex justify-center border-4 border-bcolor rounded-[20px] 
      m-3 sm:rounded-[50px] sm:m-6'>
        <div className='flex flex-col items-center text-center px-6 
        py-16 sm:p-20 xl:w-1/2 xl:p-16'>
          <h1 className='text-6xl mb-16 font-bold sm:text-8xl'>
            {title.split("").map((letters: string, idx: number) => {
              return <span key={idx} style={{ color: `${randomColor()}`, opacity: 0.4 }}>
                {letters}
              </span>
            })}
          </h1>
          <p className='text-md text-text-color mb-5 sm:text-xl sm:mb-8
          xl:mb-12'>
            Organize your work and life, finally.
            Become focused, organized, and calm with Go Todo.
            The world’s #1 task manager and to-do list app.
          </p>
          <Link to='/home'>
            <button className='text-lg py-2 px-10 mb-20 bg-button-bg 
            text-button-text rounded-2xl sm:py-4 sm:px-14 sm:text-xl sm:mb-12
            xl:text-2xl xl:px-16 xl:mb-20'>
              Get Started
            </button>
          </Link>

          <div className='flex flex-col'>
            <div className='flex'>
              <img src={Mom} alt='Intro_Img' className='w-[80px] sm:w-[120px]
              xl:w-[150px]' />
              <img src={Daughter} alt='Intro_Img' className='w-[80px] sm:w-[120px]
              xl:w-[150px]' />
              <img src={Dad} alt='Intro_Img' className='w-[80px] sm:w-[120px]
              xl:w-[150px]' />
            </div>

            <div className='flex flex-col bg-todo-bg items-start 
            py-2 px-4 xl:py-4 xl:px-6'>
              <p className='mb-6 text-lg font-bold text-text-color 
              line-through sm:text-xl xl:text-2xl'>
                Download todo app
              </p>
              <p className='text-md mb-6 text-text-color line-through
              sm:text-lg xl:text-xl'>
                the first step for better life
              </p>
              <div className='flex w-full justify-between items-center'>
                <div className='flex'>
                  <div className='w-auto height-auto rounded-full bg-work	
               border-3 p-3 mr-1.5 sm:p-4'/>
                  <div className='w-auto height-auto rounded-full bg-entertainment	
               border-3 p-3 sm:p-4'/>
                </div>
                <div className='flex items-center'>
                  <input id='introduction_checkbox' type='checkbox'
                    className='sr-only peer' checked
                    onChange={e => console.log(e.target.checked)} />
                  <label htmlFor='introduction_checkbox'
                    className="text-base font-bold relative
                  select-none text-button-bg cursor-pointer before:w-5 before:h-5 
                  before:content-[''] before:border-2 before:border-gray-200 
                  before:inline-block before:rounded before:absolute
                  before:left-[-23px] before:top-[2px] after:content-['\2714']
                   after:absolute after:inline-block after:left-[-19px] after:top-[0px]
                   after:hidden after:transition-transform after:duration-200
                    peer-checked:after:block">
                    Done
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Introduction