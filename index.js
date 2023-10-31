import {Api} from './Api.js'
import 'dotenv/config'

//Variables de entorno para probar el programa
//console.log(process.env)

//Para usar una clase debo crear un objeto 
//Para usar una clase se debe crear una instancia
//Todo objeto es una variable
let servidor= new Api()
//Levantar o despertar el servidor
servidor.levantarServidor()


//Tareas
//1. Armar equipos
//2. Definir de que va a ser el hotel 
//3. Traer la cuenta de github