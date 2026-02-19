import {createRoot} from 'react-dom/client'

createRoot(document.getElementById('root')).render(
    <>
    <Page/>
    </>
    
)

function Page(){
    return (
        <main>
            <header>
                <img src="public/imgs/images.png" alt="React logo" width= {40} />
            </header>
            
            <h1>Fun facts about React!</h1>
            <ol>
                <li>Has well over 200K stars on GitHub</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
                <li>Its my favourite</li>
                <li>Good on CV</li>
                <li>I like meta so much</li>

            </ol>
            <footer><small>© 20xx Emelyne development. All rights reserved.</small></footer>
        </main>
        
    )
}