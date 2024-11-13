'use client'
import { styled, keyframes } from "../stitches.config";
import * as Dialog from '@radix-ui/react-dialog';

export const StyledImageContainerCart = styled('div',{
    width: '100%',
    maxWidth: 102,
    height: 93,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',
    marginRight: 20,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img:{
        objectFit: 'cover'
    }
})


export const StyledProductCard = styled('div',{
    display: 'flex',
    width: '100%',
    height: 94,

    div:{
        display: 'flex',
        flexDirection: 'column',

        p:{
            fontsize: '$md',
            marginBottom: 2
        },
        strong:{
            marginBottom: 12
        },
        a: {
            color: '$green500',
            cursor: 'pointer',
            '&:hover': {
                textDecoration: 'underline'
            }
        }
    }

})

export const StyledEmptyCart = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 200
})

export const StyledCartButton = styled('div',{
    position: 'relative',

    span:{
        backgroundColor: '$green500',
        border: '2px solid black',
        position: 'absolute',
        top: 0,
        right: 0,
        transform: 'translate(50%, -50%)',
        color: 'white',
        borderRadius: '50%',
        padding: '4px 8px',
        fontSize: '12px',
        fontWeight: 'bold',
        width: '24px',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)',
    }

})

export const StyledModalFooter = styled('div',{
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    marginTop: 20,

    div:{
        display: 'flex',
        justifyContent: 'space-between'
    },

    '& > div:first-child': {
        p: {
            fontSize: '$md',
        }
    },
    '& > div:nth-of-type(2)': {
        marginBottom: 20,
        p: {
            fontSize: '$md',
            fontWeight: 'bold'
        },
        span:{
            fontSize: '$xl',
            fontWeight: 'bold'
        }
      },
  

    button:{
        
        backgroundColor: '$green500',
        border: 0,
        color: '$white',
        borderRadius: 8,
        padding: '1.15rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$md',
        marginBottom: 4,

        '&:disabled':{
            opacity: 0.6,
            cursor: 'not-allowed'
        },

        '&:hover(:disabled):hover':{
            backgroundColor: '$green300',
        },
    
    },
    a:{
        margin: '0 auto',
        cursor: 'pointer',
        color: '$green300',
        '&:hover': {
            textDecoration: 'underline'
        }
    }

})
    export const slideIn = keyframes({
    '0%': { transform: 'translateX(100%)' },
    '100%': { transform: 'translateX(0)' },
    });

    export const slideOut = keyframes({
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(100%)' },
    });
        

    export const StyledOverlay = styled(Dialog.Overlay, {
        position: 'fixed',
        inset: 0,
        backgroundColor: '$overlay',
    });

    export const StyledTitle = styled(Dialog.Title, {
        fontSize: '$lg',
        fontWeight: 'bold',
        marginBottom: '2rem'
    })

    export const StyledContent = styled(Dialog.Content, {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: '$modalWidth',
        backgroundColor: '$gray800',
        padding: 48,
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

    export const StyledProductList = styled('div',{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        width: 384,
        minHeight: 320,
        overflowY: 'auto'
    })




    export const StyledCloseButton = styled(Dialog.Close, {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        alignSelf: 'flex-end',
    });