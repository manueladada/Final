// Função que altera a cor de fundo de maneira suave
const changeBackgroundColor = () => {
    const colors = [
      "#fce4ec", // Rosa claro
      "#f8d1e1", // Rosa pastel
      "#ff80ab", // Rosa vibrante
      "#ff66b2", // Rosa intenso
      "#ff3385", // Rosa mais forte
      "#f5c1d1"  // Rosa suave e quente
    ];
  
    // Escolher uma cor aleatória da lista
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    // Aplicar a nova cor de fundo com transição suave
    document.body.style.transition = "background-color 0.5s ease-in-out";
    document.body.style.backgroundColor = randomColor;
  };
  
  // Função para exibir informações adicionais sobre o personagem
  const showCharacterDetails = (characterId) => {
    const characterElement = document.getElementById(characterId);
    const details = characterElement.querySelector('.character-details');
    
    // Mostrar ou ocultar as informações adicionais do personagem
    if (details.style.display === 'block') {
      details.style.display = 'none';
    } else {
      details.style.display = 'block';
    }
  };
  
  // Adicionando eventos interativos
  document.addEventListener("DOMContentLoaded", () => {
    // Evento de clique para mudar a cor de fundo
    const changeColorBtn = document.getElementById("changeColorBtn");
    if (changeColorBtn) {
      changeColorBtn.addEventListener("click", changeBackgroundColor);
    }
  
    // Evento de mouse hover para personagens
    const characterImages = document.querySelectorAll('.character img');
    characterImages.forEach(img => {
      img.addEventListener("mouseenter", () => {
        img.style.transform = 'scale(1.1)';  // Aumenta a imagem no hover
        img.style.transition = 'transform 0.3s ease-in-out';
      });
  
      img.addEventListener("mouseleave", () => {
        img.style.transform = 'scale(1)';  // Restaura a imagem
      });
    });
  
    // Evento para mostrar detalhes dos personagens ao clicar
    const characterContainers = document.querySelectorAll('.character');
    characterContainers.forEach(character => {
      character.addEventListener("click", () => {
        const characterId = character.id;
        showCharacterDetails(characterId);
      });
    });
  });
  