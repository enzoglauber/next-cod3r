import Customer from '@/core/customer'
import { Edit, Trash } from './Icons'

interface TableProps {
  customers: Customer[]
  onSelected?: (customer: Customer) => void
  onRemoved?: (customer: Customer) => void
}

export default function Table({ customers, onSelected, onRemoved }: TableProps) {
  const showActions = onSelected || onRemoved
  const header = (
    <tr>
      <th className={`text-left p-4`}>Code</th>
      <th className={`text-left p-4`}>Name</th>
      <th className={`text-left p-4`}>Age</th>
      {showActions ? <th className={`text-center p-4`}>Actions</th> : false}
    </tr>
  )

  const actions = (customer: Customer) => (
    <td className={`p-4 flex justify-center items-center`}>
      {onSelected ? (
        <button
          onClick={() => onSelected(customer)}
          className={`
            flex justify-center items-center text-green-600 rounded-full
            hover:bg-purple-50 p-2 m-1
          `}
        >
          {Edit}
        </button>
      ) : (
        false
      )}

      {onRemoved ? (
        <button
          onClick={() => onRemoved(customer)}
          className={`
            flex justify-center items-center text-red-500 rounded-full
            hover:bg-purple-50 p-2 m-1
          `}
        >
          {Trash}
        </button>
      ) : (
        false
      )}
    </td>
  )

  const data = () =>
    customers?.map((customer, index) => (
      <tr
        key={index}
        className={`
          ${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}
        `}
      >
        <td className={`text-left p-4`}>{customer.id}</td>
        <td className={`text-left p-4`}>{customer.name}</td>
        <td className={`text-left p-4`}>{customer.age}</td>
        {showActions && actions(customer)}
      </tr>
    ))

  return (
    <table
      className={`
        w-full rounded-xl overflow-hidden
      `}
    >
      <thead
        className={`
          text-gray-100
          bg-gradient-to-r from-purple-500 to-purple-800
        `}
      >
        {header}
      </thead>
      <tbody>{data()}</tbody>
    </table>
  )
}
