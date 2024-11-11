/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { Handbag } from 'phosphor-react';
import useCartStore from '../context/cart'
import * as Dialog from '@radix-ui/react-dialog';
import { StyledCartButton } from '@/styles/pages/sideDrawerModal';

export default function OpenCartButton() {

    const { items  } = useCartStore();
    
return (   
    <Dialog.Trigger asChild>
        <StyledCartButton>
            <button>
                <Handbag size={24}  color={items.length == 0 ? '#8D8D99': '#fff'} />
            </button>
            <span>{items.length}</span>
        </StyledCartButton>
    </Dialog.Trigger>
    )
}