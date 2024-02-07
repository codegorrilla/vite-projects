import {useState} from 'react'

const Inputs = ()=>{

    const [inputValue, setInputValue] = useState()

    //for fetching the input field value
    const handleInputValue = (e)=>{
        setInputValue(e.target.value)
        console.log(e)
    }

    //clear input button
    const clearInputValue = ()=>{
        setInputValue('')
    }

    return(
        <>
            <h1>Enter item name</h1>
            <p>{inputValue}</p>
            <input 
            type='text' 
            value= {inputValue}
            onChange = {handleInputValue}
            />
            <button 
            type='button'
            onClick={clearInputValue}
            >Clear input</button>
        </>
    )
}

export default Inputs