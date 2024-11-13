'use client'
import { StyledHomeContainer, StyledProduct } from "@/styles/pages/home";
import Image from 'next/image'
import { useKeenSlider } from "keen-slider/react";
import Link from 'next/link'
import { Handbag } from "phosphor-react";

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
    },
    breakpoints: {
      "(max-width: 1200px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(max-width: 800px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(max-width: 600px)": {
        slides: { perView: 1, spacing: 5 },
      },
    },
  })

return (    
      <StyledHomeContainer ref={sliderRef} className="keen-slider">
      {
        products && 
        (
          products.map(product=>{
            return (
              <Link   href={`/product/${product.id}`} key={product.id} prefetch={false}>
                  <StyledProduct        
                    className="keen-slider__slide"
                  >
                      <Image src={product.imageUrl} width={520} height={480} alt=""/>
                      <footer>
                        <div>
                          <strong>{product.name}</strong>
                          <span>{product.price}</span>
                        </div>
                        {/* <CartButton product={product}/> */}
                        <button>
                            <Handbag size={24}  color="white" />
                        </button>
                      </footer>
                  </StyledProduct>
              </Link>
            )
          })
        )
      }
      </StyledHomeContainer>   
    )
}