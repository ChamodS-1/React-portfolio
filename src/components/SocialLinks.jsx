import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

const links = [
    {
        id : 1,
        child : (
            <>
              LinkedIn
              <FaLinkedin size={25} />
            </>
        ),
        href: 'https://www.linkedin.com',
        style : 'rounded-tr-md'
    },
    {
        id : 2,
        child : (
            <>
              GitHub
              <FaGithub size={25} />
            </>
        ),
        href: 'https://www.GitHub.com',
        
    },
    {
        id : 3,
        child : (
            <>
              Mail
              <HiOutlineMail size={25} />
            </>
        ),
        href: 'mailto:thebradredd@gmail.com',
        
    },
    {
        id : 4,
        child : (
            <>
              Resume
              <BsFillPersonLinesFill size={25} />
            </>
        ),
        href: '/Chamod Basnayake - CV.pdf',
        style : 'rounded-br-md',
        download : true
        
    }
    
]

  return (
    <div className="hidden md:flex flex-col top-[35%] left-0 fixed ">
      <ul>

        {links.map(({id,child,href,style,download}) => (

        // eslint-disable-next-line
         <li key={id} className={"flex justify-between items-center bg-white py-4 w-40 px-4 hover:rounded-md ml-[-100px] hover:ml-[-5px] duration-300"+" "+style}>
          <a href={href} className="flex justify-between items-center w-full" download={download} target="_blank" rel="noreferrer">
            <>
              {child}
            </>
          </a>
        </li>

        ))}

      </ul>
    </div>
  );
};

export default SocialLinks;
