
function fazerLogin() {
    var usuario = document.getElementById('username').value;
    var senha = document.getElementById('password').value;
  
    if (usuario && senha) {
      var usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];
  
      var usuarioValido = usuariosCadastrados.find(function (usuarioCadastrado) {
        return usuarioCadastrado.usuario === usuario && usuarioCadastrado.senha === senha;
      });
  
      if (usuarioValido) {
        alert('Login bem-sucedido!');
        window.location.href = 'menu.html';
      } else {
        alert('Usuário ou senha incorretos.');
      }
    } else {
      alert('Preencha todos os campos.');
    }
}
function irParaCadastro() {
    window.location.href = 'cadastro.html';
}


document.body.style.backgroundImage = "url('imgs/homi.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center";