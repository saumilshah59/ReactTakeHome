import * as Actions from './action_types';

const initialState = {
    search_query: '',
    order_ids: '',
    types: '',
    all_types: false,
    data: [],
    loading: false,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case Actions.UPDATE_SEARCH_QUERY: 
            return {
                ...state,
                search_query: action.payload
            }
        case Actions.UPDATE_ORDER_IDS: 
            return {
                ...state,
                order_ids: action.payload
            }
        case Actions.RESET_ORDERS:
            return {
                search_query: '',
                order_ids: '',
                types: '',
                data: [],
                loading: false,
            }
        case Actions.SET_ORDERS:
            return {
                ...state,
                data: action.payload
            }
        case Actions.SET_TYPES:
            return {
                ...state,
                types: action.payload
            }
        case Actions.SHOW_LOADING_BAR:
            return {
                ...state,
                loading: true 
            }
        case Actions.HIDE_LOADING_BAR:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}
