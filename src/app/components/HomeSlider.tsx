'use client'
import { HomeContainer, Product } from "@/styles/pages/home";
import Image from 'next/image'
import { useKeenSlider } from "keen-slider/react";
import Link from 'next/link'

interface HomeSliderProps {
  products:{
    id: string;
    name: string;
    imageUrl: string;
    price: string | null
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
              <Link   href={`/product/${product.id}`} key={product.id} prefetch={false}>
                  <Product        
                    className="keen-slider__slide"
                  >
                      <Image src={product.imageUrl} width={520} height={480} alt=""/>
                      <footer>
                      <strong>{product.name}</strong>
                      <span>{product.price}</span>
                      </footer>
                  </Product>
              </Link>
            )
          })
        )
      }
      </HomeContainer>   
    )
}