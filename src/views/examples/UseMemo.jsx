import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useState, useMemo } from 'react';

const UseMemo = (props) => {

    let [m, setM] = useState(0);
    let [n, setN] = useState(0);
    let [o, setO] = useState(0);

    function add(a, b){

        let future = Date.now() + 2000;
        while(Date.now()<future){
    
        }
    
        return a+b;
    
    }

    let res = useMemo(()=>add(m, n), [m, n]);

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />

            <div className="center">
                <input type="number" className="text" value={m} onChange={
                    
                    e=>setM(parseInt(e.target.value))
                    
                }/>
                <input type="number" className="text" value={n} onChange={
                    
                    e=>setN(parseInt(e.target.value))
                    
                }/>
                <input type="number" className="text" value={o} onChange={
                    
                    e=>setO(parseInt(e.target.value))
                    
                }/>
                <span className="text">{res}</span>
            </div>
        </div>
    )
}

export default UseMemo
