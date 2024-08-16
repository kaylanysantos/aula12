const tarefas = [];

function exibirLista() {
  const taskListElement = document.getElementById("taskList");
  taskListElement.innerHTML = "";

  for (let indice = 0; indice < tarefas.length; indice++) {
    taskListElement.innerHTML += `
      <li>
        ${indice + 1}. ${tarefas[indice]}
        <button onclick="removerTarefa(${indice})">Deletar</button>
      </li>
<<<<<<< HEAD
  `;
=======
    `;
>>>>>>> d67a13d3462302d9c73496ca7811f58ac6468f34
  }
}

function adicionarTarefa(lista, novaTarefa) {
  if (novaTarefa) {
    lista.push(novaTarefa);
    exibirLista();
  }
}

document.getElementById("addTaskButton").addEventListener("click", () => {
  const input = document.getElementById("taskInput");
  const tarefa = input.value;
  adicionarTarefa(tarefas, tarefa);
  input.value = "";
});

function removerTarefa(indice) {

}
<<<<<<< HEAD
 
function removerTarefa(indice) {
    tarefas.splice(indice, 1);
    exibirLista();
}
=======
>>>>>>> d67a13d3462302d9c73496ca7811f58ac6468f34
