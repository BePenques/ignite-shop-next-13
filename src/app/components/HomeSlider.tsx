'use client'
import { HomeContainer, Product } from "@/styles/pages/home";
import Image from 'next/image'

import camiseta1 from '../../assets/shirts/1.png'
import camiseta2 from '../../assets/shirts/2.png'
import camiseta3 from '../../assets/shirts/3.png'

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
        }
        </HomeContainer>
    )
}