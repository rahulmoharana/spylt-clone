import React,{useState,useEffect} from "react";
import { nutrientLists } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const NutritionSection = () => {
    const isMobile =useMediaQuery({ query: "(max-width: 768px)" });
    const [list,setList]=useState(nutrientLists);
    useEffect(() => {
        if (isMobile) {
            setList(nutrientLists.slice(0, 3));
        } else {
            setList(nutrientLists);
        }
    }, [isMobile]);
    useGSAP(()=>{
        const titleSplit = SplitText.create('.nutrition-title',{
            type:"chars"
        })
        const paragraphSplit =SplitText.create(".para",{
            type:"words lines",
            linesClass:"paragraph-line"
        }) 
        const contentTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".nutrition-section",
                start: "top center",
                
                
            },
        })
        contentTl.from(titleSplit.chars,{
            yPercent:100,
            stagger:0.02,
            
            ease:"power2.out",
        }).from(paragraphSplit.words,{
            yPercent:300,
            rotate:3,
        
            ease:"power1.inOut",
            stagger:0.01,
            
        })
        const titleTl = gsap.timeline({
            scrollTrigger:{
                trigger:".nutrition-section",
                start: "top 70%",
                
            }
        })
        titleTl.to(".nutrition-text-scroll",{
            duration:1,
            opacity:1,
            clipPath:"polygon(100% 0,0 0,0 100%,100% 100%)",
            ease:"power2.out"
        })
    })
  return (
    <section className="nutrition-section">
      <img
        src="/images/slider-dip.png"
        alt=""
        className="w-full object-cover"
      />
      <img src="/images/big-img.png" className="big-img" alt="" />
      <div className="flex md:flex-row justify-between md:px-5 mt-14 md:mt-0">
        <div className="relative inline-block md:translate-y-20">
          <div className="general-title relative flex flex-col justify-center items-center gap-24">
            <div className="overflow-hidden place-self-start">
              <h1 className="nutrition-title">It still done</h1>
            </div>
            <div style={{
                clipPath:"polygon(0 0,0 0,0 100%,0% 100%"
            }} className="nutrition-text-scroll">
              <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5px-3 inline-block">
                <h2 className="text-milk-yellow ">Body good</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:justify-center items-center translate-y-5">
          <div className="md:max-w-xs max-w-md">
            <p className="para text-lg md:text-right text-balance font-paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
              facere eius quos reprehenderit voluptates in tempora fugit.
              Quisquam, nihil hic?
            </p>
          </div>
        </div>
        <div className="nutrition-box">
            <div className="list-wrapper">
                {
                    list.map((nutrient, index) => (
                        <div key={index} className="relative flex-1 col-center">
                            <div>
                                <p className="md:text-lg font-paragraph">{nutrient.label}</p>
                                <p className="font-paragraph text-sm mt-2">up to</p>
                                <p className="text-2xl md:text-4xl tracking-tighter font-bold">{nutrient.amount}</p>

                            </div>
                            {
                                index!== list.length - 1 && (
                                    <div className="spacer-border"/>
                                )
                            }
                        </div>
                    ))
                        
                }

            </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
