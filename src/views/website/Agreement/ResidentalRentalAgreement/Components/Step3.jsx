const Step3 = ({ data, onChange, nextStep, handleSubmit, prevStep }) => {
    const handleChange = (e) => {
        onChange({ [e.target.name]: e.target.value });
    };

    return (
        <div className="flex flex-col md:flex-row gap-4">
            {/* Form Section */}
            <div className="w-full md:w-1/2 space-y-5 bg-white p-6 shadow-xl rounded-2xl border border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-800">Rental Agreement Form</h2>

                <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-700">Witness 1</h3>

                    <input
                        type="text"
                        name="firstWitnessName"
                        value={data.firstWitnessName || ""}
                        onChange={handleChange}
                        placeholder="First Witness Name"
                        maxLength={60}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                    <input
                        type="text"
                        name="firstWitnessCnic"
                        value={data.firstWitnessCnic || ""}
                        onChange={handleChange}
                        placeholder="First Witness Cnic"
                        maxLength={15}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                </div>
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-700">Witness 2</h3>

                    <input
                        type="text"
                        name="secondWitnessName"
                        value={data.secondWitnessName || ""}
                        onChange={handleChange}
                        placeholder="Second Witness Name"
                        maxLength={60}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                    <input
                        type="text"
                        name="secondWitnessCnic"
                        value={data.secondWitnessCnic || ""}
                        onChange={handleChange}
                        placeholder="Second Witness Cnic"
                        maxLength={15}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                </div>
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-700">Landlord</h3>

                    <input
                        type="text"
                        name="signLandlordName"
                        value={data.signLandlordName || ""}
                        onChange={handleChange}
                        placeholder="Landlord Name"
                        maxLength={60}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                    <input
                        type="text"
                        name="signLandlordSonOf"
                        value={data.signLandlordSonOf || ""}
                        onChange={handleChange}
                        placeholder="Landlord Son Of"
                        maxLength={15}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                    <input
                        type="text"
                        name="signLandlordCnic"
                        value={data.signLandlordCnic || ""}
                        onChange={handleChange}
                        placeholder="Landlord Cnic"
                        maxLength={15}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                </div>
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-700">Tenant</h3>

                    <input
                        type="text"
                        name="signTenantName"
                        value={data.signTenantName || ""}
                        onChange={handleChange}
                        placeholder="Tenant Name"
                        maxLength={60}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                    <input
                        type="text"
                        name="signTenantSonOf"
                        value={data.signTenantSonOf || ""}
                        onChange={handleChange}
                        placeholder="Tenant Son Of"
                        maxLength={15}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                    <input
                        type="text"
                        name="signTenantCnic"
                        value={data.signTenantCnic || ""}
                        onChange={handleChange}
                        placeholder="Tenant Cnic"
                        maxLength={15}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                </div>

                

                <div className="flex justify-center items-center gap-4">
                    <button
                        onClick={prevStep}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-medium transition-all duration-200"
                    >
                        Previous
                    </button>
                </div>
                <button
                    onClick={handleSubmit}
                    className="w-full bg-green-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-medium transition-all duration-200"
                >
                    Submit
                </button>
            </div>


            {/* Preview Section */}
            <div className="w-full md:w-1/2 p-4 md:p-8 bg-yellow-100 rounded-2xl">
                {/* <h2 className="text-xl font-bold text-secondary mb-4">Live Preview</h2> */}
                <div className="relative py-6 px-6 md:px-10 rounded-lg">
                    <div className="space-y-4 text-gray-800 text-base leading-relaxed">
                        <h2 className="py-3">IN WITNESS WHEREOF the parties have signed this agreement at Karachi on the date first mentioned above.</h2>
                        <div className="py-3">
                            <h3>Witness 1</h3>
                            <p>Name: <span className="font-extrabold">{data?.firstWitnessName || "________"}</span></p>
                            <p>CNIC No: <span className="font-extrabold">{data?.firstWitnessCnic || "________"}</span></p>
                            <p>Signature: ___________</p>
                        </div>
                        <div className="py-3">
                            <h3>Witness 2</h3>
                            <p>Name: <span className="font-extrabold">{data?.secondWitnessName || "________"}</span></p>
                            <p>CNIC No: <span className="font-extrabold">{data?.secondWitnessCnic || "________"}</span></p>
                            <p>Signature: ___________</p>
                        </div>
                        <div className="py-3">
                            <h3>Landlord</h3>
                            <p>Name: <span className="font-extrabold">{data?.signLandlordName || "__________"}</span></p>
                            <p>S/o: <span className="font-extrabold">{data?.signLandlordSonOf || "__________"}</span></p>
                            <p>CNIC No: <span className="font-extrabold">{data?.signLandlordCnic || "__________"}</span></p>
                            <p>Signature: __________</p>
                        </div>
                        <div className="py-3">
                            <h3>Tenant</h3>
                            <p>Name: <span className="font-extrabold">{data?.signTenantName || "__________"}</span></p>
                            <p>S/o: <span className="font-extrabold">{data?.signTenantSonOf || "__________"}</span></p>
                            <p>CNIC No: <span className="font-extrabold">{data?.signTenantCnic || "__________"}</span></p>
                            <p>Signature: __________</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Step3;