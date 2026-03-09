export default function Numbers({ text, color, width, height, colsp }) {
  return (
    <button
      className={`text-gray-800 font-semibold rounded-lg text-2xl font-bold shadow-md ${width} ${height} ${color} ${colsp ? `col-span-${colsp}` : ''} hover:opacity-90 transition`}
    >
      {text}
    </button>
  )
}