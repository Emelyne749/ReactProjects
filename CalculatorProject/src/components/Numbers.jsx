export default function Numbers({ text, color, width, height, colsp }) {
  const spanClass = colsp === "2" ? "col-span-2" : ""

  return (
    <button
      className={`text-gray-800 font-semibold rounded-lg text-2xl font-bold shadow-md 
      ${width} ${height} ${color} ${spanClass} hover:opacity-90 transition`}
    >
      {text}
    </button>
  )
}