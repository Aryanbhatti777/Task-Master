
import { Route, Routes } from 'react-router-dom'
import './index.css'
import Tasks from './pages/Tasks'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/tasks' element={<Tasks/>}></Route>
      </Routes>
    </>
  )
}

export default App
