import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from bg-gray-800 to via-black to-black text-white"> 
        <div className="flex flex-col justify-center p-4 max-w-screen-lg h-full mx-auto mt-[-100px] md:mt-[-350px]">
            <div className="text-4xl font-bold inline">
            <h2 class="mb-7 font-bold text-5xl text-gray-600 text-center">Contact</h2>
            </div>

            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/5dad827a-e883-4ac0-8324-1e23b8ce870b" method='POST' className="flex flex-col w-full md:w-1/2">
                    <input type="text" name='name' placeholder='Enter your name' className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" required />
                    <input type="email" name='eamil' placeholder='Enter email Address' className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none" required />
                    <textarea name="textArea" id="" cols="40" rows="10" placeholder='Enter Message' className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" required></textarea>
                    <button className="group text-white flex flex-row items-center w-fit px-6 py-3 mx-auto mt-4 rounded-md bg-gradient-to-r from-gray-500 to bg-gray-700 hover:scale-105 duration-200 cursor-pointer">
                        Sumbit
                        </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;