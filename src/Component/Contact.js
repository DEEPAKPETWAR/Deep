import React, { useState } from 'react'
import { FaGlobe, FaPhoneAlt, FaUserAlt, FaUserTie } from "react-icons/fa";

const Contact = () => {
  
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [country,setCountry]=useState("");
    const[message,setMessage]=useState("");
    const[showModal,setShowModal]=useState("false");

    const handleSubmit= (e)=>{
        e.preventDefault();
        alert('Form submitted sucessfully');
        const data={
            name,
            email,
            phone,
            country,
            message

        }
        // console.log(data);
        if(!data){
            alert("please fill all the fields");
            return;
        }
        setShowModal(true)

    }
    const closeModal=()=>{
        setShowModal(false)
        setName("")
        setEmail("" )
        setPhone("")
        setCountry("")
        setMessage("")
    }




    return (
        <div className='bg-blue-950 flex items-center justify-center py-28 px-8 ' id='contact'>
            <div className='container mx-auto'>
                <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center md:gap-12 gap-8'>
                    {/* left */}
                    <div className='space-y-8 '>
                        <h2 className='text-4xl font-serif font-bold mb-4 text-white'>Make an Appointment</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-white '>
                        <div className='flex items-start gap-4'>
                            <div className='flex items-center justify-center rounded-full bg-slate-600 p-3'>
                                <FaUserTie className='text-green-400' />
                            </div>
                            <div className='space-y-1'>
                                <h3 className='text-lg font-medium'>
                                    24Hours Services
                                </h3>
                                <p>lorem ipsum is simply dummy text of the printing</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-4'>
                            <div className='flex items-center justify-center rounded-full bg-slate-600 p-3'>
                                <FaUserAlt className='text-green-400' />
                            </div>
                            <div className='space-y-1'>
                                <h3 className='text-lg font-medium'>
                                    Expert Theropist
                                </h3>
                                <p>lorem ipsum is simply dummy text of the printing</p>
                            </div>
                        </div>                        <div className='flex items-start gap-4'>
                            <div className='flex items-center justify-center rounded-full bg-slate-600 p-3'>
                                <FaPhoneAlt className='text-green-400' />
                            </div>
                            <div className='space-y-1'>
                                <h3 className='text-lg font-medium'>
                                    High Quality Care
                                </h3>
                                <p>lorem ipsum is simply dummy text of the printing</p>
                            </div>
                        </div>                        <div className='flex items-start gap-4'>
                            <div className='flex items-center justify-center rounded-full bg-slate-600 p-3'>
                                <FaGlobe className='text-green-400' />
                            </div>
                            <div className='space-y-1'>
                                <h3 className='text-lg font-medium'>
                                    Trusted Clinic
                                </h3>
                                <p>lorem ipsum is simply dummy text of the printing</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* right */}
                    <div className='space-y-8 p-8 bg-white shadow-xl rounded-md '>
                       <h3 className='text-2xl font-bold mb-4 '>
                        Book An Appointment
                       </h3>
                       <form onSubmit={handleSubmit} className='space-y-8'>
                        <div className='flex sm:flex-row flex-col gap-4 '>
                        
                            <input 
                             
                             onChange={e=>setName(e.target.value)}
                            type='text'placeholder='Name'className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow'/>
                            <input
                            onChange={e=>setEmail(e.target.value)} type='email'placeholder='Email Address'className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow'/>

                        </div>
                        <div className='flex sm:flex-row flex-col gap-4 '>
                        
                            <input 
                            onChange={e=>setPhone(e.target.value)}
                            type='number'placeholder='Contact Number'className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow'/>
                            <input
                            onChange={e=>setCountry(e.target.value)} type='text'placeholder='Country Name'className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow'/>
                            
                        </div>
                         <textarea
                           onChange={e=>setMessage(e.target.value)}
                         rows="5"
                          placeholder=' write your review...'className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow'></textarea>
                        <button type='submit' className='w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-200'>Send Message</button>
                       </form>
                    </div>
                </div>
            </div>
            {
               showModal&&  (
                <div className='fixed inset-90 flex items-center justify-center bg-black bg-opacity-90'>
                    <div className='bg-white p-8 rounded-md shadow-lg'>
                        <h2 className='text-2xl font-bold mb-4 '>Thank You</h2>
                        <p>
                            Thank you, {name}, for submitting your query
                        </p>
                        <button 
                        onClick={closeModal} className='mt-4 px-4 py-2 bg-green-600 text-white'>Close</button>
                    </div>
                </div>
               )
            }
        </div>
    );
}

export default Contact;
