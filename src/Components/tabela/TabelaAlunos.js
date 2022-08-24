import React from "react";
import "./syle.css";

export default function TabelaAlunos(props) {
  function SerieLabel(param) {
    switch (param) {
      case "1":
        return "Infantil IV ";
      case "2":
        return "Infantil V";
      case "3":
        return "1º ano";
      case "4":
        return "2º ano";
      case "5":
        return "3º ano";
      case "6":
        return "4º ano";
      case "7":
        return "5º ano";
      default:
        return "X";
    }
  }
  function TurmaLabel(param) {
    switch (param) {
      case "1":
        return "A";
      case "2":
        return "B";
      case "3":
        return "C";
      default:
        return "X";
    }
  }
  function TurnoLabel(param) {
    switch (param) {
      case "1":
        return "Manhã";
      case "2":
        return "Tarde";
      default:
        return "X";
    }
  }
  return (
    <div className="w-100 p-3 container-fluid">
      <table className="table table-bordered tabelaalunos w-100 p-3">
        <thead>
          <tr className="tablecolor">
            <th scope="col">Cod.</th>
            <th scope="col">Aluno(a)</th>
            <th scope="col">Nascimento</th>
            <th scope="col">Série</th>
            <th scope="col">Turno</th>
            <th scope="col">Telefone</th>
            <th scope="col">Deficiência</th>
            <th scope="col">Observação</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.alunos.map((ativ) => (
            <tr>
              <th className="codigo" scope="row" key={ativ.id}>
                {ativ.id}
              </th>
              <td>{ativ.nome}</td>
              <td>{ativ.nasc}</td>
              <td>
                {SerieLabel(ativ.serie)} - {TurmaLabel(ativ.turma)}
              </td>
              <td>{TurnoLabel(ativ.turno)}</td>
              <td>{ativ.telefone}</td>
              <td>{ativ.deficiencia}</td>
              <td>{ativ.observacao}</td>
              <td className="text-center codigo">
                <button className="btn btn-outline-primary mb-1 ">
                  <i className="fas fa-pen "></i>
                </button>
                <button
                  className="btn btn-outline-danger "
                  onClick={() => props.deletaraluno(ativ.id)}
                >
                  <i className="fas fa-trash "></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
