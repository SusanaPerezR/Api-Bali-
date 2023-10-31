import {ServicioReserva} from '../services/ServicioReserva.js'

export class ControladorReservas {
  constructor() { }
  async registrarReservas(peticion, respuesta) {
    try {
      let servicioReserva = new ServicioReserva()
      //1. Esculcar datos que se quieren para el registro
      let datosReservaRegistar = peticion.body
      //2. Validar los datos
      //3. Intentar guardar los datos
      await servicioReserva.registrarReserva(datosReservaRegistar)
      //4. Responder
      respuesta.status(200).json({
        "mensaje": "Exito en la operacion de registro",
        "datos": datosReservaRegistar
      })
    } catch (error) {
      respuesta.status(400).json({
        "mensaje": "Fallamos en la operacion de registro" + error
      })
    }
  }
  async buscaReservas(peticion, respuesta) {
    try {

      let servicioReserva = new ServicioReserva()
      //1. Intentar buscar los datos en la base de datos
      //2. Responder 
      respuesta.status(200).json({
        "mensaje": "Exito en la operacion de registro",
        "datos": await servicioReserva.buscarReserva()
      })

    } catch (error) {
      respuesta.status(400).json({
        "mensaje": "Fallamos en la operacion de busqueda" + error
      })
    }
  }
  async buscarReservasId(peticion, respuesta) {
    try {
      let servicioReserva = new ServicioReserva()
      //1. Esculcar los parametros de la petición 
      let idReservaBuscar = peticion.params.id
      //2. Validar el dato que llego
      //3. Intento buscar el dato en la base de datos
      //4. Responder
      respuesta.status(200).json({
        "mensaje": "Exito en la operacion de buscar por id",
        "datos": await servicioReserva.buscarReservaId(idReservaBuscar)
      })
    } catch (error) {
      respuesta.status(400).json({
        "mensaje": "Fallamos en la operacion de buscar por id" + error
      })
    }
  }
  async modificarReservas(peticion, respuesta) {
    try {
      let servicioReserva = new ServicioReserva()
      //1. Traigo el id a editar de la petición
      let idReservaModificar = peticion.params.id
      let datosReservaModificar = peticion.body
      //2. Validar datos
      //3. Intento buscar y modificar en la base de datos
      //4. Responder
      await servicioReserva.modificarReserva(idReservaModificar, datosReservaModificar)
      respuesta.status(200).json({
        "mensaje": "Exito en la operacion de edicion",
        "datos": datosReservaModificar
      })

    } catch (error) { 
      respuesta.status(400).json({
        "mensaje": "Fallamos en la operacion de edicion" + error
      })
    }
  }
  async eliminarReservas(peticion, respuesta) {
    try{
      let servicioReserva=new ServicioReserva()
      //1.Esculcar el id a borra de la peticion
      let idReservaEliminar=peticion.params.id
      //2.Validar los datos
      await servicioReserva.eliminarReserva(idReservaEliminar)
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