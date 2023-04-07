import { ReactNode } from 'react'
import style from '../styles/Card.module.css'

interface CardProps {
  color?: string
  children?: ReactNode
}

function Card({ color, children }: CardProps) {
  return (
    <div
      className={style.card}
      style={{
        backgroundColor: color ?? '#fff'
      }}
    >
      {children}
    </div>
  )
}

export default Card
