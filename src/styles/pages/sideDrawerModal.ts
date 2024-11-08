import { styled } from "..";

export const ImageContainerCart = styled('div',{
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
            marginBottom: 8
        }

    }

})