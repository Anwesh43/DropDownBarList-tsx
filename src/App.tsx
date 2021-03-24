import React from 'react';
import logo from './logo.svg';
import './App.css';
import DropDownBarList from './DropdownBarList'
import {useStyle, useAnimatedScale, useDimension} from './hooks'

function App() {
  const {w, h} = useDimension()
  const {scale, start} = useAnimatedScale()
  const {barStyle} = useStyle(w, h, scale, 0)
  return (
    <div className="App">
        <DropDownBarList w = {w} h = {w} scale = {scale} onClick = {start}>
            <div style = {barStyle()}>
                Hello
            </div>
            <div style = {barStyle()}>
                Hello1
            </div>
            <div style = {barStyle()}>
                Hello2
            </div>
            <div style = {barStyle()}>
                Hello3
            </div>
            <div style = {barStyle()}>
                Hello4
            </div>
        </DropDownBarList>
    </div>
  );
}

export default App;
