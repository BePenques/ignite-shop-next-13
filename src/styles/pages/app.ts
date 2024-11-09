'use client'
import {styled, keyframes} from '..' 
import * as Dialog from '@radix-ui/react-dialog';

export const StyledContainer = styled('div',{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh',
})

export const StyledHeader = styled('header',{
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',

    button: {
        width: 48,
        height: 48,
        backgroundColor: '$gray800',
        border: 0,
        cursor: 'pointer',
        borderRadius: 6,
    }
})


// modal lateral
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
        height: 528,
    })

    export const StyledModalFooter = styled('div',{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,

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
            marginTop: 40,
            backgroundColor: '$green500',
            border: 0,
            color: '$white',
            borderRadius: 8,
            padding: '1.25rem',
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
            }
        }

    })
    
  
    export const StyledCloseButton = styled(Dialog.Close, {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        alignSelf: 'flex-end',
    });