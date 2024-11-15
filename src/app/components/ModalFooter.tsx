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
        return acc + (price * item.quantity);
      }, 0);

      const totalFormatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(total);

      const totalQuantity = items.reduce((acc, item) => {
        return acc + item.quantity
      }, 0);
    

  return (
    <>
    <div>
        <p>Quantidade</p>
        <p>{totalQuantity} itens</p>
    </div>
    <div>
        <p>Valor total</p>
        <span>{totalFormatted}</span>
    </div>  
      <FinalizeOrderButton/>
    </>
  )
}

