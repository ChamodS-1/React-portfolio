import React, { useState } from 'react';
import {FaBars,FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

const Navbar = () => {

const [nav,navSet ] = useState(false);

const links = [
    {id : 1,
     link: 'home'
    },
    {id : 2,
        link: 'experience'
    },
    {id : 3,
        link: 'portfolio'
    },
    {id : 4,
        link: 'about'
    },
    {id : 5,
        link: 'contact'
    },
]

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed bg-black z-30">
        <div>
            <h1 className="text-4xl font-sinature ml-2">Chamod</h1>
        </div>
        <ul className="hidden md:flex">

            {links.map(({link,id}) => (
                
                <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-gray-100 duration-200">
                    <Link to={link} smooth duration={500}>{link}</Link></li>
            ))}   
        </ul>

        <div onClick={()=> navSet(!nav)} className="cursor-pointer pr-10 z-10 text-gray-500 md:hidden hover:scale-95 hover:text-gray-200 active:scale-90 duration-200 ">
            {nav ? <FaTimes size={25}/> : <FaBars size={25} />}
        </div>

        {nav && (

        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-full bg-gradient-to-b from-black to bg-gray-800 text-gray-500">

        {links.map(({link,id}) => (
                
                <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200 hover:text-gray-200">
                     <Link onClick={()=> navSet(!nav)} to={link} smooth duration={500}>{link}</Link></li>
            ))}
            
        </ul>
        )}

    </div>
  )
}

export default Navbar