document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtenha os valores do formulário
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Faça algo com os valores (por exemplo, envie para um servidor)
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Mensagem:', message);

    // Limpe o formulário
    document.getElementById('contactForm').reset();