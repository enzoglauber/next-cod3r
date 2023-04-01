import { useRouter } from 'next/router';

export default function name() {
  const { query } = useRouter()

  return (
    <div>
      <h1>Rotas / {query.id} / {query.name}</h1>
    </div>
  )
}