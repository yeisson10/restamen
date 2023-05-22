export function Logos({ logotipo, slogan, aviso }) {
    return (
    <header className="menu-header">
    <div className="header-col-left">
      <div className="header-headings-holder">
        <h1>{logotipo}</h1>
        <h3>{slogan}</h3>
      </div>
    </div>
    <div className="header-col-right">
      <p>{aviso}</p>
    </div>
  </header>
  )
}