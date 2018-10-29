// This module is Reducer part of the Redux functionality
// 
// Reducer identifies following action types:
// FETCH_POSTS - all data is retrieved from db
// NEW_POSTS   - one record is created
// DELETE_POST - one record is deleted
//
import { FETCH_POSTS, NEW_POST, DELETE_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state=initialState, action){
    switch(action.type) {    
        case FETCH_POSTS:
            console.log("Reducer, FETCH_POSTS");
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            console.log("Reducer, NEW_POST");
            console.log(action.payload);
            state.items.push(action.payload);
            return {
                ...state,
                item: action.payload
            };
          
        case DELETE_POST:
            console.log("Reducer, DELETE_POST");
            var array = [...state.items];
            var index = array.indexOf(action.payload);
            state.items.splice(index,1);
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
    
}