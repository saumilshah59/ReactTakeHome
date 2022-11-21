import React, { useMemo } from 'react'
import { makeStyles, IconButton, InputBase, Typography, Button, Checkbox, FormControlLabel, FormControl, FormLabel, FormGroup } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { useDispatch, useSelector } from 'react-redux';
import * as allActions from '../../store/actions'
import CheckBoxRoundedIcon from '@material-ui/icons/CheckBoxRounded';
import CheckBoxOutlineBlankRoundedIcon from '@material-ui/icons/CheckBoxOutlineBlankRounded';
import SearchInput from '../SearchInput';

const useStyles = makeStyles(theme => ({
    button: {
        fontSize: '30px',
        lineHeight: 1,
        backgroundColor: "transparent",
        color: "white",
        border: "none",
        cursor: "pointer"
    },
    panel: {
        height: "100%",
        backgroundColor: "#383838",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        padding: "50px 10px 50px 10px",
        gap: "10px"
    },
    menuList: {
        width: "100%"
    },
    buttons: {
        display: 'flex',
        gap: '10px'
    }
}));

const TitleLabel = (props) => {
    return <Typography variant='h6' style={{color: 'white'}}>{ props.title }:</Typography>
}

const CustomCheckBox = (props) => {
    return <div
        style={{ display: 'flex', gap: '10px', alignItems: 'center', cursor: 'pointer' }}
        onClick={() => props.onClick()}>
        {
            props.checked 
            ? <CheckBoxRoundedIcon></CheckBoxRoundedIcon>
            : <CheckBoxOutlineBlankRoundedIcon></CheckBoxOutlineBlankRoundedIcon>
        }
        <Typography variant='h6'>{props.title}</Typography>
    </div>
}

const Filter = () => {
    const dispatch = useDispatch();
    const searchQuery = useSelector(state => state.search_query);
    const orderIds = useSelector(state => state.order_ids);
    const types = useSelector(state => state.types);
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    };
    const classes = useStyles();
    
    const allTypeChecked = types.includes('SFO') && types.includes('CAO') && types.includes('EDF');

    return (
        <>
            <IconButton onClick={() => {setIsOpen(true)}}>
              <FilterListIcon style={{color: 'white'}}></FilterListIcon>
            </IconButton>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
            >
                <div className={classes.panel}>
                    <TitleLabel title='Item Numbers'></TitleLabel>
                    <SearchInput 
                        placeholder="Enter Item Numbers"
                        value={searchQuery}
                        onChange={(query) => {
                            dispatch(allActions.updateSearchQuery(query))
                        }}
                        onSubmit={() => {
                            dispatch(allActions.fetchOrders())
                        }}
                        >
                    </SearchInput>
                    <TitleLabel title='Order Ids'></TitleLabel>
                    <SearchInput 
                        placeholder="Enter Order Ids"
                        value={orderIds}
                        onChange={(query) => {
                            dispatch(allActions.updateOrderIds(query))
                        }}
                        onSubmit={() => {
                            dispatch(allActions.fetchOrders())
                        }}
                    >
                    </SearchInput>
                    <TitleLabel title='Types'></TitleLabel>
                    <CustomCheckBox checked={ allTypeChecked } title='ALL' onClick={() => dispatch(allActions.toggleAllType(!allTypeChecked))}></CustomCheckBox>
                    <CustomCheckBox checked={types.includes('CAO')} title='CAO' onClick={() => dispatch(allActions.toggleType('CAO'))}></CustomCheckBox>
                    <CustomCheckBox checked={types.includes('EDF')} title='EDF' onClick={() => dispatch(allActions.toggleType('EDF'))}></CustomCheckBox>
                    <CustomCheckBox checked={types.includes('SFO')} title='SFO' onClick={() => dispatch(allActions.toggleType('SFO'))}></CustomCheckBox>
                    <div className={classes.buttons}>
                        <Button onClick={() => dispatch(allActions.fetchOrders())} variant="contained" color="primary">
                            Search
                        </Button>
                        <Button onClick={() => dispatch(allActions.resetOrders())} variant="contained" color="primary">
                            Reset
                        </Button>
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default Filter