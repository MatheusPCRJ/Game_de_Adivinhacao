function iniciarGame(){
var jogar = prompt('Quer realmente jogar? s/n')
    if(jogar == 's'){

        alert('É o seguinte, tente acertar o número aleatório de 1 ao 100!')

        let numeroSecreto = parseInt(Math.random() * 101)

        let acumulado = 1

        while(chute != numeroSecreto){
            var chute = prompt('Digite um número de 1 ao 100');
            
            if(chute != numeroSecreto){
                alert('Você Erroouu ' + `${acumulado}`)
            }acumulado++
            
            if(chute == numeroSecreto){
                alert('Parabéns, você acertou!')
            } else if(chute > numeroSecreto){
                alert('O valor é menor que seu chute!')
            } else if(chute < numeroSecreto){
                alert('O valor é MAIOR que seu chute!')
            }
        }

    }
}