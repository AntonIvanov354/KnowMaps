    /*const knopka = document.getElementById("knopka")
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
      /*  knopka.addEventListener("click", function() {
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

/*knopka2.addEventListener("click", function() {
    fetch("http://127.0.0.1:8000/base")
        .then(response => response.json())
        .then(data => {
            console.log(data.message)
        })
 })*/
//})
/*document.addEventListener("DOMContentLoaded", function(){
    proverka_akkaynta()
        async function proverka_akkaynta() {
            let ip_user = null
            /*const response = await fetch("https://api.ipify.org?format=json") 
            if (!response.ok){
                throw new Error(`ОШИБКА В ПОЛУЧЕНИИ ip-адреса ПОЛЬЗОВАТЕЛЯ: ${response.status}`)
            }*/
          /* await fetch("https://api.ipify.org?format=json")
            .then(response => response.json())
            .then(data => {
                ip_user = data.ip
            })

            console.log(ip_user)
            async function otpravka_data(){
                const url = "http://127.0.0.1:8000/akkaynt/ip_user"
                let transfer_data = {
                    ip: ip_user
                }
                console.log(transfer_data)
                fetch("http://127.0.0.1:8000/akkaynt/ip_user", {
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(transfer_data)
                })
            }
        }
        /*fetch("https://api.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            const ip_isers = data.ip;
            console.log(ip_isers)
            })
        
        const url = "http://127.0.0.1:8000/akkaynt/ip_user"
        let transfer_data = {
            ip: ip_isers
        }
        if (ip_isers){
            fetch(url, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(transfer_data)
            })
        }
        else{
            console.log("ОШИБКА")
        }*/

/*});*/


/*function selectFile() {
    const avatatfile = document.getElementById("avatar_file")
    avatatfile.click()
}
function fileSelect(files) {
    const file = files[0]

    console.log("Что мы знаем о файле")
    console.log("Размер: ", file.size)
    console.log("Имя: ", file.name)
    console.log("Тип: ", file.type)
}*/
document.addEventListener("DOMContentLoaded", async function(){
    async function makeRequest(url, options = {}) {
        const defaulOptions = {
            method: "GET",
            headers:  {
                'Content-type': 'application/json',
                'Accept': `application/json`
            },
        };

        const MergeOptions = {
            ...defaulOptions,
            ...options,
            headers: {
                ...defaulOptions.headers,
                ...options.headers
            },
        };

        if(options.body && typeof options.body == `object`){
            MergeOptions.body = JSON.stringify(options.body);
        }

        try{
            const response = await fetch(url, MergeOptions)

            if(!response.ok){
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            try {
                const data = await response.json()
                return { success: true, data, status: response.status}
            } catch(jsonError) {
                const text = await response.text();
                return { success: true, data: text, status: response.status}
            }
        }
        catch (error){
            return {
                success:false,
                error:error.message ,
                status:error.status || 0 
            }
        }
    }
    const TheResultOfTheAppeal = await makeRequest("http://127.0.0.1:8000/aa")
    if(TheResultOfTheAppeal.success){
        console.log("Пользователь: ",TheResultOfTheAppeal.data)
    } else {
        console.log(TheResultOfTheAppeal.error)
    }
})
