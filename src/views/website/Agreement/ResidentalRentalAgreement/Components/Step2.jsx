const Step2 = ({ data, onChange, nextStep, prevStep }) => {
    const handleChange = (e) => {
        onChange({ [e.target.name]: e.target.value });
    };

    return (
        <div className="flex flex-col md:flex-row gap-4">
            {/* Form Section */}
            <div className="w-full md:w-1/2 space-y-5 bg-white p-6 shadow-xl rounded-2xl border border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-800">Rental Agreement Form</h2>

                <div className="space-y-3">
                    <label className="block text-gray-600 font-medium">Enter Commence On</label>
                    <input
                        type="text"
                        name="commenceOn"
                        value={data.commenceOn || ""}
                        onChange={handleChange}
                        placeholder="Monday"
                        maxLength={8}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                </div>

                {/* <div className="flex space-x-4"> */}
                    <div className="w-full">
                        <label className="block text-gray-600 font-medium">End On</label>
                        <input
                            type="text"
                            name="endOn"
                            value={data.endOn || ""}
                            onChange={handleChange}
                            placeholder="31"
                            maxLength={2}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-gray-600 font-medium">Monthly Rent</label>
                        <input
                            type="text"
                            name="monthlyRent"
                            value={data.monthlyRent || ""}
                            onChange={handleChange}
                            placeholder="26"
                            maxLength={2}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-gray-600 font-medium">Advance Of Each Month</label>
                        <input
                            type="text"
                            name="advanceOfEachMonth"
                            value={data.advanceOfEachMonth || ""}
                            onChange={handleChange}
                            placeholder="26"
                            maxLength={2}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        />
                    </div>
                {/* </div> */}

                <div className="space-y-3">
                    {/* <h3 className="text-lg font-semibold text-gray-700">Increase By</h3> */}
                    <div>
                        <label className="block text-gray-600 font-medium">Increase By</label>
                        <input
                            type="text"
                            name="increaseBy"
                            value={data.increaseBy || ""}
                            onChange={handleChange}
                            placeholder="Landlord Full Name"
                            maxLength={25}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium">Every Month</label>
                        <input
                            type="text"
                            name="everyMonth"
                            value={data.everyMonth || ""}
                            onChange={handleChange}
                            placeholder="Son of"
                            maxLength={25}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium">Security Deposit</label>
                        <input
                            type="text"
                            name="securityDeposit"
                            value={data.securityDeposit || ""}
                            onChange={handleChange}
                            placeholder="CNIC (e.g. 4256354637892)"
                            maxLength={13}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium">Enter 14 Point (If Needed)</label>
                        <input
                            type="text"
                            name="point"
                            value={data.point || ""}
                            onChange={handleChange}
                            placeholder="Address"
                            // maxLength={50}/
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        />
                    </div>
                </div>

                <div className="flex justify-center items-center gap-4">
                    <button
                        onClick={prevStep}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-medium transition-all duration-200"
                    >
                        Previous
                    </button>
                    <button
                        onClick={nextStep}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-medium transition-all duration-200"
                    >
                        Next
                    </button>
                </div>
            </div>


            {/* Preview Section */}
            <div className="w-full md:w-1/2 p-4 md:p-8 bg-yellow-100 rounded-2xl">
                {/* <h2 className="text-xl font-bold text-secondary mb-4">Live Preview</h2> */}
                <div className="relative py-6 px-6 md:px-10 rounded-lg">
                    <ul className="list-decimal list-inside space-y-4 text-gray-800 text-base leading-relaxed">
                        <li>
                            The tenancy shall commence on{" "}
                            <span className="font-extrabold underline">{data?.commenceOn || "________"}</span> and end on{" "}
                            <span className="font-semibold underline">{data?.endOn || "________"}</span>. The total monthly rent shall be PKR{" "}
                            <span className="font-semibold underline">{data?.monthlyRent || "________"}</span>/- payable in advance on or before the{" "}
                            <span className="font-semibold underline">{data?.advanceOfEachMonth || "________"}</span> of each calendar month. The rent will increase by{" "}
                            <span className="font-semibold underline">{data?.increaseBy || "________"}%</span> after every{" "}
                            <span className="font-semibold underline">{data?.everyMonth || "________"}</span> months as mutually agreed.
                        </li>
                        <li>
                            Upon signing the Tenant shall pay a refundable security deposit of PKR{" "} <span className="font-semibold underline">{data?.securityDeposit || "________"}</span>/-. This deposit will not count as advance rent or be adjusted against any dues unless agreed in writing.
                        </li>
                        <li>
                            At the end of the tenancy the Landlord will return the security deposit after deducting any unpaid rent utility charges repair costs or damages. The Tenant will return the property and keys in the same conditions as received.
                        </li>
                        <li>
                            The Tenant shall not alter damage or remove any part of the property or its fittings without prior written consent from the Landlord.
                        </li>
                        <li>
                            The Landlord or their agent may inspect the premises at a reasonable time with prior notice.
                        </li>
                        <li>
                            Subletting is strictly prohibited without the Landlord's written permission.
                        </li>
                        <li>
                            The Tenant are responsible for maintaining the property and replacing damaged or worn fixtures with items of equal or better quality.
                        </li>
                        <li>
                            The property shall only be used for residential purposes and shall not be used for commercial warehouse or storage activities nor shall it be used to store or handle hazardous illegal or disruptive materials.
                        </li>
                        <li>
                            The Tenant must comply with all applicable laws and avoid illegal or inappropriate activities on the premises.
                        </li>
                        <li>
                            The Tenant shall respect the privacy of neighbors and follow the rules of the building or local community. Any disputes should be reported to the Landlord directly.
                        </li>
                        <li>
                            Either party may terminate the agreement with one month's written notice.
                        </li>
                        <li>
                            All utility bills and maintenance charges will be paid by the Tenant. Any unpaid amounts may be deducted from the security deposit.
                        </li>
                        <li>
                            This agreemnet has been made following a full inspection of the property and with the mutual understanding of both parties. Any future matters should be resolved directly between the Landlord and the Tenant or thier authorized representatives.
                        </li>
                        <li>
                            <span className="font-semibold underline">{data?.point || "______________________________"}</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Step2;
