const cpf = document.getElementById('cpf').value;
const nome = document.getElementById('firstName').value;
const sobrenome = document.getElementById('lastName').value;

const dataAtual = new Date();
const horaAtual = dataAtual.toLocaleString();
const employeeData = { cpf, nome, sobrenome, horaAtual };

const ev = (event)=>{
    event.preventDefault();

alert([[cpf],'\n',[nome],'\n',[sobrenome],'\n',[horaAtual]]);

};
  
document.querySelector('form').addEventListener('submit', ev);


