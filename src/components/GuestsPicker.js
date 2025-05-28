import React, { useEffect, useState } from 'react'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { PersonIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button';

const GuestsPicker = () => {

    const [guests, setGuests] = useState({
        adults: 1,
        children: 0,
        infants: 0,
    });


    // const a = function AddGuests(number){
    //     if (number>5){
    //         return;
    //     }

    //     setGuests( )
    // }




    return (
        <Popover >
            <PopoverTrigger asChild>
                <Button variant="outline" className='w-full  flex gap-2 justify-start'>
                    <PersonIcon fontSize={20} />
                    <div className='flex gap-1 items-center'>
                        <span>{guests.adults + guests.children + guests.infants} Guests </span>
                    </div>
                </Button>
            </PopoverTrigger>
            <PopoverContent className='  w-[300px] flex-col flex gap-4'>
                <div className='flex items-center justify-between'>
                    <span className='font-bold text-muted-foreground '>Adults </span>
                    <div className='flex items-center gap-2 '>
                        <Button  variant='outline' className='rounded-full border-primary ' onClick={() => { setGuests(preState => ({ ...preState, adults: preState.adults + 1 })) }} size={'icon'}>+</Button>
                        <span className='w-8 h-10 flex justify-center items-center'>{guests.adults}</span>
                        <Button  variant='outline' className='rounded-full border-primary' 
                            onClick={() => setGuests(prevState => ({ ...prevState, adults: Math.max(1, prevState.adults - 1) }))} size={'icon'}>-</Button>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <span className='font-bold text-muted-foreground '>Children </span>
                    <div className='flex items-center gap-2 '>
                        <Button  variant='outline' className='rounded-full border-primary' onClick={() => { setGuests(preState => ({ ...preState, children: preState.children + 1 })) }} size={'icon'}>+</Button>
                        <span className='w-8 h-10 flex justify-center items-center'>{guests.children}</span>
                        <Button  variant='outline' className='rounded-full border-primary' onClick={() => setGuests(prevState => ({ ...prevState, children: Math.max(0, prevState.children - 1) }))} size={'icon'}>-</Button>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <span className='font-bold text-muted-foreground '>Infants</span>
                    <div className='flex items-center gap-2 '>
                        <Button variant='outline' className='rounded-full border-primary' onClick={() => { setGuests(preState => ({ ...preState, infants: preState.infants + 1 })) }} size={'icon'}>+</Button>
                        <span className='w-8 h-10 flex justify-center items-center'>{guests.infants}</span>
                        <Button  variant='outline' className='rounded-full border-primary' onClick={() => setGuests(prevState => ({ ...prevState, infants: Math.max(0, prevState.infants - 1) }))} size={'icon'}>-</Button>
                    </div>
                </div>
                


            </PopoverContent>
        </Popover>
    )
}

export default GuestsPicker