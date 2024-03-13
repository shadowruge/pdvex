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
  <table border="1">
  <tr>
    <td>Cpf</td>
    <td>Nome</td>
    <td>Sobrenome</td>
    <td>Hora</td>
    <td>Minutos</td>
    <td>Dia</td>
    <td>Data</td>
    <td>Mês</td>
    <td>Ano</td>
    
  </tr>
  
  <tr>
    <td>${cpf.value}</td>
    <td>${nome.value}</td>
    <td>${sobrenome.value}</td>
    <td>${now.getHours()}</td>
    <td>${now.getMinutes()}</td>
    <td>${dayName[now.getDay()]}</td>
    <td>${now.getDate()}</td>
    <td>${monName[now.getMonth()]}</td>
    <td>${now.getFullYear()}</td>
   
  </tr>
  </table>

  </div>`
  document.getElementById("view").innerHTML += funcionarios}