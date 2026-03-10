import Numbers from "./components/Numbers"
import Buttons from "./assets/Buttons.js"



export default function App() {

    let Butt = Buttons.map((btn, index) => (
        <Numbers
        key={index}
        text={btn.text}
        color={btn.color}
        width={btn.width}
        height={btn.height}
        colsp={btn.colsp}
        />
    ))

  return (
      <>
      <div className="flex justify-center bg-gray-100">
            <div className="w-90 h-200  p-4">
                <input type="text" className="bg-gray-800 text-white border border-gray-100 focus:outline-none focus:ring-2 
                focus:ring-blue-500 w-full h-30" placeholder="" />
                <div className="w-full bg-gray-700 p-3 grid grid-cols-4 grid-rows-5 gap-1">
                    {Butt}
                </div>
            </div>
     </div>
      </>
  )
}