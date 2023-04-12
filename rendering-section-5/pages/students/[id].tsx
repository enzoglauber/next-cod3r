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
    fallback: false, // 404 when its dont find
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

export default function StudentById(props: StudentByIdProps) {
  return (
    <div>
      <h1>Student detail</h1>
      <ul>
        <li>{props.student.id}</li>
        <li>{props.student.name}</li>
        <li>{props.student.email}</li>
      </ul>
    </div>
  )
}
