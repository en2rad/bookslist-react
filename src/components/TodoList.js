import React from 'react'
import TodoItem from './TodoItem'


const styles = {
    ul: {
        listStyle: 'none'
    }
}


export default function TodoList(props) {
    return (
        <ul style={styles.ul}>
            {props.todos.map(todo => {
               return <TodoItem todo={ todo } key={ todo.id } onClick={props.onToggle}/> 
            })}
        </ul>
    )
}

