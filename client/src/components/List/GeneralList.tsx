import { useState } from "react";

const GeneralList = () => {
    
    const [item, setItem] = useState();
    const items = [
        {id: 1, name: 'a'},
        {id: 2, name: 'b'},
        {id: 3, name: 'c'}
    ]

    return(
        items.map(item => {
            <ul>
                
            </ul>
        })
    )

}

export default GeneralList;