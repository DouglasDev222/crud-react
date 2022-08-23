import { useState } from "react";
import "./App.css";
import FormAluno from "./Components/Form/FormAluno";
import NavBar from "./Components/Navbar/NavBar";
import TabelaAlunos from "./Components/tabela/TabelaAlunos";

let initialState = [
  {
    id: 1,
    nome: "Douglas Santos",
    nasc: "2002-12-05",
    serie: "5",
    turma: "1",
    turno: "2",
    telefone: "(83) 98760-6350",
    deficiencia: "deficiencia",
    observacao: "observacao",
  },
];
function App() {
  const [alunos, setalunos] = useState(initialState);

  function addaluno(e) {
    e.preventDefault();

    const aluno = {
      id: document.getElementById("id").value,
      nome: document.getElementById("nome").value,
      nasc: document.getElementById("nasc").value,
      serie: document.getElementById("serie").value,
      turma: document.getElementById("turma").value,
      turno: document.getElementById("turno").value,
      telefone: document.getElementById("telefone").value,
      deficiencia: document.getElementById("deficiencia").value,
      observacao: document.getElementById("observacao").value,
    };
    console.log(alunos);
    setalunos([...alunos, { ...aluno }]);
  }
  function deletaraluno(id) {
    var resultado = window.confirm("Deseja excluir este aluno? ");
    if (resultado === true) {
      const alunosFiltradas = alunos.filter((aluno) => aluno.id !== id);
      setalunos([...alunosFiltradas]);
    } else {
      alert("não foi excluido");
    }
  }

  return (
    <div className="">
      <div className="container  mt-5">
        <h1>Lista de alunos</h1>
      </div>
      <hr></hr>
      <FormAluno addaluno={addaluno} alunos={alunos} />
      <NavBar />
      <TabelaAlunos alunos={alunos} deletaraluno={deletaraluno} />
    </div>
  );
}

export default App;
