const API = "https://json-server-olx-puc.onrender.com/usuarios";


function gerarId() {
    return Math.random().toString(36).substr(2, 4);
}


document.getElementById("botaoCadastro")?.addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const nomeUsuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
    const tipoConta = document.getElementById("tipoConta").value;

    if (!email || !nomeUsuario || !senha || !confirmarSenha || !tipoConta) {
        alert("Preencha todos os campos!");
        return;
    }

    if (!email.endsWith("@sga.pucminas.br")) {
        alert("Use um email institucional (@sga.pucminas.br)");
        return;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    const novoUsuario = {
        id: gerarId(),
        email,
        senha,
        tipoConta,
        nomeUsuario
    };

    fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoUsuario)
    })
    .then(res => {
        if (res.ok) {
            alert("Conta criada com sucesso!");
            window.location.href = "index.html";
        } else {
            alert("Erro ao cadastrar. Tente novamente.");
        }
    })
    .catch(() => {
        alert("Erro ao se conectar com o servidor.");
    });
});
