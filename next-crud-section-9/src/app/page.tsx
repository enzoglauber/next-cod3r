'use client'
import Button from '@/components/Button'
import Form from '@/components/Form'
import Layout from '@/components/Layout'
import Table from '@/components/Table'
import CustomerRepository from '@/core/CustomerRepository'
import Customer from '@/core/customer'
import CustomerCollection from '@/firebase/db/CustomerCollection'
import { useEffect, useState } from 'react'

enum Kind {
  table,
  form
}

export default function Home() {
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

  const onSelected = (customer: Customer) => {
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
    console.log(customer)
    await customerRepository.save(customer)

    // .then(getAll)

    // setKind(2Kind.table)
  }

  useEffect(getAll, [])

  return (
    <div
      className={`
        flex h-screen justify-center items-center
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
      `}
    >
      <Layout title="Simple Register">
        {kind === Kind.table ? (
          <>
            <div className="flex justify-end">
              <Button className="mb-4" color="green" onClick={handleNewCustomer}>
                New Customer
              </Button>
            </div>
            <Table customers={customers} onSelected={onSelected} onRemoved={onRemoved} />
          </>
        ) : (
          <Form customer={customer} onCancel={handleCancel} onChange={handleSaveCustomer} />
        )}
      </Layout>
    </div>
  )
}
