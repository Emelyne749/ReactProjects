import {createRoot} from 'react-dom/client'

createRoot(document.getElementById('root')).render(
    <>
    <TemporaryName/>
    <Page/>
    </>
    
)

function TemporaryName(){
    return(
        <main>
            <img src="public/imgs/images.png" alt="React logo" width= {40} />
            <h1>Fun facts about React! </h1>
            <ul>
                <li>Was first release in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}


function Page(){
    return (
        <ol>
            <li>Rendering pages</li>
            <li>cool images</li>
            <li>amaizing CV</li>
        </ol>
    )
}