


import ContactForm from "@/components/contactForm"


export const metadata = {
    title: 'Contact Us | Khana Badosh',
    description: 'Get in touch with Khana Badosh for tour bookings, support, and travel inquiries. We are here to help you explore the world.',
    keywords: ['Contact Khana Badosh', 'Tour support', 'Travel inquiries', 'Khana Badosh contact info'],
  };

const Page = () => {



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
                            <p className="text-muted-foreground">Office 609, Apollo Tower E11/4, Islamabad,<br />Pakistan 45678</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">📞 Phone</h3>
                            <p className="text-muted-foreground">+92 09078601</p>
                            <p className="text-muted-foreground">+92 09078601</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">📧 Email</h3>
                            <p className="text-muted-foreground">info@kahnabadosh.com</p>
                            <p className="text-muted-foreground">support@kahnabadosh.com</p>
                        </div>
                    </div>
                </section>


                <section className=" mx-auto px-4   ">
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl font-semibold">We would love to hear from you!</h2>
                        <p className="text-muted-foreground">Fill out the form below and our team will get back to you shortly.</p>
                    </div>
                    <ContactForm/>

                </section>

            </div>




        </div>
    )
}

export default Page
