// PACE na sua Empresa — interações
(function () {
  // Menu mobile
  var toggle = document.getElementById('menu-toggle');
  var menu = document.getElementById('menu-mobile');
  function setMenu(open) {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    menu.hidden = !open;
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
  }
  document.querySelectorAll('[data-close-menu]').forEach(function (link) {
    link.addEventListener('click', function () { setMenu(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) setMenu(false);
  });

  // Formulário de contato
  var form = document.getElementById('form-contato');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }

      var dados = Object.fromEntries(new FormData(form).entries());

      // TODO: integrar com o destino dos leads (CRM, e-mail, planilha etc.).
      // Exemplo:
      // fetch('https://SEU-ENDPOINT', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(dados)
      // });
      console.log('Lead PACE:', dados);

      document.getElementById('form-fields').hidden = true;
      document.getElementById('form-success').hidden = false;
    });
  }
})();
