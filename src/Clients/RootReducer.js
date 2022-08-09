import { createStore, combineReducers    } from 'redux';


import { customerReducer }  from './CustomerReducer';



const rootReducer = combineReducers({
    customers: customerReducer,
})
export const store=createStore(rootReducer)

