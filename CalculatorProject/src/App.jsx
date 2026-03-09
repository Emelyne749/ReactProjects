import Numbers from "./components/Numbers"

export default function App() {
  return (
      <>
      <div className="flex justify-center bg-gray-100">
      <div className="w-90 h-200  p-4">
        <input type="text" className="bg-gray-800 text-white border border-gray-100 focus:outline-none focus:ring-2 
        focus:ring-blue-500 w-full h-30" placeholder="" />
        <div className="w-full bg-gray-700 p-3 grid grid-cols-4 grid-rows-5 gap-1">
            <Numbers text="AC" color="bg-white" width="w-16" height="h-16"/>
            <Numbers text="+/-" color="bg-white" width="w-16" height="h-16"/>
            <Numbers text="%" color="bg-white" width="w-16" height="h-16"/>
            <Numbers text="/" color="bg-orange-500" width="w-16" height="h-16"/>
            <Numbers text="7" color="bg-white" width="w-16" height="h-16"/>
            <Numbers text="8" color="bg-white" width="w-16" height="h-16"/>
            <Numbers text="9" color="bg-white" width="w-16" height="h-16"/>
            <Numbers text="*" color="bg-orange-500" width="w-16" height="h-16"/>
            <Numbers text="4" color="bg-white" width="w-16" height="h-16"/>
            <Numbers text="5" color="bg-white" width="w-16" height="h-16"/>
            <Numbers text="6" color="bg-white" width="w-16" height="h-16"/>
            <Numbers text="-" color="bg-orange-500" width="w-16" height="h-16"/>
            <Numbers text="1" color="bg-white" width="w-16" height="h-16"/>
            <Numbers text="2" color="bg-white" width="w-16" height="h-16"/>
            <Numbers text="3" color="bg-white" width="w-16" height="h-16"/>
            <Numbers text="+" color="bg-orange-500" width="w-16" height="h-16"/>
            <Numbers text="0" color="bg-white" width="w-32" height="h-16" colsp="2"/>
            <Numbers text="" color="bg-white" width="w-16" height="h-16"/>
            <Numbers text="." color="bg-white" width="w-16" height="h-16"/>
            <Numbers text="=" color="bg-orange-500" width="w-16" height="h-16"/>
        </div>
      </div>
     </div>
      </>
  )
}