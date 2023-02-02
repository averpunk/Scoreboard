let countHome = 0
let countGuest = 0
let countElHome = document.getElementById("count-el-home")
let countElGuest = document.getElementById("count-el-guest")

function add1h() {
    countHome += 1
    countElHome.textContent = countHome
}

function add1g() {
    countGuest += 1
    countElGuest.textContent = countGuest
}

function add2h() {
    countHome += 2
    countElHome.textContent = countHome
}

function add2g() {
    countGuest += 2
    countElGuest.textContent = countGuest
}

function add3h() {
    countHome += 3
    countElHome.textContent = countHome
}

function add3g() {
    countGuest += 3
    countElGuest.textContent = countGuest
}