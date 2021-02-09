export function httpRequest(url, method="GET" | "POST", callback){
    const req=new XMLHttpRequest()
    req.open(method, url)
    req.onerror=()=>callback('', true)
    req.onload=()=>callback(req.response, false)
    req.send()
}