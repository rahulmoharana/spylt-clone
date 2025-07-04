import React from 'react'
import ClipPathTitle from '../components/ClipPathTitle'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import VideoPinSection from '../components/VideoPinSection'

const BenefitSection = () => {
    
    useGSAP(()=>{
        const revealTl =gsap.timeline({
            delay:1,
            scrollTrigger:{
                trigger:".benefit-section",
                start:"10% 60%",
                end:"50% 80%",
                scrub:1.5,
                
            }
        })
        revealTl.to(".benefit-section .first-title",{
            duration:1,
            opacity:1,
            clipPath:"polygon(0% 0%, 100% 0%,100% 100%,0% 100%)",
            ease:"circ.out"
        }).to(".benefit-section .second-title",{
            duration:1,
            opacity:1,
            clipPath:"polygon(0% 0%, 100% 0%,100% 100%,0% 100%)",
            ease:"circ.out"
        }).to(".benefit-section .third-title",{
            duration:1,
            opacity:1,
            clipPath:"polygon(0% 0%, 100% 0%,100% 100%,0% 100%)",
            ease:"circ.out"
        }).to(".benefit-section .fourth-title",{
            duration:1,
            opacity:1,
            clipPath:"polygon(0% 0%, 100% 0%,100% 100%,0% 100%)",
            ease:"circ.out"
        })
    })

  return <section className='benefit-section'>
    <div className="container mx-auto py-28">
        <div className="col-center">
            <p>Lorem ipsum dolor <br /> sit amet, consectetur adipisicing elit. Velit, repellendus!</p>
        </div>
        <div className='mt-20 col-center'>
            <ClipPathTitle title={"Shelf stable"} color={"#faeade"} bg={"#c88e64"} className={"first-title"} borderColor={"#222123"}/>
            <ClipPathTitle title={"Protin + caffine"} color={"#222123"} bg={"#faeade"} className={"second-title"} borderColor={"#222123"}/>
            <ClipPathTitle title={"Infinitely recyclable"} color={"#faeade"} bg={"#7f382d"} className={"third-title"} borderColor={"#222123"}/>
            <ClipPathTitle title={"lactose free"} color={"#2e2d2f"} bg={"#fed775"} className={"fourth-title"} borderColor={"#222123"}/>
            <div className="md:mt-0 mt-10">
                <p>and much more ...</p>
            </div>

        </div>

    </div>
    <div className='relative overlay-box'>
        <VideoPinSection/>

    </div>

  </section>
}

export default BenefitSection