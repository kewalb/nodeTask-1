// import required for file operation
const fs = require('fs')

const PORT = 9000

const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send("Hello welcome to node task 1")
})

app.get("/create", (request, response) => {
    // getting dat-time in required format for filename
    let date_ob = (new Date().toJSON().slice(0,19)).replace(/:/g, "-")
    //timestamp for file content
    const data = Date.now()
    
    fs.writeFile(`./files/${date_ob}.txt`, data.toString(), (err) => {
        if(err){
            console.log(err)
            response.send(err)
        }    
        else{
            response.send("creating a new file. Check your file folder")
        }
    })
    
})


app.get("/showall", (request, response) => {
    fs.readdir('./files', (err, files) => {
        response.send(files)
    })
   
})

app.listen(PORT, () => {
    console.log("Server running at port", PORT)
})
