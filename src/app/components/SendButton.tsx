/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import axios from "axios"
import { useState } from "react"
// import { useRouter } from 'next/navigation';

interface SendButtonProps {
    defaultPriceId?: string 
}

export default function SendButton({defaultPriceId}:SendButtonProps) {

    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    async function handleBuyProduct(){
       
        try{//recomendavel para lidar com requisiçoes para apis externas e açoes do usuario
           
            setIsCreatingCheckoutSession(true)

            const response = await axios.post('/api/checkout',{
                priceId: defaultPriceId
            })

            const { checkoutUrl } = response.data;

            window.location.href = checkoutUrl;

        }catch(err){
            setIsCreatingCheckoutSession(false)
            //conectar com ferramenta de observabilidade(Datadog/sentry)
            alert('Falha ao redirecionar ao checkout')
        }
      
    }

return (    
        <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>Comprar agora</button>
    )
}