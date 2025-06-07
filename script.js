document.addEventListener('DOMContentLoaded', () => {
  const lista = document.getElementById('lista-alunos');
  const filtro = document.getElementById('filtro');
  const form = document.getElementById('form-aluno');
  const btnExportar = document.getElementById('btn-exportar');
  let alunos = [];

  function criarItemAluno(aluno) {
    const item = document.createElement('li');
    item.textContent = `${aluno.nome} - ${aluno.curso} - ${aluno.semestre}`;
    return item;
  }

  function renderizarLista(filtroTexto = '') {
    lista.innerHTML = '';
    const filtroMinusculo = filtroTexto.toLowerCase();

    const alunosFiltrados = alunos.filter(aluno => 
      aluno.nome.toLowerCase().includes(filtroMinusculo) ||
      aluno.curso.toLowerCase().includes(filtroMinusculo) ||
      aluno.semestre.toLowerCase().includes(filtroMinusculo)
    );

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

  filtro.addEventListener('input', () => {
    renderizarLista(filtro.value);
  });

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

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const novoAluno = {
        nome: document.getElementById('nome').value.trim(),
        curso: document.getElementById('curso').value.trim(),
        semestre: document.getElementById('semestre').value.trim()
      };
      alunos.push(novoAluno);
      renderizarLista(filtro.value);
      form.reset();
    });
  }

  if (btnExportar) {
    btnExportar.addEventListener('click', () => {
      const jsonString = JSON.stringify(alunos, null, 2);
      const blob = new Blob([jsonString], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "alunos_atualizado.json";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    });
  }
});
