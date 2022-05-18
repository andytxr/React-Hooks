import React from 'react'
import {useReducer } from 'react';

import PageTitle from '../../components/layout/PageTitle'
import {initialState, reducer} from '../../store/config';

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
