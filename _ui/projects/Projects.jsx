import React from 'react'
import Slider from './utilies/Slider'
import Image from 'next/image'

function Projects() {
    return (
        <section className='relative'>
            <Image data-aos="fade-left" data-aos-duration="1000"  src="/images/backdrops/rects.png" fill alt="bk" />

            <div data-aos="fade-right" data-aos-duration="1000"  className='pb-clamp-40 pt-clamp-100 content-container mx-auto'>
                <div className='relative'>
                    {/* title  */}
                    <Slider />
                </div>
            </div>
        </section>
    )
}

export default Projects