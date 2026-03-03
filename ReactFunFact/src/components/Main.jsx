import halfLogo from '../assets/halfLogo.png';

export default function Main() {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${halfLogo})`, backgroundRepeat: `no-repeat`, backgroundPosition: `right 70%` , backgroundSize: `150px`}}>
        <h1 className="text-4xl font-bold text-white text-center p-10">Fun Facts about React</h1>
        <ul className="text-gray-300 pr-10 pl-15 ml-5 list-disc">
            <li className="marker:text-blue-300 marker:text-3xl">Was first released in 2013</li>
            <li className="marker:text-blue-300 marker:text-3xl">Was originally created by Jordan Walke</li>
            <li className="marker:text-blue-300 marker:text-3xl">Has well over 200K stars on GitHub</li>
            <li className="marker:text-blue-300 marker:text-3xl">Is maintained by Meta</li>
            <li className="marker:text-blue-300 marker:text-3xl">Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
      
  )
}
