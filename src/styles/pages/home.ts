
import {styled} from '../stitches.config';


export const StyledHomeContainer = styled('main',{
    display: 'flex',
    // gap: '3rem',
    width: '100vw',
    maxWidth: 'calc(100vw - ((100vw - 1180px)/2))',
    marginLeft: 'auto',
    minHeight: 656

})

export const StyledProduct = styled('div',{
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    // padding: '0.25rem',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // width: 540,

    img:{
        objectFit: 'cover'/* faz caber no container, sem distorcer */
    },
    footer:{
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '2rem',

        borderRadius: 6,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        // gap: 4,


        backgroundColor: 'rgba(0, 0, 0, 0.6)',

        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        div: {
            display: 'flex',
            flexDirection: 'column',
            gap: 4
        },

        button: {
            width: 48,
            height: 48,
            backgroundColor: '$green500',
            border: 0,
            cursor: 'pointer',
            borderRadius: 6
        },

        strong:{
            fontSize: '$lg',
            color: '$gray100'
        },

        span:{
            fontSize: '$xl',
            fontWeight: 'bold',
            color: '$green300'
        }

    },

    '&:hover':{
        footer:{
            transform: 'translateY(0%)',
            opacity:1
        }
    }
})