import { HttpClient } from '../http-client/HttpClient';
import * as Actions from './action_types';

export const updateSearchQuery = (query) => {
    return (dispatch, state) => {
        dispatch({
            type: Actions.UPDATE_SEARCH_QUERY,
            payload: query
        })
    }
}

export const updateOrderIds = (order_ids) => {
    return (dispatch, getState) => {
        dispatch({
            type: Actions.UPDATE_ORDER_IDS,
            payload: order_ids
        })
    }
}

export const toggleAllType = (value) => {
    return (dispatch, getState) => {
        let types = ''
        if(value) {
            types = 'CAO,EDF,SFO'
        }
        console.log('types = ', types)
        dispatch({
            type: Actions.SET_TYPES,
            payload: types
        })
        dispatch(fetchOrders())
    }
}

export const toggleType = (type) => {
    return (dispatch, getState) => {
        const state = getState();
        const typesStr = state.types;
        var typesArr = [];
        if(typesStr.length > 0)
            typesArr = state.types.split(',');
        
        var index = typesArr.indexOf(type);
        if(index != -1) {
            typesArr.splice(index)
        } else {
            typesArr.push(type)
        }
        dispatch({
            type: Actions.SET_TYPES,
            payload: typesArr.join(',')
        })
        dispatch(fetchOrders())
    }
}

export const resetOrders = () => {
    return {
        type: Actions.RESET_ORDERS
    }
}

export const fetchOrders = () => {
    return (dispatch, getState) => {
        dispatch(showLoadingBar())
        const state = getState()
        var itemNumbers = [];
        var orderIds = [];
        var types = [];
        if(state.search_query.length > 0) {
            itemNumbers = itemNumbers.concat(state.search_query.split(','))
        }
        if(state.order_ids.length > 0) 
            orderIds = state.order_ids.split(',')
        if(state.types.length > 0)  
            types = state.types.split(',')
        
        new HttpClient().fetchOrders(itemNumbers, orderIds, types).then((data) => {
            dispatch(hideLoadingBar())
            dispatch({
                type: Actions.SET_ORDERS,
                payload: data
            })
        })
    }
}

export const showLoadingBar = () => {
    return {
        type: Actions.SHOW_LOADING_BAR
    }
}

export const hideLoadingBar = () => {
    return {
        type: Actions.HIDE_LOADING_BAR
    }
}