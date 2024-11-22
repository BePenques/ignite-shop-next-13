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
    },
    '@sm': {
        maxWidth: 80, 
        height: 72,
    },
})


export const StyledProductCard = styled('div',{
    display: 'flex',
    width: '100%',
    height: 94,  

})

export const StyledProductCardInfos = styled('div',{

    display: 'flex',
    justifyContent: 'space-between',

    section:{
        display: 'flex',
        flexDirection: 'column',
    },

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
    padding: '1rem 0', 
    borderTop: '1px solid $green300', 


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
        padding: '1rem', 
        fontSize: '$md',
        backgroundColor: '$green500',
        color: '$white',
        border: 'none',
        borderRadius: 8,
        cursor: 'pointer',

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
    width: '30%',
    maxWidth: 480,
    backgroundColor: '$gray800',
    padding: 30,
    boxShadow: '-2px 0 10px $shadow',

    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'space-between', 
    gap: '1rem', 


    // Animações ao abrir e fechar o modal
    '&[data-state="open"]': {
    animation: `${slideIn} 0.3s ease-in-out`,
    },
    '&[data-state="closed"]': {
    animation: `${slideOut} 0.3s ease-in-out`,
    },
    
    '@md': {
        width: '50%', 
        padding: 32,
    },
    '@sm': {
        width: '100%',
        padding: 24,
    },
});

export const StyledProductList = styled('div',{
  
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    flex: 1,
    overflowY: 'auto', 
    padding: '0 16px',

      /* Para navegadores que suportam scrollbar-color */
      scrollbarColor: '$green500 $gray700', // thumb | track
      scrollbarWidth: 'thin', // Fina em navegadores que suportam nativamente
  
      /* Estilização para WebKit */
      '&::-webkit-scrollbar': {
          width: '8px',
      },
      '&::-webkit-scrollbar-track': {
          backgroundColor: '$gray700',
      },
      '&::-webkit-scrollbar-thumb': {
          transition: 'background-color 0.3s ease',
          backgroundColor: '$green500',
          borderRadius: '4px',
      },
      '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '$green300',
      },    

    '@sm': {
        maxWidth: '100%',
        '&::-webkit-scrollbar': {
            width: '6px', 
        },
       
    },
})


export const StyledCloseButton = styled(Dialog.Close, {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    alignSelf: 'flex-end',
    '@sm': {
        fontSize: '1rem', 
        marginTop: 4,
    },
})

export const StyledQuantityNumber = styled('div',{
    display: 'flex',
    div:{
        display: 'flex',
    },
    a: {
     marginLeft: 30
    },

    button:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$green300',
        width: 18,
        height: 18,
        border: 0,
        borderRadius: '50%',
        cursor: 'pointer'
    },
    span:{
        margin: '0 10px'
    }

})