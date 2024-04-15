let explode = "cebcd482eda57fa9a6714c1c2ba91885"

function info(dados){
    console.log(dados)
    
    document.querySelector(".h1").innerHTML =dados.name
    
    document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp) + ' C°'
    
    document.querySelector(".Umidade").innerHTML = "Umidade " + dados.main.humidity + '%'
    
    document.querySelector('.clima').src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    

}


function cliqueinobotao(){
    let cidade = document.querySelector(".pesquisa").value
    
    buscarcidade(cidade)
}

async function buscarcidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+ cidade +"&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric").then((resposta) => resposta.json())
    console.log(dados)
    info(dados)
}

