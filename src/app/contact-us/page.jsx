'use client'

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const Page = () => {


    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(form)
    }
    return (
        <div>
            <section className='bg-primary text-primary-foreground text-center h-[40vh] flex items-center justify-center'>
                <h1 className="">Contact Us</h1>
            </section>

            <div className="grid sm:grid-cols-2 gap-10 max-w-4xl w-full mx-auto py-16">
                <section className="mx-auto px-4 w-full py-16 bg-secondary rounded-lg pl-10">
                    <div className="max-w-5xl mx-auto grid gap-8 ">
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">📍 Address</h3>
                            <p className="text-muted-foreground">123 Tour Lane, Travel City Islamabad,<br />Pakistan 45678</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">📞 Phone</h3>
                            <p className="text-muted-foreground">+92 09078601</p>
                            <p className="text-muted-foreground">+92 333 7654321</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">📧 Email</h3>
                            <p className="text-muted-foreground">info@kahnnabadosh.com</p>
                            <p className="text-muted-foreground">support@kahnnabadosh.com</p>
                        </div>
                    </div>
                </section>


                <section className=" mx-auto px-4   ">
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl font-semibold">We would love to hear from you!</h2>
                        <p className="text-muted-foreground">Fill out the form below and our team will get back to you shortly.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Your Name</label>
                            <Input
                                name="name"
                                placeholder="John Doe"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Email</label>
                            <Input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Message</label>
                            <Textarea
                                name="message"
                                placeholder="Your message..."
                                rows={6}
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <Button type="submit" className="w-full">
                            Send Message
                        </Button>
                    </form>
                </section>

            </div>




        </div>
    )
}

export default Page
