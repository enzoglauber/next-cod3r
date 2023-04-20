import Link from 'next/link'
import styles from '../styles/Button.module.css'

interface ButtonProps {
  text: string
  href?: string
  onClick: () => void
}

export default function Button({ text, href, onClick }: ButtonProps) {
  const renderButton = () => (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  )
  return href ? <Link href={href}>{renderButton()}</Link> : renderButton()
}
