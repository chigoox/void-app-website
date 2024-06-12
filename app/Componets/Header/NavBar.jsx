'use client'
import React, { useState } from 'react'
import MenuButton from '@/app/Componets/MenuButton'
import { AiOutlineMenu } from 'react-icons/ai'

function NavBar() {
    const tabs = ['Coding Class', 'Bookings', 'Shop', 'Blog', 'Portfolio']
    const [onPage, setOnPage] = useState()

    return (
        < div className={`h-[860px] m-auto flex flex-col md:flex-row  w-full text-white bg-black top-12 ${onPage ? 'sticky' : 'relative gap-2'} `} >
            {tabs.map(item => {
                return (
                    <div key={item}>
                        <MenuButton
                            key={item}
                            item={item.replace(/\s/g, '')}
                            onPage={onPage}
                            setOnPage={setOnPage}
                        />
                        <div className={`fixed fadeIn  z-[99]  ${onPage == item ? ' overflow-x-scroll h-full w-screen top-10 md:top-44   scale-100 opacity-100 ' : 'h-0 w-0  scale-95 opacity-0 top-10'} hidescroll  bg-black text-white`}>
                            <button onClick={() => { setOnPage(undefined); disableScroll(false); }} className='h-12 z-0 w-full bg-black center md:scale-0  border-white'>
                                <h1 className='font-bold text-3xl'><AiOutlineMenu size={32} /></h1>
                            </button>

                        </div>

                    </div>
                )
            })
            }
        </div >
    )
}

export default NavBar