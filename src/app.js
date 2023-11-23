import express from 'express'
import http from 'http'
import {Server} from 'socket.io'
import __dirname from '../utils.js'
import fs from 'fs'



const app = express()
const port = 3000
const server =  http.createServer(app)
const io = new Server(server)

let clicks = JSON.parse(fs.readFileSync('./click.json')).click
console.log(clicks)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',express.static('public'))

app.get('/clicks',(req,res)=>{
    res.send({"clicks":clicks})

})
io.on('connection',(socket)=>{
    console.log("Usuario Conectado")
    socket.on('click',(click)=>{
        console.log(click)
       fs.writeFileSync('./click.json',JSON.stringify({click:click})) 
       clicks = JSON.parse(fs.readFileSync('./click.json')).click
       io.emit('click',click)
    })

})



server.listen(port,()=>{
    console.log('Server listening in port: ' + port)
})