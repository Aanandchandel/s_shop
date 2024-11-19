import './App.css';
import {BrowserRouter, Route,Routes} from  "react-router-dom"
import Home from './Pages/home';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { dark,light } from './store/theamSlice';

function App() {
  useEffect(()=>{
  },[])
  // useDispatch(dark())
  const theam=useSelector((state)=>state)
  console.log(theam.theamSlice,"......")
  return (
    <div className="App" style={theam}>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/h' element={
        <h1 style={{backgroundColor:'black',color:"wheat"}}>fffffff</h1>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}
export default   App;