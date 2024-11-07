// Função para alterar a cor de fundo
document.getElementById("changeColorBtn").addEventListener("click", function() {
    // Lista de cores de fundo em tons de rosa
    const colors = [
      "#fce4ec", // rosa claro
      "#f8bbd0", // rosa bebê
      "#ff80ab", // rosa médio
      "#ff4081", // rosa vibrante
      "#f50057"  // rosa intenso
    ];
  
    // Escolhe uma cor aleatória
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    // Altera o fundo da página para a cor escolhida
    document.body.style.backgroundColor = randomColor;
  });
  