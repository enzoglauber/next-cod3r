import Link from 'next/link'
import { useRouter } from 'next/router'

export default function search() {
  const { query } = useRouter()

  return (
    <div>
      <h1>Rotas / {query.id} / Search!!</h1>
      <Link href="/routes" passHref>
        <button>Voltar</button>
      </Link>
    </div>
  )
}
