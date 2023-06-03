import { dirname } from 'path'
import { fileURLToPath } from 'url';
export const __dirname = dirname(fileURLToPath(import.meta.url))



export function time() {
    let today = new Date()
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = today.getDate();
    // 
    let hours = today.getHours()
    let minute = today.getMinutes()
    let minutes = minute < 10? `0${minute}` : minute
    // 
    let current_date = {
      full_date: `Hora: ${hours}:${minutes} - Fecha: ${date}/${month}/${year} `,
      hour: `${hours}:${minutes}`
    }
    return current_date
  }