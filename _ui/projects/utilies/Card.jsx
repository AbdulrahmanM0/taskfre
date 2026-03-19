import Image from 'next/image'
import React from 'react'

function Card() {
    return (
        <div className='relative md:min-h-[110px] min-h-auto rounded-[12px] overflow-hidden p-clamp-10 flex flex-col'>
            <Image src="/images/backdrops/bck1.png" className='md:min-h-[110px] min-h-auto' fill alt="card" />
            <div dir='ltr' className='bg-balance p-clamp-18 relative z-10 mt-auto rounded-[12px] flex flex-col gap-clamp-14'>
                <h6 className='text-clamp-14 text-[#181A20] leading-[0.7] font-semibold'>
                    Gorgeous Villa Bay
                </h6>
                <p className='text-[#717171] text-clamp-14 leading-[0.7]'>
                    18 Grattan St, Brooklyn
                </p>
            </div>
        </div>
    )
}

export default Card