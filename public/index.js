$('.preloader-back').delay(1000).fadeOut('slow')
$('.progress').delay(1000).fadeOut('slow')
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js')
}