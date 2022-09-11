import "../../tailwind.css"

type ButtonOwnProps<E extends React.ElementType = React.ElementType> = {
  label: string
  as?: E
}

type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps>

const __DEFAULT_ELEMENT__ = 'button'

const Button = <E extends React.ElementType = typeof __DEFAULT_ELEMENT__> ({
  label,
  as,
  ...props
}: ButtonProps<E>) => {
  const Component = as || __DEFAULT_ELEMENT__

  return (
    <Component
      {...props}
      className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
      {label}
    </Component>
  )
}

export default Button
