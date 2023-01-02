let anoNascimento = 2009
let idade = 2023 - anoNascimento
let sexo = `homem`
if (idade < 15 && sexo == `homem`){
    console.log(`Aqui vai aparecer a idade a foto de um menino`)
} else if(idade < 15 && sexo == `mulher`){
    console.log(`Aqui vai aparacer a idade e a foto de uma menina`)
} else if (idade >= 15 && idade <= 40 && sexo == `homem`){
    console.log(`Aqui vai aparecer a idade uma foto de um homem`)
} else if (idade >= 15 && idade <= 40 && sexo == `mulher`){
    console.log(`Aqui vai aparecer a idade uma foto de uma mulher`)
} else if (idade > 40 && sexo == `homem`){
    console.log(`foto de um idoso`)
} else if (idade > 40 && sexo == `mulher`){
    console.log(`foto de uma idosa`)
}