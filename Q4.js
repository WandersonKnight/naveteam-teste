function cepGet(valor) {
    var cep = valor.replace(/\D/g, "");
    var format = /^[0-9]{8}$/;
  
    if (cep !== "" && format.test(cep)) {
      fetch(`//viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) =>
          console.log(
            `O endereço do CEP fornecido é: ${data.logradouro}, ${data.ibge}, ${data.localidade}/${data.uf}.`
          )
        );
    } else {
      console.log(
        "CEP inválido. O valor precisa ter 8 digitos com valores de 0-9."
      );
    }
  }
  window.exercise04 = function () {
    console.log("resultado ex4:");
    cepGet("24934055");
  };
  