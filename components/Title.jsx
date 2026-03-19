import Image from 'next/image'
import React from 'react'

function Title({ value }) {
    return (
        <div className='relative w-[clamp(200px,23.03%,351px)] h-clamp-64'>
            <Image src={"/images/backdrops/title.png"} fill alt='backdrop' />
            <div className='w-full h-full px-clamp-24 flex flex-col'>
                <h1 className='relative text-balance text-clamp-44 leading-[0.7] my-auto'>
                   {value}
                </h1>
            </div>
        </div>
    )
}

export default Title