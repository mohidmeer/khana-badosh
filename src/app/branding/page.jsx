import Logo from '@/components/Logo'


export const metadata = {
    title: 'Branding | Khana Badosh',
    description: 'Access official Khana Badosh brand assets including logos, color palettes, and usage guidelines for media and partners.',
    keywords: ['Khana Badosh branding', 'Download logo', 'Brand guidelines', 'Media assets'],
  };

const page = () => {
    return (
        <div>
            <div className="p-6 space-y-4 text-base  max-w-6xl mx-auto mt-32 flex flex-col gap-10">
                <div className='flex flex-col gap-2'>
                    <h1 className="text-7xl">Branding Overview</h1>
                    <p className='text-lg'>
                        At Khanna Badoosh, our brand identity is deeply rooted in nature, exploration, and serenity. To reflect this, we ve chosen a green monochromatic color scheme along with few complementory that aligns with the core values of our travel agency  freshness and harmony with the natural world.
                    </p>

                </div>

                <div className='flex flex-col gap-2'>
                    <h2 className="">Why Green?</h2>
                    <p className='text-lg'>
                        Green is universally associated with nature, tranquility, and renewal — making it an ideal color for a travel brand focused on scenic adventures and peaceful getaways. It evokes trust, calmness, and balance, which are feelings we want every traveler to experience with us. Beside this mumbo jumbo it was vibing at the time fr fr
                    </p>
                </div>

                <div className='flex flex-col gap-2'>
                    <h2>Brand Colors</h2>
                    <div className='grid grid-cols-4 mt-6'>
                        <div className='flex items-center justify-center flex-col'>
                            <div className='bg-primary size-60 rounded-md flex items-center justify-center  text-primary-foreground' />
                            <p className='font-bold text-2xl'>Primary </p>
                        </div>
                        <div className='flex items-center justify-center flex-col'>
                            <div className='bg-primary/50 size-60 rounded-md flex items-center justify-center  text-primary-foreground' />
                            <p className='font-bold text-2xl'>Primary 50 </p>
                        </div>
                        <div className='flex items-center justify-center flex-col'>
                            <div className='bg-secondary size-60 rounded-md flex items-center justify-center  text-primary-foreground' />
                            <p className='font-bold text-2xl'>Secondary</p>
                        </div>
                        <div className='flex items-center justify-center flex-col'>
                            <div className='bg-destructive 0 size-60 rounded-md flex items-center justify-center  text-primary-foreground' />
                            <p className='font-bold text-2xl'>Destructive</p>
                        </div>



                    </div>
                </div>
                <div className='flex flex-col gap-10'>
                    <h2>Logo</h2>
                    <p className='text-lg'>Like a wind-up toy car, sometimes all we need is a little key to get rolling — Khanna Badoosh is that vibe-check-approved spark to launch your next unforgettable adventure.</p>
                    <div className='flex items-center justify-center'>
                        <Logo width={200} height={200} />
                    </div>
                </div>

                <div className='flex flex-col gap-10'>
                    <h2 className="">Headings</h2>
                    <h1 className='display'>Display 1 </h1>
                    <h1 className=''>heading 1 </h1>
                    <h2 className=''>heading 2 </h2>
                    <h3 className=''>heading 3 </h3>
                    <h4 className=''>heading 4 </h4>
                    <h5 className=''>heading 5 </h5>
                    <h6 className=''>heading 6 </h6>
                </div>

            </div>
        </div>
    )
}

export default page
