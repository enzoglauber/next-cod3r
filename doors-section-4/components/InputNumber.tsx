import styles from '../styles/InputNumber.module.css'

interface InputNumberProps {
  text: string
  value: number
  onChange: (value: number) => void
}

function InputNumber({ text, value, onChange }: InputNumberProps) {
  const dec = () => {
    onChange(value - 1)
  }

  const inc = () => {
    onChange(value + 1)
  }

  return (
    <div className={styles.container}>
      <span className={styles.text}>{text}</span>
      <span className={styles.value}>{value}</span>
      <div className={styles.buttons}>
        <div className={styles.btn} onClick={dec}>
          -
        </div>
        <div className={styles.btn} onClick={inc}>
          +
        </div>
      </div>
    </div>
  )
}

export default InputNumber
