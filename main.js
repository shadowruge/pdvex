function salvar() {
  document.getElementById("cpf").value
  document.getElementById("nome").value
  document.getElementById("sobrenome").value
  

  dayName = new Array("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
  monName = new Array("Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")
  now = new Date
  fuldate = {
    hora: now.getHours(),
    minutos: now.getMinutes(),
    dia: dayName[now.getDay()],
    data: now.getDate(),
    mes: now.getMonth() + 1,
    ano: now.getFullYear()
  }

  funcionarios =
    `<div>
    <table>
  <tr>
    <th>Cpf</th> 
    <th>Nome</th>
    <th>Sobrenome</th>
    <th>Hora</th>
    <th>Minutos</th>
    <th>Dia</th>
    <th>Data</th>
    <th>Mês</th>
    <th>Ano</th>
    
  </tr>
  
  <tr>
    <td>${cpf.value}${[]}</td>
    <td>${[]} ${nome.value}</td>
    <td>${sobrenome.value}</th>
    <td>${now.getHours()}</td>
    <td>${now.getMinutes()}</td>
    <td>${dayName[now.getDay()]}</td>
    <td>${now.getDate()}</th>
    <td>${monName[now.getMonth()]}</td>
    <td>${now.getFullYear()}</td>
   
  </tr>
  </table>

  </div>
  `
  document.getElementById("view").innerHTML += funcionarios}
