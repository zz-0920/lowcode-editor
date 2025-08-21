import { Allotment } from "allotment";
import "allotment/dist/style.css";
import Header from './components/Header'
import MaterialWrapper from './components/MaterialWrapper'
import EditArea from './components/EditArea'
import Setting from './components/Setting'
import Prview from './components/Prview'
import { useComponentsStore } from './stores/components'

export default function LowcodeEditor() {
  const { mode } = useComponentsStore()
  
  return (
    <div className="h-[100vh] flex flex-col">
      <div className="h-[60px] flex items-center border-b-[1px] border-[#000]">
        <Header></Header>
      </div>
      {
        mode === 'edit' ? (
          <Allotment>
            <Allotment.Pane preferredSize={440} maxSize={300} minSize={200}>
              <MaterialWrapper />
            </Allotment.Pane>
            <Allotment.Pane>
              <EditArea></EditArea>
            </Allotment.Pane>
            <Allotment.Pane preferredSize={300} maxSize={500} minSize={300}>
              <Setting></Setting>
            </Allotment.Pane>
          </Allotment>
        ) : (
          <Prview />
        )
      }

    </div>
  )
}
