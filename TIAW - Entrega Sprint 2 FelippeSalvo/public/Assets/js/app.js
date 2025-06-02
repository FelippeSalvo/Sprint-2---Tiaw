
const API = "https://json-server-olx-puc.onrender.com/usuarios";


function gerarId() {
    return Math.random().toString(36).substr(2, 4);
}


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
                alert("Credenciais incorretas! Verifique os dados informados.");
            }
        })
        .catch(() => {
            alert("Erro ao conectar com o servidor.");
        });
});


document.getElementById("botaoCadastro")?.addEventListener("click", function () {
    const email = document.getElementById("email")?.value.trim();
    const nomeUsuario = document.getElementById("usuario")?.value.trim();
    const senha = document.getElementById("senha")?.value.trim();
    const confirmarSenha = document.getElementById("confirmarSenha")?.value.trim();
    const tipoConta = document.getElementById("tipoConta")?.value;

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
