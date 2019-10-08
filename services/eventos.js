import { server } from './config'

const headers = {
  'Accept':       'application/json',
  'Content-Type': 'application/json'
}

export default {
    async getSolicitudes (data) {
        let config = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headers
        }
        return fetch(`${server}/api/eventos/getFiestasProveedor`, config) 
    },  
    async getCotizaciones (data) {
        let config = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headers
        }
        return fetch(`${server}/api/cotizaciones/getCotizaciones`, config) 
    },
    async cotizar (data) {
        let config = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headers
        }
        return fetch(`${server}/api/cotizaciones/nuevaCotizacion`, config) 
    }, 
    async getFiesta (data) {
        let config = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headers
        }
        return fetch(`${server}/api/eventos/getFiestaById`, config) 
    },  
}