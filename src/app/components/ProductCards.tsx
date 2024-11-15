'use client'
import useCartStore from '../context/cart';
import { StyledImageContainerCart, StyledEmptyCart, StyledProductCard, StyledQuantityNumber, StyledProductCardInfos } from '@/styles/pages/sideDrawerModal';
import Image from 'next/image'
import { Minus, Plus } from 'phosphor-react';

export default function ProductCards() {
  const { items, removeItem, updateItemQuantity } = useCartStore();

return (    
      
        items.length > 0 ? (
          items.map((item) => (
            <StyledProductCard key={item?.id}>
              <StyledImageContainerCart>
                <Image src={item?.imageUrl} width={102} height={93} alt=""/>
              </StyledImageContainerCart>
              <StyledProductCardInfos>
                <section>
                  <p>{item?.name}</p>
                  <strong>{item?.price}</strong>
                  <StyledQuantityNumber>   
                    <div>    
                      <button onClick={()=> updateItemQuantity(item.id, item.quantity-1)} disabled={item.quantity == 1}><Minus/></button>
                        <span>{item.quantity}</span>
                      <button onClick={()=> updateItemQuantity(item.id, item.quantity+1)}><Plus/> </button>  
                    </div>       
                    <a onClick={() => removeItem(item.id)}>Remover</a>       
                  </StyledQuantityNumber>            
                </section>           
              </StyledProductCardInfos>
            </StyledProductCard>
          ))
        ) : (

          <StyledEmptyCart>
            <p>sua sacola esta vazia</p>
          </StyledEmptyCart>
          
        )
      
      
    )
}