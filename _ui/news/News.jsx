import Title from '@/components/Title'
import NewsCard from './utilies/NewsCard'
import Slider from './utilies/Slider'

function News() {
    return (
        <section>
            <div className='py-clamp-100 content-container mx-auto'>
                <div>
                    {/* title  */}
                    <div className='mb-clamp-40' data-aos="fade-left" data-aos-duration="1000">
                        <Title value={" اخيار شيد"} />
                    </div>

                    {/* content  */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-clamp-100'>
                        <Slider />
                        <div className='flex flex-col gap-clamp-60'>
                            {[1, 2, 3].map((item, index) => (
                                <NewsCard key={index + item} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News