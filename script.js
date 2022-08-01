// Criação da Função de Desaceleração
function slowDown(velocity,printer){
    let deceleration = 20
    while(velocity > 0){
        printer(velocity)
        velocity-= deceleration
    }
    alert('Nava parada. As comportas podem ser abertas.')
}

let spaceshipVelocity = 150
// Criando uma função de alta classe utilizando outra função como paramêtro(function(velocity))
slowDown(spaceshipVelocity, function(velocity){
    console.log('Velocidade atual: ' + velocity)
})