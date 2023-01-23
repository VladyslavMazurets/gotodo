import React from 'react'
import { Link } from 'react-router-dom'
import Mom from '../assets/images/mom.jpg'
import Dad from '../assets/images/dad.jpg'
import Daughter from '../assets/images/daughter.jpg'

const title = 'go todo';
const colors = ["red", "yellow", "blue", "green", "purple", "pink", "orange"];

const randomColor = () => {
  return colors[(Math.random() * colors.length) >> 0];
};

function Introduction() {
  return (
    <>
      <div className='flex justify-center border-solid border-4 
      border-bcolor rounded-[50px] m-6'>
        <div className='flex flex-col items-center text-center w-1/2 p-14'>
          <h1 className='text-8xl mb-16 font-bold'>
            {title.split("").map((letters: string, idx: number) => {
              return <span key={idx} style={{ color: `${randomColor()}`, opacity: 0.3 }}>
                {letters}
              </span>
            })}
          </h1>
          <p className='text-xl text-button-bg mb-10'>
            Organize your work and life, finally.
            Become focused, organized, and calm with Go Todo.
            The world’s #1 task manager and to-do list app.
          </p>
          <Link to='/home'>
            <button className='text-2xl py-4 px-14 mb-24 bg-button-bg text-button-text 
            rounded-2xl'>
              Get Started
            </button>
          </Link>

          <div className='flex flex-col'>
            <div className='flex'>
              <img src={Mom} alt='Intro_Img' width='150px' height='150px' />
              <img src={Daughter} alt='Intro_Img' width='150px' height='150px' />
              <img src={Dad} alt='Intro_Img' width='150px' height='150px' />
            </div>

            <div className='flex flex-col bg-todo-bg items-start 
            py-4 px-8'>
              <p className='mb-6 text-2xl font-bold text-button-bg line-through'>
                Download todo app
              </p>
              <p className='text-xl mb-8 text-button-bg '>
                the first step for better life
              </p>
              <div className='flex w-full justify-between items-center'>
                <div className='flex'>
                  <div className='w-auto height-auto rounded-full bg-work	
               border-3 p-4 mr-1.5'/>
                  <div className='w-auto height-auto rounded-full bg-entertainment	
               border-3 p-4'/>
                </div>
                <div className='flex items-center'>
                  <input className='w-5 h-5 mr-1 rounded checked:bg-red-500' 
                  type='checkbox' checked/>
                  <label className='text-base font-bold text-button-bg'>Done</label>
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