//---EJERCICIO 38---//
let nombre = "milena" 
console.log (nombre.length)

//---EJERCICIO 39---//
let nombre = "milena"
let apellido = "cofnas"

console.log(`Mi nombre es ${nombre} y tiene ${nombre.length} letras`)
console.log(`Mi apellido es ${apellido} y tiene ${apellido.length} letras`)

//---EJERCICIO 40---//
let texto = "Usando el método"
let metodo = "concat"

console.log(texto.concat(" ", metodo))

//---EJERCICIO 41---//
let texto = "HOLA MUNDO"

console.log(texto.toLowerCase())

//---EJERCICIO 42---//
let texto = "hola mundo" 

console.log(texto.toUpperCase())

//---EJERCICIO 43---//
let texto = " thedarkknight"
let primeraLetra = texto.slice(0, 2)
let segundaLetra = texto.slice(4, 5)
let terceraLetra = texto.slice(9, 10)
let resultado = primeraLetra + segundaLetra + terceraLetra
alert(resultado.toUpperCase())

//---EJERCICIO 44---//
let texto = "HOLA"
let resultado = texto.charAt(4) + texto.charAt(3) + texto.charAt(2) + texto.charAt(1) + texto.charAt(0)
alert(resultado.toLocaleLowerCase()) 

//---EJERCICIO 45---//
let mensaje = 'Ada Lovelace fue la ayudante de Charles Babbage.'
let programadora = "¡" + mensaje.slice(0, 12) + " la primera programadora de la historia!"
alert(programadora)
