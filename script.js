// set initial count
let count = 0;

/* 
  usando querySelectorAll, é possível selecionar todos os botões que tem
  a classe genérica btn e então usar o método forEach(por ser um Array) e então
  faremos um loop sobre eles e iremos checkar. Se o botão for decrease, então o 
  número será subtraído, se for increase, será somado.
*/

// select value and buttons
const value = document.querySelector("#value"); // o # é usado por ser um id
const btns = document.querySelectorAll(".btn"); // selecionar todos os botões que têm essa classe btn

console.log(btns); // Se abrir o console, é possível ver uma node list ArrayLike, onde é possível usar alguns métodos e outros, não, só se transformássemos a lista num Array.

btns.forEach(function (btn) {
  /* 
    Ao invés de selecionar cada um dos botões, com cada uma de suas classes, nós selecionamos todas elas,
    usando a classe .btn. E agora, enquanto fazemos um loop pela lista, então eu quero adicionar os event listeners.
    Então, btn.addEventListener, precisaremos então ouvir o clique e depois passar a callback function.
    Acessaremos o event object diretamente pq queremos checkar qual botão estamos clicando, pois tem uma lista.
    No event object, temos o current target.
  */
  btn.addEventListener("click", function (e) {
    /* 
      Estamos numa função callback, acessando o eventObject(e), ele tem uma prop de currentTarget e toda vez que clicarmos em um botão
      será salvo na variável styles, quais as classes que esse elemento tem.
    */
    const styles = e.currentTarget.classList;
    // Se a variável contém uma classe específica, isso significa que estou clicando em increase, decrease ou reset.
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    /* 
      Para substituir o conteúdo do texto com esse novo count, value, que contém o valor da span, 
      estará inserindo um novo valor de texto naquele span.
    */
    value.textContent = count;
  });
});
