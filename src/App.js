//import React, { useEffect, useState} from 'react';
import './App.css';
import TopAppBar from './Components/AppBar';
import { 
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import Counties from "./routes/counties";
import County from "./routes/county";
import MyMap from "./routes/usmap"
//import ControlModal from './Components/ControlModal';
//import ZoomModal from './Components/ZoomModal';


function App() {
  
  //useEffect(() => {
		//setOpen(true);
	//}, []);
  //const [open, setOpen] = useState(false);
  //const handleOpen = () => setOpen(true);
  //const handleClose = () => {
    //setOpen(false);
    //setOpenChild(true)
  //}
  //const [openChild, setOpenChild] = useState(false);
  //const handleOpenChild = () => setOpenChild(true);
  //const handleCloseChild = () => setOpenChild(false);


  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<TopAppBar />} >
        <Route path="usmap" element={<MyMap />}/>
        <Route path="counties" element={<Counties />}>
        <Route path=":countyId" element={<County />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
      </Route>
    </Routes>
      {/*<ControlModal handleOpen={handleOpen} handleClose={handleClose} open={open}/>*/}
      {/*<ZoomModal handleOpen={handleOpenChild} handleClose={handleCloseChild} open={openChild}/>*/}
    <Outlet />
    <p> Welcome to AdaptationApps.com. This application provides detailed information on over 2,000 U.S. communities that have implemented buyouts utilizing FEMA grant funds. </p>
    </div>
  );
}

export default App;
