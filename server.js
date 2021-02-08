const express=require('express')
const app=express()
const http=require('http').createServer(app)
const {readFileSync: readF, writeFileSync: writeF, writeFile, readFile}=require('fs')
let cert;
let key;
let https;
try {
    cert=readF('certificate.crt', 'utf8')
    key=readF('private.key', 'utf8')
} catch (err) {
    console.log("Could not read certificate")
}
if(cert==undefined){
    app.get('/', (req, res)=>{
        res.render('index')
    })
}else {
    app.get('/', (req, res)=>{
        if(req.protocol==="http"){
            res.redirect(`https://${req.headers.host}${req.url}`)
        } 
        else 
        res.render('index')
    })
    https=require('https').createServer({cert: cert, key: key}, app)
}
app.get('/repos', (req, res)=>{
    res.render('repos')
})
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use((req, res)=>{
    res.status(404).render('error/404')
})


http.listen(80)
if(cert!=undefined)https.listen(443)