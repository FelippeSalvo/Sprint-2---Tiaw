const API = "https://json-server-olx-puc.onrender.com/usuarios";

document.querySelector(".login_btn")?.addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById("email")?.value.trim();
    const senha = document.getElementById("senha")?.value.trim();
    const tipoConta = document.getElementById("tipoContaLogin")?.value;

    if (!email || !senha || !tipoConta) {
        alert("Preencha todos os campos!");
        return;
    }

    if (!email.endsWith("@sga.pucminas.br")) {
        alert("Use um email institucional (@sga.pucminas.br)");
        return;
    }

    fetch(`${API}?email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}&tipoConta=${encodeURIComponent(tipoConta)}`)
        .then(res => res.json())
        .then(usuarios => {
            if (usuarios.length > 0) {
                alert("Login bem-sucedido!");
                window.location.href = "placeholder.html"; 
            } else {
                alert("Credenciais incorretas! Verifique o email, senha e tipo de conta.");
            }
        })
        .catch(() => {
            alert("Erro ao conectar com o servidor.");
        });
});
