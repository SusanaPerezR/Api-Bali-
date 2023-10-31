import { ServicioHabitacion } from '../services/ServicioHabitacion.js'

export class ControladorHabitacion {

  constructor() { }
  async registrarHabitacion(peticion, respuesta) {
    try {
      let servicioHabitacion = new ServicioHabitacion()
      //1. Esculcar datos que se quieren para el registro
      let datosHabitacionRegistar = peticion.body
      //2. Validar los datos
      //3. Intentar guardar los datos
      await servicioHabitacion.registrarHabitacion(datosHabitacionRegistar)
      //4. Responder
      respuesta.status(200).json({
        "mensaje": "Exito en la operacion de registro",
        "datos": datosHabitacionRegistar
      })

    } catch (error) {
      respuesta.status(400).json({
        "mensaje": "Fallamos en la operacion de registro" + error
      })
    }
  }
  async buscarHabitaciones(peticion, respuesta) {
    try {
      let servicioHabitacion = new ServicioHabitacion()
      //1. Intentar buscar los datos en la base de datos
      //2. Responder 
      respuesta.status(200).json({
        "mensaje": "Exito en la operacion de busqueda",
        "datos": await servicioHabitacion.buscarHabitaciones()
      })

    } catch (error) {
      respuesta.status(400).json({
        "mensaje": "Fallamos en la operacion de busqeda" + error
      })
    }
  }
  async buscarHabitacionId(peticion, respuesta) {
    try {
      let servicioHabitaciones = new ServicioHabitacion()
      //1. Esculcar los parametros de la petición 
      let idHabitacionBuscar = peticion.params.id
      //2. Validar el dato que llego
      //3. Intento buscar el dato en la base de datos
      //4. Responder
      respuesta.status(200).json({
        "mensaje": "Exito en la operacion de buscar por id",
        "datos": await servicioHabitaciones.buscarHabitacionId(idHabitacionBuscar)
      })

    } catch (error) {
      respuesta.status(400).json({
        "mensaje": "Fallamos en la operacion de buscar por id" + error
      })
    }
  }
  async modificarHabitacion(peticion, respuesta) {
    try {
      let servicioHabitacion = new ServicioHabitacion()
      //1. Traigo el id a editar de la petición
      let idHabitacionModificar = peticion.params.id
      let datosHabitacionModificar = peticion.body
      //2. Validar datos
      //3. Intento buscar y modificar en la base de datos
      //4. Responder
      await servicioHabitacion.modificarHabitacion(idHabitacionModificar, datosHabitacionModificar)
      respuesta.status(200).json({
        "mensaje": "Exito en la operacion de edicion",
        "datos": datosHabitacionModificar
      })

    } catch (error) {
      respuesta.status(400).json({
        "mensaje": "Fallamos en la operacion de edicion" + error
      })
    }
  }
  async eliminarHabitacion(peticion, respuesta) {
    try{
      let servicioHabitacion=new ServicioHabitacion()
      //1.Esculcar el id a borra de la peticion
      let idHabitacionEliminar=peticion.params.id
      //2.Validar los datos
      await servicioHabitacion.eliminarHabitacion(idHabitacionEliminar)
      //3.Intentar borrar la habitacion            
      respuesta.status(200).json({
          "mensaje":"exito en la operacion de eliminacion"
      })    
  }catch(error){
      respuesta.status(400).json({
          "mensaje":"fallamos en la operacion de eliminacion"+ error
      })
  }
  }

}