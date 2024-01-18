import React from 'react'
import pic from '../assets/Stunning-male-portfolio-photography-done-in-studio-by-Loci-Photography-removebg-preview.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll'

const Home = () => {
  return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black to via-black bg-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
                <div className="flex flex-col justify-center h-full mt-16 md:mt-0">
                    <h2 className="text-4xl md:text-7xl font-bold text-white">
                        I'm Full Stack Developer
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quae possimus cum, vero reprehenderit consectetur aperiam, minima eaque ratione quibusdam maiores at accusantium sapiente, necessitatibus eos sit eveniet perspiciatis beatae.
                    </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className="group text-white flex flex-row items-center w-fit px-6 py-3 my-2 rounded-md bg-gradient-to-r from-gray-500 to bg-gray-700 hover:scale-105 duration-200 cursor-pointer">
                        Portfolio<span className="group-hover:rotate-90 duration-300"><MdKeyboardArrowRight size={20} /></span>
                        </Link>
                </div>

                </div>

                <div>
                    <img src={pic} alt="" className="h-auto max-w-lg md:w-full" />
                </div>


            </div>
        </div>
  )
}

export default Home