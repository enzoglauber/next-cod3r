import Link from 'next/link'
import { useRouter } from 'next/router'

export default function params() {
  const { query } = useRouter()

  return (
    <div>
      <h1>
        Rotas / {query.id} / params: {query.name}
      </h1>
      <Link href="/routes">
        <button>Voltar</button>
      </Link>
    </div>
  )
}
