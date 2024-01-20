//seleção de elementos

const nomeDoHeroi = document.querySelector('.input-name');
const valorDoXp = document.querySelector('#XP');

function enviar(){
    var nome = nomeDoHeroi.value;
    var xp = valorDoXp.value;
    if(xp <= 1000)
    alert("Obrigado, Heroi! " + nome +" Seu XP é " + xp + " você é do nivel Ferro!")
    else if(xp >= 1001 && xp <= 2000 )
    alert("Obrigado, Heroi! " + nome +" Seu XP é " + xp + " você é do nivel Bronze!")
    else if(xp >= 2001 && xp <= 5000 )
    alert("Obrigado, Heroi! " + nome +" Seu XP é " + xp + " você é do nivel Prata!")
    else if(xp >= 5001 && xp <= 7000 )
    alert("Obrigado, Heroi! " + nome +" Seu XP é " + xp + " você é do nivel Ouro!")
    else if(xp >= 7001 && xp <= 8000 )
    alert("Obrigado, Heroi! " + nome +" Seu XP é " + xp + " você é do nivel Platina!")
    else if(xp >= 8001 && xp <= 9000 )
    alert("Obrigado, Heroi! " + nome +" Seu XP é " + xp + " você é do nivel Ascendente!")
    else if(xp >= 9001 && xp <= 10000 )
    alert("Obrigado, Heroi! " + nome +" Seu XP é " + xp + " você é do nivel Imortal!")
    else 
    alert("Obrigado, Heroi! " + nome +" Seu XP é " + xp + " você é do nivel Radiante!")
};