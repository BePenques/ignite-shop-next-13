import { styled } from "..";

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