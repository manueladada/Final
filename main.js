/* Resetando margens e paddings */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Estilos gerais */
  body {
    font-family: 'Arial', sans-serif;
    background-color: #fce4ec;
    color: #333;
    line-height: 1.6;
    text-align: center;
    padding-bottom: 60px;
  }
  
  /* Estilos do cabeçalho */
  header {
    background-color: #ff80ab;
    color: white;
    padding: 30px 20px;
  }
  
  header h1 {
    font-size: 3.5em;
    margin-bottom: 10px;
  }
  
  header p {
    font-size: 1.2em;
    margin-top: 0;
  }
  
  /* Estilo da seção principal */
  .main-content {
    padding: 40px 20px;
  }
  
  /* Estilos para os personagens */
  .character {
    background-color: #ffccf9;
    margin-bottom: 30px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .character:hover {
    transform: scale(1.05);
  }
  
  .character h2 {
    font-size: 2.5em;
    margin-bottom: 10px;
  }
  
  .character img {
    width: 250px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }
  
  .character img:hover {
    transform: scale(1.1);
  }
  
  .character p {
    font-size: 1.1em;
    margin-top: 10px;
  }
  
  .character a {
    display: inline-block;
    margin-top: 10px;
    color: #ff3385;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
  }
  
  .character a:hover {
    color: #ff66b2;
  }
  
  /* Estilo para o botão */
  button {
    margin-top: 30px;
    padding: 12px 30px;
    font-size: 1.2em;
    background-color: #ff66b2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition;

  }