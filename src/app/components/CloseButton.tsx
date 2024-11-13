'use client'

import { StyledCloseButton} from '@/styles/pages/sideDrawerModal';
import { X } from 'phosphor-react';


export default function CloseButton() {

return (   
    <StyledCloseButton>
        <X size={24} color="gray" weight="bold" />
    </StyledCloseButton>
    )
}