document.addEventListener("DOMContentLoaded", function(){
    const knopka = document.getElementById("knopka")
    const knopka2 = document.getElementById("knopka2")
       /* fetch("http://127.0.0.1:8000/data-base/ip")
        .then(response => response.json())
        .then(data => {
            console.log(data.message)
        })
        .catch(error => {
            console.error(`Ошибка даун`, error)
        })
})*/
   /*let Users_ip = {} 
    fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .then(data => {
        Users_ip.user_ip = data.ip
    })
*/
        knopka.addEventListener("click", function() {
            const url = "http://127.0.0.1:8000/base/creat"
            let date = {
                ip:"ййй",
                name: "иии",
                email: "ааа"
            }
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(date)
            })
    })
/*    fetch("http://127.0.0.1:8000/base")
        .then(response => response.json())
        .then(data => {
            console.log(data.message)
        
    })*/

knopka2.addEventListener("click", function() {
    fetch("http://127.0.0.1:8000/base")
        .then(response => response.json())
        .then(data => {
            console.log(data.message)
        })
 })
})