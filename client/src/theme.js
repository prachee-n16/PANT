import { useMemo, useState } from "react";
import { createTheme } from "@mui/material";

export const Theme = () => {
  const [mode, setMode] = useState("dark");

  let theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#FFFFFF" },
          secondary: { main: "#444444" },
        },
        typography: {
          fontFamily: "Inter, sans-serif",
          h1: {
            fontWeight: 600,
          },
        },
      }),
    [mode]
  );

  return { theme, mode };
};
