import React, { useState } from 'react'

function AddTodo({ onCreate }) {  
    const [valueName, setValueName] = useState('')
    const [valueAuthor, setValueAuthor] = useState('')
    const [valueImg, setValuImg] = useState('')

    function submitHandler(e) {
        e.preventDefault()
        if (valueAuthor.trim() && valueName.trim()) {
            onCreate(valueName, valueAuthor, valueImg)
            setValueName('')
            setValueAuthor('')
            setValuImg('')
        }

    }

    return (
       <form action="" onSubmit={submitHandler}>
           <input value={valueName} onChange={e => setValueName(e.target.value)}/>
           <input  value={valueAuthor} onChange={e => setValueAuthor(e.target.value)}/>
           <input  value={valueImg} onChange={e => setValuImg(e.target.value)}/>
           <button type="submit">Add Books</button>
       </form>
    )
}

export default AddTodo