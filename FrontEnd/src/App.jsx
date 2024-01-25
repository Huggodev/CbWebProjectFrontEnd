import './styless/App.css'
import NavBar from './components/NavBar/NavBar'
import SimpleRoutes from './routes/SimpleRoutes'
import { Route, Routes } from 'react-router-dom'
import Admin from "./routes/Admin"
import AgregarArticulo from './routes/AgregarArticulo'
import AgregarImagen from './routes/AgregarImagen'
import AgregarTurno from './routes/AgregarTurno'
import EliminarArticulo from './routes/EliminarArticulo'
import EliminarImagen from './routes/EliminarImagen'
import EliminarTurno from './routes/EliminarTurno'
import EditarArticulo from './routes/EditarArticulo'
import EditarTurno from './routes/EditarTurno'


function App() {


  return (
    <>
      <NavBar />
      <SimpleRoutes />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path='/admin/agregarImagen' element={<AgregarImagen />} />
        <Route path='/admin/eliminarImagen' element={<EliminarImagen />} />
        <Route path='/admin/agregarArticulo' element={<AgregarArticulo />} />
        <Route path='/admin/editarArticulo/:id' element={<EditarArticulo />} />
        <Route path='admin/eliminarArticulo' element={<EliminarArticulo />} />
        <Route path='/admin/agregarTurno' element={<AgregarTurno />} />
        <Route path='/admin/editarTurno/:id' element={<EditarTurno />} />
        <Route path='/admin/eliminarTurno' element={<EliminarTurno />} />
      </Routes>
    </>
  )
}

export default App
