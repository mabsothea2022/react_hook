import MasterLayout from './components/organisms/layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MasterLayout/>}>    {/*root for all route*/}
          <Route path='' element={<HomePage/>}/>
          {/* <Route path='*' element={<notFoundPage/>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
