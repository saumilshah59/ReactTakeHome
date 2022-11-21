import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'center',
        flexDirection: 'column',
        gap: '15px'
    }
})

function LoadingBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CircularProgress size={20}></CircularProgress>
            <Typography variant='h6'>Searching...</Typography>
        </div>
    )
}

export default LoadingBar
