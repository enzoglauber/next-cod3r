import { HTMLInputTypeAttribute } from 'react'

export interface AuthInputProps {
  label: string
  value: any
  type?: HTMLInputTypeAttribute
  name: string
  required?: boolean
  className?: string
  onChange: (value: string) => void
}

export default function AuthInput({
  name,
  type = 'text',
  value,
  label,
  onChange,
  className = '',
  ...props
}: AuthInputProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="text-lg">
        <label
          htmlFor={`${name}`}
          className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-indigo-500"
        >
          {label}
        </label>
      </div>
      <input
        id={`${name}`}
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        {...props}
        className={`
          px-4 py-3 rounded-lg bg-gray-200 mt-2
          border focus:border-blue-500 focus:outline-none focus:bg-white
        `}
      />
    </div>
  )
}
