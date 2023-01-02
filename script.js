        // puxar sexo masculino e feminino por jquery

        function VerificadorDeIdade(){
            let resultado = document.getElementById('resultado')
            let DataNascimento = document.getElementById('nascimento')
            let img = document.getElementById('img')
            let nascimento = Number(DataNascimento.value)
            let data = new Date()
            let ano = data.getFullYear()
            let idade = ano - nascimento
            let gender = document.querySelector('input[type="radio"]:checked')
            let sexo = gender.value

            if (sexo == ``|| nascimento > 2023 || nascimento < 0){
                window.alert(`INSIRA UMA DATA CORRETA`)              
            } else if (idade > 150){
                resultado.innerHTML `ERRO`
            }
            
              else if (idade < 14 && sexo == `Masculino`){
                
                resultado.innerHTML = `Detectamos um homem, com ${idade} anos de idade!`
                img.src = "/images/kid-man.jpg"
            } else if (idade < 14 && sexo == `Feminino`){

                resultado.innerHTML = `Detectamos uma mulher, com ${idade} anos de idade!`
                img.src = "images/kid-woman.jpg"
            } else if (idade >= 14 && idade <= 35 && sexo == `Masculino`){

                resultado.innerHTML = `Detectamos um homem, com ${idade} anos de idade!`
                img.src = "images/young-man.jpg"

            } else if (idade >= 14 && idade <= 35 && sexo == `Feminino`){

                resultado.innerHTML = `Detectamos uma mulher, com ${idade} anos de idade!`
                img.src = "images/young-woman.jpg"
            } else if (idade > 35 && idade <= 60 && sexo == `Masculino`){

                resultado.innerHTML = `Detectamos um homem, com ${idade} anos de idade!`
                img.src = "images/man.jpg"
            } else if (idade > 35 && idade <= 60 && sexo == `Feminino`){

                resultado.innerHTML = `Detectamos uma mulher, com ${idade} anos de idade!`
                img.src = "images/woman.webp"
            } else if (idade > 60 && sexo == `Masculino`){

                resultado.innerHTML = `Detectamos um homem, com ${idade} anos de idade!`
                img.src = "images/old-man.jpg"
            } else if (idade > 60 && sexo == `Feminino`){

                resultado.innerHTML = `Detectamos uma mulher, com ${idade} anos de idade!`
                img.src = "images/old-woman.webp"
            }
        }

     /*   function teste(){
            let idade = document.getElementById('nascimento')
            let teste = document.getElementById('teste')
            let sexo  = document.querySelector('input[type="radio"]:checked');
            if (sexo.value == 'masculino'){
                teste.innerHTML += `kkkkkkkkkkkk`
            } else{
                teste.innerHTML = `kmfimfudnfudf`
            }
            teste.innerHTML = (typeof idade)
        }*/