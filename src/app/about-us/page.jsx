import React from 'react'

const page = () => {
    return (
        <div>
            <section className='bg-primary text-primary-foreground text-center h-[40vh] flex items-center justify-center'>
                <h1 className="">About Us</h1>
            </section>

            <section className="max-w-5xl mx-auto px-4 py-16 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="">Who We Are</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We&lsquo;re a passionate team of explorers, storytellers, and travel experts dedicated to crafting unforgettable tour experiences around the world. Whether it&lsquo;s hidden gems in Northern Pakistan or global city escapes, we help you discover the magic of travel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://cdn.pixabay.com/photo/2019/12/15/09/46/ales-stenar-4696668_1280.jpg"
            alt="Our team"
            className="rounded-xl shadow-lg object-cover h-80 w-full"
          />
          <div>
            <h4 className=" font-medium mb-4">What Drives Us</h4>
            <p className="text-muted-foreground text-lg">
              We believe in meaningful, soulful travel. Our mission is to connect people with cultures, landscapes, and experiences that leave lasting impressions. Every package is carefully designed to offer a mix of exploration, comfort, and authenticity.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h4 className=" font-medium mb-4">Our Promise</h4>
            <p className="text-muted-foreground text-lg">
              We&lsquo;re here to make your travel dreams come true with exceptional service, expert planning, and unforgettable adventures. Whether you&lsquo;re seeking peaceful nature retreats or vibrant city escapades, we&lsquo;ve got a plan just for you.
            </p>
          </div>
          <img
            src="https://cdn.pixabay.com/photo/2016/11/22/22/21/adventure-1850912_1280.jpg"
            alt="Adventure"
            className="rounded-xl shadow-lg object-cover h-80 w-full"
          />
        </div>
      </section>

        </div>
    )
}

export default page
