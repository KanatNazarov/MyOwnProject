import React from 'react'

import { useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './CustomerReducer';
import { useDispatch } from 'react-redux';

function Clients() {

    const dispatch = useDispatch()
    const customers = useSelector(state => state.customers.customers)
    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer))
    }




    const removeCustomer = (customer) => {
        // dispatch({type:"REMOVE_CUSTOMERS", payload:customer.id})
        dispatch(removeCustomerAction(customer.id))
    }
    return (
        <div style={ { display: "flex", justifyContent: "align-items", textAlign: "center" } }>
            &nbsp;

            <button onClick={ () => addCustomer(prompt()) }> Добавить клиента</button>
            <button onClick={ () => removeCustomer(Number(prompt())) }> Удалить клиента</button>

            { customers.length > 0 ?
                <div style={ { textAlign: 'center' } }>
                    { customers.map(customer =>

                        <button style={ { display: "block", textAlign: "center" } } onClick={ () => removeCustomer(customer) }>
                            { customer.name }
                        </button>) }
                </div>
                :
                <div style={ { fontSiz: "4rem" } }>
                    there is no clients
                </div>
            }

            <h3 style={{color: "black"}}>
                Hello world
            </h3>

        </div>
    )

}

export default Clients;