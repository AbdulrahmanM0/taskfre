import Image from 'next/image'
import React from 'react'

function NewsCard({ index }) {
  return (
    <div className='grid grid-cols-2 gap-clamp-40' data-aos="fade-right" data-aos-duration={`1000`}>
      {/* col1 */}
      <div className='h-full w-full relative'>
        <Image src={"/images/news/rect1.png"} className='w-full object-cover' width={345} height={277} alt='news' />
      </div>
      {/* col2  */}
      <div className='flex flex-col justify-between'>
        {/* title  */}
        <h3 className='text-clamp-30 3xl:text-clamp-32 text-gr100 font-bold'>
          اتفاقية اعلانبية
        </h3>
        {/* body  */}
        <p className='text-clamp-12 3xl:text-clamp-14'>
          اتفاقية اعلانبية
          شيد العقارية توقع شراكة تسويقية استراتيجية مع المؤثر أحمد البارقي، بهدف تعزيز تواجدها الرقمي والترويج لمشاريعها العقارية المتميزة. ويأتي هذا التعاون ضمن استراتيجية الشركة للوصول إلى جمهور واسع عبر منصات التواصل الاجتماعي، لتسليط الضوء …
        </p>
        {/* date annd time  */}
        <div className='text-clamp-12 3xl:text-clamp-14 flex gap-clamp-20'>
          {/* date */}
          <div className='leading-[0.7]'>
            03-03-2025
          </div>
          {/* time  */}
          <div className='leading-[0.7]'>
            12:45
          </div>
        </div>

        {/* read more  */}
        <div className=" flex items-center justify-end gap-clamp-24 group cursor-pointer">
          <h4 className="text-clamp-18 3xl:text-clamp-20 text-gr100 font-bold transition-all duration-300 group-hover:text-gr200">
            اقرا المزيد
          </h4>

          <svg
            className="w-clamp-24 h-clamp-14 transition-transform duration-300 group-hover:translate-x-2"
            width="27"
            height="15"
            viewBox="0 0 27 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26 6.36401C26.5523 6.36401 27 6.81173 27 7.36401C27 7.9163 26.5523 8.36401 26 8.36401V7.36401V6.36401ZM0.292892 8.07112C-0.0976315 7.6806 -0.0976315 7.04743 0.292892 6.65691L6.65685 0.292946C7.04738 -0.0975785 7.68054 -0.0975785 8.07107 0.292946C8.46159 0.68347 8.46159 1.31664 8.07107 1.70716L2.41421 7.36401L8.07107 13.0209C8.46159 13.4114 8.46159 14.0446 8.07107 14.4351C7.68054 14.8256 7.04738 14.8256 6.65685 14.4351L0.292892 8.07112ZM26 7.36401V8.36401H1V7.36401V6.36401H26V7.36401Z"
              fill="#037A72"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default NewsCard