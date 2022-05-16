import React from 'react'
import { useState } from 'react';

import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseState = (props) => {

    let [x, setX] = useState(0)
    let [name, setName] = useState('')


    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
    
            />
            <SectionTitle title="Exercício #01"></SectionTitle>
            <div className="center">
               <span className="text">{x}</span>
               <div>
                    <button className="btn" onClick={

                        () => setX(x + 1)

                    }>+1</button>
                    <button className="btn" onClick={

                        () => setX(x - 1)

                    }>-1</button> 
               </div>
            </div>
            <SectionTitle title="Exercício #02"></SectionTitle>
            <input type="text" className="input" value={name} onChange={ e => setName(e.target.value)}/>
            <h2>{name}</h2>
        </div>
    )
}

export default UseState
