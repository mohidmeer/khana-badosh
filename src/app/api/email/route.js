import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const body = await req.json();


  const { date, roomState, number } = body;

  let transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    secure: false,
    auth: {
      user: '094f6a551e020a',
      pass: '96e33f31a471e3',
    },
  });


  try {
    await transporter.sendMail({
      from: `Karen Retreat`,
      to: 'mohidfauji@gmail.com',
      subject: 'Customer Inquiry',
      text: `Date: ${JSON.stringify(date)}\nRoom State: ${JSON.stringify(roomState)}\nNumber: ${number}`,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  }


}