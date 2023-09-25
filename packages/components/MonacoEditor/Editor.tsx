import { useRef, useEffect } from 'react'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import { Button, Card } from 'antd'

// monaco use example
// https://github.com/microsoft/monaco-editor/blob/main/samples/browser-esm-vite-react/src/components/Editor.tsx
const Editor: React.FC = () => {
  const monacoEl = useRef(null)
  const editor = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)
  useEffect(() => {
    editor.current = monaco.editor.create(monacoEl.current!, {
      value: '',
      language: 'yaml',
    })

    editor.current &&
      editor.current.onDidChangeModelContent(() => {
        console.log(editor.current?.getValue())
      })
  }, [])

  return (
    <Card
      type="inner"
      title="Monaco"
      extra={
        <div>
          <Button>Save</Button>
        </div>
      }
    >
      <div style={{ height: '300px' }} ref={monacoEl}></div>
    </Card>
  )
}

export default Editor
