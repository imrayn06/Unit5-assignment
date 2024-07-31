const Counter = () => {
    let [count , setCount] = React.useState(0)

    function handleClick(num) {
        setCount((count)=> count + num)
        
    }

    return (
        <div>
            <button onClick={()=>handleClick(-1)}>Decreament</button>
            <h2>{count}</h2>
            <button onClick={()=>handleClick(1)}>Increment</button>
        </div>
    )
}



const App =() =>{

    return (
        <>
        <Counter/>
        </>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)

// useState => env => initial CSSMathValue
// React.useState(0)
// [state, stateUpdateFunction]