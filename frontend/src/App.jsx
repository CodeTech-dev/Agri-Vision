import { Routes, Route } from 'react-router'
import Dashboard from './pages/Dashboard'
import DiagnosticsPage from './pages/DiagnosticsPage'
import Layout from './Components/Layout'
import MyCrops from './pages/MyCrops'
import Settings from './pages/Settings'


const App = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />}/>
                <Route path='/diagnostics' element={<DiagnosticsPage />}/>
                <Route path='/crops' element={<MyCrops />}/>
                <Route path='/settings' element={<Settings />}/>
            </Route>
        </Routes>
    </div>
  )
}

export default App