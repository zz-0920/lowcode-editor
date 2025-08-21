import type { CommonComponentProps } from '../../interface'
import { useMaterialDrop } from '../../hooks/useMaterialDrop'

export default function Container({ id, name, children, styles }: CommonComponentProps) {
  const { canDrop, dropRef, contextHolder } = useMaterialDrop(['Button', 'Container'], id)

  return (
    <>
      {contextHolder}
      <div
        data-component-id={id}
        ref={dropRef as any}
        className={`
          min-h-[100px] 
          p-[20px] 
          ${canDrop ? 'border-[2px] border-[blue]' : 'border-[1px] border-[#000]'}
        `}
        style={styles}
      >
        {children}
      </div>
    </>
  )
}
