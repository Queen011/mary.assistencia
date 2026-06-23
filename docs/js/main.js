/**
 * Mary Assistência - Main JavaScript
 * Gerencia interações da página e envio de formulário
 */

document.addEventListener('DOMContentLoaded', function() {
  initializeFormHandlers();
});

/**
 * Inicializa os handlers do formulário
 */
function initializeFormHandlers() {
  const form = document.getElementById('formulario');
  
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
}

/**
 * Manipula o envio do formulário
 * Prepara mensagem formatada e abre WhatsApp
 * 
 * @param {Event} e - Evento do formulário
 */
function handleFormSubmit(e) {
  e.preventDefault();

  // Coleta dados do formulário
  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const assunto = document.getElementById('assunto').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  // Valida campos
  if (!nome || !telefone || !assunto || !mensagem) {
    alert('Por favor, preencha todos os campos');
    return;
  }

  // Formata mensagem para WhatsApp
  const texto = formatarMensagem(nome, telefone, assunto, mensagem);

  // Abre WhatsApp com a mensagem
  abrirWhatsApp(texto);

  // Limpa o formulário
  document.getElementById('formulario').reset();
}

/**
 * Formata a mensagem para envio via WhatsApp
 * 
 * @param {string} nome - Nome do cliente
 * @param {string} telefone - Telefone do cliente
 * @param {string} assunto - Assunto do pré-orçamento
 * @param {string} mensagem - Descrição da necessidade
 * @returns {string} Mensagem formatada
 */
function formatarMensagem(nome, telefone, assunto, mensagem) {
  return `*NOVO PRÉ-ORÇAMENTO*

👤 Nome: ${nome}

📞 Telefone: ${telefone}

📌 Assunto: ${assunto}

📝 Descrição:
${mensagem}`;
}

/**
 * Abre WhatsApp com a mensagem pré-formatada
 * 
 * @param {string} texto - Texto da mensagem a enviar
 */
function abrirWhatsApp(texto) {
  const numeroWhatsApp = '5531975967485';
  const mensagemCodificada = encodeURIComponent(texto);
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

  window.open(linkWhatsApp, '_blank');
}

/**
 * Função utilitária para debug
 */
function debugLog(mensagem) {
  if (process.env.NODE_ENV === 'development') {
    console.log('[Mary Assistência]', mensagem);
  }
}
