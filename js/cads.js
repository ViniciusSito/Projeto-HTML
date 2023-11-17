function cadastrarUsuario() {
    var novoUsuario = document.getElementById('cadastroUsername').value;
    var novaSenha = document.getElementById('cadastroPassword').value;

    if (novoUsuario && novaSenha) {
      var usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];

      var usuarioExistente = false;
      var index = 0;

      while (index < usuariosCadastrados.length) {
        if (usuariosCadastrados[index].usuario === novoUsuario) {
          usuarioExistente = true;
          break;
        }
        index++;
      }

      if (usuarioExistente) {
        alert('Usuário já cadastrado.');
      } else {
        usuariosCadastrados.push({ usuario: novoUsuario, senha: novaSenha });
        localStorage.setItem('usuarios', JSON.stringify(usuariosCadastrados));
        alert('Cadastro bem-sucedido!');
        window.location.href = 'index.html'; 
      }
    } else {
      alert('Preencha todos os campos.');
    }
  }

  function irParaLogin() {
    window.location.href = 'index.html'; 
  }

document.body.style.backgroundImage = "url('imgs/homi.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center";

