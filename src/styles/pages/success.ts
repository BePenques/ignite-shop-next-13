'use client'
import { styled } from '../stitches.config'

export const StyledSuccessContainer = styled('main',{
   
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    // margin: '0 auto',
    height: 656,
    width: '100%',

    h1:{
        fontSize: '$2xl',
        color: '$gray100',
        marginTop: 48
    },
    p:{
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 560,
        textAlign: 'center',
        marginTop: '2rem',
        lineHeight: 1.4
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
    // position: 'relative', 
    display: 'flex',
    // flexDirection: 'row',
    // overflow: 'hidden', 
    alignItems: 'center',
    justifyContent: 'center',
    width: 500, 
    height: 250, 
    // backgroundColor: 'red',

    // div:{
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // }
     
})



export const StyledImageContainerItem = styled('div',{ 
    width: 140,
    height: 140,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: '100%',
    padding: '0.25rem',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    // boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
  

    img:{
        objectFit: 'cover'
    }

})

// export const StyledImageContainerSpan = styled('span',{

    

// })