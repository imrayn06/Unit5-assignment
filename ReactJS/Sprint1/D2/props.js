const Greet = ({ username, greeting }) => {
    return (
        <div>
            <b><i>Hey there , {username}, {greeting}</i></b>
        </div>
    )
}

const App = () => {
    let data = [
        { username: "Narayan", greeting: "good morning" },
        { username: "Bheem", greeting: "good afternoon" },
        { username: "Kalu", greeting: "good evening" }
    ]
    return (
        <div className="container">
            {
                data.map((ele, i) => {
                    return (
                        <Greet key={i} username={ele.username} greeting={ele.greeting} />
                    )
                })
            }
        </div>


    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)