import logo from '../assets/logo.png'

export default function NavBar() {
    return (
      <nav className ="bg-gray-900 p-10">
       <img src={logo} alt="logo" className="w-60 h-10"/>
      </nav>
    )
}
