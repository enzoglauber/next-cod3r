import Customer from '@/core/customer'
import { useState } from 'react'
import Button from './Button'
import Input from './Input'

interface FormProps {
  customer?: Customer
}

export default function Form({ customer }: FormProps) {
  const id = customer?.id
  const [name, setName] = useState(customer?.name ?? '')
  const [age, setAge] = useState(customer?.age ?? 0)

  return (
    <form
      className={`
        flex flex-col gap-4
      `}
    >
      {id ? <Input label="Code" value={id} /> : false}
      <Input label="Name" value={name} onChange={setName} />
      <Input label="Age" value={age} type="number" onChange={setAge} />
      <div className="flex justify-end">
        <Button className="mr-2">Cancelar</Button>
        <Button color="blue">{id ? 'Update' : 'Register'}</Button>
      </div>
    </form>
  )
}
