const tableBodyElement = document.querySelector('#userTable tbody');

fetch('http://localhost:3000/aluno')
  .then(response => response.json())
  .then(data => {
    const users = data;
    users.forEach(user => {
      const row = document.createElement('tr');
      const nome = document.createElement('td');
      const data_nascimento = document.createElement('td');
      const email_institucional = document.createElement('td');
      const matricula = document.createElement('td');

      nome.textContent = user.nome;
      data_nascimento.textContent = user.data_nascimento;
      email_institucional.textContent = user.email_institucional;
      matricula.textContent = user.matricula;


      row.appendChild(nome);
      row.appendChild(data_nascimento);
      row.appendChild(email_institucional);
      row.appendChild(matricula);
  

      tableBodyElement.appendChild(row);
    });
  })

