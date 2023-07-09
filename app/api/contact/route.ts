const nodemailer = require('nodemailer');
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest, { params }) {
  const { email, subject, text } = await request.json();

  const message = {
    from: email,
    to: process.env.GMAIL_EMAIL_ADDRESS,
    subject: subject,
    text: text,
    html: `<p>${text}</p>`,
  };

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
      return new NextResponse(`Connection refused ${err}`, { status: 404 });
    } else {
      console.log(info);
      return new NextResponse(`Message delivered ${info}`, { status: 250 });
    }
  });

  return new NextResponse(null, { status: 200 });
}
