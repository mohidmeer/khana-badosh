'use client';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"


const ContactForm = () => {
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
  )
}

export default ContactForm
