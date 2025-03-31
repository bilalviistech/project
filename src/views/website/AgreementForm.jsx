import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
// import Footer from "../components/Footer";
import imagePic from "@/assets/images.jfif";
import { Link, useParams } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AgreementForm = () => {
    const { id } = useParams()
  const [formData, setFormData] = useState({
    name: "", email: "", address: "", amount: ""
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const printRef = useRef();
  const handlePrint = useReactToPrint({ content: () => printRef.current });

  return (
    <>
    <Header/>
      {/* <Navbar /> */}
      <div className="bg-[#003092] min-h-screen flex flex-col items-center py-10">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-[#003092]">Order Now</h2>
            <form className="mt-4 space-y-4">
              <input type="text" name="name" placeholder="Full Name" className="w-full p-2 border rounded" onChange={handleChange} />
              <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded" onChange={handleChange} />
              <input type="text" name="address" placeholder="Address" className="w-full p-2 border rounded" onChange={handleChange} />
              <input type="number" name="amount" placeholder="Amount" className="w-full p-2 border rounded" onChange={handleChange} />
            </form>
            <Link to={"/checkout"}>
            <button className="mt-4 w-full bg-[#FF7F3E] text-white py-2 rounded">Go to Checkout Page</button>
            </Link>
          </div>
          {/* Agreement Preview */}
          <div className="bg-white p-6 shadow-lg rounded-lg relative" ref={printRef}>
            <img src={imagePic} alt="Stamp" className="w-full h-auto opacity-30" />
            <div className="absolute top-0 left-0 w-full h-full p-6">
              <h2 className="text-xl font-bold text-center underline mb-2">AGREEMENT</h2>
              <p>Name: <strong>{formData.name || "____"}</strong></p>
              <p>Email: <strong>{formData.email || "____"}</strong></p>
              <p>Address: <strong>{formData.address || "____"}</strong></p>
              <p>Amount: <strong>{formData.amount || "____"}</strong></p>
            </div>
          </div>
        </div>
              <div className="flex items-center justify-center gap-3">
                  <Link to={"/checkout"}>
                      <button className="mt-4 w-full bg-[#FF7F3E] text-white py-2 rounded px-2">Previous Page</button>
                  </Link>
                  <Link to={"/checkout"}>
                      <button className="mt-4 w-full bg-[#FF7F3E] text-white py-2 rounded px-2">Next Page</button>
                  </Link>
              </div>
      </div>
      {/* <Footer /> */}
          <Footer />
    </>
  );
}

export default AgreementForm;