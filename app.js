const express = require ('express');

const app = express ();
const path = require ('path')

app.get('/', function (req, res){

let file= path.resolve ('vistas/index.html')

res.sendFile(file);


})

app.get('/index.css', function (req, res){

    let file= path.resolve ('styles/index.css')
    
    res.sendFile(file);
    
    
    })
/*
    app.get('*', function (req,res){

    
     if (req.url.includes('.')){

        let file = path.resolve('public' + req.url)
        return res.sendFile(file)
    }

res.send('Not Found')

*/
    app.get('*', function (req,res){


        console.log(req.url)

        if (req.url.endsWith('.css')){
    let file = path.resolve('public' + req.url)
    return res.sendFile(file)
}


let images = ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp','svg']
let ext = req.url.split('.')[1]
if (images.includes(ext)){
    let file = path.resolve('public/images' + req.url)
    return res.sendFile(file)

}


    })
app.listen(3030, ()=> {


    console.log('http://localhost:3030')
})