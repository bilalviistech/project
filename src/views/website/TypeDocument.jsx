import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import ResidentialRentalAgreement from './Agreement/ResidentalRentalAgreement/ResidentialRentalAgreement';

const TypeDocument = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const product = location.state?.product;
    const selectedPrice = location.state?.selectedPrice;
    const subcategory = location.state?.subcategory;

    useEffect(() => {
        if (!product && !selectedPrice && !subcategory) {
            navigate('/')
        }
    }, [product, selectedPrice, navigate])

    console.log(product, selectedPrice, subcategory)
    return (
        <>
            {
                // <Link to="/checkout" state={{ selectedPrice, product, subcategory }}></Link>
                product.title === "Residental Rental Agreement" ? (
                    <ResidentialRentalAgreement product={product} selectedPrice={selectedPrice} subcategory={subcategory} />
                ) : (
                    <div className="bg-green-100 p-4 rounded">
                        {/* Render other product types */}
                        <h2 className="text-lg font-semibold mb-2">Other Agreement Type</h2>
                        {/* Other JSX here */}
                    </div>
                )
            }
        </>
    );
    
}

export default TypeDocument