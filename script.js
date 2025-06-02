fetch('alunos.json')
  .then(response => response.json())
  .then(data => {
    const lista = document.getElementById('lista-alunos');
    data.forEach(aluno => {
      const item = document.createElement('li');
      item.textContent = `${aluno.nome} - ${aluno.curso} - ${aluno.semestre}`;
      lista.appendChild(item);
    });
  })
  .catch(error => {
    console.error('Erro ao carregar dados:', error);
  });
