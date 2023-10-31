import mongoose from "mongoose";  

const Schema=mongoose.Schema

const Reservas=new Schema({
  fechaEntrada:{
    type:Date,
    required:true
  },
  fechaSalida:{
    type:Date,
    required:true
  },
  numeroPersonas:{
    type:Number,
    required:true
  },
  nombreReserva:{
    type:String,
    required:true
  },
  costo:{
    type:Number,
    required:false
  }
})

export const modeloReserva=mongoose.model('reservas',Reservas)