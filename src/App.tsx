import { TextInput } from './components/TextInput'
import './styles/global.css'

export function App () {
  return (
        <>
            <h1 className="font-bold text-2xl text-violet-500">Oi</h1>

            <TextInput />
            <button className="bg-violet-500 font-medium px-4 py-2 rounded text-white hover:bg-violet-600">Button</button>
        </>
  )
}
