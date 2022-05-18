import React from "react";

export let data = {

    number: 23,
    text: 'Context API'

}

const DataContext = React.createContext(null);
export default DataContext;