import path from "../assets/Path.png"

export default function Header() {
    return (
        <>
            <div className="bg-red-500 flex justify-center h-15 p-3 gap-3">
                <img src={path} alt="Globe icon" className="w-9 h-9 p-1"/>
                <h1 className="text-gray-200 text-semi-bold p-2">my travel journal.</h1>
            </div>
        </>
    )
}