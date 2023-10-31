import mongoose from "mongoose";
import { modeloReserva } from '../models/modeloReserva.js'
export class ServicioReserva {
  constructor() { }
  async registrarReserva(datos) {
    let reservaNueva = new modeloReserva(datos)
    return await reservaNueva.save()
  }

  async buscarReserva() {
    let reservas = await modeloReserva.find()
    return reservas
  }
  async buscarReservaId(id) {
    let reserva = await modeloReserva.findById(id)
    return reserva
  }

  async modificarReserva(id, datos) {
    return await modeloReserva.findByIdAndUpdate(id, datos)

  }
  async eliminarReserva(id) {
    //Validar el id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("El Id no es valido");
    }
    // Encontrar habitación por id y eliminar
    const resultado = await modeloReserva.findByIdAndRemove(id);
    // Verificar si se eliminó la habitación
    if (!resultado) {
      throw new Error("Reserva no encontrada")
    }

    return true;
  }

}
