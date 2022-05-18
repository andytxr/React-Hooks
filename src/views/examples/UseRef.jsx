import React, { useRef } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';
import { useState, useEffect } from 'react';

let merge = function(s, sB){

    return [...s].map(function(e, i){

        return `${e}${sB[i] || ""}`

    }).join("")

}

const UseRef = (props) => {

    let [value, setValue] = useState("");
    let count = useRef(0);

    let [valueB, setValueB] = useState("")

    let input = useRef(null);
    let inputB = useRef(null);

    useEffect(function(){

        count.current = count.current + 1;
        inputB.current.focus();


    }, [value]);

    useEffect(function(){

        count.current = count.current + 1;
        input.current.focus();

    }, [valueB]);

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício 01"></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value, valueB)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                
                <input ref={input} type="text" className="input" value={value} onChange={

                    e => setValue(e.target.value)

                } />
            
            </div>
            <SectionTitle title="Exercício 02"></SectionTitle>
            <div className="center">

                <div>

                </div>

                <input ref={inputB} type="text" className="text" value={valueB} onChange={
                    
                    e => setValueB(e.target.value)

                }/>
            </div>
        </div>
    )
}

export default UseRef
