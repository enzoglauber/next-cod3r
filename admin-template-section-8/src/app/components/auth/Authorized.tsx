import useAuth from '@/app/data/hook/useAuth'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import spinner from '../../../../public/images/spinner.gif'

interface AuthorizedProps {
  children?: React.ReactNode
}

export default function Authorized(props: AuthorizedProps) {
  const router = useRouter()
  const { user, loading } = useAuth()

  const render = () => (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if(!document.cookie?.includes("auth")) {
                window.location.href="/auth"
              }
            `
          }}
        />
      </Head>
      {props.children}
    </>
  )
  const loader = () => (
    <div
      className={`
        flex justify-center items-center h-screen
      `}
    >
      <Image src={spinner} height={100} width={100} alt="" />
    </div>
  )

  if (!loading && user?.email) {
    return render()
  } else if (loading) {
    return loader()
  } else {
    router.push('/auth')
    return null
  }
}
