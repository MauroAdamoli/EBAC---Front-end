// 1. Resolva as operações

a = 10 + 15 // 25 (number)
b = "10" + 2 // 102 (string)
c = "10" * 2 // 20 (number)
d = "10" / 3 // 3.3333333333333335 (number)
e = "10" % 3 // 1 (number)
f = 10 + true // 11 (number)
g = 10 == "10" // true (boolean)
h = 10 === "10" // false (boolean)
i = 10 < 11 // true (boolean)
j = 10 > 12 // false (boolean)
k = 10 <= 10.1 // true (boolean)
l = 10 > 9.99 // true (boolean)
m = 10 != "dez" // true (boolean)
n = 10 + true // 11 (number)
o = "dez" + true // deztrue (string)
p = 10 + false // 10 (number)
q = 10 * false // 0 (number)
r = true + true // 2 (number)
s = 10++ // 11 (number)
t = 10 -- // 9 (number)
u = 1 & 1 // 1 (number)
v = 1 & 0 // 0 (number)
w = 0 & 0 // 0 (number)
x = 1 & 0 // 0 (number)
y = 0 / 1 // 0 (number)
z = 5 + 5 == 10 // true (boolean)
aa = "5" + "5" == 10 // false (boolean)
ab = "5" * 2 > 9 // true (boolean)
ac = (10 + 10) * 2 // 40 (number)
ad = 10 + 10 * 2 // 30 (number)
console.log(ad)
console.log(typeof(ad))

// 2. responda as perguntas de acordo com as variáveis

var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";
var valor = 30000;
var prestacao = 750;

a = branco == "branco" // false (boolean)
b = branco == cinza // false (boolean)
c = carro === branco // true (boolean)
console.log(c)
console.log(typeof(c))

/* d */ var cavalo = carro == "preto" ? "cinza" : "marron"; // cinza (string)
console.log(cavalo)
console.log(typeof(cavalo))



// e - Quantas prestações são necessárias para pagar o valor do carro com uma entrada de 3.000? Demonstre a operação

var entrada = 3000;
var valor = 30000;
var prestacao = 750;

var aposEntrada = valor - entrada // 30000 - 3000 = 27000
var prestacoesTotais = aposEntrada / prestacao // 27000 / 750 = 36

var pagamentoTotal = valor - entrada - (prestacao * 36)
// 30000 - 3000 - (750 * 36)
// 30000 - 3000 - 27000
// 27000 - 27000
// 0
console.log(entrada)
console.log(valor)
console.log(prestacao)

console.log(aposEntrada)
console.log(prestacoesTotais)

console.log(pagamentoTotal)
// Além da entrada de 3000, serão necessárias 36 prestações de 750 para pagar o carro avaliado em 30000.



// f - Somando as variáveis de cores é formada uma string de quantos caracteres?
var af = branco + preto + cinza // pretocinzabranco (16 caracteres)

console.log(af)
console.log(af.length)
// A string com todas as variáveis de cores possui 16 caracteres