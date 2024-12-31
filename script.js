let array_numeros = []
let array_letras = []

for (let numero = 0; numero < 10; numero++) {
  array_numeros.push(String.fromCharCode(48 + numero));
}

for (let posicao_letra = 0; posicao_letra < 26; posicao_letra++) {
  array_letras.push(String.fromCharCode(65 + posicao_letra));
}

function carregar_dados() {
  document.getElementById('input_numeros').value = array_numeros.join(', ');
  document.getElementById('input_letras').value = array_letras.join(', ');
}

function ordenar_crescente(tipo) {
  if (tipo == 'numero') {
    array_numeros.sort()
    document.getElementById('input_numeros').value = array_numeros.join(', ');
  } else {
    array_letras.sort()
    document.getElementById('input_letras').value = array_letras.join(', ');
  }
}

function ordenar_decrescente(tipo) {
  if (tipo == 'numero') {
    array_numeros.sort().reverse()
    document.getElementById('input_numeros').value = array_numeros.join(', ');
  } else {
    array_letras.sort().reverse()
    document.getElementById('input_letras').value = array_letras.join(', ');
  }
}

function verifica_existencia(tipo) {
   let resposta = 'O item não está na lista.'

   if (tipo == 'numero') {
     for (let numero = 0; numero < array_numeros.length; numero++) {
       if (array_numeros[numero] == document.getElementById('verifica_numeros').value) {
         resposta = 'O item está na lista.'
         break
       }
     }
     document.getElementById('resposta_numero').innerHTML = resposta
   } 
   else {
     for (let letra = 0; letra < array_letras.length; letra++) {
       if (array_letras[letra] == document.getElementById('verifica_letras').value) {
         resposta = 'O item está na lista.'
         break
       }
     }
     document.getElementById('resposta_letra').innerHTML = resposta
   }
}