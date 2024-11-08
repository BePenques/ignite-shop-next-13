/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import useCartStore from "../context/cart";
import {CartItem} from '../context/cart'

interface SendButtonProps {
    product: CartItem; 
  }

export default function AddProductButton({product}: SendButtonProps) {

    const { addItem  } = useCartStore();


    // const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    async function handleBuyProduct(){
       
        // try{//recomendavel para lidar com requisiçoes para apis externas e açoes do usuario
           
        //     setIsCreatingCheckoutSession(true)

        //     const response = await axios.post('/api/checkout',{
        //         priceId: defaultPriceId
        //     })

        //     const { checkoutUrl } = response.data;

        //     window.location.href = checkoutUrl;

        // }catch(err){
        //     setIsCreatingCheckoutSession(false)
        //     //conectar com ferramenta de observabilidade(Datadog/sentry)
        //     alert('Falha ao redirecionar ao checkout')
        // }
      
    }

return (    
        // <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct} >Colocar na sacola</button>
        <button onClick={() => addItem(product)}>Colocar na sacola</button>
    )
}