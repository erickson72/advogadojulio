// Função para validar e enviar o formulário de contato
document
  .getElementById("form-contato")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    // Aqui você pode adicionar a funcionalidade de envio para o backend
  });
