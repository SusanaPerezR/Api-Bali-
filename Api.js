import express from 'express'
import {rutas} from './routes/rutas.js'
import {establecerConexion} from './database/conexion.js'

export class Api{
  constructor(){
    this.app = express()
    this.conectarBD()
    this.procesarPeticiones()
  }
  levantarServidor(){
    this.app.listen(3000, function(){
      console.log("Servidor operando con exito.")
  })
  }
  procesarPeticiones(){
    this.app.use(express.json())
    this.app.use('/',rutas)
    
  }
  conectarBD(){
    establecerConexion()
  }
}