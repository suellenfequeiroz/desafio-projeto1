//Criar uma variável para armazenar o nome e a quantidade de experiência de um herói, depois, utilizar uma estrutura
//de decisão para apresentar algumas mensagens de classificação de nível.

console.log("Olá, tudo bem? ");
let nameHero = ["Batman" , "Superman" , "Spiderman"]
let levelHero = ["Ferro" , "Bronze" , "Prata" , "Ouro" , "Platina" , "Ascendente" , "Imortal" , "Radiante"];
let pointXP = 1234 ;
let actualLevel = " ";

if (pointXP <= 1000) {
  actualLevel = levelHero[0] ; 
} else if (pointXP >= 1001 && pointXP <=2000){
  actualLevel = levelHero[1]
} else if (pointXP >=2001 && pointXP <=5000){ 
 actualLevel = levelHero[2]
} else if (pointXP >=5001 && pointXP <=7000){
  actualLevel = levelHero[3]
} else if (pointXP >=7001 && pointXP <=8000){
    actualLevel = levelHero[4]
} else if (pointXP >=8001 && pointXP <=9000){
    actualLevel = levelHero[5]
} else if (pointXP >=9001 && pointXP <=10000){
    actualLevel = levelHero[6]
} else if (pointXP >=10001){
    actualLevel = levelHero[7]}
    

console.log("Meu herói nesse jogo é " + nameHero[2] + " e ele está nível " + actualLevel + ".");