 // Função para formatar números para exibir dois dígitos (por exemplo, 01, 02, ..., 09)
 function formatNumber(num) {
    return num < 10 ? '0' + num : num;
}

// Função para atualizar o relógio digital
function updateDigitalClock() {
    const clockElement = document.getElementById('digitalClock');

    // Obter a hora atual
    const currentTime = new Date();
    const hours = formatNumber(currentTime.getHours());
    const minutes = formatNumber(currentTime.getMinutes());
    const seconds = formatNumber(currentTime.getSeconds());

    // Atualizar o conteúdo da div do relógio
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;

    // Atualizar a cada segundo
    setTimeout(updateDigitalClock, 1000);
}

// Chamar a função para iniciar o relógio digital
updateDigitalClock();