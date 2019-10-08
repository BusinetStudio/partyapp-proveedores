import Eventos from '../services/eventos'
import Authentication from'../modules/authentication'

export default {
    async getSolicitudes () {
        let cotizaciones, data = {} , result, statusCode;
		try {
        data.servicios_solicitados = ["animacion","bebidas"]
        cotizaciones = await Eventos.getSolicitudes(data)
        statusCode = cotizaciones.status;
        if(statusCode !== 200) return false;
        result = await cotizaciones.json()
		} catch (error) {
			console.log(error)
			result = false;
		}
		return result;
    },
    async getCotizaciones () {
        let cotizaciones, data = {} , result, statusCode;
		try {
            await Authentication.currentToken().then((auth) => {
                if (auth) {
                  data.id_proveedor = auth.id
                }
            })
            cotizaciones = await Eventos.getCotizaciones(data)
            statusCode = cotizaciones.status;
            if(statusCode !== 200) return false;
            result = await cotizaciones.json()
		} catch (error) {
			console.log(error)
			result = false;
		}
		return result;
    },
    async getFiesta( data )
    {
        let fiesta, result, statusCode;
		try {
            fiesta = await Eventos.getFiesta(data)
            statusCode = fiesta.status;
            if(statusCode !== 200) return false;
            result = await fiesta.json()
		} catch (error) {
			console.log(error)
			result = false;
		}
		return result;
    },
    async cotizar (data){
        let cotizacion, result, statusCode;
        try {
            await Authentication.currentToken().then((auth) => {
                if (auth) {
                  data.id_proveedor = auth.id
                }
            })
            cotizacion = await Eventos.cotizar(data)
            statusCode = cotizacion.status;
            if(statusCode !== 200) return false;
            result = await cotizacion.json()
        } catch (error) {
            console.log(error)
            result = false
        }
        return result
    }
}