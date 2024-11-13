'use client'
import {styled} from '../stitches.config' 

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



    