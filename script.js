const lista = document.getElementById('lista-alunos');
const filtro = document.getElementById('filtro');

let alunos = []; // Lista original

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

// Atualiza enquanto digita
filtro.addEventListener('input', () => {
  renderizarLista(filtro.value);
});

// Carrega os dados
fetch('alunos.json')
  .then(res => {
    if (!res.ok) throw new Error('Erro ao carregar arquivo');
    return res.json();
  })
  .then(data => {
    alunos = data;
    renderizarLista();
  })
  .catch(error => {
    lista.innerHTML = '<li style="font-style: italic;">Erro ao carregar dados.</li>';
    console.error(error);
  });

// Função para baixar JSON filtrado
function baixarJSON() {
  const filtroTexto = filtro.value.toLowerCase();

  const alunosFiltrados = alunos.filter(aluno => {
    return (
      aluno.nome.toLowerCase().includes(filtroTexto) ||
      aluno.curso.toLowerCase().includes(filtroTexto) ||
      aluno.semestre.toLowerCase().includes(filtroTexto)
    );
  });

  const blob = new Blob([JSON.stringify(alunosFiltrados, null, 2)], {
    type: 'application/json'
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'alunos-filtrados.json';
  link.click();
  URL.revokeObjectURL(url);
}

document.getElementById('baixar-json').addEventListener('click', baixarJSON);
