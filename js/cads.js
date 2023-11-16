function cadastrarUsuario() {
    var novoUsuario = document.getElementById('cadastroUsername').value;
    var novaSenha = document.getElementById('cadastroPassword').value;
  
    console.log('Novo Usuário:', novoUsuario);
    console.log('Nova Senha:', novaSenha);
  
    if (novoUsuario && novaSenha) {
        var usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];
    
        var usuarioExistente = usuariosCadastrados.find(function (usuario) {
            return usuario.usuario === novoUsuario;
        });
    
        if (usuarioExistente) {
            alert('Usuário já cadastrado.');
        } else {
            usuariosCadastrados.push({ usuario: novoUsuario, senha: novaSenha });
    
            localStorage.setItem('usuarios', JSON.stringify(usuariosCadastrados));
    
            window.location.href = 'in.html';
        }
    } else {
        alert('Preencha todos os campos.');
    }
}

function irParaLogin() {
    window.location.href = 'in.html';
}

document.body.style.backgroundImage = "url('imgs/homi.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center";

