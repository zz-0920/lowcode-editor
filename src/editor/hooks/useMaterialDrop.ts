import { useDrop } from 'react-dnd'
import { useComponentsStore } from '../stores/components'
import { useComponentConfigStore } from '../stores/component-config'
import { message } from 'antd'


export function useMaterialDrop(accept: string[], id: number) {
  const { addComponent } = useComponentsStore()
  const { componentConfig } = useComponentConfigStore()
  const [messageApi, contextHolder] = message.useMessage();

  const [{ canDrop }, dropRef] = useDrop(() => {
    return {
      accept,
      drop: (item: {type: string}, monitor) => {
        const didDrop = monitor.didDrop()  // 是否被动冒泡接受其他组件
        if (didDrop) return
        messageApi.success(item.type)
        // console.log(item)
        const props = componentConfig?.[item.type]?.defaultProps
        const desc = componentConfig?.[item.type]?.desc
        
        addComponent({
          id: new Date().getTime(),
          name: item.type,
          props: props,
          desc: desc,
          styles: {}
        }, id)
      },
      collect: (monitor) => {
        return {
          canDrop: monitor.canDrop()
        }
      }
    }
  })

  return {
    canDrop,
    dropRef,
    contextHolder
  }
}