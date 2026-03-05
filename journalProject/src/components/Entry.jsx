import photo from "../assets/fuji.png"

export default function Entry() {
    return (
        <>
            <div className="flex gap-10 p-10 text-gray-800">
                <img src={photo} alt="Mount Fuji" />
                <div className="flex flex-col gap-3">
                    <h1 className="font-bold">JAPAN <span className="font-thin text-sm">View on Google Maps</span></h1>
                    <h1 className="text-4xl font-bold">Mount Fuji</h1>
                    <h1 className="text-sm">12 Jan, 2023 - 24 Jan, 2023</h1>
                    <p className="text-sm">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </div>
        </>
    )
}