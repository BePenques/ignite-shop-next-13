'use client'

interface SendButtonProps {
    defaultPriceId: string
}

export default function SendButton({defaultPriceId}:SendButtonProps) {

    function handleBuyProduct(){
        console.log('vamo veeeee')
        console.log(defaultPriceId)
    }

return (    
        <button onClick={handleBuyProduct}>Comprar agora</button>
    )
}