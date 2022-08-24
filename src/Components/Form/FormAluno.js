import React from "react";
import "./form.css";

export default function FormAluno(props) {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label>ID: </label>
          <input
            id="id"
            type="text"
            className="form-control"
            placeholder="Número"
            readOnly
            value={
              Math.max.apply(
                Math,
                props.alunos.map((item) => item.id)
              ) + 1
            }
          />
        </div>
        {/*Nome*/}
        <div className="form-group">
          <label>Nome: </label>
          <input
            id="nome"
            type="text"
            className="form-control"
            placeholder="Nome do Aluno"
          />
        </div>
        {/*Nascimento*/}
        <div className="form-group ">
          <label>Data de Nascimento: </label>
          <input
            id="nasc"
            type="date"
            name="txtNasc"
            className="form-control"
            placeholder="Ex. 05/05/2010"
            min="1997-01-01"
            max="2030-12-31"
          />
        </div>
        {/*Série*/}
        <div className="form-group col-7 displayinline me-1">
          <label>Série:</label>
          <select className="form-control" id="serie">
            <option defaultValue="0">Selecionar...</option>
            <option value="1">Infantil IV</option>
            <option value="2">Infantil V</option>
            <option value="3">1º ano</option>
            <option value="4">2º ano</option>
            <option value="5">3º ano</option>
            <option value="6">4º ano</option>
            <option value="7">5º ano</option>
          </select>
        </div>
        {/*Turma*/}
        <div className="form-group col-2 displayinline me-1">
          <label>Turma:</label>
          <select className="form-control" id="turma">
            <option defaultValue="0">Selecionar...</option>
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
          </select>
        </div>
        {/*Turno*/}
        <div className="form-group col-2 displayinline">
          <label>Turno:</label>
          <select className="form-control" id="turno">
            <option defaultValue="0">Selecionar...</option>
            <option value="1">Manhã</option>
            <option value="2">Tarde</option>
          </select>
        </div>
        {/*Telefone*/}
        <div className="form-group">
          <label>Telefone: </label>
          <input
            id="telefone"
            type="tel"
            name="txtTel"
            className="form-control"
            placeholder="(83) 98456-4584"
          />
        </div>
        {/*Deficiência*/}
        <div className="form-group">
          <label>Deficiência:</label>
          <textarea
            name="txtdef"
            className="form-control"
            id="deficiencia"
          ></textarea>
        </div>
        {/*Observação*/}
        <div className="form-group">
          <label>Observação: </label>
          <textarea
            name="txtobs"
            className="form-control"
            id="observacao"
          ></textarea>
        </div>
      </form>
      <div className="col-12">
        <button
          className="btn btn-outline-success mt-3"
          onClick={props.addaluno}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}
