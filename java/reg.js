/*document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button").addEventListener("click", function() {
        const reg_email = document.getElementById("input-okno-email-rreg").value;
        const reg_password = document.getElementById("input-okno-pasword-rreg").value;
        const reg_name = document.getElementById("input-okno-name-rreg").value;
        const reg_password2 = document.getElementById("input-okno-pasword2-rreg").value;

        const reg_error_email = document.getElementById("okno-email-rreg-error");
        const reg_error_password = document.getElementById("okno-pasword-rreg-error");
        const reg_error_name = document.getElementById("okno-name-rreg-error");
        const reg_error_password2 = document.getElementById("okno-pasword2-rreg-error");

        reg_error_email.style.display = "none";
        reg_error_password.style.display = "none";
        reg_error_password2.style.display = "none";
        reg_error_name.style.display = "none";

        let valid = true;

        if (!reg_email.includes("@")) {
            reg_error_email.style.display = "block";
            valid = false;
        }

        if (reg_password2 !== reg_password || reg_password.length < 8) {
            reg_error_password.style.display = "block";
            reg_error_password2.style.display = "block";
            valid = false;
        }

        if (reg_name.length < 8) {
            reg_error_name.style.display = "block";
            valid = false;
        }

        if (valid) {
            console.log("почта: "+reg_email);
            console.log( "пароль: "+reg_password);
            console.log("name: "+reg_name);
            // Получение IP-адреса
            fetch("https://api.ipify.org?format=json")
                .then(response => response.json())
                .then(data => {
                    console.log(data.ip);   
                })
                .catch(error => {
                    console.log("Ошибка: ", error);
                    console.log("Не удалось получить IP-адрес.");
                });
        }
    });
});*/
document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById("button");
    const okno_reg_2 = document.getElementById("okno_reg_2");
    const okno_reg_3 = document.getElementById("okno_reg");
    const itog_reg_div2 = document.getElementById("itog_reg_div");

    button.addEventListener("click", function(){
        okno_reg_2.classList.toggle("okno_reg_3");
        itog_reg_div2.classList.toggle("itog_reg_div2");
        okno_reg_3.classList.toggle("okno_reg_itog")
    });
})