$('.preloader-back').delay(200).fadeOut('slow')
$('.progress').delay(200).fadeOut('slow')
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
}