const lista = document.getElementById('lista-alunos');
const filtro = document.getElementById('filtro');

let alunos = []; // Armazena os dados originais

function criarItemAluno(aluno) {
  const item = document.createElement('li');
  item.textContent = `${aluno.nome} - ${aluno.curso} - ${aluno.semestre}`;
  return item;
}

function renderizarLista(filtroTexto = '') {
  lista.innerHTML = '';
  const filtroMinusculo = filtroTexto.toLowerCase();

  const alunosFiltrados = alunos.filter(aluno => {
    return (
      aluno.nome.toLowerCase().includes(filtroMinusculo) ||
      aluno.curso.toLowerCase().includes(filtroMinusculo) ||
      aluno.semestre.toLowerCase().includes(filtroMinusculo)
    );
  });

  if (alunosFiltrados.length === 0) {
    const item = document.createElement('li');
    item.textContent = 'Nenhum aluno encontrado.';
    item.style.fontStyle = 'italic';
    lista.appendChild(item);
  } else {
    alunosFiltrados.forEach(aluno => {
      lista.appendChild(criarItemAluno(aluno));
    });
  }
}

// Atualiza a lista enquanto o usuário digita
filtro.addEventListener('input', () => {
  renderizarLista(filtro.value);
});

// Carrega os dados dos alunos inicialmente
fetch('alunos.json')
  .then(res => {
    if (!res.ok) throw new Error('Erro ao carregar arquivo');
    return res.json();
  })
  .then(data => {
    alunos = data;
    renderizarLista(); // Exibe todos os alunos inicialmente
  })
  .catch(error => {
    lista.innerHTML = '<li style="font-style: italic;">Erro ao carregar dados.</li>';
    console.error(error);
  });
