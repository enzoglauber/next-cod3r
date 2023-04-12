interface Student {
  id: number
  name: string
  email: number
}

interface StudentByIdProps {
  student: Student
}

export async function getStaticPaths() {
  const response = await fetch(`http://localhost:3000/api/students/tutors`)
  const ids = await response.json()

  const paths = ids.map((id) => ({
    params: {
      id: `${id}`
    }
  }))

  return {
    fallback: true, // false = 404, true = It escapes getStaticPaths and goes directly to getStaticProps
    paths
  }
}

export async function getStaticProps({ params }) {
  const response = await fetch(`http://localhost:3000/api/students/${params.id}`)
  const student = await response.json()
  return {
    props: {
      student
    }
  }
}

export default function StudentById({ student }: StudentByIdProps) {
  return (
    <div>
      <h1>Student detail</h1>
      {student ? (
        <ul>
          <li>{student.id}</li>
          <li>{student.name}</li>
          <li>{student.email}</li>
        </ul>
      ) : (
        false
      )}
    </div>
  )
}
