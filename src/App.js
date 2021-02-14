import logo from './logo.svg';
import './App.css';


import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Button from './components/button'

import { useState } from 'react'
import Context from './components/context'
import { useEffect} from 'react'
import Modal from './components/modal';


function App() {

    // function addToLocalStorage(todos) {
    //     const all = getTaskFromLocalStorage('todos')
    //     all.push(todos)
    //     localStorage.setItem('todos', JSON.stringify(all))
    // }

    // function getTaskFromLocalStorage() {
    //     return JSON.parse(localStorage.getItem('todos') || '[]')
    // }

    // let todos = getTaskFromLocalStorage()
 

    const [todos, setTodos] = useState([
        {
            id: 1,
            name: 'Burmese Days',
            author: 'George Orwell',
            completed: false,
            img: 'https://www.colibribookstore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/o/book-ase000000000722903.jpg',
        },
        {
            id: 2,
            name: '海辺のカフカ',
            author: '村上 春樹',
            completed: true,
            img: 'https://interkniga.net/app/files/2020/06/430000000000187918_cover1-6.jpg?x41547',
        },
        {
            id: 3,
            name: 'Neverwhere',
            author: 'Neil Gaiman',
            completed: false,
            img: 'https://img-gorod.ru/upload/iblock/2a2/2a20863ac7e2c737d79f43a3339d1a61.jpg',
        },
    ])
    
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    //         .then(response => response.json())
    //         .then(todos => {
    //             setTodos(todos)
    //         })
    // }, [])


    

    function toggleTodo(id) {
       
        setTodos(
            todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed  
                }
                return todo
            })
        )
    }


    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(name, author, img = 'https://i.ytimg.com/vi/8w7yxmpY6SQ/sddefault.jpg') {
        let id = todos.length ? todos[todos.length -1].id + 1 : 1;
        setTodos(todos.concat([
            {
                id: id,
                name: name,
                author: author,
                completed: false,
                img: img,
            }
        ]))
    }

    const [showAuthors, setShowAuthors] = useState(true)

    const changeAuthorsVisible = () => {
        setShowAuthors(!showAuthors)
    }

    return (
        <Context.Provider value={{ removeTodo, showAuthors}}>
            <Modal/>
            <div className="App" className="wrap">
                <Button changeAuthorsVisible={changeAuthorsVisible}/>
                {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : 'Add Books'}
               
            </div>
            <AddTodo onCreate={addTodo}/>
        </Context.Provider>
    );
}

export default App;

