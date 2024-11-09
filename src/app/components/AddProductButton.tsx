/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import useCartStore from "../context/cart";
import {CartItem} from '../context/cart'
import * as Dialog from '@radix-ui/react-dialog';

interface SendButtonProps {
    product: CartItem; 
  }

export default function AddProductButton({product}: SendButtonProps) {

    const { addItem  } = useCartStore();

return (    
        <Dialog.Trigger asChild>
            <button onClick={() => addItem(product)}>Colocar na sacola</button>
        </Dialog.Trigger>
   
    )
}