
import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "../src/assets/data"

export default function App() {
  let Entries = data.map((d)=>{
    return <Entry 
    img={d.img} 
    title={d.title} 
    country={d.country} 
    googleMapsLink={d.googleMapsLink} 
    dates={d.dates} 
    text={d.text}
    />
  })
  return (
      <>
        <div className="">
          <Header />
          {Entries}
        </div>
      </>
  )
}
