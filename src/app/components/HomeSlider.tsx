'use client'
import { HomeContainer, Product } from "@/styles/pages/home";
import Image from 'next/image'
import { useKeenSlider } from "keen-slider/react";

interface HomeSliderProps {
  products:{
    id: string;
    name: string;
    imageUrl: string;
    price: number | null
  }[]
}

export default function HomeSlider({products}:HomeSliderProps) {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48
    }
  })

return (    
      <HomeContainer ref={sliderRef} className="keen-slider">
      {
        products && 
        (
          products.map(product=>{
            return (
                  <Product key={product.id} className="keen-slider__slide">
                      <Image src={product.imageUrl} width={520} height={480} alt=""/>
                      <footer>
                      <strong>{product.name}</strong>
                      <span>{product.price}</span>
                      </footer>
                  </Product>
            )
          })
        )
      }
      </HomeContainer>   
    )
}