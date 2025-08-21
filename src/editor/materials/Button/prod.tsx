import { Button as AntdButton } from 'antd'
import type { CommonComponentProps } from '../../interface'

export default function Button({id, type, text, styles}: CommonComponentProps) {
  return (
    <AntdButton type={type} style={styles}>{text}</AntdButton>
  )
}
