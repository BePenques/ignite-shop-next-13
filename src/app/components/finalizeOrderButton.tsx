/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import axios from "axios";
import useCartStore from "../context/cart";
import {CartItem} from '../context/cart'
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from "react";



export default function FinalizeOrderButton() {

    const { items, clearCart  } = useCartStore();

    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

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
   

return (    
        <button onClick={handleBuyProduct}>Finalizar compra</button>
    )
}