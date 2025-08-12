"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import 
 { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
