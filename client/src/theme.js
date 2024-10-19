// color design tokens export with Charcoal and Light Cyan
export const tokensDark = {
  grey: {
    0: "#ffffff", 
    10: "#f6f6f6", 
    50: "#f0f0f0", 
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000", // manually adjusted for true black
  },
  primary: {
    // Charcoal
    100: "#d4d4d4",  // lightest Charcoal
    200: "#a9a9a9",  
    300: "#7f7f7f",  
    400: "#545454",  
    500: "#2a2a2a",  // primary Charcoal
    600: "#222222",  // manually adjusted
    700: "#1b1b1b",
    800: "#141414",
    900: "#0a0a0a",  // near black
  },
  secondary: {
    // Light Cyan
    50: "#e0f7f9",   // lightest
    100: "#b3eff2",  
    200: "#80e7ec",  
    300: "#4ddfe6",  // primary Light Cyan
    400: "#1ad7df",  
    500: "#00bcd4",  // deeper cyan
    600: "#0099aa",  
    700: "#006b77",
    800: "#003f44",  
    900: "#001f22",  // darkest shade
  },
};

// function to reverse the tokens
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// MUI theme settings with Charcoal and Light Cyan
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400], // Charcoal
              light: tokensDark.primary[300],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[300], // Light Cyan
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.primary[700], // dark grey / near black background
              alt: tokensDark.primary[600],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.primary[100], // Light Charcoal
              light: tokensDark.primary[200],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[400], // Lighter Cyan in light mode
              light: tokensDark.secondary[500],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.grey[0],   // white background in light mode
              alt: tokensDark.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
