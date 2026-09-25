// PACE na sua Empresa — interações
(function () {
  // ---- Menus hambúrguer (desktop/tablet e celular) ----
  var toggles = Array.prototype.slice.call(document.querySelectorAll('[data-menu-toggle]'));
  function setMenu(btn, open) {
    var menu = document.getElementById(btn.getAttribute('aria-controls'));
    if (!menu) return;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    menu.hidden = !open;
  }
  function closeAll() { toggles.forEach(function (b) { setMenu(b, false); }); }
  toggles.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      setMenu(btn, btn.getAttribute('aria-expanded') !== 'true');
    });
  });
  document.querySelectorAll('[data-close-menu]').forEach(function (a) {
    a.addEventListener('click', closeAll);
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll(); });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.mmenu') && !e.target.closest('[data-menu-toggle]')) closeAll();
  });
  window.addEventListener('resize', closeAll);

  // ---- Formulários de contato ----
  function ligarFormulario(formId, camposId, sucessoId) {
    var form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var dados = Object.fromEntries(new FormData(form).entries());

      // TODO: integrar com o destino dos leads (CRM, e-mail, planilha etc.).
      // fetch('https://SEU-ENDPOINT', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(dados)
      // });
      console.log('Lead PACE:', dados);

      document.getElementById(camposId).hidden = true;
      document.getElementById(sucessoId).hidden = false;
    });
  }
  ligarFormulario('form-contato', 'form-fields', 'form-success');      // desktop / tablet
  ligarFormulario('m-form-contato', 'm-form-fields', 'm-form-success'); // celular
})();
