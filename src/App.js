import React from 'react'
import { ColorModeContext, useMode } from './themes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import './App.css';

const App = () => {
    const [colorMode, theme] = useMode();


    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <main className="content"></main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App