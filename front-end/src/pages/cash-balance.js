export default function CashBalance() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <p class="navbar-brand" href="#">
          BloxsBank
        </p>
        <div class="dropdown-center">
          <button
            class="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Nome
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Bloquear conta
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Sair
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
