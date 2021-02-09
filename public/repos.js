import {httpRequest} from '/libs/request.js'
const container=document.getElementById('container')
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js')
}
let repos
setTimeout(() => {
    httpRequest('/repos.json', 'GET', (res)=>{
        $('.preloader-back').delay(200).fadeOut('slow')
        $('.progress').delay(200).fadeOut('slow')
        repos=JSON.parse(res)
        repos.forEach(repo => {
            const card=document.createElement('div')
            card.className='card'
            card.innerHTML=`<h3>${repo.name}</h3><a href="${repo.link}">View</a>`
            container.append(card)
        })
    })
}, 200);