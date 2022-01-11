    <div class="headerBack"></div>
    <header class="header">
      <div class="container">
        <div class="row">
        <nav class="navbar navbar-expand-lg w-100">
          <a class="navbar-brand" href="index.php"><img src="assets/images/index/logo.webp" /></a>
          <a class="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' width="24" height="24" viewBox="0 0 24 24"><path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z"/></svg>
            </span>
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="controle">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="index.php">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="empresa.php">Empresa</a>
                </li>
                <li class="nav-item dropdown" id="navbarDropdown">
                  <a class="nav-link dropdown-toggle" onclick="menuSelect(this)" id="all" href="projetos.php" >
                    Projetos
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" onclick="menuSelect(this)" id="p-all" href="projetos.php">Todos</a>
                    <a class="dropdown-item" onclick="menuSelect(this)" id="p-brickwork" href="projetos.php">Casas em Alvenaria</a>
                    <a class="dropdown-item" onclick="menuSelect(this)" id="p-wood" href="projetos.php">Casas em Madeira</a>
                    <a class="dropdown-item" onclick="menuSelect(this)" id="p-loft" href="projetos.php">Sobrados</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="galeria.php">Galeria</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contato.php">Contato</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
      </div>
    </header>