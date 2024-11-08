/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { Handbag } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
// import { useRouter } from 'next/navigation';



export default function CartButton() {

return (   
    <Dialog.Trigger asChild>
        <button>
            <Handbag size={24}  color="white" />
        </button>
    </Dialog.Trigger>
    )
}