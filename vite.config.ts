import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'            //added

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  //added to find file path
  resolve:{
    alias:[{find:"@", replacement: path.resolve(__dirname, "src")}]
  }
})
