import {createRoot} from 'react-dom/client'
import { Fragment } from 'react'

createRoot(document.getElementById('root')).render(
    <>
    <Page/>
    </>
    
)

function Page(){
    return (
        <>
            <Header/>
            <MainComponent/>
            <Footer/>
        </>
        
    )
}

function Header(){
    return (
        <header>
            <img src="public/imgs/images.png" alt="React logo" width= {40} />
        </header>
    )
}

function MainComponent(){
    return (
        <main>
            <h1>Fun facts about React!</h1>
            <ol>
                <li>Has well over 200K stars on GitHub</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
                <li>Its my favourite</li>
                <li>Good on CV</li>
                <li>I like meta so much</li>

            </ol>
        </main>
    )
}

function Footer(){
    return (
        <footer>
            <small>© 20xx Emelyne development. All rights reserved.</small>
        </footer>
    )
}