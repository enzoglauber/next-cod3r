import { Kind } from '@/constants/Kind'
import CustomerRepository from '@/core/CustomerRepository'
import Customer from '@/core/customer'
import CustomerCollection from '@/firebase/db/CustomerCollection'
import { useEffect, useState } from 'react'

export default function useCustomer() {
  const customerRepository: CustomerRepository = new CustomerCollection()
  const [kind, setKind] = useState<Kind>(Kind.table)
  const [customer, setCustomer] = useState<Customer>(Customer.empty())
  const [customers, setCustomers] = useState<Customer[]>([])

  const getAll = () => {
    customerRepository.getAll().then((data) => {
      setKind(Kind.table)
      setCustomers(data)
    })
  }

  const onSelected = async (customer: Customer) => {
    setKind(Kind.form)
    setCustomer(customer)
  }

  const onRemoved = async (customer: Customer) => {
    await customerRepository.remove(customer)
    getAll()
  }

  const handleNewCustomer = () => {
    setCustomer(Customer.empty())
    setKind(Kind.form)
  }

  const handleCancel = () => {
    setKind(Kind.table)
  }

  const handleSaveCustomer = async (customer: Customer) => {
    await customerRepository.save(customer).then(getAll)
    setKind(Kind.table)
  }

  useEffect(getAll, [])

  return {
    kind,
    customer,
    customers,
    getAll,
    onSelected,
    onRemoved,
    handleNewCustomer,
    handleCancel,
    handleSaveCustomer
  }
}
