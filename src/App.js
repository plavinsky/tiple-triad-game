//import logo from './logo.svg';
// import './App.css';

import {Route, Routes,} from "react-router-dom";
import Biography from "./pages/Biography/Biography";
import Main from "./pages/Main";
import Layout from "./components/Layout";
import Characters from "./pages/Characters";
import AboutGame from "./components/AboutGame";
import Contacts from "./components/Contacts";


function App() {

    return (
        <Routes>

            <Route path="/" element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path="characters" element={<Characters/>}/>
                <Route path="characters/:id" element={<Biography/>}/>
                <Route path="about" element={<AboutGame/>}/>
                <Route path="contacts" element={<Contacts/>}/>
            </Route>


        </Routes>
    )


}

export default App;
