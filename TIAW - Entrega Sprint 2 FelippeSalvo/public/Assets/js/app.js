const API = "https://json-server-olx-puc.onrender.com/usuarios";


document.querySelector(".login_btn")?.addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.querySelector('input[placeholder="Email Institucional"]').value;
    const senha = document.querySelector('input[placeholder="Senha"]').value;
    const tipoConta = document.getElementById("tipoContaLogin")?.value;

    if (!email || !senha || !tipoConta) {
        alert("Preencha todos os campos!");
        return;
    }

    if (!email.endsWith("@sga.pucminas.br")) {
        alert("Use um email institucional (@sga.pucminas.br)");
        return;
    }

    fetch(`https://json-server-olx-puc.onrender.com/usuarios?email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}&tipoConta=${encodeURIComponent(tipoConta)}`)
        .then(res => res.json())
        .then(usuarios => {
            if (usuarios.length > 0) {
                alert("Login bem-sucedido!");
                window.location.href = "placeholder.html";
            } else {
                alert("Credenciais incorretas!");
            }
        });
});
