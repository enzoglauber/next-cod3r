export function getServerSideProps() {
  return {
    props: {
      num: Math.random()
    }
  }
}

interface Dynamic1Props {
  num: number
}
export default function Dynamic1({ num }: Dynamic1Props) {
  return (
    <div>
      <h1>Dynamic #01</h1>
      {num}
    </div>
  )
}
