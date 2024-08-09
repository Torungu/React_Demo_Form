import React from "react";
import FormSinhVien from "./components/FormSinhVien";

function App() {
  return (
    <>
      <header className=" bg-gray-500 uppercase text-center font-bold py-5 text-3xl text-white">
        Thông tin sinh viên
      </header>
      <div className="my-5">
        <FormSinhVien />
      </div>
      <footer className=" bg-gray-50 text-center font-medium py-3 text-gray-700">
        &copy;Torungu2024
      </footer>
    </>
  );
}

export default App;
