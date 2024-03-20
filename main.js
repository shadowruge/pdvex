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
    <br>
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
  
    <th>${cpf.value}${[]}</th>
    <th>${[]} ${nome.value}</th>
    <th>${sobrenome.value}</th>
    <th>${now.getHours()}</th>
    <th>${now.getMinutes()}</th>
    <th>${dayName[now.getDay()]}</th>
    <th>${now.getDate()}</th>
    <th>${monName[now.getMonth()]}</th>
    <th>${now.getFullYear()}</th>
   
  </tr>
  </table>

  </div><hr>`
  document.getElementById("view").innerHTML += funcionarios}
