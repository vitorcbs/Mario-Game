// Coisas adicionadas além do vídeo:
// Parar a núvem quando perde o jogo.
// Aparece game over no final.

const mario=document.querySelector('.mario')     
const pipe=document.querySelector('.pipe')
const cloud=document.querySelector('.clouds')
const gameover=document.querySelector('.gameover')

//gameover.style.animation='none'

function jump() {
  mario.classList.add('jump')
  setTimeout(() => {
    mario.classList.remove('jump')
  },500)
}

const loop = setInterval(() => {
    const pipePosition=pipe.offsetLeft
    const marioPosition=+window.getComputedStyle(mario).bottom.replace('px','') //Esse comando volta uma string como por exemplo 120px. O comando replace troca o px por vazio, pra ficar apenas o número. Contudo a informação ainda é uma string, e o sinal de + antes de  do termo window é justamente pra transformar essa string em um número.
    //const cloudPosition=+window.getComputedStyle(cloud).right.replace('px','')

    const cloudPosition=window.getComputedStyle(cloud).right //como com a núvem vc não precisa de nenhum IF comparando números, deixe como string mesmo e assim no comando cloud.style.right=`${cloudPosition}` não é necessário acrescentar o px no final da expressão.

   


    if (pipePosition<=120 && pipePosition > 0 && marioPosition<80) {
      pipe.style.animation='none'
      pipe.style.left=`${pipePosition}px`

      mario.style.animation='none'
      mario.style.bottom=`${marioPosition}`

      mario.src='./images/game-over.png'
      mario.style.width='75px'
      mario.style.marginLeft='50px'

      cloud.style.animation='none'
      cloud.style.right=`${cloudPosition}`

  

      clearInterval(loop)

    }
}, 10)

document.addEventListener('keydown',jump)