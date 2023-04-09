import { useState, useMemo, createContext } from "react";
import { createTheme } from "@mui/material/styles";


// colors design tokens

export const tokens = (mode) => ({
    ...(mode === 'dark'
        ? {
            grey: {
                100: "#cfcfcf",
                200: "#a0a0a0",
                300: "#707070",
                400: "#414141",
                500: "#111111",
                600: "#0e0e0e",
                700: "#0a0a0a",
                800: "#070707",
                900: "#030303"
            },
            primary: {
                100: "#d6d6d6",
                200: "#adadad",
                300: "#858585",
                400: "#5c5c5c",
                500: "#333333",
                600: "#292929",
                700: "#1f1f1f",
                800: "#141414",
                900: "#0a0a0a"
            },
            redAccent: {
                100: "#ffcccc",
                200: "#ff9999",
                300: "#ff6666",
                400: "#ff3333",
                500: "#ff0000",
                600: "#cc0000",
                700: "#990000",
                800: "#660000",
                900: "#330000"
            },
            greenAccents: {
                100: "#cce6cc",
                200: "#99cc99",
                300: "#66b366",
                400: "#339933",
                500: "#008000",
                600: "#006600",
                700: "#004d00",
                800: "#003300",
                900: "#001a00"
            },
            blueAccent: {
                100: "#ccccff",
                200: "#9999ff",
                300: "#6666ff",
                400: "#3333ff",
                500: "#0000ff",
                600: "#0000cc",
                700: "#000099",
                800: "#000066",
                900: "#000033"
            },
        }
        :
        {
            grey: {
                100: "#030303",
                200: "#070707",
                300: "#0a0a0a",
                400: "#0e0e0e",
                500: "#111111",
                600: "#414141",
                700: "#707070",
                800: "#a0a0a0",
                900: "#cfcfcf",
            },
            primary: {
                100: "#0a0a0a",
                200: "#141414",
                300: "#1f1f1f",
                400: "#292929",
                500: "#333333",
                600: "#5c5c5c",
                700: "#858585",
                800: "#adadad",
                900: "#d6d6d6",
            },
            redAccent: {
                100: "#330000",
                200: "#660000",
                300: "#990000",
                400: "#cc0000",
                500: "#ff0000",
                600: "#ff3333",
                700: "#ff6666",
                800: "#ff9999",
                900: "#ffcccc",
            },
            greenAccents: {
                100: "#001a00",
                200: "#003300",
                300: "#004d00",
                400: "#006600",
                500: "#008000",
                600: "#339933",
                700: "#66b366",
                800: "#99cc99",
                900: "#cce6cc",
            },
            blueAccent: {
                100: "#000033",
                200: "#000066",
                300: "#000099",
                400: "#0000cc",
                500: "#0000ff",
                600: "#3333ff",
                700: "#6666ff",
                800: "#9999ff",
                900: "#ccccff",
            },
        })
})


// mui theme settings

export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
                ? {
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.greenAccents[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        dark: colors.grey[500],
                        dark: colors.grey[100],
                    },
                    background: {
                        default: colors.primary[500]
                    }
                } : {
                    primary: {
                        main: colors.primary[100],
                    },
                    secondary: {
                        main: colors.greenAccents[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: "#fcfcfc",
                    },
                }),
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            }
        }
    };
};

// create react Context for color mode

export const ColorModeContext = createContext({
    toggleColorMode: () => { }
})

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prevMode) => prevMode === "light" ? "dark" : "light")
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [colorMode, theme];
}


//STOPPED WATCHING AT 33:56 / 4:04:24

