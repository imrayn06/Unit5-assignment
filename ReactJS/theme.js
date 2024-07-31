const { useState } = React;

const DarkMode = () => {
    return (
        <div style={{ backgroundColor: "black", padding: "40px", color: "white" }}>
            <h2>Hello</h2>
        </div>
    );
};

const LightMode = () => {
    return (
        <div style={{ backgroundColor: "#7fffd4", padding: "40px", color: "black" }}>
            <h2>Hello</h2>
        </div>
    );
};

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
            {isDarkMode ? <DarkMode /> : <LightMode />}
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


// const App = ()=>{
// let [toggle , setToggle] = React.useState(true)
// return (

// <button onClick={()=>setToggle(!tog)T >Toggle Themes</button>

// toggle ? <LightMode/> : <DarkMode/>

// </>

// const root = ReactDOM. createRoot (document. getElementById("root"))
// root.render(<App/>)