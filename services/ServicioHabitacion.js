import mongoose from "mongoose"
import { modeloHabitacion } from '../models/modeloHabitacion.js'

export class ServicioHabitacion {
  constructor() { }
  async registrarHabitacion(datos) {
    let habitacionNueva = new modeloHabitacion(datos)
    return await habitacionNueva.save()
  }

  async buscarHabitaciones() {
    let habitaciones = await modeloHabitacion.find()
    return habitaciones
  }
  async buscarHabitacionId(id) {
    let habitacion = await modeloHabitacion.findById(id)
    return habitacion
  }

  async modificarHabitacion(id, datos) {
    return await modeloHabitacion.findByIdAndUpdate(id, datos)

  }
  async eliminarHabitacion(id) {
    // Validar el id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Id de habitación no válido');
    }
    // Encontrar habitación por id y eliminar
    const resultado = await modeloHabitacion.findByIdAndDelete(id);
    // Verificar si se eliminó la habitación
    /*if(!resultado) {
      throw new Error('Habitación no encontrada');
    }*/

    return true;
  }
}

//Qué son métodos idepotentes