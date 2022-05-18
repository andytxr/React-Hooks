export let initialState = {

    cart: [],
    products: [],
    user: null,
    number: 0,

}

export function reducer(stateNow, action){

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
