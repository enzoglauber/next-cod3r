import Link from 'next/link'
import router from 'next/router'

export default function routes() {
  const simpleNavegation = () => {
    router.push('routes/456/Enzo')
  }

  const paramsNavegation = () => {
    router.push({
      pathname: 'routes/params',
      query: {
        id: 666,
        name: 'Abestado'
      }
    })
  }

  return (
    <div>
      <h1>Rotas Index</h1>
      <ul>
        <Link href="routes/params?id=666&name=Abestado" passHref>
          <li>Params</li>
        </Link>
        <Link href="routes/123/search" passHref>
          <li>Buscar</li>
        </Link>
        <Link href="routes/456/Enzo" passHref>
          <li>Buscar 2</li>
        </Link>
      </ul>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <button onClick={() => router.push('routes/123/search')}>Search</button>
        <button onClick={simpleNavegation}>Enzo Glauber</button>
        <button onClick={paramsNavegation}>Params</button>
      </div>
    </div>
  )
}
