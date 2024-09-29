import "./App.css";
import NavBar from "./assets/components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JuegosView from './Views/JuegosView/JuegosView';
import AccesoriosView from './Views/AccesoriosView/AccesoriosView';
import RemerasView from './Views/RemerasView/RemerasView';
import ContactoView from './Views/ContactoView/ContactoView';
import ItemListContainer from "./assets/components/ItemListContainer/ItemListContainer";
import ItemDetailsContainer from "./assets/components/ItemDetailsContainer/ItemDetailsContainer";

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route exact path='/item/:id' element={<ItemDetailsContainer/>}/>
          <Route exact path='/contacto' element={<ContactoView/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
