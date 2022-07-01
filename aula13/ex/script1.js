const nome = prompt('Digite o seu nome completo?')

document.body.innerHTML += `Seu nome é: ${nome} </br>`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras</br>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)}</br>`;
document.body.innerHTML += `Qual o primeiro indice da letra no seu a nome?: ${nome.indexOf('a')}</br>`;
document.body.innerHTML += `Qual o ultimo indice da letra o no seu nome?: ${nome.lastIndexOf('o')}</br>`;
document.body.innerHTML += `As ultimas 3 letra do seu nome sao: ${nome.slice(-3)}</br>`;
document.body.innerHTML += `As palavras do seu nome sao: ${nome.split(' ')}</br>`;
document.body.innerHTML += `Seu nome com letras maisculas: ${nome.toUpperCase()}</br>`;
document.body.innerHTML += `Seu nome com letras minusculas: ${nome.toLowerCase()}</br>`;