'use client'
import { styled } from "../stitches.config";

export const StyledProductContainer = styled('main',{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4rem',
    maxWidth: 1180,
    margin: '0 auto',

    '@md': {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem', 
        maxWidth: '100%',
        padding: '1.5rem',
    },
    '@sm': {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        maxWidth: '100%',
        padding: '1rem',
    },
   

})
export const StyledImageContainer = styled('div',{
    width: '100%',
    maxWidth: 576,
    height: 'auto',
    aspectRatio: '1 / 1.2', // Proporção da imagem
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto', 


    img:{
        // objectFit: 'cover'
        objectFit: 'contain', // Garantir que a imagem se ajuste sem cortar
        maxWidth: '100%',
        height: 'auto',
    },
 
    '@md': {
        maxWidth: '90%',
    },
    '@sm': {
        maxWidth: '100%', 
    },
  
})

export const StyledProductDetails = styled('div',{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem', 

    h1:{
        fontSize: '$2xl',
        color: '$gray300',

        '@sm': {
            fontSize: '$xl', 
        },
    },
    span:{
        marginTop: '1rem',
        display: 'block',
        fontSize: '$2xl',
        color: '$green300',

        '@sm': {
            fontSize: '$lg', 
        },
    },
    p:{
        marginTop: '2.5rem',
        fontSize: '$md',
        lineHeight: 1.6,
        color: '$gray300', 

        '@sm': {
            fontSize: '$sm', 
            marginTop: '1.5rem',
        },
    },
})

export const StyledAddProductButton = styled('button',{
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

        '&:hover':{
            backgroundColor: '$green300',
        },

        '@md': {
            width: '100%', 
        },
        '@sm': {
            width: '100%', 
            marginTop: '1rem', 
            padding: '1rem',
        },
})
