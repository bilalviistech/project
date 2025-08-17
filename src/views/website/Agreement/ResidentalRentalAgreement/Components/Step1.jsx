const Step1 = ({ data, onChange, nextStep }) => {
    const handleChange = (e) => {
        onChange({ [e.target.name]: e.target.value });
    };

    return (
        <div className="flex flex-col md:flex-row gap-4">
            {/* Form Section */}
            <div className="w-full md:w-1/2 space-y-5 bg-white p-6 shadow-xl rounded-2xl border border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-800">Rental Agreement Form</h2>

                <div className="space-y-3">
                    
                </div>

                <div className="flex space-x-4">
                    <div className="w-2/3">
                        <label className="block text-gray-600 font-medium">Enter Day</label>
                        <input
                            type="text"
                            name="day"
                            value={data.day || ""}
                            onChange={handleChange}
                            placeholder="Monday"
                            maxLength={8}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        />
                    </div>
                    <div className="w-1/3">
                        <label className="block text-gray-600 font-medium">Date</label>
                        <input
                            type="text"
                            name="date"
                            value={data.date || ""}
                            onChange={handleChange}
                            placeholder="31"
                            maxLength={2}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        />
                    </div>
                    <div className="w-2/3">
                        <label className="block text-gray-600 font-medium">Enter Day</label>
                        <input
                            type="text"
                            name="month"
                            value={data.month || ""}
                            onChange={handleChange}
                            placeholder="May"
                            maxLength={8}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        />
                    </div>
                    <div className="w-2/3">
                        <label className="block text-gray-600 font-medium">Year</label>
                        <input
                            type="text"
                            name="year"
                            value={data.year || ""}
                            onChange={handleChange}
                            placeholder="26"
                            maxLength={2}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        />
                    </div>
                </div>

                <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-700">Landlord Information</h3>

                    <input
                        type="text"
                        name="landlordName"
                        value={data.landlordName || ""}
                        onChange={handleChange}
                        placeholder="Landlord Full Name"
                        maxLength={25}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                    <input
                        type="text"
                        name="landlordSonOf"
                        value={data.landlordSonOf || ""}
                        onChange={handleChange}
                        placeholder="Son of"
                        maxLength={25}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                    <input
                        type="text"
                        name="landlordCnic"
                        value={data.landlordCnic || ""}
                        onChange={handleChange}
                        placeholder="CNIC (e.g. 4256354637892)"
                        maxLength={13}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                    <input
                        type="text"
                        name="landlordResident"
                        value={data.landlordResident || ""}
                        onChange={handleChange}
                        placeholder="Address"
                        maxLength={50}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                </div>

                <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-700">Tenant Information</h3>

                    <input
                        type="text"
                        name="tenantName"
                        value={data.tenantName || ""}
                        onChange={handleChange}
                        placeholder="Tenant Full Name"
                        maxLength={25}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                    <input
                        type="text"
                        name="tenantSonOf"
                        value={data.tenantSonOf || ""}
                        onChange={handleChange}
                        placeholder="Son of"
                        maxLength={25}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                    <input
                        type="text"
                        name="tenantCnic"
                        value={data.tenantCnic || ""}
                        onChange={handleChange}
                        placeholder="CNIC (e.g. 4256354637892)"
                        maxLength={13}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                    <input
                        type="text"
                        name="tenantResident"
                        value={data.tenantResident || ""}
                        onChange={handleChange}
                        placeholder="Address"
                        maxLength={50}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                </div>

                <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-700">Property & Time Period</h3>

                    <div className="flex items-center justify-center gap-5">
                        <input
                            type="text"
                            name="landlordOwnerLocated"
                            value={data.landlordOwnerLocated || ""}
                            onChange={handleChange}
                            placeholder="Property Location"
                            maxLength={60}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        />
                        <input
                            type="text"
                            name="tenantTimePeriod"
                            value={data.tenantTimePeriod || ""}
                            onChange={handleChange}
                            placeholder="Rent Duration (e.g. 11 months)"
                            maxLength={15}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        />
                    </div>
                </div>

                <button
                    onClick={nextStep}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-medium transition-all duration-200"
                >
                    Next
                </button>
            </div>


            {/* Preview Section */}
            <div className="w-full md:w-1/2 p-4 md:p-8 bg-yellow-100 rounded-2xl">
                <div className='w-full h-56 bg-red-500'>sjdjsd</div>
                {/* <h2 className="text-xl font-bold text-secondary mb-4">Live Preview</h2> */}
                <div className="relative py-2 my-2 px-10 mt-24">
                    <p>
                        This Tenancy Agreement is made at Karachi Pakistan on this{" "}
                        <span className="font-extrabold">{data?.day || "________"}</span> day of{" "}
                        <span className="font-extrabold">{data?.date || "___"}</span> 20
                        <span className="font-extrabold">{data?.year || "___"}</span> by and between
                    </p>
                    <p className='pt-5'>
                        <span className='block text-xl text-center'>Landlord{" "}</span>
                        Name: <span className="font-extrabold">{data?.landlordName || "__________"}</span> Son of {data?.landlordSonOf || "__________"}{" "}
                        CNIC No: <span className="font-extrabold">{data?.landlordCnic || "_____________"}{" "}</span>
                        Resident House No <span className="font-extrabold">{data?.landlordResident || "________________________"}</span> Karachi Pakistan Hereinafter referred to as the landlord.
                    </p>
                    <p className='pt-5'>
                        <span className='block text-xl text-center'>Tenant{" "}</span>
                        Name: <span className="font-extrabold">{data?.tenantName || "__________"}</span> Son of {data?.tenantSonOf || "__________"}{" "}
                        CNIC No: <span className="font-extrabold">{data?.tenantCnic || "_____________"}{" "}</span>
                        Resident House No <span className="font-extrabold">{data?.tenantResident || "________________________"}</span> Karachi Pakistan Hereinafter collectively referred to as the tenant.
                    </p>
                    <p className='pt-5'>
                        <span className='block'>Whereas the Landlord is the sole owner of the property located{" "}</span>
                        at: <span className="font-extrabold">{data?.landlordOwnerLocated || "____________________________"}</span>
                    </p>
                    <p className='pt-5'>
                        <span className=''>And whereas upon the request of the tenant the landlord has agreed to rent the said property for a time period of {" "}</span>
                        <span className="font-extrabold">{data?.tenantTimePeriod || "____________________________"}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Step1;
  