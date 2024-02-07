const Arrays = ()=>{
    const fruits = ['apple', 'mango', 'banana', 'berries', 'guava', 'grapes']

    console.log(fruits.length) 
    
    const listFruit = fruits.map((fruit, index)=>(
            <li key={index}>{fruit}</li>
    ))

    return(
        <>
            <h2>The fruits are:</h2>
            <ul>{listFruit}</ul>            
        </>
    )
}

export default Arrays