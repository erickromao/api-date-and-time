import express from 'express'
import { returnDateTime } from './controller.js'
const app = express()

app.get('/date',(req, res)=>{
    res.send(`Data atual: ${returnDateTime.returnDate()}`)
})
app.get('/time',(req, res)=>{
    res.send(`Hora Atual: ${returnDateTime.returnTime()}`)
})

app.get('/datetime',(req, res)=>{
    res.send(`Data atual: ${returnDateTime.returnDate()} \n Hora Atual: ${returnDateTime.returnTime()}`)
    
    
})

app.listen(3000, ()=> console.log('ServerOn'))