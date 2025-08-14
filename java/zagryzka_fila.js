document.getElementById("vibor-faila").addEventListener("click", function(){

    document.getElementById("vibor-file").click();
});
document.getElementById("vibor-file").addEventListener("change", function(){
    const fileName = this.files[0] ? this.files[0].name : 'Вы не выбрали файл';
    alert('Выбранный файл: ' + fileName);
});