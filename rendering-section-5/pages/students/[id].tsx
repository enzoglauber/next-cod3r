export function getStaticPaths() {
  return {
    fallback: false, // 404
    paths: [{ params: { id: `1` } }, { params: { id: `2` } }, { params: { id: `3` } }]
  }
}
export function getStaticProps() {
  return {
    props: {}
  }
}

export default function StudentById() {
  return (
    <div>
      <h1>Student detail</h1>
    </div>
  )
}
