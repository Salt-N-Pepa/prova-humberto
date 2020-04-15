module.exports = {

    async calculoCredito (request, response) {

        let {nome, cpf, idade, salarioBruto, quantidadeDependentes, empregado , tempoAtualEmprego, restricaoSerasa} = request.body;


        if (idade < 18) {
            return response.json(`Limite de Crédito não disponível`);
        }

        else if (restricaoSerasa === "s" && empregado ==="n"){
            return response.json(`${nome}, limite de Crédito não disponível`);
        }
        else if (restricaoSerasa ==="s" && empregado ==="s" && tempoAtualEmprego < 6) {
            return response.json(`${nome}, limite de Crédito não disponível`);
        }
        else if (restricaoSerasa ==="s" && empregado ==="s" && tempoAtualEmprego >= 6 && tempoAtualEmprego < 12){
            return response.json(`${nome}, você possui limite de 10% do salário disponível. Valor: R$ ${salarioBruto * 0.1}`);
        }
        else if (restricaoSerasa ==="s" && empregado ==="s" && tempoAtualEmprego >= 12) {
            return response.json(`${nome}, você possui limite de 20% do salário disponível. Valor: R$ ${salarioBruto * 0.2}`);
        }
        else if (restricaoSerasa ==="n" && empregado ==="n"){
            return response.json(`${nome}, limite de Crédito não disponível`);
        }
        else if (restricaoSerasa ==="n" && empregado ==="s" && tempoAtualEmprego < 6) {
            return response.json(`${nome}, você possuiLimite de 10% do salário disponível. Valor: R$ ${salarioBruto * 0.1}`);
        }
        else if (restricaoSerasa ==="n" && empregado ==="s" && tempoAtualEmprego >= 6 && tempoAtualEmprego < 12) {
            return response.json(`${nome}, você possui limite de 20% do salário disponível. Valor: R$ ${salarioBruto * 0.2}`);
        }
        else if (restricaoSerasa ==="n" && empregado ==="s" && tempoAtualEmprego > 12) {
            return response.json(`${nome}, você possui limite de 30% do salário disponível. Valor: R$ ${salarioBruto * 0.3}`);
        }

    }

}