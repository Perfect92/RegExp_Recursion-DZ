// const string = prompt("tell me your name!! ")

// const regExp = /y/i

 // флак это что пишеться конце 
 // g все букв и чивры
 // i все маленькие и большие
 // /[0-9]/g = все чивры от 0 до 9
 // [0-9a-z]
 // \d  все чивры
// \w все числа и букву все  маленькие и большие
// replace() это метод заменяет в что-то
// console.log(string.match(regExp))


// 1 Задача
const gmailInput = document.querySelector("#gmailInput")
const gmailChick = document.querySelector(".gmailClick")
const gmailResult = document.querySelector(".gmailResult")

const gmailRegExp = /^\w{8,12}@gmail.com$/

gmailChick.addEventListener("click", () => {
    // const newGmailValue = gmailInput.value.split(" ")
    // if(gmailRegExp.test(newGmailValue.join("").value)){
    if(gmailRegExp.test(gmailInput.value)){
        alert(gmailResult.innerHTML = "Отличчно")
        gmailResult.style.color = "limegreen"
    }else {
        alert(gmailResult.innerHTML = " Неверно")
        gmailResult.style.color = "red"
    }
})


// 2 Задача
let position = 0
function blockRecursion(){
    position+=10;
    if (position > 900) return;
    document.querySelector(".block").style.left = position + 'px';
    blockRecursion()
}
blockRecursion()



