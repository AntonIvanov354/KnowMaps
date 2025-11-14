/**document.getElementById("vibor-faila").addEventListener("click", function(){

    document.getElementById("vibor-file").click();
});
document.getElementById("vibor-file").addEventListener("change", function(){
    const fileName = this.files[0] ? this.files[0].name : 'Вы не выбрали файл';
    alert('Выбранный файл: ' + fileName);*/

document.addEventListener("DOMContentLoaded",  function(){
url = "тут будет url сервера, но позже, пока нету("
let Idfile = 1
document.getElementById("fileOutput").addEventListener("click", function(){

    document.getElementById("fileSelection").click();
});
document.getElementById("fileSelection").addEventListener("change", async function(){
    const TheFileItself = document.getElementById("fileSelection")
    const File = TheFileItself.files[0]
    const NameFile = this.files[0].name

    const FileSending = new FormData();
    FileSending.append("file", File);
    FileSending.append("filename", File.name);

    if(!File){
        alert ("Вы не выбрали файл!");
        return;
    } 
    Idfile += 1
    let DataBaseFile = [
    {id: Idfile, NameFile: NameFile}
    ]

    try{
    /** Крч код правильный 50 на 50, но и одновремено не правильный вообще. крч иди нахуй сиди думай
       // const itog = await SendingAFile(url)
        alert("A")
        //if(itog.success){
        const ListContainer = document.getElementById("file_link")

        DataBaseFile.forEache(DataBaseFile => {
            const FileList = document.createElement("a");

            FileList.href = `glav/${DataBaseFile.id}`;

            FileList.textContent = `Перейти к айдио файлу: ${DataBaseFile.NameFile}`;

            const fileItem = document.createElement("div");
            fileItem.className = `file-item`;

            fileItem.append(FileList);
            ListContainer.appendChild(fileItem)

        }) 
        //}
    }
    catch(error){
        alert("ошибка")
    } */
    /**else{
        const response = await SendingTheFileToTheServer(url)
        обязательно сделать проверка ответа сервера, не буду пихать это 
         * в функицю т.к. не рационально нагружать её, проще пихнуть её сюда, 
         * сделать все в одном месте 
        if(response.success){
            Добавить переход нв другую страницу, завтра буду делать. 
        }else{
            Вывод окна ошибки, обязательно 
        }
    }
    async function SendingTheFileToTheServer(url) {
        const Sending = await fetch (url, {
            method: "POST",
            body: FileSending
        })
    }
 */
    });
});