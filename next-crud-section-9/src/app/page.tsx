'use client'
import Button from '@/components/Button'
import Form from '@/components/Form'
import Layout from '@/components/Layout'
import Table from '@/components/Table'
import { Kind } from '@/constants/Kind'
import useCustomer from '@/hooks/useCustomer'

export default function Home() {
  const {
    kind,
    customer,
    handleNewCustomer,
    customers,
    onSelected,
    onRemoved,
    handleCancel,
    handleSaveCustomer
  } = useCustomer()

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
