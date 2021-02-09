import {httpRequest} from '/libs/request.js'
const name=document.getElementById('name')
const link=document.getElementById('link')
const desc=document.getElementById('desc')
const body=document.querySelector('body')
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
}
let repos
setTimeout(() => {
    httpRequest('/repos.json', 'GET', (res)=>{
        $('.preloader-back').delay(200).fadeOut('slow')
        $('.progress').delay(200).fadeOut('slow')
        repos=JSON.parse(res)
        const repo=repos.find(rep=>rep.link==`/repos/${url}`)
        if(repo){
            name.innerText=repo.name
            link.href=repo.git
            desc.innerHTML=repo.desc
        }
        else {
            name.innerHTML="Not found"
            link.innerText=""
            desc.innerHTML="The repo was not found"
        }
    })
}, 200);