export async function getStaticProps() {
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

interface Static4Props {
  products: Product[]
}

export default function Static4({ products }: Static4Props) {
  const renderProducts = () =>
    products?.map((product) => (
      <li key={product.id}>
        {product.name} has price ${product.value}
      </li>
    ))
  return (
    <>
      <h1>Static #03</h1>
      <ul>{renderProducts()}</ul>
    </>
  )
}
