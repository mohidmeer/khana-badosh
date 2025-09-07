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
import { Calendar, Eye, Factory, MapPin } from "lucide-react";
import { tourPackages } from "../../data";




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



  return (
    <div className="max-w-7xl mx-auto ">
      <h2 className="text-center py-10">Discover Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto justify-center items-center p-6">
        {
          tourPackages.map((i, z) => (
            <TourCard key={z} name={i.name} price={i.price} days={i.duration.days} nights={i.duration.days} description={i.description} image={i.image} placesToVisit={i.placesToVisit}  />
          ))
        }
      </div>
    </div>
  )
}

const TourCard = ({ name = 'Delexue Suite', price = 10000, days = '',nights='', image, description = '' , placesToVisit }) => {
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
          <p className=' font-semibold'>{`PKR ${price.toLocaleString()}`}</p>
        </div>

      </DialogTrigger>
      <DialogContent className={'min-w-7xl  '}>
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription >
            <p className="mb-2">
              <Calendar size={16} className="inline mr-1" />
              Duration: {days} Days, {nights} Nights
            </p>
            <p className="mb-2">
              <MapPin size={16} className="inline mr-1" />
              Places to Visit:
            </p>
            <ul className="list-disc ml-6 mb-3">
              {placesToVisit.map((place, i) => (
                <li key={i}>{place}</li>
              ))}
            </ul>
            <p>{description}</p>

            <div className="flex gap-2 items-center mt-4">
              <a
                href={`https://wa.me/+923002597679?text=Reserve my spot for: ${name}`}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ className: "w-full" })}
              >
                Reserve Your Spot
              </a>
              <Button className={'w-1/3 flex gap-1'} variant="outline">
                <Eye />
                View More
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

