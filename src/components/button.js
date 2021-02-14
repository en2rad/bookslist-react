import React from 'react'
import Context from './context'
import { useContext } from 'react'

function Button({ changeAuthorsVisible }) {  
    const { showAuthors } = useContext(Context)

    const text = {
       hide: 'Hide Authors',
       show: 'Show Authors',  
    }
 
    return (
        <div>
            <button onClick={() => changeAuthorsVisible()}>{ showAuthors ? text.hide : text.show}</button>
        </div>
    )
}

export default Button