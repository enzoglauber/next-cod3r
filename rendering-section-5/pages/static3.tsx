// import { useEffect, useState } from 'react'

export function getStaticProps() {
  return {
    revalidate: 7, // INCREMENTAL STATIC REGENERATION
    props: {
      number: Math.random()
    }
  }
}

interface Static3Props {
  number: number
}

export default function Static3({ number }: Static3Props) {
  // const [num, setNum] = useState(0)
  // useEffect(() => {
  //   setNum(Math.random())
  // }, [])

  return (
    <>
      <h1>Static #03</h1>
      <h2>{number}</h2>
    </>
  )
}
