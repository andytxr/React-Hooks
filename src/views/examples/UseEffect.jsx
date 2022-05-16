import React, { useEffect } from 'react'
import { useState } from 'react';

import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

function calcFactor(fct){

    let f = parseInt(fct)

    if(f<0){

        return -1

    }
    if(f === 0){

        return 1

    }

    return calcFactor(f-1)*f


}

function calcPairOrOdd(num){

    let n = parseInt(num)
    
    if(n===0){

        return 'Neutro'

    }else if(n%2===0){

        return 'Par'

    }else{

        return 'Impar'

    }

}

const UseEffect = (props) => {

    let [number, setNumber] = useState(1);
    let [factor, setFactor] = useState(1);

    let [numberB, setNumberB] = useState(1);
    let [pod, setPod] = useState(1);

    useEffect(function(){

        setFactor(calcFactor(number));

    }, [number]);

    useEffect(function(){

        setPod(calcPairOrOdd(numberB));

    }, [numberB]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{factor === -1 ? 'Não existe!' : factor}</span>
                </div>
                <input type="number" className="input" value={number} onChange={

                    e => setNumber(e.target.value)

                }/>
            </div>
            <SectionTitle title="Exercício #02"></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{pod}</span>
                </div>
                <input type="number" className="input" value={numberB} onChange={

                    e => setNumberB(e.target.value)
                }/>

            </div>
        </div>
    )
}

export default UseEffect
