// import { useEffect, useState } from 'react'

export function getStaticProps() {
  return {
    props: {
      number: Math.random()
    }
  }
}

interface Static2Props {
  number: number
}

export default function Static2({ number }: Static2Props) {
  // const [num, setNum] = useState(0)
  // useEffect(() => {
  //   setNum(Math.random())
  // }, [])

  return (
    <>
      <h1>Static #02</h1>
      <h2>{number}</h2>
    </>
  )
}
