import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from 'react-three-fiber';
import Sphere from './components/Sphere';
import Light from './components/Light';
import KeyLight from './components/KeyLight';
import Backdrop from './components/Backdrop';
import GroundPlane from './components/GroundPlane';
import FillLight from './components/FillLight';
import RimLight from './components/RimLight';

function App() {
  return (
  <Canvas>
    <KeyLight brightness={10} color={"#ffbdf4e"} />
    <FillLight brightness={2.6} color="#bdefff"/>
    <Light brightness={10} color={"#eeeeee"}/>
    <RimLight brightness={54} color="#fff"/>
    <Sphere />
    <Backdrop/>
    <GroundPlane />
  </Canvas>
  )
}


export default App;
