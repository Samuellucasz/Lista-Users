import './User.css'

function User({ imagem, nome, idade, genero, email, telefone, empresa, cargo, cidade }) {
  return (
    <div className="card">
      <div className="resumo">
        <img className="foto" src={imagem} alt={`Foto de ${nome}`} />
        <div className="identidade">
          <h3 className="nome">{nome}</h3>
          <p className="perfil">{idade} anos <span>|</span> {genero}</p>
        </div>
      </div>

      <div className="detalhes">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Telefone:</strong> {telefone}</p>
        <p><strong>Empresa:</strong> {empresa}</p>
        <p><strong>Cargo:</strong> {cargo}</p>
        <p><strong>Cidade:</strong> {cidade}</p>
      </div>
    </div>
  )
}

export default User
