import Customer from '@/core/customer'

interface TableProps {
  customers: Customer[]
}

export default function Table({ customers }: TableProps) {
  const header = (
    <tr>
      <th>Code</th>
      <th>Name</th>
      <th>Age</th>
    </tr>
  )

  const data = () =>
    customers?.map((customer, index) => (
      <tr key={index}>
        <td>{customer.id}</td>
        <td>{customer.name}</td>
        <td>{customer.age}</td>
      </tr>
    ))

  return (
    <table>
      <thead>{header}</thead>
      <tbody>{data()}</tbody>
    </table>
  )
}
