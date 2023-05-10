interface ButtonProps {
  color?: 'green' | 'blue' | 'gray'
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  children?: React.ReactNode
}

export default function Button({ children, className, onClick, color = 'gray' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        bg-gradient-to-r from-${color}-400 to-${color}-700
        text-white px-4 py-2 rounded-md
        ${className ?? ``}
      `}
    >
      {children}
    </button>
  )
}
