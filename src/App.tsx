import React, { useState, useMemo } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { SketchPicker } from 'react-color';

import Buttons from './Buttons';

function App() {
  const [primaryColor, setPrimaryColor] = useState('#368F9C')

  const handleColorChange = ({ hex }: {hex: string}) => setPrimaryColor(hex)

  const theme = useMemo(() => {
    return {
      colors: {
        primary: primaryColor,
        disabled: '#dadbde',
        disabledText: '#727478',
        success: '#66bb6a',
        error: '#f44336'
      }
    }
  } , [primaryColor])

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <SketchPicker
        color={primaryColor}
        onChangeComplete={ handleColorChange }
        />
        <Buttons/>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
