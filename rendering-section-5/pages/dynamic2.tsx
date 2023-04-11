export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/products')
  const products = await response.json()

  return {
    props: {
      products
    }
  }
}

interface Product {
  id: number
  name: string
  value: number
}

interface Dynamic2Props {
  products: Product[]
}

export default function Dynamic2({ products }: Dynamic2Props) {
  const renderProducts = () =>
    products?.map((product) => (
      <li key={product.id}>
        {product.id} - {product.name} has price ${product.value}
      </li>
    ))
  return (
    <>
      <h1>Dynamic #02</h1>
      <ul>{renderProducts()}</ul>
    </>
  )
}
