import Layout from '@/components/Layout'
import Table from '@/components/Table'
import Customer from '@/core/customer'

export default function Home() {
  const customers = [
    new Customer(`Jair`, 22, '2x'),
    new Customer(`Ana`, 34, '1'),
    new Customer(`Bia`, 45, '2'),
    new Customer(`Carlos`, 33, '3')
  ]
  return (
    <div
      className={`
        flex h-screen justify-center items-center
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
      `}
    >
      <Layout title="Simple Register">
        <Table customers={customers} />
      </Layout>
    </div>
  )
}
