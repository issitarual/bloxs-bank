import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-4 vh-100 position-absolute top-50 start-50 translate-middle">
      <h1 className="h1 text-center">BloxsBank</h1>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Nome
          </label>
          <input type="text" className="form-control" id="nome" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            CPF
          </label>
          <input type="text" className="form-control" id="cpf" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Data de Nascimento
          </label>
          <input type="date" className="form-control" id="birthDate" />
        </div>
        <div class="form-floating mb-3">
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected>Selecione o tipo de conta</option>
            <option value="1">Corrente</option>
            <option value="2">Salário</option>
            <option value="3">Poupança</option>
          </select>
          <label for="floatingSelect">Tipo de conta</label>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Limite de Saque
          </label>
          <input type="number" className="form-control" id="birthDate" />
        </div>
        <div className="d-grid gap-2 mb-2">
          <button type="submit" className="btn btn-primary">
            Cadastrar
          </button>
        </div>
      </form>
      <p className="text-center">
        Já possui cadastro? <Link to={`/login/`}>Entre na sua conta aqui!</Link>
      </p>
    </div>
  );
}
