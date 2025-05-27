import { useState } from 'react'

const MultiStepForm = ({ formData, setFormData }) => {
    const [step, setStep] = useState(1)
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const isStepValid = () => {
        if (step === 1) return formData?.name.trim() !== ''
        if (step === 2) return formData?.email.trim() !== ''
        if (step === 3) return formData?.age.trim() !== ''
        return false
    }

    const handleSubmit = () => {
        setSubmitted(true)
    }

    const handleFinalOK = () => {
        alert('Form successfully submitted!')
    }

    return (
        <div>
            {!submitted ? (
                <>
                    <div className="space-y-4">
                        {step === 1 && (
                            <input
                                type="text"
                                name="name"
                                value={formData?.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full border p-2 rounded"
                            />
                        )}
                        {step === 2 && (
                            <input
                                type="email"
                                name="email"
                                value={formData?.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full border p-2 rounded"
                            />
                        )}
                        {step === 3 && (
                            <input
                                type="number"
                                name="age"
                                value={formData?.age}
                                onChange={handleChange}
                                placeholder="Enter your age"
                                className="w-full border p-2 rounded"
                            />
                        )}
                    </div>

                    <div className="mt-6 flex justify-between">
                        {step > 1 && (
                            <button
                                onClick={() => setStep(step - 1)}
                                className="bg-secondary text-white px-4 py-2 rounded"
                            >
                                Previous
                            </button>
                        )}
                        {step < 3 && (
                            <button
                                onClick={() => isStepValid() && setStep(step + 1)}
                                disabled={!isStepValid()}
                                className={`${isStepValid()
                                        ? 'bg-primary'
                                        : 'bg-gray-400 cursor-not-allowed'
                                    } text-white px-4 py-2 rounded`}
                            >
                                Next
                            </button>
                        )}
                        {step === 3 && (
                            <button
                                onClick={handleSubmit}
                                disabled={!isStepValid()}
                                className="bg-green-500 text-white px-4 py-2 rounded"
                            >
                                Submit
                            </button>
                        )}
                    </div>
                </>
            ) : (
                <div>
                    <h3 className="text-lg font-semibold mb-2">Final Preview:</h3>
                    <ul className="mb-4">
                        <li><strong>Name:</strong> {formData?.name}</li>
                        <li><strong>Email:</strong> {formData?.email}</li>
                        <li><strong>Age:</strong> {formData?.age}</li>
                    </ul>
                    <button
                        onClick={handleFinalOK}
                        className="bg-primary text-white px-4 py-2 rounded"
                    >
                        OK
                    </button>
                </div>
            )}
        </div>
    )
}

export default MultiStepForm
