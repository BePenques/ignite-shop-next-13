'use client'
import useCartStore from "../context/cart";
import FinalizeOrderButton from "./finalizeOrderButton";

export function  ModalFooter() {

    const { items } = useCartStore();

    if(items.length == 0 ){
        return
    }
  
    const total = items.reduce((acc, item) => {
        const price = item.price ? parseFloat(item.price.replace("R$", "").trim().replace(",", ".")) : 0;
        return acc + price;
      }, 0);

      const totalFormatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(total);
    

  return (
    <>
    <div>
        <p>Quantidade</p>
        <p>{items.length} itens</p>
    </div>
    <div>
        <p>Valor total</p>
        <span>{totalFormatted}</span>
    </div>  
      <FinalizeOrderButton/>
    </>
  )
}

