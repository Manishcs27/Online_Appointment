/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6d28d9', // Purple
          DEFAULT: '#4f46e5', // Indigo
          dark: '#1e1b4b',
        },
        accent: {
          teal: '#2dd4bf',
          blue: '#3b82f6',
          green: '#22c55e',
        }
      },
      backgroundImage: {
        'gradient-main': 'radial-gradient(circle at top left, #2980b9 0%, #2c3e50 100%)',
        'ref-gradient': 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 40%, #2dd4bf 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-teal': '0 0 20px rgba(45, 212, 191, 0.5)',
        'glow-purple': '0 0 20px rgba(109, 40, 217, 0.5)',
        'glow-green': '0 0 20px rgba(34, 197, 94, 0.5)',
      },
      backdropBlur: {
        'glass': '12px',
      },
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
