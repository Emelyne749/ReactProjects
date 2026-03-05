import path from "../assets/Path.png"

export default function Header() {
    return (
        <>
            <div className="bg-red-500 flex justify-center h-10">
                <img src={path} alt="Globe icon" className="w-10 h-10"/>
                <h1 className="text-gray-200 text-semi-bold">my travel journal.</h1>
            </div>
        </>
    )
}