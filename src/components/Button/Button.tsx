import "../../tailwind.css"

interface ButtonProps {
  label: string
}

const Button = ({ label }: ButtonProps ) => {
  return (
    <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">{label}</button>
  )
}
 
export default Button
