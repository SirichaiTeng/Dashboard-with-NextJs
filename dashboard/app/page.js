"use client";
import style from './globals.css'
import { Image } from "react-bootstrap";
import { useState } from "react";
import Link from "next/link";
export default function Home() {
  return (
    <div >
      <div className="col-lg-12 d-flex justify-content-center">
        <Image
          src=".\Image\Doraemon-removebg-preview.png"
          className="img-fluid "
          style={{ height: "600px" }}
          alt="Doraemon"
        />
      </div>
      <div className="col-lg-12 mt-3  d-flex justify-content-center">
        <Link className="btn fs-3 m-1 px-4 welcome" href={"./login"}>        
          เข้าสู่เว็บไซต์
        </Link>
      </div>
    </div>
  );
}
