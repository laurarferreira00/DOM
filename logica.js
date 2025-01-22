
function f_noite(){
    document.body.style.background= "black"
    document.body.style.color= "white"

}


function f_dia(){
    document.body.style.background= "white"
    document.body.style.color= "black"

}

function f_pequeno(){
    document.body.style.fontSize= "10px"

}
function f_medio(){
    document.body.style.fontSize= "16px"

}

function f_grande(){
    document.body.style.fontSize= "26px"

}

//FAIXA ETÁRIA
//--------GLOBAL --> chama o javascript lá em baixo---------------
//Como não usou onclick chamei a função de forma diferente nesse caso
var bt_bebe = document.getElementById("bebe")
bt_bebe.addEventListener("click", f_bebe);//Adicionar evento de clique

var img = document.createElement("IMG")

function f_bebe(){

    maiorIdade = false;
    document.querySelector("#idade").innerHTML= "Você é um bebê!" //Mesma coisa que getElemenrbyId so que esse recebe geral
    img.src = "imagens/bebe.jpg";
    document.getElementById("idade").appendChild(img) //filho da tag Idade
}

function f_crianca(){
    maiorIdade = false;

    document.querySelector("#idade").innerHTML= "Você é uma criança!" //Mesma coisa que getElemenrbyId so que esse recebe geral
    img.src = "imagens/crianca.png";
    document.getElementById("idade").appendChild(img) 
}

function f_adolescente(){
    maiorIdade = false;

    document.querySelector("#idade").innerHTML= "Você é um adolescente!" //Mesma coisa que getElemenrbyId so que esse recebe geral
    img.src = "imagens/adole.PNG";
    document.getElementById("idade").appendChild(img) 
}

function f_jovem(){
    maiorIdade = true;
    document.querySelector("#idade").innerHTML= "Você é um jovem!" //Mesma coisa que getElemenrbyId so que esse recebe geral
    img.src = "imagens/jovens.PNG";
    document.getElementById("idade").appendChild(img) 
}

function f_adulto(){
    maiorIdade = true;
    document.querySelector("#idade").innerHTML= "Você é um adulto!" //Mesma coisa que getElemenrbyId so que esse recebe geral. Como se fosse no CSS
    img.src = "imagens/adulto.PNG";
    document.getElementById("idade").appendChild(img) 
}

function f_maduro(){
    maiorIdade = true;
    document.querySelector("#idade").innerHTML= "Você é maduro!" //Mesma coisa que getElemenrbyId so que esse recebe geral
    img.src = "imagens/maduros.PNG";
    document.getElementById("idade").appendChild(img) 
}
function f_vivido(){
    maiorIdade = true;
    document.querySelector("#idade").innerHTML= "Você é vivido!" //Mesma coisa que getElemenrbyId so que esse recebe geral
    img.src = "imagens/vivido.PNG"; 
    document.getElementById("idade").appendChild(img) 
}


//------------------------ Gênero ------------------------//
document.getElementById("btnResposta2").onclick = function() {
    //alert("Teste")

    var radios = document.getElementsByName("sexo")
    //console.log(radios)
    //console.log(radios[2].value)  pegar oq esta na posição2(OUTRO)

    for(i=0;i<radios.length;i++){
        //console.log(radios[i].value)
        if(radios[i].checked){
           // document.getElementById("div_sexo").innerHTML = "Escolheu " + radios[i].value
            
           

            valorSexo = radios[i].value;
            document.querySelector("#div_sexo").innerHTML = "Escolheu "+ valorSexo
        }
    }
}

//------------------------ Presente ------------------------//
/*
Com base nas variáveis "maiorIdade" e "valorSexo" são definidos alguns presentes
O texto do presente ganho aparecerá dentro do próprio button cliclado.
*/

 function f_presente(){
    
    if(maiorIdade){
        //console.log("É maior de idade")

    if(valorSexo==='Masculino'){
        document.querySelector("#presente").innerHTML="Você ganhou uma Camisa Polo";
    }else if(valorSexo ==='Feminino'){
        document.querySelector("#presente").innerHTML="Você ganhou uma Sandália";

    }else{
        document.querySelector("#presente").innerHTML = "Você pode escolher entre a Camisa Polo e a Sandalia"

    }
       // console.log("É menor de idade")

    }else{

        if(valorSexo==='Masculino'){
            document.querySelector("#presente").innerHTML= "Você ganhou uma bola";

        }else if(valorSexo==='Feminino'){
            document.querySelector("#presente").innerHTML="Você ganhou uma boneca!";
        }else{
            document.querySelector("#presente").innerHTML= "Você ganhou um Quebra-Cabeça"

        }

    }

    
    }

    
 
