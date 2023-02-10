import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="p-4 vh-100 position-absolute top-50 start-50 translate-middle">
      <h1 className="h1 text-center">BloxsBank</h1>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Login
          </label>
          <input
            type="text"
            className="form-control"
            id="cpf"
            aria-describedby="cpfHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Senha
          </label>
          <input type="password" className="form-control" id="birthDate" />
        </div>
        <div className="d-grid gap-2 mb-2">
          <button type="submit" className="btn btn-primary">
            Entrar
          </button>
        </div>
      </form>
      <p className="text-center">
        Não possui cadastro? <Link to={`/signup/`}>Crie sua conta aqui!</Link>
      </p>
    </div>
  );
}
