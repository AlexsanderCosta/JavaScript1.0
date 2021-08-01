//variáveis
var nome = "Alexsander Costa";
var idade = 17;
var idadea = 10;
var a = "19";
var b = "67";
var frase = "Japão é o melhor time do mundo!";
var batata = "batata é um tubérculo!";
var oxe = "Por que tá tudo em minúsculo?";
var n1 = 5;
var n2 = 3;

//listas
//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop(); (tira o último elemento dessa lista)
//console.log(lista.length);
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));
//console.log(lista.reverse());
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//alert(lista[1]);

//pop-ups
//alert("Meu primeiro JS!");
//alert("Bem-vindo, " + nome + "!");
//alert("Me chamo " + nome + " e tenho " + idade + " anos.");
//alert(idade + idadea);
//alert(a + b);
//alert(frase.replace("Japão", "Brasil"));

//console (executa o html no console do navegador)
//console.log(nome);
//console.log(idade + idadea);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(batata.toUpperCase());
//console.log(oxe.toLocaleLowerCase());
//expressões matemáticas
//console.log(n1 * n2);
//console.log(n1 + n2);
//console.log(n1 / n2);
//console.log(n1 - n2);

//dicionário
/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta); 
console.log(fruta.nome);
alert(fruta.cor);
*/
/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
console.log(frutas.nome);
alert(frutas[1].nome);
*/
/*
var idade = prompt("Qual sua idade?");
//Svar idade = 18;
if (idade > 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
}
*/
/*
var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count++;
}
*/
/*
var count;
for(count=0; count <= 5; count++) {
    alert(count);
}
*/
/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/
//function soma(n1, n2) {
//    return n1 + n2;
//}
//function setReplace(frase, nome, novo_nome){
//    return frase.replace(nome, novo_nome)
//}
/*function validaidade(idade){
    var validar;
    if (idade >= 18) {
        validar = true;
        alert("Você pode continuar na página.");
    } else {
        validar = false;
        alert("Você não pode continuar na página.");
    }
    return validar;
}
*/
//var idade = prompt("Qual sua idade?");
//console.log(validaidade(idade));
//alert(soma(5, 10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));


function botao() {
    document.getElementById("obg").innerHTML = "<b>Obrigado!</b>";
    //alert("Obrigado por clicar");
}

function redirecionar() {
    window.open("https://www.youtube.com/");
    //window.location.href = "https://www.youtube.com/";
}

function tocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Obrigado por passar o mouse!";
    //alert("Tocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui.";
    elemento.innerHTML = "Passe o mouse aqui.";
}

function load() {
    alert("Página carregada.");
}

function funcao(elemento) {
    console.log(elemento.value)
}