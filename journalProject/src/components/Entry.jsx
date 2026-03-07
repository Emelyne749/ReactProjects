import photo from "../assets/fuji.png"

export default function Entry() {
    return (
        <>
            <div className="flex gap-10 p-10 text-gray-800">
                <img src={photo} alt="Mount Fuji" />
                <div className="flex flex-col gap-3">
                    <h1 className="font-bold"><i className="fa-solid fa-location-dot pr-3" style={{color: "rgb(208, 10, 35)"}}></i>JAPAN <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" className="font-thin text-sm hover:underline hover:text-red-500">View on Google Maps</a></h1>
                    <h1 className="text-4xl font-bold">Mount Fuji</h1>
                    <h1 className="text-sm">12 Jan, 2023 - 24 Jan, 2023</h1>
                    <p className="text-sm">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </div>
        </>
    )
}