import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'


export const metadata = {
    title: 'Our Services | Khana Badosh',
    description: 'Explore the wide range of travel services offered by Khana Badosh including guided tours, international trips, and custom packages.',
    keywords: ['Khana Badosh services', 'Travel packages', 'Guided tours', 'Custom travel solutions'],
  };



const tourPackages = [
    {
        name: "Neelum Valley Escape",
        price: 25000,
        image: "https://cdn.pixabay.com/photo/2019/07/17/09/49/mountains-4343542_1280.jpg",
        description: {
            days: 3,
            nights: 2,
            placesToVisit: ["Kel Village", "Sharda", "Arang Kel", "Keran"],
            longDescription:
                "Experience the breathtaking beauty of Neelum Valley, known for its lush green forests, crystal-clear rivers, and peaceful mountain villages. This tour offers a perfect blend of adventure and relaxation, with visits to Kel Village’s serene landscapes, the historical ruins at Sharda, and the mesmerizing views from Arang Kel. Ideal for travelers who want to connect deeply with nature and local culture.",
        },
    },
    {
        name: "Hunza Adventure",
        price: 40000,
        image: "https://cdn.pixabay.com/photo/2022/04/11/09/32/glacier-7125359_1280.jpg",
        description: {
            days: 5,
            nights: 4,
            placesToVisit: ["Baltit Fort", "Rakaposhi Viewpoint", "Attabad Lake", "Passu Cones"],
            longDescription:
                "Embark on a thrilling journey through the stunning Hunza Valley. Explore ancient forts like Baltit Fort, enjoy panoramic views of the majestic Rakaposhi mountain, and experience the surreal turquoise waters of Attabad Lake. This tour offers ample opportunities for photography, cultural immersion, and outdoor adventure, making it perfect for nature enthusiasts and culture lovers alike.",
        },
    },
    {
        name: "Dubai City Vibes",
        price: 620000,
        image: "https://cdn.pixabay.com/photo/2016/10/24/22/43/dubai-1767540_1280.jpg",
        description: {
            days: 7,
            nights: 6,
            placesToVisit: ["Burj Khalifa", "Dubai Mall", "Desert Safari", "Palm Jumeirah"],
            longDescription:
                "Discover the vibrant and futuristic city of Dubai, a place where innovation meets luxury. Visit iconic landmarks such as the towering Burj Khalifa and the world-famous Dubai Mall. Experience an exhilarating desert safari, stroll along the man-made island Palm Jumeirah, and enjoy the city’s dazzling nightlife. This tour offers a perfect mix of modern attractions and cultural experiences.",
        },
    },
    {
        name: "Istanbul Heritage Tour",
        price: 460000,
        image: "https://cdn.pixabay.com/photo/2015/08/15/15/21/istanbul-889640_1280.jpg",
        description: {
            days: 8,
            nights: 7,
            placesToVisit: ["Hagia Sophia", "Blue Mosque", "Grand Bazaar", "Bosphorus Cruise"],
            longDescription:
                "Dive into the rich history and culture of Istanbul, a city that bridges two continents. Explore stunning landmarks like the Hagia Sophia and Blue Mosque, wander through the bustling Grand Bazaar, and enjoy a relaxing cruise on the Bosphorus Strait. This tour provides an immersive cultural experience blending history, architecture, and vibrant city life.",
        },
    },
    {
        name: "Fairy Meadows Trek",
        price: 35000,
        image: "https://cdn.pixabay.com/photo/2022/08/07/16/42/freedom-7370957_1280.jpg",
        description: {
            days: 4,
            nights: 3,
            placesToVisit: ["Nanga Parbat Base Camp", "Fairy Meadows", "Trekking Trails"],
            longDescription:
                "Set off on an unforgettable trekking adventure to Fairy Meadows, known as one of the most beautiful alpine meadows in the world. Enjoy stunning views of Nanga Parbat, the ninth highest mountain globally. This tour is perfect for adventure seekers looking for an immersive nature experience, with peaceful campsites and breathtaking trails.",
        },
    },
    {
        name: "Thailand Beach Break",
        price: 340000,
        image: "https://cdn.pixabay.com/photo/2017/08/17/11/24/phi-phi-island-2650939_1280.jpg",
        description: {
            days: 7,
            nights: 6,
            placesToVisit: ["Phuket Beaches", "Phi Phi Islands", "Bangkok City Tour", "Local Markets"],
            longDescription:
                "Relax on the white sandy beaches of Phuket and explore the vibrant Phi Phi Islands with crystal-clear waters. Experience the bustling city life of Bangkok with visits to temples and lively markets. This package offers a perfect balance of beach relaxation, cultural exploration, and exciting city experiences.",
        },
    },
    {
        name: "Malaysia Family Getaway",
        price: 250000,
        image: "https://cdn.pixabay.com/photo/2017/11/10/21/35/kong-kuala-2937763_1280.jpg",
        description: {
            days: 8,
            nights: 7,
            placesToVisit: ["Kuala Lumpur City", "Langkawi Beaches", "Penang Heritage Site", "Rainforest Exploration"],
            longDescription:
                "Enjoy a diverse family vacation in Malaysia, combining city sightseeing, pristine beaches, and rich cultural heritage. Visit the iconic Petronas Towers in Kuala Lumpur, relax on Langkawi’s beautiful beaches, explore the historic streets of Penang, and experience nature in the lush rainforests. This tour is designed for family fun and adventure.",
        },
    },
    {
        name: "Swat Serenity Tour",
        price: 28000,
        image: "https://cdn.pixabay.com/photo/2016/04/15/13/30/fassa-valley-1331004_1280.jpg",
        description: {
            days: 3,
            nights: 2,
            placesToVisit: ["Malam Jabba", "Mingora", "Kalam Valley"],
            longDescription:
                "Discover the serene beauty of Swat Valley, famous for its lush green landscapes and crystal-clear rivers. Visit the popular ski resort Malam Jabba, explore the bustling town of Mingora, and take in the pristine nature of Kalam Valley. This short getaway is perfect for those seeking peace and natural beauty.",
        },
    },
    {
        name: "Baku Cultural Trip",
        price: 330000,
        image: "https://cdn.pixabay.com/photo/2021/08/09/07/01/boulevard-6532652_1280.jpg",
        description: {
            days: 6,
            nights: 5,
            placesToVisit: ["Old City (Icherisheher)", "Flame Towers", "Baku Boulevard", "Azerbaijan Carpet Museum"],
            longDescription:
                "Experience the unique blend of ancient and modern culture in Baku, Azerbaijan’s capital. Wander through the historic Old City with its narrow streets and ancient walls, admire the futuristic Flame Towers, relax along Baku Boulevard, and explore the rich textile heritage at the Azerbaijan Carpet Museum. A perfect trip for cultural explorers.",
        },
    },
];

const page = () => {
    return (
        <div className=''>
            <section className='bg-primary text-primary-foreground text-center h-[40vh] flex items-center justify-center'>
                <h1>Pakcages</h1>
            </section>


            <div className="max-w-7xl mx-auto px-6 py-12 space-y-20 flex flex-col gap-20">
                {tourPackages.map(({ name, price, description, image }, idx) => (
                    <div key={name} className="flex flex-col md:flex-row items-center gap-10">
                        {/* Left side details */}
                        <div className={`md:w-1/2 space-y-4 `}>
                            <h3 className="text-3xl font-bold">{name}</h3>
                            <p className="text-primary font-semibold">PKR {price.toLocaleString()}</p>
                            <p><strong>Duration:</strong> {description.days} Days, {description.nights} Nights</p>
                            <div>
                                <strong>Places to Visit:</strong>
                                <ul className="list-disc list-inside ml-4 text-muted-foreground">
                                    {description.placesToVisit.map(place => (
                                        <li key={place}>{place}</li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-muted-foreground">{description.longDescription}</p>
                            <div className="flex gap-2 items-center mt-4">
                                <Button className={'w-full'}>
                                    Reserve Your Spot
                                </Button>
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
