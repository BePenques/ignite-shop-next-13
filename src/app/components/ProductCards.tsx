'use client'
import useCartStore from '../context/cart';
import { ImageContainerCart, StyledProductCard } from '@/styles/pages/sideDrawerModal';
import Image from 'next/image'

export default function ProductCards() {
  const { items } = useCartStore();

return (    
      items.map((item) => (
        <StyledProductCard key={item?.id}>
          <ImageContainerCart>
            <Image src={item?.imageUrl} width={102} height={93} alt=""/>
          </ImageContainerCart>
          <div>
            <p>{item?.name}</p>
            <strong>R$ {item?.price}</strong>
            <a>Remover</a>
          </div>
        </StyledProductCard>
      ))
    )
}