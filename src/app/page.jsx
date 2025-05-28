"use client"
import { DatePickerWithRange } from "@/components/DateRangePicker";
import GuestsPicker from "@/components/GuestsPicker";
import NavBar from "@/components/shared/NavBar";
import { Button, buttonVariants } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import Hero from "@/components/Hero";
import { Input } from "@/components/ui/input";
import Link from 'next/link';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import Image from 'next/image';


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { addDays } from "date-fns"
import { toast } from "react-toastify";
import { Calendar, MapPin } from "lucide-react";




export default function Home() {

  return (
    <main className="">
      <Hero>
        <SearchMenu />
      </Hero>
      <HotelRooms />
      <section className="  text-center  max-w-4xl mx-auto my-16">
        <div className="bg-gradient-to-br from-primary to-primary/10 text-primary-foreground py-16 px-6 rounded-lg">
          <h2 className="text-4xl font-bold mb-4">Ready for Your Next Adventure?</h2>
          <p className="mb-8 text-lg max-w-xl mx-auto">
            Discover unforgettable experiences with Khana Badoosh. Book your dream trip or reach out for personalized packages today!
          </p>
          <div className="flex justify-center gap-4 mt-10">
            <Button >
              Book Now
            </Button>
            <Button >
              Inquire
            </Button>
          </div>
        </div>


      </section>

    </main>
  );
}

function HotelRooms() {

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
  // const [price, setPrice] = useState([10000]);

  return (
    <div className="max-w-7xl mx-auto ">
      <h2 className="text-center py-10">Discover Packages</h2>
      <div className="flex flex-wrap gap-4 py-6">



      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto justify-center items-center p-6">
        {
          tourPackages.map((i, z) => (
            <HotelCard key={z} name={i.name} price={i.price} beds={i.beds} duration={i.duration} description={i.description} image={i.image} />
          ))
        }
      </div>
    </div>
  )
}

const HotelCard = ({ name = 'Delexue Suite', beds = '3 beds', price = 10000, duration = '', image , description = '' }) => {
  return (
    <Dialog className='!outline-none'>
      <DialogTrigger className=' text-left !outline-none'>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper shadow-xl shadow-primary/10">
          <SwiperSlide>
            <Image layout='responsive' width={400} height={1} alt='d' src={image} className='rounded-md' />
          </SwiperSlide>
        </Swiper>
        <div className='flex flex-col gap-1 mt-4'>

          <h6 className="text-xl">{name}</h6>
          <p className=' font-semibold'>{`PKR ${price.toLocaleString()}`}<span className='font-light text-muted-foreground'>/ {duration} </span></p>
        </div>

      </DialogTrigger>
      <DialogContent className={'min-w-7xl  '}>
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription >
            <p className="mb-2">
              <Calendar size={16} className="inline mr-1" />
              Duration: {description.days} Days, {description.nights} Nights
            </p>
            <p className="mb-2">
              <MapPin size={16} className="inline mr-1" />
              Places to Visit:
            </p>
            <ul className="list-disc ml-6 mb-3">
              {description.placesToVisit.map((place, i) => (
                <li key={i}>{place}</li>
              ))}
            </ul>
            <p>{description.longDescription}</p>

            <div className="flex gap-2 items-center mt-4">
              <Button className={'w-full'}>
                Reserve Your Spot
              </Button>
            </div>
          </DialogDescription>

        </DialogHeader>
      </DialogContent>
    </Dialog>

  )
}








function SearchMenu() {

  const tourPackages = [
    { name: "Neelum Valley Escape", price: 25000 },
    { name: "Hunza Adventure", price: 40000 },
    { name: "Dubai City Vibes", price: 120000 },
    { name: "Istanbul Heritage Tour", price: 160000 },
    { name: "Fairy Meadows Trek", price: 35000 },
    { name: "Thailand Beach Break", price: 140000 },
  ];

  const [date, setDate] = useState(new Date())

  const [selectedTour, setSelectedTour] = useState(tourPackages[0]);
  const numberRef = useRef()


  async function handleSubmit() {


    const id = toast.loading("Please wait...")



    if (numberRef.current.value == '') {

      toast.update(id, { render: "Phone number Or email required", type: "error", isLoading: false, autoClose: 5000 });
      return;
    }




    const res = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ date, roomState, number: numberRef.current.value }),
    });

    if (res.ok) {

      toast.update(id, { render: "We will contact you soon", type: "success", isLoading: false, autoClose: 5000 });


    } else {

      toast.update(id, { render: "We will contact you soon", type: "error", isLoading: false, autoClose: 5000 });

    }

  }

  return (
    <div className="absolute bottom-3 w-full p-2">
      <div className="max-w-6xl mx-auto p-4 backdrop-blur-2xl bg-background text-foreground sm:border rounded-lg shadow-2xl shadow-primary/10">
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 items-center px-8">
          <div className="flex flex-col gap-2 w-full">
            <label>Tour Package</label>
            <Select onValueChange={(index) => setSelectedTour(tourPackages[index])}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Tour" />
              </SelectTrigger>
              <SelectContent>
                {tourPackages.map((tour, index) => (
                  <SelectItem key={tour.name} value={String(index)}>
                    {tour.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label>Price</label>
            <Input value={`PKR ${selectedTour.price}`} disabled />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label>Travel Dates</label>
            <DatePickerWithRange date={date} setDate={setDate} />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label>Phone or Email</label>
            <Input ref={numberRef} placeholder="Enter phone or email" type="text" required />
          </div>
          <Button className="mt-auto w-full" onClick={handleSubmit}>
            Book Tour
          </Button>
        </div>
      </div>
    </div>


  )
}

