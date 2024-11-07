'use client'
import { styled, keyframes} from "..";
import * as Dialog from '@radix-ui/react-dialog';
// import { keyframes } from '@stitches/react';

export const ProductContainer = styled('main',{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4rem',
    maxWidth: 1180,
    margin: '0 auto'

})
export const ImageContainer = styled('div',{
    width: '100%',
    maxWidth: 576,
    height: 656,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img:{
        objectFit: 'cover'
    }
})
export const ProductDetails = styled('div',{
    display: 'flex',
    flexDirection: 'column',

    h1:{
        fontSize: '$2xl',
        color: '$gray300',
    },
    span:{
        marginTop: '1rem',
        display: 'block',
        fontSize: '$2xl',
        color: '$green300'
    },
    p:{
        marginTop: '2.5rem',
        fontSize: '$md',
        lineHeight: 1.6,
        color: '$gray300', 
    },
    button:{
        marginTop: 'auto',
        backgroundColor: '$green500',
        border: 0,
        color: '$white',
        borderRadius: 8,
        padding: '1.25rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$md',

        '&:disabled':{
            opacity: 0.6,
            cursor: 'not-allowed'
        },

        '&:hover(:disabled):hover':{
            backgroundColor: '$green300',
        }
    }
})

// Definindo animações para o modal deslizante
export const slideIn = keyframes({
'0%': { transform: 'translateX(100%)' },
'100%': { transform: 'translateX(0)' },
});

export const slideOut = keyframes({
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(100%)' },
});
  
  // Overlay (fundo escurecido do modal)
export const StyledOverlay = styled(Dialog.Overlay, {
    position: 'fixed',
    inset: 0,
    backgroundColor: '$overlay',
});

// Conteúdo do modal lateral
export const StyledContent = styled(Dialog.Content, {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    width: '$modalWidth',
    backgroundColor: '$white',
    padding: '$1',
    boxShadow: '-2px 0 10px $shadow',
    display: 'flex',
    flexDirection: 'column',

    // Animações ao abrir e fechar o modal
    '&[data-state="open"]': {
    animation: `${slideIn} 0.3s ease-in-out`,
    },
    '&[data-state="closed"]': {
    animation: `${slideOut} 0.3s ease-in-out`,
    },
});

// Botão de fechar o modal
export const CloseButton = styled('button', {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    alignSelf: 'flex-end',
    marginTop: '10px',
});

