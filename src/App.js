import React from 'react'
import { ColorModeContext, useMode } from './themes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";

// import './App.css';

const App = () => {
    const [colorMode, theme] = useMode();


    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <main className="content">
                        <Topbar />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App