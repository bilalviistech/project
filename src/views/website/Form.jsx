import { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        day: "",
        date: "",
        year: "",
        landlordName: "",
        landlordSonOf: "",
        landlordCnic: "",
        landlordResident: "",
        tenantName: "",
        tenantSonOf: "",
        tenantCnic: "",
        tenantResident: "",
        landlordOwnerLocated: "",
        tenantTimePeriod: "",
    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="min-h-screen bg-white flex flex-col md:flex-row">
            {/* Form Section */}
            <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r p-4 md:p-8">
                <div className="space-y-4">
                    <input
                        type="text"
                        name="day"
                        value={formData?.day}
                        onChange={handleChange}
                        placeholder="Enter Your Day"
                        className="w-full border p-2 rounded"
                        maxLength={8}
                    />
                    <input
                        type="number"
                        name="date"
                        value={formData?.date}
                        onChange={handleChange}
                        placeholder="Enter Your Date"
                        className="w-full border p-2 rounded"
                        max={31}
                    />
                    <input
                        type="number"
                        name="year"
                        value={formData?.year}
                        onChange={handleChange}
                        placeholder="Enter Your Year"
                        className="w-full border p-2 rounded"
                        max={9999}
                    />
                    <input
                        type="text"
                        name="landlordName"
                        value={formData?.landlordName}
                        onChange={handleChange}
                        placeholder="Enter Your landlordName"
                        className="w-full border p-2 rounded"
                        max={9999}
                    />
                    <input
                        type="text"
                        name="landlordSonOf"
                        value={formData?.landlordSonOf}
                        onChange={handleChange}
                        placeholder="Enter Your landlordSonOf"
                        className="w-full border p-2 rounded"
                        max={9999}
                    />
                    <input
                        type="text"
                        name="landlordCnic"
                        value={formData?.landlordCnic}
                        onChange={handleChange}
                        placeholder="Enter Your landlordCnic"
                        className="w-full border p-2 rounded"
                        max={9999}
                    />
                    <input
                        type="text"
                        name="landlordResident"
                        value={formData?.landlordResident}
                        onChange={handleChange}
                        placeholder="Enter Your landlordResident"
                        className="w-full border p-2 rounded"
                        max={9999}
                    />
                    <input
                        type="text"
                        name="tenantName"
                        value={formData?.tenantName}
                        onChange={handleChange}
                        placeholder="Enter Your tenantName"
                        className="w-full border p-2 rounded"
                        max={9999}
                    />
                    <input
                        type="text"
                        name="tenantSonOf"
                        value={formData?.tenantSonOf}
                        onChange={handleChange}
                        placeholder="Enter Your tenantSonOf"
                        className="w-full border p-2 rounded"
                        max={9999}
                    />
                    <input
                        type="text"
                        name="tenantCnic"
                        value={formData?.tenantCnic}
                        onChange={handleChange}
                        placeholder="Enter Your tenantCnic"
                        className="w-full border p-2 rounded"
                        max={9999}
                    />
                    <input
                        type="text"
                        name="tenantResident"
                        value={formData?.tenantResident}
                        onChange={handleChange}
                        placeholder="Enter Your tenantResident"
                        className="w-full border p-2 rounded"
                        max={9999}
                    />
                    <input
                        type="text"
                        name="landlordOwnerLocated"
                        value={formData?.landlordOwnerLocated}
                        onChange={handleChange}
                        placeholder="Enter Your landlordOwnerLocated"
                        className="w-full border p-2 rounded"
                        max={9999}
                    />
                    <input
                        type="text"
                        name="tenantTimePeriod"
                        value={formData?.tenantTimePeriod}
                        onChange={handleChange}
                        placeholder="Enter Your tenantTimePeriod"
                        className="w-full border p-2 rounded"
                        max={9999}
                    />
                </div>
            </div>

            {/* Live Preview Section */}
            <div className="w-full md:w-1/2 p-4 md:p-8 bg-yellow-100">
                <div className='w-full h-56 bg-red-500'>sjdjsd</div>
                {/* <h2 className="text-xl font-bold text-secondary mb-4">Live Preview</h2> */}
                <div className="relative py-2 my-2">
                    <p>
                        This Tenancy Agreement is made at Karachi Pakistan on this{" "}
                        <span className="font-extrabold">{formData?.day || "________"}</span> day of{" "}
                        <span className="font-extrabold">{formData?.date || "___"}</span> 20
                        <span className="font-extrabold">{formData?.year || "___"}</span> by and between
                    </p>
                    <p className='pt-5'>
                        <span className='block text-xl'>Landlord{" "}</span>
                        Name: <span className="font-extrabold">{formData?.landlordName || "__________"}</span> Son of {formData?.landlordSonOf || "__________"}{" "}
                        CNIC No: <span className="font-extrabold">{formData?.landlordCnic || "_____________"}{" "}</span>
                        Resident House No <span className="font-extrabold">{formData?.landlordResident || "________________________"}</span> Karachi Pakistan Hereinafter referred to as the landlord.
                    </p>
                    <p className='pt-5'>
                        <span className='block text-xl'>Tenant{" "}</span>
                        Name: <span className="font-extrabold">{formData?.tenantName || "__________"}</span> Son of {formData?.tenantSonOf || "__________"}{" "}
                        CNIC No: <span className="font-extrabold">{formData?.tenantCnic || "_____________"}{" "}</span>
                        Resident House No <span className="font-extrabold">{formData?.tenantResident || "________________________"}</span> Karachi Pakistan Hereinafter collectively referred to as the tenant.
                    </p>
                    <p className='pt-5'>
                        <span className='block'>Whereas the Landlord is the sole owner of the property located{" "}</span>
                        at: <span className="font-extrabold">{formData?.landlordOwnerLocated || "___________________________________________"}</span>
                    </p>
                    <p className='pt-5'>
                        <span className=''>And whereas upon the request of the tenant the landlord has agreed to rent the said property for a time period of {" "}</span>
                        <span className="font-extrabold">{formData?.tenantTimePeriod || "___________________________________________"}</span>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Form
