const express=require('express')
const app=express()
const http=require('http').createServer(app)
const {readFileSync: readF, writeFileSync: writeF, writeFile, readFile}=require('fs')
let cert;
let key;
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.get('/', (req, res)=>{
    if(req.protocol==="http"){
        res.redirect(`https://${req.headers.host}${req.url}`)
    } 
    else 
    res.render('index')
})
app.use((req, res)=>{
    res.render('error/404')
})

const https=require('https').createServer(app)
try {
    cert=readF('certificate.pem', 'utf8')
    key=readF('key.pem', 'utf8')
    const https=require('https').createServer({cert: cert, key: key}, app)
    https.listen(443)
} catch (err) {
    console.log("Could not read certificate")
}

https.listen(443)
http.listen(80)