'use client'
import { styled } from '../stitches.config'

export const StyledSuccessContainer = styled('main',{
   
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    height: 656,
    width: '100%',

    h1:{
        fontSize: '$2xl',
        color: '$gray100',
        marginTop: 48,
        '@sm': {
            fontSize: '$xl', 
            marginTop: '2rem',
        },
    },
    p:{
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 560,
        textAlign: 'center',
        marginTop: '2rem',
        lineHeight: 1.4,
        '@sm': {
            fontSize: '$md', 
            maxWidth: '100%',
            margin: 8
        },
    },
    a: {
        display: 'block',
        marginTop: '5rem',
        fontSize: '$lg',
        color: '$green500',
        textDecoration: 'none',
        fontWeight: 'bold',

        '&:hover':{
            color: '$green300'
        }
    }
})



export const StyledImageContainer = styled('div',{
    display: 'flex',
 
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    width: '100%',
    maxWidth: 500, 
    height: 'auto', 

    '@sm': {
        maxWidth: '100%', 
        padding: 4,
       
    },
     
})



export const StyledImageContainerItem = styled('div',{ 
    position: 'relative',
    width: 140,
    height: 140,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: '100%',
    padding: '0.25rem',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
  

    img: {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
    },
    '@sm': {
        width: '100px', 
        height: '100px',
    },

})

export const StyledQuantity = styled('span',{

  
        backgroundColor: '$green500',
        border: '1px solid black',
        position: 'absolute',
        top: 10,
        right: 30,
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

        '@sm': {
            fontSize: '10px', 
            width: '20px',
            height: '20px',
            padding: '3px 6px',
            top: 10,
            right: 25,
        },
    

})