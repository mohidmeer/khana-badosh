import { Button, buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'
import { tourPackages } from '../../../data';


export const metadata = {
    title: 'Our Services | Khana Badosh',
    description: 'Explore the wide range of travel services offered by Khana Badosh including guided tours, international trips, and custom packages.',
    keywords: ['Khana Badosh services', 'Travel packages', 'Guided tours', 'Custom travel solutions'],
};





const page = () => {
    return (
        <div className=''>
            <section className='bg-primary text-primary-foreground text-center h-[40vh] flex items-center justify-center'>
                <h1>Pakcages</h1>
            </section>


            <div className="max-w-7xl mx-auto px-6 py-12 space-y-20 flex flex-col gap-20">
                {tourPackages.map(({ name, price, description, image, days, nights, placesToVisit }, idx) => (
                    <div key={name} className="flex flex-col md:flex-row items-center gap-10">
                        {/* Left side details */}
                        <div className={`md:w-1/2 space-y-4 `}>
                            <h3 className="text-3xl font-bold">{name}</h3>
                            <p className="text-primary font-semibold">PKR {price.toLocaleString()}</p>
                            <p><strong>Duration:</strong> {days} Days, {nights} Nights</p>
                            <div>
                                <strong>Places to Visit:</strong>
                                <ul className="list-disc list-inside ml-4 text-muted-foreground">
                                    {placesToVisit.map(place => (
                                        <li key={place}>{place}</li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-muted-foreground">{description.longDescription}</p>
                            <div className="flex gap-2 items-center mt-4">
                                <a
                                    href={`https://wa.me/+923002597679?text=Reserve my spot for: ${name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={buttonVariants({ className: "w-full" })}
                                >
                                    Reserve Your Spot
                                </a>
                            </div>
                        </div>

                        <div className="md:w-[70%] h-[500px] ">
                            <Image
                                src={`${image}`}
                                alt={name}
                                layout='responsive'
                                width={700}
                                height={500}
                                className="rounded-lg shadow-lg object-cover w-full h-72 md:h-80"
                            />
                        </div>
                    </div>
                ))}
            </div>




        </div>
    )
}

export default page
