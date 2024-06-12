'use client'
import { useEffect, useState } from 'react';
import Footer from './Componets/Footers/Footer';
import UserManager from './Componets/Header/UserManager';
import Home from './Pages/Home';
import Terms from './Pages/SubPages/Terms';
import LOGO from './assets/httpLOGO.png';



function Page
  () {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [showTerms, setShowTerms] = useState(false)
  const toggleTerms = () => {
    setShowTerms(!showTerms)
  }
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    /*    const query = new URLSearchParams(window?.location.search);
   
       if (query.get("successBook")) notify("Appointment Booked");
       if (query.get("success")) notify("Order placed");
       if (query.get("canceledBook")) notify("Booking Canceled");
       if (query.get("canceled")) notify("Order Canceled"); */

  }, []);

  return (
    <div className="App w-full bg-red-500 h-96 scroll-able ">
      <div className='h-12 top-0 bg-black center gap-2 w-full z-[999] fixed'>
        <a className='center gap-1 relative right-28 md:right-0' href="./">
          <h1 className='font-bold text-lg text-white flex items-center h-full'>Void</h1>
          <img className='h-10 rounded-full  border-red-500' src={LOGO} alt="" />
          <h1 className='font-bold text-lg text-white flex items-center h-full'>Apps</h1>
        </a>

        <UserManager loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} toggleTerms={toggleTerms} />
      </div>
      {/* PAGES */}
      {showTerms && <Terms toggleTerms={toggleTerms} />}
      <Home />
      {/* Footer */}
      <div className='bg-black bottom-0 w-full '>
        <Footer />
      </div>


    </div >
  )
}

export default Page
