import Image from "react-bootstrap/Image";
export default function Map() {
  return (
    <div className="vh-100">
      <div className="d-flex justify-content-center lign-items-center mt-5">
        <h1>สถานที่ตั้ง</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center ">
        <Image
          src="https://cdn.pixabay.com/photo/2022/01/19/06/04/map-6948875_1280.png"
          style={{ height: "500px" }}
        />
        ;
      </div>
    </div>
  );
}
