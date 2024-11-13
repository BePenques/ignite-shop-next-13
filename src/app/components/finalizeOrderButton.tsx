/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import axios from "axios";
import useCartStore from "../context/cart";
import { useState } from "react";
import { useRouter } from 'next/navigation';




export default function FinalizeOrderButton() {

    const { items, clearCart  } = useCartStore();

    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    const router = useRouter();



    async function handleBuyProduct(){

        const formattedProducts = items.map((product) => {
            return  {
                price: product.defaultPriceId,
                quantity: 1
            }
        });

         try{//recomendavel para lidar com requisiçoes para apis externas e açoes do usuario
           
            setIsCreatingCheckoutSession(true)

            const response = await axios.post('/api/checkout',{
                items: formattedProducts
            })

            const { checkoutUrl } = response.data;

            window.location.href = checkoutUrl;

        }catch(err){
            setIsCreatingCheckoutSession(false)
            //conectar com ferramenta de observabilidade(Datadog/sentry)
            alert('Falha ao redirecionar ao checkout')
        }
       
        clearCart();
    }

    const redirectHome = () => {
        router.push('/');
      };
   
return (  
        <>  
            <a onClick={redirectHome}>Continuar comprando</a>
            <button onClick={handleBuyProduct} disabled={isCreatingCheckoutSession}>Finalizar compra</button>
        </>
    )
}