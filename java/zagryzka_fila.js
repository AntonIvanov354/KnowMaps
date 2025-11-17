/**document.getElementById("vibor-faila").addEventListener("click", function(){

    document.getElementById("vibor-file").click();
});
document.getElementById("vibor-file").addEventListener("change", function(){
    const fileName = this.files[0] ? this.files[0].name : 'Вы не выбрали файл';
    alert('Выбранный файл: ' + fileName);*/

document.addEventListener("DOMContentLoaded",  function(){

url = "тут будет url сервера, но позже, пока нету(";
let Idfile = 1;
const text_opisanie =  document.getElementById("text_opisanie");
const text_file = document.getElementById("text_file");

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
    ];

    /**const FormData = new FormData

    FormData.append("file", NameFile);

    FormData.append("description", `Загрузочный файл номер: ${DataBaseFile.id}`);
    FormData.append("Category", "audio");

   /**Потом нужно будет раскомитить 
    * const result = await MakeRequest(url, {
        methood: "POST",
        body: FormData
    }); */

    text_opisanie.style.display = "none";
    text_file.style.display = "block";

    const file_content =  document.createElement("p")
    file_content.textContent = "влавыалтавлопрвопрлваопо"

    file_content.classList.add("text_file");
    
    file_content.appendChild(textinfile)
    //async function SendingFile(url, options) {
        //const defaultOptions = await fetch (url, {
          //  method: "POST",
            //body: FileSending
       // })
    //}

   // try{
     //   const OtvetServer = SendingFile{url, options{

       // }} 
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
 *///}
    });
});