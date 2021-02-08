const express=require('express')
const app=express()
const http=require('http').createServer(app)
const {readFileSync: readF, writeFileSync: writeF, writeFile, readFile}=require('fs')
let cert;
let key;
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.get('/', (req, res)=>{
    res.render('index')
})
app.use((req, res)=>{
    res.render('error/404')
})

try {
    cert=readF('certificate.pem', 'utf8')
    key=readF('key.pem', 'utf8')
    const https=require('https').createServer({cert: cert, key: key}, app)
    https.listen(443)
} catch (err) {
    console.error("Could not read certificate")
}

http.listen(80)