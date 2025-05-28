import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// import 'swiper/css';
import { Pagination } from 'swiper/modules';

import slideImage1 from '../../public/images/slide-1.jpg'
import slideImage2 from '../../public/images/slide-2.jpg'
import slideImage3 from '../../public/images/slide-3.jpg'
import slideImage4 from '../../public/images/slide-4.jpg'


const slidesData = [
    { 
      id: 1, 
      subtitle: 'Curated Adventures', 
      title: 'EXPLORE THE UNSEEN', 
      paragraph: 'Embark on handpicked journeys to hidden gems and iconic spots. Our tailored tour packages bring you the thrill of adventure with zero hassle.', 
      img: slideImage1 
    },
    { 
      id: 2, 
      subtitle: 'Effortless Escapes', 
      title: 'TRAVEL MADE SIMPLE', 
      paragraph: 'From flights to stays, we handle it all. Just pack your bags and enjoy the ride — we’ll take care of the details so you don’t have to.', 
      img: slideImage2 
    },
    { 
      id: 3, 
      subtitle: 'Breathtaking Destinations', 
      title: 'WANDER IN WONDER', 
      paragraph: 'From lush valleys to coastal paradises, discover destinations that leave you speechless. Every location is chosen for its beauty and vibe.', 
      img: slideImage3 
    },
    { 
      id: 4, 
      subtitle: 'Local Flavors & Culture', 
      title: 'EXPERIENCE AUTHENTICITY', 
      paragraph: 'Dive deep into local cultures, cuisines, and traditions. Our tours offer more than sightseeing — they’re immersive journeys.', 
      img: slideImage4 
    },
  ];

export default function Hero({children}) {
    return (
        <div className="">
            <div className="relative myswiper">
                <Swiper
                    spaceBetween={0}
                    pagination={true}
                    slidesPerView={1}
                    
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay,Pagination]}>
                    {
                        slidesData.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <Slide slide={slide} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="w-full z-10 flex flex-col h-full  absolute inset-0">
                    {children}
                </div>
            </div>
        </div>
    )
}

function Slide({ slide }) {
    return (
        <div className='w-full relative h-[100vh] text-white'>
            <Image src={slide.img} fill alt='hero-img' className='object-cover -z-10 brightness-50' />
            <div className='w-full h-full'>
                <div className='max-w-6xl h-full mx-auto flex flex-col justify-center p-4 '>
                    <div className='flex justify-start'>
                        <div className='flex flex-col gap-4 md:max-w-3xl mb-28 sm:mb-0 '>
                                
                                <div>
                                <h3 className="text-primary font-extrabold pl-2 text-xl">{slide.subtitle}</h3>    
                                <h1 className="font-extrabold display" >{slide.title}</h1>
                                </div>
                                <p className='md:max-w-2xl  '>{slide.paragraph}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
