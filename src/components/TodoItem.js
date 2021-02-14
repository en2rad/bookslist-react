import React from 'react'
import Context from './context'
import { useContext } from 'react'

function TodoItem({todo , onClick}) {
    const { removeTodo } = useContext(Context)
    const { showAuthors } = useContext(Context)

    const classes = ['item']
    if(todo.completed) {
        classes.push('done')
    }
  
    return (
        <li className={classes.join(' ')} >
          
            <div onClick={() => onClick(todo.id)}>
                <img src={todo.img} alt=""/>
                
                { showAuthors ?
                    <div className="subscribe">
                        <span>{todo.name}</span>
                        <span>{todo.author}</span>
                    </div>  : '' 
                }
            </div>
            <button className="btn" onClick={removeTodo.bind(null, todo.id)}>X</button>
        </li>
    )
}


export default TodoItem 