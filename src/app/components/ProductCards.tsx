'use client'
import useCartStore from '../context/cart';
import { StyledImageContainerCart, StyledEmptyCart, StyledProductCard } from '@/styles/pages/sideDrawerModal';
import Image from 'next/image'

export default function ProductCards() {
  const { items, removeItem } = useCartStore();

return (    
      
        items.length > 0 ? (
          items.map((item) => (
            <StyledProductCard key={item?.id}>
              <StyledImageContainerCart>
                <Image src={item?.imageUrl} width={102} height={93} alt=""/>
              </StyledImageContainerCart>
              <div>
                <p>{item?.name}</p>
                <strong>{item?.price}</strong>
                <a onClick={() => removeItem(item.id)}>Remover</a>
              </div>
            </StyledProductCard>
          ))
        ) : (

          <StyledEmptyCart>
            <p>sua sacola esta vazia</p>
          </StyledEmptyCart>
          
        )
      
      
    )
}