import Image from 'next/image'
import React from 'react'

function SubTitle({ value }) {
    return (
        <div className='relative w-[clamp(120px,20.03%,320px)] 3xl:w-[clamp(160px,20.03%,320px)] h-clamp-40 ms-auto'>
            <Image src={"/images/backdrops/subtitle.png"} fill alt='backdrop' />
            <div className='w-full h-full px-clamp-20 flex flex-col'>
                <h1 className='relative text-clamp-20 leading-[0.7] my-auto text-[#037A72]'>
                   {value}
                </h1>
            </div>
        </div>
    )
}

export default SubTitle