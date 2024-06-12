'use client'
import { Button, Image } from '@nextui-org/react'
import { Bebas_Neue, Jacquard_12_Charted, Roboto } from 'next/font/google'
import React, { useState } from 'react'
import { AiFillBook } from 'react-icons/ai'
import { motion } from "framer-motion";
import Head from 'next/head'


const inter = Bebas_Neue({ subsets: ['latin'], weight: ['400'] })
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const i = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const keyTakeaways = [
    "Building Web Apps: Combine HTML, CSS, JavaScript, and React to create structured, styled, interactive, and dynamic web applications.",
    "Responsive Design: Craft websites that adapt to any device or screen size with CSS and flexible layouts.",
    "Data and State Management: Handle data and state efficiently in React, using hooks and context API.",
    "Optimization: Learn best practices for clean code, performance, accessibility, and SEO."
];


function page() {
    const [start, setStart] = useState(false)

    function BuyButtonComponent() {
        return (
            <stripe-buy-button
                buy-button-id="buy_btn_1PQlUBBiXRHCNCMjubjEfRqV"
                publishable-key="pk_live_51Nend2BiXRHCNCMj3rHVP9lhAWQDRXvB0PjJ6t9ga4hpg8hn8grmoapR5fHynzWnpURcz3WmmeUxGYmz2a2Qahty0027vrCkRC"
            >
            </stripe-buy-button>
        );
    }

    return (
        <div className={`${inter.className} h-full w-full text-white fixed top-0 center-col bg-black z-[999999]`}>
            <script
                async
                src="https://js.stripe.com/v3/buy-button.js">
            </script>
            {!start && <Button onClick={() => { setStart(true) }} className='bg-opacity-0 bg-purple-700 border-none text-white font-bold x h-20  w-40 rounded-3xl'>Join Class</Button>}
            {start && <div className='h-screen gap-4 hidescroll  absolute z-[50] overflow-y-scroll overflow-hidden  top-0 center-col p-20 w-full'>
                <div className='HEADER relative fadeIn mt-72  h-fit w-full'>
                    <div className='relative'>
                        <p className='bg-green-600 text-sm center text-center rounded-full p-2 h-20 w-20 absolute -top-8 -right-3 trans '>Beginner Friendly</p>
                        <h1 className={`text-3xl font-bold text-center ${inter.className}`}>Summer</h1>
                        <div className="center gap-2">
                            <h1 className={`text-5xl font-extrabold text-center  ${inter.className}`}>Coding</h1>
                            <h1 className={`text-5xl font-bold text-black bg-white -skew-x-6 text-center ${inter.className}`}>Class</h1>
                        </div>
                    </div>
                </div>
                <div className='relative h-full  gap-4 center-col p-4'>
                    <h1 className={`${inter.className} text-white- bg-purple-800 my-2 center w-64 `}>Course List:</h1>
                    <motion.ul
                        className='COURSELIST container  p-4  center-col gap-4 bg-black bg-opacity-50 rounded-3xl h-auto w-64' variants={container}
                        initial="hidden"
                        animate="visible">
                        {['HTML', 'CSS', 'JAVASCRIPT', 'REACT.js'].map(item => (
                            <motion.li key={item} className='item' variants={i} >
                                <h1 className={`hover:bg-black p-2 mt-2 rounded-full bg-white text-purple-600 text-3xl flex ${inter.className}`}><AiFillBook />{item}</h1>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <div className="h-10 font-bold p-2 text-2xl md:text-4xl border bg-black bg-opacity-40 center">
                        <h1 className={`${inter.className}`}>Starting Jun-22-2024</h1>
                    </div>
                </div>
                <BuyButtonComponent />

                <motion.ul className='w-96 grid grid-cols-2' variants={container}>
                    {keyTakeaways.map(item => {
                        return (
                            <motion.li className='m-2 rounded-lg p-2 bg-black' key={item} variants={i}>
                                <p className='text-sm text-white'>{item}</p>
                            </motion.li>
                        )
                    })}
                </motion.ul>
            </div>}
            {start && <div className='h-screen fadeIn w-full  overflow-hidden'>
                <Image className='object-cover rounded-none h-screen w-screen' src='https://images.unsplash.com/flagged/photo-1563536310477-c7b4e3a800c2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='woman coding' />
            </div>}

        </div>
    )
}

export default page