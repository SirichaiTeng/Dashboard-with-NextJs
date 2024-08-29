import Link from "next/link"
export default function Navbar() {
    return <div className="d-flex justify-content-between bg-body-tertiary">
        <div className="navbar p-3">
            <Link href={'/'}><span><i className="fa-solid fa-database"></i></span></Link>
        </div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">Navbar</Link>
        <button className="navbar-toggler bg-primary p-4 m-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          กด<span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link href="/" className="nav-link" aria-current="page">Home</Link>
            <Link href="./login" className="nav-link">Login</Link>
            <Link href="/pricing" className="nav-link">Pricing</Link>
            <Link href="/disabled" className="nav-link">Disabled</Link>
          </div>
        </div>
      </div>
    </nav>
    </div>
}