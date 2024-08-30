'use client'
import { useEffect } from 'react';
import Link from "next/link";

export default function Navbar() {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);

    return (
        <div className="d-flex justify-content-between bg-body-tertiary">

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav navcustom">
                            <Link href="/" className="nav-link" aria-current="page">Home</Link>
                            <Link href="./dashboard" className="nav-link">Dashboard</Link>
                            <Link href="./contact" className="nav-link">Contact</Link>
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                </div>
            </nav>
            <div className="navbar p-3">
            <Link href="./login" className="nav-link">Login</Link>
            </div>
        </div>
    );
}