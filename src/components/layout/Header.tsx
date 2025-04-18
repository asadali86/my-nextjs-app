import React from 'react'
import Image from 'next/image'
import styles from './Header.module.css';
import Hero from "../../app/sections/Hero";

const Header = () => {
  return (
    <header className={`${styles.header} pt-5`}>

        {/* Navigation  */}
        <div className="container mx-auto mb-8">
            <nav className='flex justify-between items-center h-20 rounded-full pl-12 pr-3'>
                <div className="logo">
                    <Image src="/images/digireps-logo-new.png" alt="Digi Reps" width={148} height={40} />
                </div>
                <ul className='flex items-center font-medium'>
                    <li><a href="#" className={styles.active}>Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Solution</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <div className='flex items-center'>
                    <button className={`${styles.loginBtn} text-white p-4 rounded-full px-6 mr-3`}>Login / Sign Up</button>
                    <button className={`${styles.bookConsultationBtn} text-white p-4 rounded-full px-6`}><Image src="/images/phone-icon.svg" alt=" " width={27.37} height={26.01} /> Book Consultation</button>
                </div>
            </nav>
        </div>

        {/* Hero */}
        <div className={`${styles.heroContainer} mx-auto`}>
            <Hero />
        </div>

    </header>
  )
}

export default Header;