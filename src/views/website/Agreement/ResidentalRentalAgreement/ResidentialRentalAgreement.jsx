import { useState } from "react";
import Step1 from "./Components/Step1";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Step2 from "./Components/Step2";
import Step3 from "./Components/Step3";
import { useNavigate } from "react-router-dom";

const ResidentialRentalAgreement = ({product, selectedPrice, subcategory}) => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    // Collect all data in one state
    const [formData, setFormData] = useState({
        step1: {},
        step2: {},
        step3: {},
    });

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const handleDataChange = (stepKey, newData) => {
        setFormData((prev) => ({
            ...prev,
            [stepKey]: { ...prev[stepKey], ...newData },
        }));
    };

    const handleSubmit = () => {
        // console.log("Final Submission Data:", formData);
        navigate("/checkout", {
            state: { selectedPrice, product, subcategory }
        });
    };

    return (
        <>
        <Header/>
        <div className="min-h-screen bg-white p-6">
            {step === 1 && (
                <Step1
                    data={formData.step1}
                    onChange={(data) => handleDataChange("step1", data)}
                    nextStep={nextStep}
                />
            )}
             {step === 2 && (
                <Step2
                    data={formData.step2}
                    onChange={(data) => handleDataChange("step2", data)}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            )}
            {step === 3 && (
                <Step3
                    data={formData.step3}
                    onChange={(data) => handleDataChange("step3", data)}
                    prevStep={prevStep}
                    handleSubmit={handleSubmit}
                />
            )}
        </div>
        <Footer/>
        </>
    );
};

export default ResidentialRentalAgreement;
