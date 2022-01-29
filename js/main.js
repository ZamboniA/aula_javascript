
function botao(){
    document.getElementById("agradecimento").innerHTML = "Passe o mouse aqui";
   //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://web.whatsapp.com/")
    //window.location.href = "https://www.youtube.com/";
}


function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("carregado")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*
function trocar(elemento){
    elemento.innerHTML = "obrigado por passar o mouse"
    //document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse"
}

function voltar(elemento){
   elemento.innerHTML = "Passe o mouse aqui"
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}
*/
/*function soma (n1, n2){
    return n1 + n2;
}


function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar=true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
document.write (validaIdade(idade));
*/
/*
alert(soma(5,10));
*/

/*
var d = new Date ();
    alert (d.getDate());
    alert (d.getHours());
    alert (d.getMinutes())
    */
    /*
    var count;
    for (count=0; count <= 5; count++){ //A instrução for cria um loop que consiste em três expressões opcionais
        alert(count)
    }
    */
    /*
    var count = 0;
    while (count <= 5){  //A declaração while cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução da rotina.
        console.log (count);
        alert(count)
        count ++;
    }
    */


    /*
    var idade = prompt("Qual a sua idade?")

if (idade >= 18) {
    alert("Maior de idade");
}else{
    alert("Menor de idade")
}*/



/*
var fruta = [{nome: "maçã", cor:"vermelho"}, {nome: "uva", cor: "roxa"}];
console.log (fruta);
alert(fruta[1].nome);
*/


/*
var fruta = {nome: "maçã", cor:"vermelho"};
console.log (fruta.nome);
alert(fruta.cor);
*/
/*var lista = ["maca", "pera", "laranja"]; //[] para fazer uma lista
lista.push("uva"); // adiciona um elemento na lista
//lista.pop(); // retira um elemento da lista
console.log(lista); //aponta a lista no console
//console.log (lista.length); //quantidade de elementos que tem na lista
//console.log (lista.reverse()); //inverte a ordem dos elementos
console.log (lista.toString()); //transforma em string
console.log (lista.join()); // transforma em string e substitui a virgula por outro simbolo no lugar
*/

/*var nome =  "Anderson Zamboni";
var idade = 27;
var idade2 = 10;
var frase = "O japão é o melhor time do mundo";
//alert (nome + " tem " + idade + " anos.");
//alert (idade + idade2);
console.log (nome);
console.log (idade + idade2);
//console.log (frase.replace("japão", "brasil")));
console.log (frase.toUpperCase());*/ // transforma tudo em maiuscula

