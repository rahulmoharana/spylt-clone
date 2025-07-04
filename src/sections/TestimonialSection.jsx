import React, { useRef } from 'react'
import { cards } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const TestimonialSection = () => {
  const vdRef = useRef([])
  useGSAP(()=>{
    gsap.set('.testimonials-section',{
      marginTop:'-140vh',

    })
    const tl =gsap.timeline({
      scrollTrigger:{
        trigger:'.testimonials-section',
        start:'top bottom',
        end:'200% top',
        scrub:true,
        

      }
    
    })
    tl.to('.testimonials-section .first-title',{
      xPercent:70,
    },'a').to('.testimonials-section .second-title',{
      xPercent:25,
    },'a').to('.testimonials-section .third-title',{
      xPercent:-50,
    },)
    const pinTl = gsap.timeline({
      scrollTrigger:{
        trigger:'.testimonials-section',
        start:'10% top',
        end:'200% top',
        pin:true,
        scrub:1,
        
      }
    })
    pinTl.from('.vd-card',{
      yPercent:150,
      stagger:0.2,
      ease:'power2.out',
    })
  })



  const handelPlay=(index)=>{
    const video = vdRef.current[index];
    video.play()
    

  }
  const handelPause=(index)=>{
    const video = vdRef.current[index];
    video.pause()

  }
  return <section className='testimonials-section'>
    <div className='absolute size-full flex items-center flex-col'>
        <h1 className="text-black first-title">What's</h1>
        <h1 className="text-light-brown second-title">Everyone</h1>
        <h1 className="text-black third-title pb-2">Talking</h1>


    </div>
    <div className='pin-box'>
        {
            cards.map((card,index)=>(
                <div key={index} onMouseEnter={()=>handelPlay(index)} onMouseLeave={()=>handelPause(index)} className={`vd-card ${card.translation} ${card.rotation}`}>
                   <video ref={(el)=>(vdRef.current[index] = el)}  src={card.src} className='size-fit object-cover' playsInline loop autoPlay muted/>
                </div>
            ))
        }

    </div>

  </section>
}

export default TestimonialSection