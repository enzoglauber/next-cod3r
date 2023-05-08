import Customer from '@/core/customer'

interface TableProps {
  customers: Customer[]
}

export default function Table({ customers }: TableProps) {
  const header = (
    <tr>
      <th className={`text-left p-4`}>Code</th>
      <th className={`text-left p-4`}>Name</th>
      <th className={`text-left p-4`}>Age</th>
    </tr>
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
