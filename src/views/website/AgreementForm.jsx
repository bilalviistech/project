import { useState } from "react";
// import Footer from "../components/Footer";
import imagePic from "@/assets/images/page1.jpg";
import page2 from "@/assets/images/page2.png";
import { Link, useParams } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AgreementForm = () => {
  const { id } = useParams()
  const [page, setPage] = useState(1)
  const [pageOneData, setPageOneData] = useState({
    tenantName: "",
    tenantSonOf: "",
    tenantCnic: "",
    tenantAdd: "",
    landlordName: "",
    landlordSonOf: "",
    landlordCnic: "",
    landlordAdd: "",
  })
  const [point1, setPoint1] = useState({
    duration: "",
    timePeriod: "",
    expiry: "",
    price: "",
    advance: "",
  })
  const [pageTwoData, setPageTwoData] = useState({
    tenantName: "",
    tenantSonOf: "",
    tenantCnic: "",
    tenantAdd: "",
    landlordName: "",
    landlordSonOf: "",
    landlordCnic: "",
    landlordAdd: "",
  })

  return (
    <>
      <Header />
      {/* <Navbar /> */}
      <div className="bg-[#003092] flex flex-col items-center px-4 md:px-10 py-10">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          {
            page == 1 ? (
              <>
                <div className="bg-white p-6 md:p-8 shadow-xl rounded-2xl transition-all duration-300">
                  <h2 className="text-2xl font-bold text-[#003092]">Order Now</h2>
                  <form className="mt-4 space-y-4">
                    <input type="text" name="Landlord Name"
                      placeholder="Landlord Name" className="w-full p-2 border rounded" value={pageOneData.landlordName}
                      onChange={(e) =>
                        setPageOneData({ ...pageOneData, landlordName: e.target.value })
                      } maxLength={50} />
                    <input type="text" name="Landlord Son Of"
                      placeholder="Landlord Son Of" className="w-full p-2 border rounded" value={pageOneData.landlordSonOf}
                      onChange={(e) =>
                        setPageOneData({ ...pageOneData, landlordSonOf: e.target.value })
                      } maxLength={7} />
                    <input type="text" name="Landlord Cnic"
                      placeholder="Landlord Cnic" className="w-full p-2 border rounded" value={pageOneData.landlordCnic}
                      onChange={(e) =>
                        setPageOneData({ ...pageOneData, landlordCnic: e.target.value })
                      } maxLength={13} />
                    <input type="text" name="landlord Address"
                      placeholder="Landlord Address" className="w-full p-2 border rounded" value={pageOneData.landlordAdd}
                      onChange={(e) =>
                        setPageOneData({ ...pageOneData, landlordAdd: e.target.value })
                      } maxLength={19} />
                    <input type="text" name="Tenant Name"
                      placeholder="tenant Name" className="w-full p-2 border rounded" value={pageOneData.tenantName}
                      onChange={(e) =>
                        setPageOneData({ ...pageOneData, tenantName: e.target.value })
                      } maxLength={6} />
                    <input type="text" name="Tenant Son Of"
                      placeholder="tenant Son Of" className="w-full p-2 border rounded" value={pageOneData.tenantSonOf}
                      onChange={(e) =>
                        setPageOneData({ ...pageOneData, tenantSonOf: e.target.value })
                      } maxLength={5} />
                    <input type="text" name="Tenant Cnic"
                      placeholder="tenant Cnic" className="w-full p-2 border rounded" value={pageOneData.tenantCnic}
                      onChange={(e) =>
                        setPageOneData({ ...pageOneData, tenantCnic: e.target.value })
                      } maxLength={13} />
                    <input type="text" name="Tenant Address"
                      placeholder="tenant Address" className="w-full p-2 border rounded" value={pageOneData.tenantAdd}
                      onChange={(e) =>
                        setPageOneData({ ...pageOneData, tenantAdd: e.target.value })
                      } maxLength={19} />
                    <input type="text" name="Duration"
                      placeholder="Duration" className="w-full p-2 border rounded" value={point1.duration}
                      onChange={(e) =>
                        setPoint1({ ...point1, duration: e.target.value })
                      } maxLength={5} />
                    <input type="text" name="timePeriod"
                      placeholder="Time Period" className="w-full p-2 border rounded" value={point1.timePeriod}
                      onChange={(e) =>
                        setPoint1({ ...point1, timePeriod: e.target.value })
                      } maxLength={8} />
                    <input type="text" name="expiry"
                      placeholder="Expiry" className="w-full p-2 border rounded" value={point1.expiry}
                      onChange={(e) =>
                        setPoint1({ ...point1, expiry: e.target.value })
                      } maxLength={9} />
                    <input type="text" name="price"
                      placeholder="Price" className="w-full p-2 border rounded" value={point1.price}
                      onChange={(e) =>
                        setPoint1({ ...point1, price: e.target.value })
                      } maxLength={5} />
                    <input type="text" name="advance"
                      placeholder="Advance" className="w-full p-2 border rounded" value={point1.advance}
                      onChange={(e) =>
                        setPoint1({ ...point1, advance: e.target.value })
                      } maxLength={4} />

                  </form>
                  <Link to={"/checkout"}>
                    <button className="mt-4 w-full bg-[#FF7F3E] text-white py-2 rounded">Go to Checkout Page</button>
                  </Link>
                </div>

                <div className="bg-white p-4 md:p-6 shadow-lg rounded-2xl relative">
                  <img src={imagePic} alt="Stamp" className="w-full h-auto rounded-lg" />
                  <div className="absolute top-[23.5rem] left-[5.5rem] p-6">
                    <p className="text-xs">
                      <strong>{pageOneData.landlordName || ""}</strong>
                    </p>
                  </div>
                  <div className="absolute top-[23.5rem] left-[10rem] p-6">
                    <p className="text-xs">
                      <strong>{pageOneData.landlordSonOf || ""}</strong>
                    </p>
                  </div>
                  <div className="absolute top-[23.5rem] left-[18rem] h-full p-6">
                    <p className="text-xs">
                      <strong>{pageOneData.landlordCnic || ""}</strong>
                    </p>
                  </div>
                  <div className="absolute top-[24.5rem] left-[4rem] h-full p-6">
                    <p className="text-xs">
                      <strong>{pageOneData.landlordAdd || ""}</strong>
                    </p>
                  </div>
                  <div className="absolute top-[28rem] left-[5.7rem] h-full p-6">
                    <p className="text-xs">
                      <strong>{pageOneData.tenantName || ""}</strong>
                    </p>
                  </div>
                  <div className="absolute top-[28rem] left-[10rem] h-full p-6">
                    <p className="text-xs">
                      <strong>{pageOneData.tenantSonOf || ""}</strong>
                    </p>
                  </div>
                  <div className="absolute top-[28rem] left-[17rem] h-full p-6">
                    <p className="text-xs">
                      <strong>{pageOneData.tenantCnic || ""}</strong>
                    </p>
                  </div>
                  <div className="absolute top-[29rem] left-[5rem] h-full p-6">
                    <p className="text-xs">
                      <strong>{pageOneData.tenantAdd || ""}</strong>
                    </p>
                  </div>
                  <div className="absolute top-[39.5rem] left-[17.8rem] h-full p-6">
                    <p className="text-xs">
                      <strong>{point1.duration || ""}</strong>
                    </p>
                  </div>
                  <div className="absolute top-[40.5rem] left-[6rem] h-full p-6">
                    <p className="text-xs">
                      <strong>{point1.timePeriod || ""}</strong>
                    </p>
                  </div>
                  <div className="absolute top-[40.5rem] left-[13rem] h-full p-6">
                    <p className="text-xs">
                      <strong>{point1.expiry || ""}</strong>
                    </p>
                  </div>
                  <div className="absolute top-[41.5rem] left-[11.7rem] h-full p-6">
                    <p className="text-xs">
                      <strong>{point1.price || ""}</strong>
                    </p>
                  </div>
                  <div className="absolute top-[41.5rem] left-[24.5rem] h-full p-6">
                    <p className="text-xs">
                      <strong>{point1.advance || ""}</strong>
                    </p>
                  </div>

                </div>
              </>
            ) : page == 2 ? (
              <>
                <div className="bg-white p-6 md:p-8 shadow-xl rounded-2xl transition-all duration-300">
                  <h2 className="text-2xl font-bold text-[#003092]">Order Now</h2>
                  <form className="mt-4 space-y-4">
                    <input type="text" name="Landlord Name"
                      placeholder="Landlord Name" className="w-full p-2 border rounded" value={pageOneData.landlordName}
                      onChange={(e) =>
                        setPageOneData({ ...pageOneData, landlordName: e.target.value })
                      } maxLength={7} />
                    <input type="text" name="Landlord Son Of"
                      placeholder="Landlord Son Of" className="w-full p-2 border rounded" value={pageOneData.landlordSonOf}
                      onChange={(e) =>
                        setPageOneData({ ...pageOneData, landlordSonOf: e.target.value })
                      } maxLength={7} />
                    <input type="text" name="Landlord Cnic"
                      placeholder="Landlord Cnic" className="w-full p-2 border rounded" value={pageOneData.landlordCnic}
                      onChange={(e) =>
                        setPageOneData({ ...pageOneData, landlordCnic: e.target.value })
                      } maxLength={13} />
                    <input type="text" name="landlord Address"
                      placeholder="Landlord Address" className="w-full p-2 border rounded" value={pageOneData.landlordAdd}
                      onChange={(e) =>
                        setPageOneData({ ...pageOneData, landlordAdd: e.target.value })
                      } maxLength={19} />
                    <input type="text" name="Tenant Name"
                      placeholder="tenant Name" className="w-full p-2 border rounded" value={pageOneData.tenantName}
                      onChange={(e) =>
                        setPageOneData({ ...pageOneData, tenantName: e.target.value })
                      } maxLength={6} />
                    <input type="text" name="Tenant Son Of"
                      placeholder="tenant Son Of" className="w-full p-2 border rounded" value={pageOneData.tenantSonOf}
                      onChange={(e) =>
                        setPageOneData({ ...pageOneData, tenantSonOf: e.target.value })
                      } maxLength={5} />
                    <input type="text" name="Tenant Cnic"
                      placeholder="tenant Cnic" className="w-full p-2 border rounded" value={pageOneData.tenantCnic}
                      onChange={(e) =>
                        setPageOneData({ ...pageOneData, tenantCnic: e.target.value })
                      } maxLength={13} />
                    <input type="text" name="Tenant Address"
                      placeholder="tenant Address" className="w-full p-2 border rounded" value={pageOneData.tenantAdd}
                      onChange={(e) =>
                        setPageOneData({ ...pageOneData, tenantAdd: e.target.value })
                      } maxLength={19} />
                    <input type="text" name="Duration"
                      placeholder="Duration" className="w-full p-2 border rounded" value={point1.duration}
                      onChange={(e) =>
                        setPoint1({ ...point1, duration: e.target.value })
                      } maxLength={5} />
                    <input type="text" name="timePeriod"
                      placeholder="Time Period" className="w-full p-2 border rounded" value={point1.timePeriod}
                      onChange={(e) =>
                        setPoint1({ ...point1, timePeriod: e.target.value })
                      } maxLength={8} />
                    <input type="text" name="expiry"
                      placeholder="Expiry" className="w-full p-2 border rounded" value={point1.expiry}
                      onChange={(e) =>
                        setPoint1({ ...point1, expiry: e.target.value })
                      } maxLength={9} />
                    <input type="text" name="price"
                      placeholder="Price" className="w-full p-2 border rounded" value={point1.price}
                      onChange={(e) =>
                        setPoint1({ ...point1, price: e.target.value })
                      } maxLength={5} />
                    <input type="text" name="advance"
                      placeholder="Advance" className="w-full p-2 border rounded" value={point1.advance}
                      onChange={(e) =>
                        setPoint1({ ...point1, advance: e.target.value })
                      } maxLength={4} />

                  </form>
                  <Link to={"/checkout"}>
                    <button className="mt-4 w-full bg-[#FF7F3E] text-white py-2 rounded">Go to Checkout Page</button>
                  </Link>
                </div>

                <div className="bg-white p-4 md:p-6 shadow-lg rounded-2xl relative">
                    <img src={page2} alt="Stamp" className="w-full h-auto rounded-lg" />
                  <div className="absolute top-[23.5rem] left-[5.5rem] p-6">
                    <p className="text-xs">
                      <strong>{pageOneData.landlordName || ""}</strong>
                    </p>
                  </div>
                  <div className="absolute top-[23.5rem] left-[10rem] p-6">
                    <p className="text-xs">
                      <strong>{pageOneData.landlordSonOf || ""}</strong>
                    </p>
                  </div>
                  <div className="absolute top-[23.5rem] left-[18rem] h-full p-6">
                    <p className="text-xs">
                      <strong>{pageOneData.landlordCnic || ""}</strong>
                    </p>
                  </div>
                  <div className="absolute top-[24.5rem] left-[4rem] h-full p-6">
                    <p className="text-xs">
                      <strong>{pageOneData.landlordAdd || ""}</strong>
                    </p>
                  </div>
                  <div className="absolute top-[28rem] left-[5.7rem] h-full p-6">
                    <p className="text-xs">
                      <strong>{pageOneData.tenantName || ""}</strong>
                    </p>
                  </div>
                  <div className="absolute top-[28rem] left-[10rem] h-full p-6">
                    <p className="text-xs">
                      <strong>{pageOneData.tenantSonOf || ""}</strong>
                    </p>
                  </div>
                  <div className="absolute top-[28rem] left-[17rem] h-full p-6">
                    <p className="text-xs">
                      <strong>{pageOneData.tenantCnic || ""}</strong>
                    </p>
                  </div>
                  <div className="absolute top-[29rem] left-[5rem] h-full p-6">
                    <p className="text-xs">
                      <strong>{pageOneData.tenantAdd || ""}</strong>
                    </p>
                  </div>
                  <div className="absolute top-[39.5rem] left-[17.8rem] h-full p-6">
                    <p className="text-xs">
                      <strong>{point1.duration || ""}</strong>
                    </p>
                  </div>
                  <div className="absolute top-[40.5rem] left-[6rem] h-full p-6">
                    <p className="text-xs">
                      <strong>{point1.timePeriod || ""}</strong>
                    </p>
                  </div>
                  <div className="absolute top-[40.5rem] left-[13rem] h-full p-6">
                    <p className="text-xs">
                      <strong>{point1.expiry || ""}</strong>
                    </p>
                  </div>
                  <div className="absolute top-[41.5rem] left-[11.7rem] h-full p-6">
                    <p className="text-xs">
                      <strong>{point1.price || ""}</strong>
                    </p>
                  </div>
                  <div className="absolute top-[41.5rem] left-[24.5rem] h-full p-6">
                    <p className="text-xs">
                      <strong>{point1.advance || ""}</strong>
                    </p>
                  </div>

                </div>
              </>
            ) : ("")
          }


        </div>

        <div className="flex items-center justify-center gap-2">
          {/* <Link to={"/checkout"}> */}
          {/* </Link> */}
          {/* <Link to={"/checkout"}> */}
          <div>
            <button className="mt-4 w-full bg-[#FF7F3E] text-white py-2 rounded px-2" disabled={page <= 1} onClick={() => setPage(page + 1)}>Prev Page</button>
          </div>
          <div>
            <button className="mt-4 w-full bg-[#FF7F3E] text-white py-2 rounded px-2" disabled={page >= 3} onClick={() => setPage(page + 1)}>Next Page</button>
          </div>
          {
          /* </Link> */}
        </div>
      </div>
      {/* <Footer /> */}
      {/* <Footer />/ */}
    </>
  );
}

export default AgreementForm;