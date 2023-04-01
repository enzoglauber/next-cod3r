import { useRouter } from 'next/router';

export default function params() {
  const { query } = useRouter()

  return (
    <div>
      <h1>Rotas / {query.id} / params: {query.name}</h1>
    </div>
  )
}