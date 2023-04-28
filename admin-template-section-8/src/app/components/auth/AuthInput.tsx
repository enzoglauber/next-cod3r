import { HTMLInputTypeAttribute } from 'react'

export interface AuthInputProps {
  label: string
  value: any
  type?: HTMLInputTypeAttribute
  name: string
  required?: boolean
  onChange: (value: string) => void
}

export default function AuthInput({
  name,
  type = 'text',
  value,
  label,
  onChange,
  ...props
}: AuthInputProps) {
  return (
    <div className="flex flex-col">
      <div className="text-lg">
        <label
          htmlFor={`${name}`}
          className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
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
      />
    </div>
  )
}
