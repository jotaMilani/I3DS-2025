import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000, //porta para conexao, altere quando necessario
    open:true, //abre automagicamente o navegador e inicia o servidor
    host:true, //habilitar rede externa
  }
})
