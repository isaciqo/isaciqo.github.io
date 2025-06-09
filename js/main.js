// Atualiza o ano no footer automaticamente
if (document.getElementById('current-year')) {
    document.getElementById('current-year').textContent = new Date().getFullYear();
}
// Adiciona classe de animação quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
});