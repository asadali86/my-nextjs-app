import React from 'react'
import Image from 'next/image'

export const GrowFasterBetterSmarter = () => {
  return (
    <section className='growFastBetterSmarter pt-25 pl-25 pr-25 pb-25'>
        <div className="flex items-center">
            <div className="leftCol">
              
                <Image src="/images/grow-faster-better-smarter.svg" alt="Digi Reps" width={668} height={507} />
              
            </div>
            <div className="rightCol">
                
                  <h3 className='text-center rounded-full dot-heading font-medium mb-5 px-10 py-4'><span className='pl-2'>Faster Approach</span></h3>
                
                
                  <h2 className='font-medium mb-5 heading-bottom-line-black-orange'>Grow 10x Faster, Better, <br /> Smarter.</h2>
                
                
                  <p className='mb-5'>Say goodbye to endless job postings, endless resumes, and endless frustration. With our proven solutions, you can finally focus on what you do best – growing your business.</p>
                
                 
                  <p>Get the right people, at the right time, every time, and hello to success.</p>
                
            </div>
        </div>
    </section>
  )
}

export default GrowFasterBetterSmarter;