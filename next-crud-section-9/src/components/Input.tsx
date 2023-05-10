import { HTMLInputTypeAttribute } from 'react'

interface InputProps {
  label: string
  value: any
  type?: HTMLInputTypeAttribute
  onChange?: (value: any) => void
  readOnly?: boolean
}

export default function Input({ label, value, onChange, readOnly, type = 'text' }: InputProps) {
  return (
    <div
      className={`
        flex flex-col gap-2
      `}
    >
      <label>{label}</label>
      <input
        type={type}
        value={value}
        readOnly={readOnly}
        onChange={(e) => onChange?.(e.target.value)}
        className={`
          border border-purple-500 rounded-lg 
          focus:outline-none bg-gray-100
          focus:bg-white focus:read-only:bg-gray-50
          px-4 py-2
        `}
      ></input>
    </div>
  )
}
