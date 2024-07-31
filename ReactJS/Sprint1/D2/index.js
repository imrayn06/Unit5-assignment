const Navbar = ({user, greeting}) => {
    // console.log(user)
    return (
        <div>
            <h2 style = {{color:"blue"}}>Navbar {user} <i>! {greeting}</i></h2>
        </div>
    )
}
const Content = ({user, greeting}) => {
    // console.log(user)
    return (
        <div>
            <h2>Content {user} <i>! {greeting}</i></h2>
        </div>
    )
}
const Footer = ({user, greeting}) => {
    // console.log(user)
    return (
        <div>
            <h2>Footer {user} <i>! {greeting}</i></h2>
        </div>
    )
}
const App = () => {
    let user = "Chota Bheem"
    let greeting = "Good Morning"
    return (
        <>
            <Navbar user={user} greeting = {greeting}/>
            <Content user={user} greeting = {greeting}/>
            <Footer user={user} greeting = {greeting}/>
            {/* {Navbar(user)}
            {Content(user)}
            {Footer(user)} */}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)