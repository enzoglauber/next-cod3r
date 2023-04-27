'use client'
import Layout from '../components/template/Layout'
import useApp from '../data/hook/useApp'

export default function News() {
  const data = useApp()
  return (
    <Layout title="News" subtitle="Here you are menage your notifications">
      {/* <AppConsumer>{(values) => <h3>{values.name}</h3>}</AppConsumer> */}
      <h3>{data?.name}</h3>
    </Layout>
  )
}
