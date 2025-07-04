import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'


const MessageSection = () => {
    useGSAP(()=>{
        const firstMessage = SplitText.create('.first-message',{
            type:"words"
        })
         const secondMessage = SplitText.create('.second-message',{
            type:"words"
        })
        const paragraphSpilt = SplitText.create('.message-content p',{
            type:"words , lines",
            linesClass:'paragraph-line'
        })
        gsap.to(firstMessage.words,{
            scrollTrigger:{
                trigger:'.message-content',
                start:'top center',
                scrub:true,
                end:'30% center',
                // markers:true

            },
            color:"#faeade",
            ease:"power1.in",
            stagger:1,
        })
        gsap.to(secondMessage.words,{
            scrollTrigger:{
                trigger:'.second-message',
                start:'top 70%',
                scrub:true,
                end:'bottom center',
                // markers:true

            },
            color:"#faeade",
            ease:"power1.in",
            stagger:1,
        })
        const revealTl = gsap.timeline({
            delay:1,
            scrollTrigger:{
                trigger:".msg-text-scroll",
                start:"top 60%",
                // markers:true
            }
        })
        revealTl.to('.msg-text-scroll',{
            duration:1,
            clipPath:"polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
            ease:"circ.inOut"
        })
        const paragraphTl = gsap.timeline({
            scrollTrigger:{
                trigger:".message-content p",
                // markers:true,
                start:"top center"
            }
            
        })
        paragraphTl.from(paragraphSpilt.words,{
            yPercent:300,
            rotate:3,
            ease:"power1.inOut",
            duration:1,
            stagger:0.01
        })
    })
  return (
    <section className='message-content'>
        <div className="container mx-auto flex-center py-20 relative">
            <div className="w-full h-full">
                <div className="msg-wrapper">
                    <h1 className='first-message'>Stir up your fearless past and</h1>
                    <div style={{clipPath:"polygon(0% 0%,0% 0%,0% 100%,0% 100%)"}} className="msg-text-scroll">
                        <div className='bg-light-brown md:pb-5 pb-3 px-5'>
                            <h2 className='text-red-brown'>Fuel Up</h2>

                        </div>
                    </div>
                    <h1 className='second-message'>
                        your future with every gulp of Perfect protin
                    </h1>
                </div>
                <div className="flex-center md:mt-20 mt-10">
                    <div className="max-w-md px-10 felx-center overflow-hidden">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cum itaque consequatur reiciendis corrupti quae fuga repellendus ipsum eum sunt.</p>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default MessageSection