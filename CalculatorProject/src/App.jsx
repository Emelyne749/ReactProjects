import Numbers from "./components/Numbers"

export default function App() {
  return (
      <>
      <div className="flex justify-center bg-gray-100">
      <div className="w-100 h-200  p-4">
        <input type="text" className="bg-gray-800 text-white border border-gray-100 focus:outline-none focus:ring-2 
        focus:ring-blue-500 w-full h-30" placeholder="" />
        <div className="w-4xs h-120 bg-gray-700 p-3 grid grid-cols-4 grid-rows-5 gap-3 mt-3">
            <Numbers text="1" color="bg-white" width="w-20" height="h-20"/>
            <Numbers text="2" color="bg-white" width="w-20" height="h-20"/>
            <Numbers text="3" color="bg-white" width="w-20" height="h-20"/>
            <Numbers text="+" color="bg-orange-500" width="w-20" height="h-20"/>
            <Numbers text="1" color="bg-white" width="w-20" height="h-20"/>
            <Numbers text="2" color="bg-white" width="w-20" height="h-20"/>
            <Numbers text="3" color="bg-white" width="w-20" height="h-20"/>
            <Numbers text="+" color="bg-orange-500" width="w-20" height="h-20"/>
                        <Numbers text="1" color="bg-white" width="w-20" height="h-20"/>
            <Numbers text="2" color="bg-white" width="w-20" height="h-20"/>
            <Numbers text="3" color="bg-white" width="w-20" height="h-20"/>
            <Numbers text="+" color="bg-orange-500" width="w-20" height="h-20"/>
                        <Numbers text="1" color="bg-white" width="w-20" height="h-20"/>
            <Numbers text="2" color="bg-white" width="w-20" height="h-20"/>
            <Numbers text="3" color="bg-white" width="w-20" height="h-20"/>
            <Numbers text="+" color="bg-orange-500" width="w-20" height="h-20"/>
            <Numbers text="1" color="bg-white" width="w-20" height="h-20"/>
            <Numbers text="2" color="bg-white" width="w-20" height="h-20"/>
            <Numbers text="3" color="bg-white" width="w-20" height="h-20"/>
            <Numbers text="+" color="bg-orange-500" width="w-20" height="h-20"/>
        </div>
      </div>
     </div>
      </>
  )
}