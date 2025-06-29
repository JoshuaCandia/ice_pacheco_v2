/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#494544", // Azul noche - encabezados, texto fuerte
        secondary: "#F5F1ED", // Beige muy claro - fondo principal (mucho más claro)
        accent: "#C5896F", // Azul cielo - botones, íconos llamativos
        muted: "#5A5A5A", // Gris más oscuro para mejor contraste
        light: "#FAFAF9", // Fondo alternativo muy claro
        dark: "#1f2e5c", // Azul oscuro para contrastes o pie de página
        // Nuevos colores para mejor legibilidad
        "text-primary": "#2E2E2E", // Gris muy oscuro para títulos principales
        "text-secondary": "#3A3A3A", // Gris oscuro para texto secundario
        "text-muted": "#444444", // Gris medio para descripciones
        // Mantenemos algunos colores legacy para compatibilidad
        "white-light": "#fdfdfd",
        "sky-blue": "#C5896F",
        "faith-blue": "#494544",
        "warm-beige": "#F5F1ED", // Actualizado para ser más claro
        "light-gold": "#C5896F",
        "soft-gray": "#5A5A5A", // Más oscuro para mejor contraste
        "hope-green": "#95c38a",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-up": {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "scale-up": "scale-up 0.3s ease-out",
      },
    },
  },
  plugins: [],
};