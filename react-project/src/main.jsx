import {createRoot} from 'react-dom/client'
import Header from './Header'
import Footer from './Footer'
import MainComponent from './MainComponent'

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

