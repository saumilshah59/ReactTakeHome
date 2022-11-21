import { makeStyles } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import Content from './Content';
import LoadingBar from './LoadingBar';
import MenuBar from './MenuBar/MenuBar';

const useStyles = makeStyles({
    root: {
    },
})

function Home() {
    
    const classes = useStyles();
    const loading = useSelector(state => state.loading);
    return (
        <div className={classes.root}>
            <MenuBar></MenuBar>
            <Content className={classes.content}></Content>
            {loading && <LoadingBar></LoadingBar>}
        </div>
    )
}

export default Home
