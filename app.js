let p = document.getElementsByTagName('p')

function random100() {
    let random = Math.trunc(Math.random() * 100)
    return random
}

for ( i = 0 ; i < p.length ; i++ ) {
    p[i].innerText = random100()
}
