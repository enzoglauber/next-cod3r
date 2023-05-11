'use client'
import Button from '@/components/Button'
import Form from '@/components/Form'
import Layout from '@/components/Layout'
import Table from '@/components/Table'
import Customer from '@/core/customer'
import { useState } from 'react'

enum Kind {
  table,
  form
}

export default function Home() {
  const [kind, setKind] = useState<Kind>(Kind.table)
  const [customer, setCustomer] = useState<Customer>(Customer.empty())

  const customers = [
    new Customer(`Jair`, 22, '2x'),
    new Customer(`Ana`, 34, '1'),
    new Customer(`Bia`, 45, '2'),
    new Customer(`Carlos`, 33, '3')
  ]

  const onSelected = (customer: Customer) => {
    console.log(`selected`, customer)
    setKind(Kind.form)
    setCustomer(customer)
  }

  const onRemoved = (customer: Customer) => {
    console.log(`remove`, customer)
  }

  const handleNewCustomer = () => {
    setCustomer(Customer.empty())
    setKind(Kind.form)
  }

  const handleCancel = () => {
    setKind(Kind.table)
  }

  const handleSaveCustomer = (customer: Customer) => {
    setKind(Kind.table)
    console.log(customer, Kind.table)
  }

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
