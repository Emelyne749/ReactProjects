export default function Header(){
    return (
        <header className='Header'>
            <img src="public/imgs/images.png" alt="React logo" className="React-logo" />
            <nav>
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}