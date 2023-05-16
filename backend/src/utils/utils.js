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
    let minutes = today.getMinutes()
    // 
    let current_date = `Fecha: ${date}/${month}/${year} - Hora: ${hours}:${minutes}`
    return current_date
}