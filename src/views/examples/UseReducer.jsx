import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useState, useReducer } from 'react';

let initialState = {

    cart: [],
    products: [],
    user: null,
    number: 0,

}

function reducer(stateNow, action){

    switch(action.type){

        case 'add2':

            return {...stateNow, number: stateNow.number + 2}

        case 'login':

            return{...stateNow, user: {
                name: action.name
            }}

        case 'multiplyBy7':

            return {...stateNow, number: stateNow.number*7}

        case 'divideBy25':
            
            return{...stateNow, number: stateNow.number/25}
        
        case 'parseToInt':

            return{...stateNow, number: parseInt(stateNow.number)} 

        case 'addFlexibleNumber':

            return{...stateNow, number: stateNow.number + action.number}
        
        default:

            return stateNow

    }

}

const UseReducer = (props) => {

    let [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? <span className='text'>{state.user.name}</span> : <span className='text'>Usuário não logado</span>}
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={()=>dispatch({

                       type:'login', name: 'Sawa'

                    })}>Fazer login</button>
                    <button className="btn" onClick={()=>dispatch({

                        type: 'add2'
                        
                    })}>+</button>
                    <button className="btn" onClick={()=>dispatch({

                        type: 'multiplyBy7'

                    })}>*7</button>
                    <button className="btn" onClick={()=>dispatch({

                        type:'divideBy25'

                    })}>/25</button>
                    <button className="btn" onClick={()=>dispatch({

                        type:'parseToInt'

                    })}>To Int</button>
                    <button className="btn" onClick={()=>dispatch({

                        type:'addFlexibleNumber', number: 20

                    })}>Flexible</button>
                     
                </div>
            </div>
        </div>
    )
}

export default UseReducer
