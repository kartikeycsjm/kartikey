import { NextResponse } from "next/server";
import transporter from "@/emailConfig";

const POST=async(req,res)=>{
    const {name,phone,email,message}=await req.json();
    console.log(name,phone,email,message);
    try {
        await transporter.sendMail({
          from: 'kartikeymgkp@gmail.com',
          to: 'kartikeymishracsjm@gmail.com',
          subject: 'New Contact Form Submission',
          text: `Name: ${name}\nPhone:${phone} \nEmail: ${email}\nMessage: ${message}`,
        });
        return NextResponse.json('message recieved')
    }
    catch(error){
        console.log(error);
        return NextResponse.json('error in sending message')
    }
    
}
export {POST};