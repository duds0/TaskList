let input = document.querySelector("input");
let lista_ul = document.querySelector("ul");

function exe(e){
    if(input.value == ""){

    }else if(e.key == "Enter"){
    let novaLista = document.createElement("li");
    novaLista.innerHTML = input.value;
    lista_ul.appendChild(novaLista);
    input.value = "";
}
}
input.addEventListener("keyup", exe);
