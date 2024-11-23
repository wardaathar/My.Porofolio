import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact=()=> {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="zoom-out-right">Get In Touch</h2>
                <p className='text-gray-300 text-[18px] pt-2' data-aos="zoom-out-right">
                If you have any more questions, don't hesitate to contact me & Keep it brief and add an invitation to keep in touch.
                </p>
                <div className='flex gap-3 items-centre' data-aos="zoom-in-up">
                <IoIosMail size={30} /> wdaa47495@gmail.com
                </div>
                <div className='flex gap-3 items-centre' data-aos="zoom-in-up">
                <  FaSquareFacebook size={30} />  Warda.ather
                </div>
                <div className='flex gap-3 items-centre' data-aos="zoom-in-up">
                <  BsFillTelephoneFill size={30} />  (021)315**88738
                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor='name'>Name</label>
                    <input type='text'
                    className='h-[40] bg-transparent border border-accent'
                    id="name"></input>
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor='e-mail'>E-mail</label>
                    <input type='text'
                    className='h-[40] bg-transparent border border-accent'
                    id="e-mail"></input>
                </div>
                <div className='flex flex-col gap-1 data-aos="zoom-in-up"'>
                    <label htmlFor='message'>Message</label>
                    <textarea 
                    className='bg-transparent border border-accent'
                    id="message" rows={10 }></textarea>
                </div>
                <button className='bg-red-800 font-semibold pt-2 px-6' data-aos="zoom-in-up">Send</button>
            </div>
        </div>

    </div>
  )
}

export default Contact