import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaStar,
  FaBlog,
  FaUsers,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import noImage from "@/assets/images/noImage.jpg";
import {
  FaArrowDown,
  FaDoorOpen,
  FaPercentage,
  FaTruckMoving,
} from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper's core CSS
import 'swiper/css/navigation'; // Navigation styles (optional)
import 'swiper/css/pagination'; // Pagination styles (optional)
import banner1 from "@/assets/images/banner1.jpg"
import banner2 from "@/assets/images/banner2.jpg"
import one80Design from "@/assets/images/180 Design.png"
import AhmekStore from "@/assets/images/Ahmek Store.png"
import HumanThatWrites from "@/assets/images/Human That Writes.png"
import Saassociate from "@/assets/images/Sa associate.jpg"
import UmarRealEstate from "@/assets/images/Umar Real Estate.png"
import productImg from "@/assets/images/productImg.jpg"
import { Navigation, Autoplay } from 'swiper/modules'; // import Navigation module

// Sample partner data
const partners = [
  { name: "180 Design", logo: one80Design },
  { name: "Ahmek Store", logo: AhmekStore },
  { name: "Human That Writes", logo: HumanThatWrites },
  { name: "Sa Associate", logo: Saassociate },
  { name: "Umar Real Estate", logo: UmarRealEstate },
];

const products = [
  {
    id: 1,
    categoryId: 1,
    categoryName: "Agreement",
    subcategories: [
      {
        id: 1,
        name: "Property Rental Agreement",
        products: [
          {
            title: "Residental Rental Agreement",
            price: 499,
            details:
              "A legal contract defining the terms & conditions of both landlord and tenant for residential property occupancy.",
            url: productImg,
            longDetail: "",
          },
          {
            title: "Commercial Rental Agreement",
            price: 549,
            details:
              "A legal contract defining the terms & conditions for leasing commercial property between landlord and tenant.",
            url: productImg,
            longDetail: `<div class="max-w-4xl mx-auto py-8 bg-white text-gray-800">

  <p class="mb-6 text-base leading-relaxed">
    <span class="font-bold text-[#003092]">Secure your rental terms with a professionally drafted Commercial Rental Agreement from MavDocs.</span> Whether you are a business owner or leasing your commercial space, in your document, we cover all aspects, including rent amount, lease duration, security terms, maintenance responsibilities, and commercial usage clauses, ensuring legal validity and a hassle-free process.
  </p>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">What You Get:</h2>
  <ul class="list-disc list-inside mb-8 space-y-2">
    <li>Delivery within 3 hours across Karachi</li>
    <li>Free doorstep delivery</li>
    <li>Legally formatted, ready-to-sign document on official stamp paper</li>
  </ul>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">Frequently Asked Questions (FAQs)</h2>

  <div class="space-y-6">
    <div>
      <h3 class="font-bold text-lg text-gray-700">What will I receive in the package?</h3>
      <p>Your delivery will include a customized MavDocs envelope containing your professionally drafted document, precisely tailored to the details you provided.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Will the document be signed?</h3>
      <p>Yes. You get a signature document, which is legal under Pakistani law. However, MavDocs does not offer doorstep notarization services.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is there a return policy if a mistake occurs?</h3>
      <p>Yes. MavDocs offers a 24-hour return and correction policy if our team makes an error. If incorrect information was provided by the customer, revisions can still be made, but the return policy will not apply.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Can I request a bilingual (English + Urdu) version?</h3>
      <p>Yes, MavDocs offers bilingual formats upon request during the confirmation call to ensure clarity for all parties involved.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">What if I need to add a specific clause?</h3>
      <p>You can mention any specific terms or clauses during checkout. We'll ensure they're included professionally.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is the stamp paper value appropriate for my rental amount?</h3>
      <p>Yes. We calculate and apply the required stamp paper denomination based on current legal standards in Pakistan.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Do I need to visit anywhere, or is everything online?</h3>
      <p>NO need to go, your convenience is our first choice. Simply submit your details, and we'll prepare, print, and deliver the agreement to your doorstep.</p>
    </div>
  </div>
</div>
`,
          },
          {
            title: "Guest House Rental Agreement",
            price: 549,
            details:
              "A legal contract defining the terms & conditions of  temporary occupancy between the guest house owner and occupant.",
            url: productImg,
            longDetail: `<div class="max-w-4xl mx-auto py-8 bg-white text-gray-800">
  <p class="mb-6 text-base leading-relaxed">
    <span class="font-bold text-[#003092]">Secure your rental terms with a professionally drafted Guest House Rental Agreement from MavDocs.</span>Whether you are managing a guest house or renting it temporarily, in your document, we cover all aspects, including stay duration, rent, guest responsibilities, and service terms, ensuring legal validity and a hassle-free process.
  </p>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">What You Get:</h2>
  <ul class="list-disc list-inside mb-8 space-y-2">
    <li>Delivery within 3 hours across Karachi</li>
    <li>Free doorstep delivery</li>
    <li>Legally formatted, ready-to-sign document on official stamp paper</li>
  </ul>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">Frequently Asked Questions (FAQs)</h2>

  <div class="space-y-6">
    <div>
      <h3 class="font-bold text-lg text-gray-700">What will I receive in the package?</h3>
      <p>Your delivery will include a customized MavDocs envelope containing your professionally drafted document, precisely tailored to the details you provided.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Will the document be signed?</h3>
      <p>Yes. You get a signature document, which is legal under Pakistani law. However, MavDocs does not offer doorstep notarization services.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is there a return policy if a mistake occurs?</h3>
      <p>Yes. MavDocs offers a 24-hour return and correction policy if our team makes an error. If incorrect information was provided by the customer, revisions can still be made, but the return policy will not apply.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Can I request a bilingual (English + Urdu) version?</h3>
      <p>Yes, MavDocs offers bilingual formats upon request during the confirmation call to ensure clarity for all parties involved.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">What if I need to add a specific clause?</h3>
      <p>You can mention any specific terms or clauses during checkout. We'll ensure they're included professionally.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is the stamp paper value appropriate for my rental amount?</h3>
      <p>Yes. We calculate and apply the required stamp paper denomination based on current legal standards in Pakistan.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Do I need to visit anywhere, or is everything online?</h3>
      <p>NO need to go, your convenience is our first choice. Simply submit your details, and we'll prepare, print, and deliver the agreement to your doorstep.</p>
    </div>
  </div>
</div>
`,
          },
        ],
      },
      {
        id: 2,
        name: "Property Sale & Purchase Agreement",
        products: [
          {
            title: "Sale Part Payment Agreement",
            price: 499,
            details:
              "A legal contract documenting the transfer of property ownership subject to partial payment and defined payment terms.",
            url: productImg,
            longDetail: `<div class="max-w-4xl mx-auto py-8 bg-white text-gray-800">
  <p class="mb-6 text-base leading-relaxed">
    <span class="font-bold text-[#003092]">Secure your transaction with a professionally drafted Sale Part Payment Agreement from MavDocs.</span>Whether you are buying or selling under an installment or token arrangement, in your document, we cover all aspects, including initial payment terms, remaining balance, timelines, and responsibilities, ensuring legal validity and a hassle-free process.
  </p>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">What You Get:</h2>
  <ul class="list-disc list-inside mb-8 space-y-2">
    <li>Delivery within 3 hours across Karachi</li>
    <li>Free doorstep delivery</li>
    <li>Legally formatted, ready-to-sign document on official stamp paper</li>
  </ul>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">Frequently Asked Questions (FAQs)</h2>

  <div class="space-y-6">
    <div>
      <h3 class="font-bold text-lg text-gray-700">What will I receive in the package?</h3>
      <p>Your delivery will include a customized MavDocs envelope containing your professionally drafted document, precisely tailored to the details you provided.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Will the document be signed?</h3>
      <p>Yes. You get a signature document, which is legal under Pakistani law. However, MavDocs does not offer doorstep notarization services.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is there a return policy if a mistake occurs?</h3>
      <p>Yes. MavDocs offers a 24-hour return and correction policy if our team makes an error. If incorrect information was provided by the customer, revisions can still be made, but the return policy will not apply.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Can I request a bilingual (English + Urdu) version?</h3>
      <p>Yes, MavDocs offers bilingual formats upon request during the confirmation call to ensure clarity for all parties involved.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">What if I need to add a specific clause?</h3>
      <p>You can mention any specific terms or clauses during checkout. We'll ensure they're included professionally.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is the stamp paper value appropriate for my rental amount?</h3>
      <p>Yes. We calculate and apply the required stamp paper denomination based on current legal standards in Pakistan.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Do I need to visit anywhere, or is everything online?</h3>
      <p>NO need to go, your convenience is our first choice. Simply submit your details, and we'll prepare, print, and deliver the agreement to your doorstep.</p>
    </div>
  </div>
</div>
`,
          },
          {
            title: "Sale Full & Final Agreement",
            price: 549,
            details:
              "A final contract confirming the complete settlement and unconditional transfer of property ownership from seller to buyer.",
            url: productImg,
            longDetail: `<div class="max-w-4xl mx-auto py-8 bg-white text-gray-800">
   <p class="mb-6 text-base leading-relaxed">
    <span class="font-bold text-[#003092]"></span>Whether you're completing a final sale of property, vehicle, or any asset, in your document, we cover all aspects, including full payment confirmation, possession terms, and seller/buyer responsibilities, ensuring legal validity and a hassle-free process.
  </p>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">What You Get:</h2>
  <ul class="list-disc list-inside mb-8 space-y-2">
    <li>Delivery within 3 hours across Karachi</li>
    <li>Free doorstep delivery</li>
    <li>Legally formatted, ready-to-sign document on official stamp paper</li>
  </ul>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">Frequently Asked Questions (FAQs)</h2>

  <div class="space-y-6">
    <div>
      <h3 class="font-bold text-lg text-gray-700">What will I receive in the package?</h3>
      <p>Your delivery will include a customized MavDocs envelope containing your professionally drafted document, precisely tailored to the details you provided.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Will the document be signed?</h3>
      <p>Yes. You get a signature document, which is legal under Pakistani law. However, MavDocs does not offer doorstep notarization services.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is there a return policy if a mistake occurs?</h3>
      <p>Yes. MavDocs offers a 24-hour return and correction policy if our team makes an error. If incorrect information was provided by the customer, revisions can still be made, but the return policy will not apply.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Can I request a bilingual (English + Urdu) version?</h3>
      <p>Yes, MavDocs offers bilingual formats upon request during the confirmation call to ensure clarity for all parties involved.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">What if I need to add a specific clause?</h3>
      <p>You can mention any specific terms or clauses during checkout. We'll ensure they're included professionally.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is the stamp paper value appropriate for my rental amount?</h3>
      <p>Yes. We calculate and apply the required stamp paper denomination based on current legal standards in Pakistan.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Do I need to visit anywhere, or is everything online?</h3>
      <p>NO need to go, your convenience is our first choice. Simply submit your details, and we'll prepare, print, and deliver the agreement to your doorstep.</p>
    </div>
  </div>
</div>
`,
          },
        ],
      },
      {
        id: 3,
        name: "Vehicle Agreement",
        products: [
          {
            title: "Car Rental Agreement",
            price: 499,
            details:
              "A legal contract defining the terms and conditions for temporary use of a vehicle by the renter.",
            url: productImg,
            longDetail: `<div class="max-w-4xl mx-auto py-8 bg-white text-gray-800">
  <p class="mb-6 text-base leading-relaxed">
    <span class="font-bold text-[#003092]">Secure your rental terms with a professionally drafted Car Rental Agreement from MavDocs.</span>Whether you're renting a car or offering your vehicle for rent, in your document, we cover all aspects, including rental duration, fuel policy, liability clauses, and damage responsibilities, ensuring legal validity and a hassle-free process.
  </p>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">What You Get:</h2>
  <ul class="list-disc list-inside mb-8 space-y-2">
    <li>Delivery within 3 hours across Karachi</li>
    <li>Free doorstep delivery</li>
    <li>Legally formatted, ready-to-sign document on official stamp paper</li>
  </ul>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">Frequently Asked Questions (FAQs)</h2>

  <div class="space-y-6">
    <div>
      <h3 class="font-bold text-lg text-gray-700">What will I receive in the package?</h3>
      <p>Your delivery will include a customized MavDocs envelope containing your professionally drafted document, precisely tailored to the details you provided.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Will the document be signed?</h3>
      <p>Yes. You get a signature document, which is legal under Pakistani law. However, MavDocs does not offer doorstep notarization services.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is there a return policy if a mistake occurs?</h3>
      <p>Yes. MavDocs offers a 24-hour return and correction policy if our team makes an error. If incorrect information was provided by the customer, revisions can still be made, but the return policy will not apply.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Can I request a bilingual (English + Urdu) version?</h3>
      <p>Yes, MavDocs offers bilingual formats upon request during the confirmation call to ensure clarity for all parties involved.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">What if I need to add a specific clause?</h3>
      <p>You can mention any specific terms or clauses during checkout. We'll ensure they're included professionally.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is the stamp paper value appropriate for my rental amount?</h3>
      <p>Yes. We calculate and apply the required stamp paper denomination based on current legal standards in Pakistan.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Do I need to visit anywhere, or is everything online?</h3>
      <p>NO need to go, your convenience is our first choice. Simply submit your details, and we'll prepare, print, and deliver the agreement to your doorstep.</p>
    </div>
  </div>
</div>
`,
          },
          {
            title: "Car Sale Agreement",
            price: 549,
            details:
              "A legal contract defining the terms and conditions for full and final transfer of vehicle ownership from seller to buyer.",
            url: productImg,
            longDetail: "",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    categoryId: 2,
    categoryName: "Affidavit",
    subcategories: [
      {
        id: 1,
        name: "General Affidavt",
        products: [
          {
            title: "Address Proof Affidavit",
            price: 399,
            details:
              "A sworn legal declaration that confirms an individual's current residential address.",
            url: productImg,
            longDetail: `<div class="max-w-4xl mx-auto py-8 bg-white text-gray-800">
  <p class="mb-6 text-base leading-relaxed">
    <span class="font-bold text-[#003092]">Secure your address verification with a professionally drafted Address Proof Affidavit from MavDocs.</span>Whether you're applying for official documents or need to confirm your residence, in your document, we cover all essential details and declarations, ensuring legal validity and a hassle-free process.
  </p>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">What You Get:</h2>
  <ul class="list-disc list-inside mb-8 space-y-2">
    <li>Delivery within 3 hours across Karachi</li>
    <li>Free doorstep delivery</li>
    <li>Legally formatted, ready-to-sign document on official stamp paper</li>
  </ul>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">Frequently Asked Questions (FAQs)</h2>

  <div class="space-y-6">
    <div>
      <h3 class="font-bold text-lg text-gray-700">What will I receive in the package?</h3>
      <p>Your delivery will include a customized MavDocs envelope containing your professionally drafted document, precisely tailored to the details you provided.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Will the document be signed?</h3>
      <p>Yes. You get a signature document, which is legal under Pakistani law. However, MavDocs does not offer doorstep notarization services.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is there a return policy if a mistake occurs?</h3>
      <p>Yes. MavDocs offers a 24-hour return and correction policy if our team makes an error. If incorrect information was provided by the customer, revisions can still be made, but the return policy will not apply.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Can I request a bilingual (English + Urdu) version?</h3>
      <p>Yes, MavDocs offers bilingual formats upon request during the confirmation call to ensure clarity for all parties involved.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">What if I need to add a specific clause?</h3>
      <p>You can mention any specific terms or clauses during checkout. We'll ensure they're included professionally.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is the stamp paper value appropriate for my rental amount?</h3>
      <p>Yes. We calculate and apply the required stamp paper denomination based on current legal standards in Pakistan.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Do I need to visit anywhere, or is everything online?</h3>
      <p>NO need to go, your convenience is our first choice. Simply submit your details, and we'll prepare, print, and deliver the agreement to your doorstep.</p>
    </div>
  </div>
</div>
`,
          },
          {
            title: "Change of Signature",
            price: 399,
            detail:
              "A sworn legal declaration that confirms the change or update of an individual's signature.",
            url: productImg,
            longDetail: `<div class="max-w-4xl mx-auto py-8 bg-white text-gray-800">
  <p class="mb-6 text-base leading-relaxed">
    <span class="font-bold text-[#003092]">Secure your identity update with a professionally drafted Change of Signature Affidavit from MavDocs.</span>Whether due to personal preference or legal requirements, in your document, we cover all relevant statements to authenticate your new signature, ensuring legal validity and a hassle-free process.
  </p>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">What You Get:</h2>
  <ul class="list-disc list-inside mb-8 space-y-2">
    <li>Delivery within 3 hours across Karachi</li>
    <li>Free doorstep delivery</li>
    <li>Legally formatted, ready-to-sign document on official stamp paper</li>
  </ul>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">Frequently Asked Questions (FAQs)</h2>

  <div class="space-y-6">
    <div>
      <h3 class="font-bold text-lg text-gray-700">What will I receive in the package?</h3>
      <p>Your delivery will include a customized MavDocs envelope containing your professionally drafted document, precisely tailored to the details you provided.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Will the document be signed?</h3>
      <p>Yes. You get a signature document, which is legal under Pakistani law. However, MavDocs does not offer doorstep notarization services.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is there a return policy if a mistake occurs?</h3>
      <p>Yes. MavDocs offers a 24-hour return and correction policy if our team makes an error. If incorrect information was provided by the customer, revisions can still be made, but the return policy will not apply.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Can I request a bilingual (English + Urdu) version?</h3>
      <p>Yes, MavDocs offers bilingual formats upon request during the confirmation call to ensure clarity for all parties involved.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">What if I need to add a specific clause?</h3>
      <p>You can mention any specific terms or clauses during checkout. We'll ensure they're included professionally.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is the stamp paper value appropriate for my rental amount?</h3>
      <p>Yes. We calculate and apply the required stamp paper denomination based on current legal standards in Pakistan.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Do I need to visit anywhere, or is everything online?</h3>
      <p>NO need to go, your convenience is our first choice. Simply submit your details, and we'll prepare, print, and deliver the agreement to your doorstep.</p>
    </div>
  </div>
</div>
`,
          },
          {
            title: "Proof of Income Affidavit",
            price: 399,
            detail:
              "A sworn legal declaration that verifies an individual's source and level of income.",
            url: productImg,
            longDetail: `<div class="max-w-4xl mx-auto py-8 bg-white text-gray-800">
  <p class="mb-6 text-base leading-relaxed">
    <span class="font-bold text-[#003092]">Secure your income declaration with a professionally drafted Proof of Income Affidavit from MavDocs.</span>Whether you're self-employed or unable to provide conventional proof, in your document, we cover all financial disclosures and declarations, ensuring legal validity and a hassle-free process.
  </p>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">What You Get:</h2>
  <ul class="list-disc list-inside mb-8 space-y-2">
    <li>Delivery within 3 hours across Karachi</li>
    <li>Free doorstep delivery</li>
    <li>Legally formatted, ready-to-sign document on official stamp paper</li>
  </ul>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">Frequently Asked Questions (FAQs)</h2>

  <div class="space-y-6">
    <div>
      <h3 class="font-bold text-lg text-gray-700">What will I receive in the package?</h3>
      <p>Your delivery will include a customized MavDocs envelope containing your professionally drafted document, precisely tailored to the details you provided.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Will the document be signed?</h3>
      <p>Yes. You get a signature document, which is legal under Pakistani law. However, MavDocs does not offer doorstep notarization services.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is there a return policy if a mistake occurs?</h3>
      <p>Yes. MavDocs offers a 24-hour return and correction policy if our team makes an error. If incorrect information was provided by the customer, revisions can still be made, but the return policy will not apply.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Can I request a bilingual (English + Urdu) version?</h3>
      <p>Yes, MavDocs offers bilingual formats upon request during the confirmation call to ensure clarity for all parties involved.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">What if I need to add a specific clause?</h3>
      <p>You can mention any specific terms or clauses during checkout. We'll ensure they're included professionally.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is the stamp paper value appropriate for my rental amount?</h3>
      <p>Yes. We calculate and apply the required stamp paper denomination based on current legal standards in Pakistan.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Do I need to visit anywhere, or is everything online?</h3>
      <p>NO need to go, your convenience is our first choice. Simply submit your details, and we'll prepare, print, and deliver the agreement to your doorstep.</p>
    </div>
  </div>
</div>
`,
          },
          {
            title: "Proof of Date of Birth Affidavit",
            price: 399,
            detail:
              "A sworn legal declaration that confirms the accurate date of birth of the declarant.",
            url: productImg,
            longDetail: `<div class="max-w-4xl mx-auto py-8 bg-white text-gray-800">
  <p class="mb-6 text-base leading-relaxed">
    <span class="font-bold text-[#003092]">Secure your age verification with a professionally drafted Proof of Date of Birth Affidavit from MavDocs.</span>Whether your birth certificate is unavailable or a correction is needed, in your document, we cover all required statements, ensuring legal validity and a hassle-free process.
  </p>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">What You Get:</h2>
  <ul class="list-disc list-inside mb-8 space-y-2">
    <li>Delivery within 3 hours across Karachi</li>
    <li>Free doorstep delivery</li>
    <li>Legally formatted, ready-to-sign document on official stamp paper</li>
  </ul>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">Frequently Asked Questions (FAQs)</h2>

  <div class="space-y-6">
    <div>
      <h3 class="font-bold text-lg text-gray-700">What will I receive in the package?</h3>
      <p>Your delivery will include a customized MavDocs envelope containing your professionally drafted document, precisely tailored to the details you provided.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Will the document be signed?</h3>
      <p>Yes. You get a signature document, which is legal under Pakistani law. However, MavDocs does not offer doorstep notarization services.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is there a return policy if a mistake occurs?</h3>
      <p>Yes. MavDocs offers a 24-hour return and correction policy if our team makes an error. If incorrect information was provided by the customer, revisions can still be made, but the return policy will not apply.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Can I request a bilingual (English + Urdu) version?</h3>
      <p>Yes, MavDocs offers bilingual formats upon request during the confirmation call to ensure clarity for all parties involved.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">What if I need to add a specific clause?</h3>
      <p>You can mention any specific terms or clauses during checkout. We'll ensure they're included professionally.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is the stamp paper value appropriate for my rental amount?</h3>
      <p>Yes. We calculate and apply the required stamp paper denomination based on current legal standards in Pakistan.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Do I need to visit anywhere, or is everything online?</h3>
      <p>NO need to go, your convenience is our first choice. Simply submit your details, and we'll prepare, print, and deliver the agreement to your doorstep.</p>
    </div>
  </div>
</div>
`,
          },
          {
            title: "Loss of Document Affidavit",
            price: 399,
            detail:
              "A sworn legal declaration that reports the loss or misplacement of an official document.",
            url: productImg,
            longDetail: `<div class="max-w-4xl mx-auto py-8 bg-white text-gray-800">
  <p class="mb-6 text-base leading-relaxed">
    <span class="font-bold text-[#003092]">Secure your legal assurance with a professionally drafted Loss of Document Affidavit from MavDocs.</span>Whether you've lost an ID, license, certificate, or official paper, in your document, we cover all necessary loss declarations, ensuring legal validity and a hassle-free process.
  </p>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">What You Get:</h2>
  <ul class="list-disc list-inside mb-8 space-y-2">
    <li>Delivery within 3 hours across Karachi</li>
    <li>Free doorstep delivery</li>
    <li>Legally formatted, ready-to-sign document on official stamp paper</li>
  </ul>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">Frequently Asked Questions (FAQs)</h2>

  <div class="space-y-6">
    <div>
      <h3 class="font-bold text-lg text-gray-700">What will I receive in the package?</h3>
      <p>Your delivery will include a customized MavDocs envelope containing your professionally drafted document, precisely tailored to the details you provided.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Will the document be signed?</h3>
      <p>Yes. You get a signature document, which is legal under Pakistani law. However, MavDocs does not offer doorstep notarization services.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is there a return policy if a mistake occurs?</h3>
      <p>Yes. MavDocs offers a 24-hour return and correction policy if our team makes an error. If incorrect information was provided by the customer, revisions can still be made, but the return policy will not apply.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Can I request a bilingual (English + Urdu) version?</h3>
      <p>Yes, MavDocs offers bilingual formats upon request during the confirmation call to ensure clarity for all parties involved.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">What if I need to add a specific clause?</h3>
      <p>You can mention any specific terms or clauses during checkout. We'll ensure they're included professionally.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is the stamp paper value appropriate for my rental amount?</h3>
      <p>Yes. We calculate and apply the required stamp paper denomination based on current legal standards in Pakistan.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Do I need to visit anywhere, or is everything online?</h3>
      <p>NO need to go, your convenience is our first choice. Simply submit your details, and we'll prepare, print, and deliver the agreement to your doorstep.</p>
    </div>
  </div>
</div>
`,
          },
          {
            title: "Affidavit for Duplicate Document",
            price: 399,
            detail:
              "A sworn legal declaration that requests the issuance of a duplicate for a lost or damaged document.",
            url: productImg,
            longDetail: `<div class="max-w-4xl mx-auto py-8 bg-white text-gray-800">
  <p class="mb-6 text-base leading-relaxed">
    <span class="font-bold text-[#003092]">Secure your request for reissuance with a professionally drafted Affidavit for Duplicate Document from MavDocs.</span>Whether you're applying for a duplicate ID, license, or official certificate, in your document, we cover all necessary statements confirming loss and intent, ensuring legal validity and a hassle-free process.
  </p>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">What You Get:</h2>
  <ul class="list-disc list-inside mb-8 space-y-2">
    <li>Delivery within 3 hours across Karachi</li>
    <li>Free doorstep delivery</li>
    <li>Legally formatted, ready-to-sign document on official stamp paper</li>
  </ul>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">Frequently Asked Questions (FAQs)</h2>

  <div class="space-y-6">
    <div>
      <h3 class="font-bold text-lg text-gray-700">What will I receive in the package?</h3>
      <p>Your delivery will include a customized MavDocs envelope containing your professionally drafted document, precisely tailored to the details you provided.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Will the document be signed?</h3>
      <p>Yes. You get a signature document, which is legal under Pakistani law. However, MavDocs does not offer doorstep notarization services.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is there a return policy if a mistake occurs?</h3>
      <p>Yes. MavDocs offers a 24-hour return and correction policy if our team makes an error. If incorrect information was provided by the customer, revisions can still be made, but the return policy will not apply.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Can I request a bilingual (English + Urdu) version?</h3>
      <p>Yes, MavDocs offers bilingual formats upon request during the confirmation call to ensure clarity for all parties involved.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">What if I need to add a specific clause?</h3>
      <p>You can mention any specific terms or clauses during checkout. We'll ensure they're included professionally.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is the stamp paper value appropriate for my rental amount?</h3>
      <p>Yes. We calculate and apply the required stamp paper denomination based on current legal standards in Pakistan.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Do I need to visit anywhere, or is everything online?</h3>
      <p>NO need to go, your convenience is our first choice. Simply submit your details, and we'll prepare, print, and deliver the agreement to your doorstep.</p>
    </div>
  </div>
</div>
`,
          },
        ],
      },
      {
        id: 2,
        name: "Change of Name Affidavit",
        products: [
          {
            title: "Change of Name",
            price: 399,
            detail:
              "A sworn legal declaration that formalizes the change of a person's name.",
            url: productImg,
            longDetail: `<div class="max-w-4xl mx-auto py-8 bg-white text-gray-800">
  <p class="mb-6 text-base leading-relaxed">
    <span class="font-bold text-[#003092]">Secure your identity update with a professionally drafted Change of Name Affidavit from MavDocs.</span>Whether you're changing your name due to personal reasons or official purposes, in your document, we cover all legal declarations, ensuring legal validity and a hassle-free process.
  </p>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">What You Get:</h2>
  <ul class="list-disc list-inside mb-8 space-y-2">
    <li>Delivery within 3 hours across Karachi</li>
    <li>Free doorstep delivery</li>
    <li>Legally formatted, ready-to-sign document on official stamp paper</li>
  </ul>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">Frequently Asked Questions (FAQs)</h2>

  <div class="space-y-6">
    <div>
      <h3 class="font-bold text-lg text-gray-700">What will I receive in the package?</h3>
      <p>Your delivery will include a customized MavDocs envelope containing your professionally drafted document, precisely tailored to the details you provided.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Will the document be signed?</h3>
      <p>Yes. You get a signature document, which is legal under Pakistani law. However, MavDocs does not offer doorstep notarization services.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is there a return policy if a mistake occurs?</h3>
      <p>Yes. MavDocs offers a 24-hour return and correction policy if our team makes an error. If incorrect information was provided by the customer, revisions can still be made, but the return policy will not apply.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Can I request a bilingual (English + Urdu) version?</h3>
      <p>Yes, MavDocs offers bilingual formats upon request during the confirmation call to ensure clarity for all parties involved.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">What if I need to add a specific clause?</h3>
      <p>You can mention any specific terms or clauses during checkout. We'll ensure they're included professionally.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is the stamp paper value appropriate for my rental amount?</h3>
      <p>Yes. We calculate and apply the required stamp paper denomination based on current legal standards in Pakistan.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Do I need to visit anywhere, or is everything online?</h3>
      <p>NO need to go, your convenience is our first choice. Simply submit your details, and we'll prepare, print, and deliver the agreement to your doorstep.</p>
    </div>
  </div>
</div>
`,
          },
          {
            title: "Change of Name after Marriage",
            price: 399,
            detail:
              "A sworn legal declaration that affirms a woman's name change following marriage.",
            url: productImg,
            longDetail: `<div class="max-w-4xl mx-auto py-8 bg-white text-gray-800">
  <p class="mb-6 text-base leading-relaxed">
    <span class="font-bold text-[#003092]">Secure your post-marriage identity with a professionally drafted Change of Name After Marriage Affidavit from MavDocs.</span>Whether you're adopting a new surname or modifying your legal name, in your document, we cover all required statements, ensuring legal validity and a hassle-free process.
  </p>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">What You Get:</h2>
  <ul class="list-disc list-inside mb-8 space-y-2">
    <li>Delivery within 3 hours across Karachi</li>
    <li>Free doorstep delivery</li>
    <li>Legally formatted, ready-to-sign document on official stamp paper</li>
  </ul>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">Frequently Asked Questions (FAQs)</h2>

  <div class="space-y-6">
    <div>
      <h3 class="font-bold text-lg text-gray-700">What will I receive in the package?</h3>
      <p>Your delivery will include a customized MavDocs envelope containing your professionally drafted document, precisely tailored to the details you provided.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Will the document be signed?</h3>
      <p>Yes. You get a signature document, which is legal under Pakistani law. However, MavDocs does not offer doorstep notarization services.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is there a return policy if a mistake occurs?</h3>
      <p>Yes. MavDocs offers a 24-hour return and correction policy if our team makes an error. If incorrect information was provided by the customer, revisions can still be made, but the return policy will not apply.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Can I request a bilingual (English + Urdu) version?</h3>
      <p>Yes, MavDocs offers bilingual formats upon request during the confirmation call to ensure clarity for all parties involved.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">What if I need to add a specific clause?</h3>
      <p>You can mention any specific terms or clauses during checkout. We'll ensure they're included professionally.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is the stamp paper value appropriate for my rental amount?</h3>
      <p>Yes. We calculate and apply the required stamp paper denomination based on current legal standards in Pakistan.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Do I need to visit anywhere, or is everything online?</h3>
      <p>NO need to go, your convenience is our first choice. Simply submit your details, and we'll prepare, print, and deliver the agreement to your doorstep.</p>
    </div>
  </div>
</div>
`,
          },
          {
            title: "One & the Same Person",
            price: 399,
            detail:
              "A sworn legal declaration that confirms multiple names or identities refer to one individual.",
            url: productImg,
            longDetail: `<div class="max-w-4xl mx-auto py-8 bg-white text-gray-800">
  <p class="mb-6 text-base leading-relaxed">
    <span class="font-bold text-[#003092]">Secure your identity clarification with a professionally drafted One & the Same Person Affidavit from MavDocs.</span>Whether your documents show variations of your name, in your affidavit, we declare all versions clearly, ensuring legal validity and a hassle-free process.
  </p>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">What You Get:</h2>
  <ul class="list-disc list-inside mb-8 space-y-2">
    <li>Delivery within 3 hours across Karachi</li>
    <li>Free doorstep delivery</li>
    <li>Legally formatted, ready-to-sign document on official stamp paper</li>
  </ul>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">Frequently Asked Questions (FAQs)</h2>

  <div class="space-y-6">
    <div>
      <h3 class="font-bold text-lg text-gray-700">What will I receive in the package?</h3>
      <p>Your delivery will include a customized MavDocs envelope containing your professionally drafted document, precisely tailored to the details you provided.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Will the document be signed?</h3>
      <p>Yes. You get a signature document, which is legal under Pakistani law. However, MavDocs does not offer doorstep notarization services.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is there a return policy if a mistake occurs?</h3>
      <p>Yes. MavDocs offers a 24-hour return and correction policy if our team makes an error. If incorrect information was provided by the customer, revisions can still be made, but the return policy will not apply.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Can I request a bilingual (English + Urdu) version?</h3>
      <p>Yes, MavDocs offers bilingual formats upon request during the confirmation call to ensure clarity for all parties involved.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">What if I need to add a specific clause?</h3>
      <p>You can mention any specific terms or clauses during checkout. We'll ensure they're included professionally.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is the stamp paper value appropriate for my rental amount?</h3>
      <p>Yes. We calculate and apply the required stamp paper denomination based on current legal standards in Pakistan.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Do I need to visit anywhere, or is everything online?</h3>
      <p>NO need to go, your convenience is our first choice. Simply submit your details, and we'll prepare, print, and deliver the agreement to your doorstep.</p>
    </div>
  </div>
</div>
`,
          },
          {
            title: "Name Correction Affidavit",
            price: 399,
            detail:
              "A sworn legal declaration that requests correction of a misspelled or misprinted name in records.",
            url: productImg,
            longDetail: `<div class="max-w-4xl mx-auto py-8 bg-white text-gray-800">
  <p class="mb-6 text-base leading-relaxed">
    <span class="font-bold text-[#003092]">Secure your name correction with a professionally drafted Name Correction Affidavit from MavDocs.</span>Whether your name is misspelled or mismatched across documents, in your affidavit, we clearly outline the correction, ensuring legal validity and a hassle-free process.
  </p>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">What You Get:</h2>
  <ul class="list-disc list-inside mb-8 space-y-2">
    <li>Delivery within 3 hours across Karachi</li>
    <li>Free doorstep delivery</li>
    <li>Legally formatted, ready-to-sign document on official stamp paper</li>
  </ul>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">Frequently Asked Questions (FAQs)</h2>

  <div class="space-y-6">
    <div>
      <h3 class="font-bold text-lg text-gray-700">What will I receive in the package?</h3>
      <p>Your delivery will include a customized MavDocs envelope containing your professionally drafted document, precisely tailored to the details you provided.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Will the document be signed?</h3>
      <p>Yes. You get a signature document, which is legal under Pakistani law. However, MavDocs does not offer doorstep notarization services.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is there a return policy if a mistake occurs?</h3>
      <p>Yes. MavDocs offers a 24-hour return and correction policy if our team makes an error. If incorrect information was provided by the customer, revisions can still be made, but the return policy will not apply.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Can I request a bilingual (English + Urdu) version?</h3>
      <p>Yes, MavDocs offers bilingual formats upon request during the confirmation call to ensure clarity for all parties involved.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">What if I need to add a specific clause?</h3>
      <p>You can mention any specific terms or clauses during checkout. We'll ensure they're included professionally.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is the stamp paper value appropriate for my rental amount?</h3>
      <p>Yes. We calculate and apply the required stamp paper denomination based on current legal standards in Pakistan.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Do I need to visit anywhere, or is everything online?</h3>
      <p>NO need to go, your convenience is our first choice. Simply submit your details, and we'll prepare, print, and deliver the agreement to your doorstep.</p>
    </div>
  </div>
</div>
`,
          },
        ],
      },
      {
        id: 3,
        name: "Student Affidavit",
        products: [
          {
            title: "Gap Year Affidavit",
            price: 399,
            detail:
              "A sworn legal declaration that explains the reason for a break in academic studies.",
            url: productImg,
            longDetail: `<div class="max-w-4xl mx-auto py-8 bg-white text-gray-800">
  <p class="mb-6 text-base leading-relaxed">
    <span class="font-bold text-[#003092]">Secure your academic explanation with a professionally drafted Gap Year Affidavit from MavDocs.</span>Whether you're applying to an institution or need to clarify a break in your studies, in your document, we clearly state the reason and duration, ensuring legal validity and a hassle-free process.
  </p>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">What You Get:</h2>
  <ul class="list-disc list-inside mb-8 space-y-2">
    <li>Delivery within 3 hours across Karachi</li>
    <li>Free doorstep delivery</li>
    <li>Legally formatted, ready-to-sign document on official stamp paper</li>
  </ul>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">Frequently Asked Questions (FAQs)</h2>

  <div class="space-y-6">
    <div>
      <h3 class="font-bold text-lg text-gray-700">What will I receive in the package?</h3>
      <p>Your delivery will include a customized MavDocs envelope containing your professionally drafted document, precisely tailored to the details you provided.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Will the document be signed?</h3>
      <p>Yes. You get a signature document, which is legal under Pakistani law. However, MavDocs does not offer doorstep notarization services.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is there a return policy if a mistake occurs?</h3>
      <p>Yes. MavDocs offers a 24-hour return and correction policy if our team makes an error. If incorrect information was provided by the customer, revisions can still be made, but the return policy will not apply.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Can I request a bilingual (English + Urdu) version?</h3>
      <p>Yes, MavDocs offers bilingual formats upon request during the confirmation call to ensure clarity for all parties involved.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">What if I need to add a specific clause?</h3>
      <p>You can mention any specific terms or clauses during checkout. We'll ensure they're included professionally.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is the stamp paper value appropriate for my rental amount?</h3>
      <p>Yes. We calculate and apply the required stamp paper denomination based on current legal standards in Pakistan.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Do I need to visit anywhere, or is everything online?</h3>
      <p>NO need to go, your convenience is our first choice. Simply submit your details, and we'll prepare, print, and deliver the agreement to your doorstep.</p>
    </div>
  </div>
</div>
`,
          },
          {
            title: "Education Loan Affidavit",
            price: 399,
            detail:
              "A sworn legal declaration that supports an individual's application for an education loan.",
            url: productImg,
            longDetail: `<div class="max-w-4xl mx-auto py-8 bg-white text-gray-800">
  <p class="mb-6 text-base leading-relaxed">
    <span class="font-bold text-[#003092]">Secure your financial declaration with a professionally drafted Education Loan Affidavit from MavDocs.</span>Whether required by a bank or institution, in your document, we outline all relevant commitments and declarations, ensuring legal validity and a hassle-free process.
  </p>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">What You Get:</h2>
  <ul class="list-disc list-inside mb-8 space-y-2">
    <li>Delivery within 3 hours across Karachi</li>
    <li>Free doorstep delivery</li>
    <li>Legally formatted, ready-to-sign document on official stamp paper</li>
  </ul>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">Frequently Asked Questions (FAQs)</h2>

  <div class="space-y-6">
    <div>
      <h3 class="font-bold text-lg text-gray-700">What will I receive in the package?</h3>
      <p>Your delivery will include a customized MavDocs envelope containing your professionally drafted document, precisely tailored to the details you provided.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Will the document be signed?</h3>
      <p>Yes. You get a signature document, which is legal under Pakistani law. However, MavDocs does not offer doorstep notarization services.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is there a return policy if a mistake occurs?</h3>
      <p>Yes. MavDocs offers a 24-hour return and correction policy if our team makes an error. If incorrect information was provided by the customer, revisions can still be made, but the return policy will not apply.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Can I request a bilingual (English + Urdu) version?</h3>
      <p>Yes, MavDocs offers bilingual formats upon request during the confirmation call to ensure clarity for all parties involved.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">What if I need to add a specific clause?</h3>
      <p>You can mention any specific terms or clauses during checkout. We'll ensure they're included professionally.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is the stamp paper value appropriate for my rental amount?</h3>
      <p>Yes. We calculate and apply the required stamp paper denomination based on current legal standards in Pakistan.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Do I need to visit anywhere, or is everything online?</h3>
      <p>NO need to go, your convenience is our first choice. Simply submit your details, and we'll prepare, print, and deliver the agreement to your doorstep.</p>
    </div>
  </div>
</div>
`,
          },
          {
            title: "Loss of Certificates Affidavit",
            price: 399,
            detail:
              "A sworn legal declaration that reports the loss of academic certificates or mark sheets.",
            url: productImg,
            longDetail: `<div class="max-w-4xl mx-auto py-8 bg-white text-gray-800">
  <p class="mb-6 text-base leading-relaxed">
    <span class="font-bold text-[#003092]">Secure your replacement request with a professionally drafted Loss of Certificates Affidavit from MavDocs.</span>Whether you've misplaced your academic or official documents, in your affidavit, we include all necessary loss details, ensuring legal validity and a hassle-free process.
  </p>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">What You Get:</h2>
  <ul class="list-disc list-inside mb-8 space-y-2">
    <li>Delivery within 3 hours across Karachi</li>
    <li>Free doorstep delivery</li>
    <li>Legally formatted, ready-to-sign document on official stamp paper</li>
  </ul>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">Frequently Asked Questions (FAQs)</h2>

  <div class="space-y-6">
    <div>
      <h3 class="font-bold text-lg text-gray-700">What will I receive in the package?</h3>
      <p>Your delivery will include a customized MavDocs envelope containing your professionally drafted document, precisely tailored to the details you provided.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Will the document be signed?</h3>
      <p>Yes. You get a signature document, which is legal under Pakistani law. However, MavDocs does not offer doorstep notarization services.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is there a return policy if a mistake occurs?</h3>
      <p>Yes. MavDocs offers a 24-hour return and correction policy if our team makes an error. If incorrect information was provided by the customer, revisions can still be made, but the return policy will not apply.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Can I request a bilingual (English + Urdu) version?</h3>
      <p>Yes, MavDocs offers bilingual formats upon request during the confirmation call to ensure clarity for all parties involved.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">What if I need to add a specific clause?</h3>
      <p>You can mention any specific terms or clauses during checkout. We'll ensure they're included professionally.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is the stamp paper value appropriate for my rental amount?</h3>
      <p>Yes. We calculate and apply the required stamp paper denomination based on current legal standards in Pakistan.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Do I need to visit anywhere, or is everything online?</h3>
      <p>NO need to go, your convenience is our first choice. Simply submit your details, and we'll prepare, print, and deliver the agreement to your doorstep.</p>
    </div>
  </div>
</div>
`,
          },
          {
            title: "Non political affiliation Affidavit",
            price: 399,
            detail:
              "A sworn legal declaration that confirms the individual has no political association.",
            url: productImg,
            longDetail: `<div class="max-w-4xl mx-auto py-8 bg-white text-gray-800">
  <p class="mb-6 text-base leading-relaxed">
    <span class="font-bold text-[#003092]">Secure your neutrality status with a professionally drafted Non-Political Affiliation Affidavit from MavDocs.</span>Whether for employment, legal, or official reasons, in your document, we declare your non-involvement in political activities, ensuring legal validity and a hassle-free process.
  </p>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">What You Get:</h2>
  <ul class="list-disc list-inside mb-8 space-y-2">
    <li>Delivery within 3 hours across Karachi</li>
    <li>Free doorstep delivery</li>
    <li>Legally formatted, ready-to-sign document on official stamp paper</li>
  </ul>

  <h2 class="text-2xl font-semibold text-[#003092] mb-4">Frequently Asked Questions (FAQs)</h2>

  <div class="space-y-6">
    <div>
      <h3 class="font-bold text-lg text-gray-700">What will I receive in the package?</h3>
      <p>Your delivery will include a customized MavDocs envelope containing your professionally drafted document, precisely tailored to the details you provided.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Will the document be signed?</h3>
      <p>Yes. You get a signature document, which is legal under Pakistani law. However, MavDocs does not offer doorstep notarization services.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is there a return policy if a mistake occurs?</h3>
      <p>Yes. MavDocs offers a 24-hour return and correction policy if our team makes an error. If incorrect information was provided by the customer, revisions can still be made, but the return policy will not apply.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Can I request a bilingual (English + Urdu) version?</h3>
      <p>Yes, MavDocs offers bilingual formats upon request during the confirmation call to ensure clarity for all parties involved.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">What if I need to add a specific clause?</h3>
      <p>You can mention any specific terms or clauses during checkout. We'll ensure they're included professionally.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Is the stamp paper value appropriate for my rental amount?</h3>
      <p>Yes. We calculate and apply the required stamp paper denomination based on current legal standards in Pakistan.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-gray-700">Do I need to visit anywhere, or is everything online?</h3>
      <p>NO need to go, your convenience is our first choice. Simply submit your details, and we'll prepare, print, and deliver the agreement to your doorstep.</p>
    </div>
  </div>
</div>
`,
          },
        ],
      },
    ],
  },
];


// Sample data for customer reviews
const reviews = [
  {
    name: "Fahad Mehmood",
    image: "https://randomuser.me/api/portraits/men/1.jpg", // Replace with actual images
    rating: 5,
    description:
      "Bhai zabardast service hai! Form bharna asaan tha aur document time pe mil gaya. Pehli dafa kisi online legal service pe itna trust feel hua.",
  },
  {
    name: "Sana Khalid",
    image: "https://randomuser.me/api/portraits/women/2.jpg", // Replace with actual images
    rating: 4,
    description:
      "Very impressed. The document was accurate, neatly printed, and came with everything I needed, even the envelope. Saved me so much time and hassle.",
  },
  {
    name: "Abdullah Aslam",
    image: "https://randomuser.me/api/portraits/men/2.jpg", // Replace with actual images
    rating: 5,
    description:
      "Really impressed.The whole thing was smooth and quick, no complications at all.I’ve already told a few people around me to try it too.Honestly, this kind of service was much needed.",
  },
  {
    name: "Muhammad Bial",
    image: "https://randomuser.me/api/portraits/men/1.jpg", // Replace with actual images
    rating: 5,
    description:
      "Very impressed. The document was accurate, neatly printed, and came with everything I needed, even the envelope. Saved me so much time and hassle.",
  },
  {
    name: "Asma Muneer",
    image: "https://randomuser.me/api/portraits/women/2.jpg", // Replace with actual images
    rating: 4,
    description:
      "Very impressed. The document was accurate, neatly printed, and came with everything I needed, even the envelope. Saved me so much time and hassle.",
  },
  // {
  //     name: "Mark Wilson",
  //     image: "https://randomuser.me/api/portraits/men/2.jpg", // Replace with actual images
  //     rating: 5,
  //     description:
  //         "Excellent customer support. The product exceeded my expectations in every way!",
  // },
  // {
  //     name: "Mark Wilson",
  //     image: "https://randomuser.me/api/portraits/men/2.jpg", // Replace with actual images
  //     rating: 5,
  //     description:
  //         "Excellent customer support. The product exceeded my expectations in every way!",
  // },
  // {
  //     name: "Mark Wilson",
  //     image: "https://randomuser.me/api/portraits/men/2.jpg", // Replace with actual images
  //     rating: 5,
  //     description:
  //         "Excellent customer support. The product exceeded my expectations in every way!",
  // },
  // {
  //     name: "Mark Wilson",
  //     image: "https://randomuser.me/api/portraits/men/2.jpg", // Replace with actual images
  //     rating: 5,
  //     description:
  //         "Excellent customer support. The product exceeded my expectations in every way!",
  // },
  // {
  //     name: "Mark Wilson",
  //     image: "https://randomuser.me/api/portraits/men/2.jpg", // Replace with actual images
  //     rating: 5,
  //     description:
  //         "Excellent customer support. The product exceeded my expectations in every way!",
  // },
  // {
  //     name: "Mark Wilson",
  //     image: "https://randomuser.me/api/portraits/men/2.jpg", // Replace with actual images
  //     rating: 5,
  //     description:
  //         "Excellent customer support. The product exceeded my expectations in every way!",
  // },
  // Add more reviews as needed
];

export const blogPosts = [
  {
    id: 1,
    title: "What is a Rental Agreement? A Simple Guide for Tenants and Landlords in Karachi",
    image: "https://www.dummyimg.in/placeholder",
    description:
      "If you plan to rent a house, apartment, or commercial property in Karachi, the first and most important step is creating a rental agreement. Whether you're a tenant or a landlord, a rental agreement protects your rights and ensures a smooth rental experience.",
    link: `<section className="pt-10 pb-20 px-6 max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-[#003092] mb-6">
                What is a Rental Agreement? A Simple Guide for Tenants and Landlords in Karachi
            </h1>

            <div className="text-gray-800 leading-relaxed space-y-5 text-justify">
                <p>
                    If you plan to rent a house, apartment, or commercial property in Karachi,
                    the first and most important step is creating a rental agreement. Whether
                    you're a tenant or a landlord, a rental agreement protects your rights and
                    ensures a smooth rental experience.
                </p>

                <p>
                    In this blog, we'll explain what a rental agreement is, why it's important,
                    and how MAVDOC's doorstep rental agreement delivery service makes the whole
                    process easier, faster, and more reliable in Karachi.
                </p>

                <h2 className="text-2xl font-semibold text-[#003092] mt-6">What is a Rental Agreement?</h2>
                <p>
                    A rental agreement is a legal contract between a landlord (property owner)
                    and a tenant (the person renting the property). It contains all the essential
                    terms and conditions related to the rental arrangement, such as:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Rent amount</li>
                    <li>Security deposit</li>
                    <li>Duration of the rental</li>
                    <li>Responsibilities of landlord and tenant</li>
                    <li>Maintenance rules</li>
                    <li>Conditions for termination</li>
                    <li>Legal obligations</li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#003092] mt-6">Why is a Rental Agreement Important?</h2>
                <p>A rental agreement is not just paperwork; it's your legal protection. Here's why:</p>

                <h3 className="text-xl font-semibold">For Tenants:</h3>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Prevents sudden eviction without notice</li>
                    <li>Clarifies rent and payment dates</li>
                    <li>Defines who pays for maintenance or repairs</li>
                    <li>Protects from illegal rent increases</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">For Landlords:</h3>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Secures rent collection on time</li>
                    <li>Prevents misuse of property</li>
                    <li>Ensures tenant follows house rules</li>
                    <li>Acts as legal evidence in disputes</li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#003092] mt-6">What Should a Rental Agreement Include?</h2>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Full names and CNIC numbers of both parties</li>
                    <li>Property address and description</li>
                    <li>Monthly rent and payment method</li>
                    <li>Security deposit details</li>
                    <li>Duration (e.g., 11 months or 1 year)</li>
                    <li>Notice period for termination (usually 30 days)</li>
                    <li>Rules about subletting, guests, and usage</li>
                    <li>Maintenance responsibilities</li>
                    <li>Signature of both parties and witnesses</li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#003092] mt-6">
                    MAVDOC – Doorstep Rental Agreement Delivery in Karachi
                </h2>
                <p>
                    Going to lawyers, stamp vendors, and typing centres in Karachi is time-consuming
                    and frustrating. That’s why MAVDOC offers a modern, convenient solution:
                </p>
                <ol className="list-decimal list-inside ml-4 space-y-1">
                    <li>Fill in your details online through our rental form.</li>
                    <li>We create your legal draft as per Sindh Rent Law.</li>
                    <li>We print it on official stamp paper and notarise it.</li>
                    <li>We deliver it to your home or office.</li>
                </ol>

                <p>No waiting. No stress. Just professional service delivered fast.</p>

                <h2 className="text-2xl font-semibold text-[#003092] mt-6">Don’t Delay – Legal Protection is a Must!</h2>
                <p>
                    Whether you’re a landlord renting your first apartment or a tenant moving to a new
                    home, MAVDOC handles your entire rental agreement process securely. Too many people
                    in Karachi still rent without a written agreement. That’s a huge risk!
                </p>

                <p>
                    Don’t wait until it’s too late. Let MAVDOC help you stay protected and stress-free.
                </p>

                <h2 className="text-2xl font-semibold text-[#003092] mt-6">Hurry Up – Make Your Draft Today</h2>
                <p>
                    Whether you're a student, professional, landlord, or property agent, MAVDOC is here
                    to make your rental life easier.
                </p>
                <p className="font-semibold text-[#003092]">
                    Book now → Fill out the rental form online, and receive your legal document at your
                    door — within 3 hours (urgent delivery) or next day (standard).
                </p>
            </div>
        </section>`,
  },
  {
    id: 2,
    title: "How Doorstep Rental Agreement Services Save You Time and Cost?",
    image: "https://www.dummyimg.in/placeholder",
    description:
      "Are you looking for a rental agreement? Seeking a convenient solution? Is distance truly an obstacle when it comes to documentation? In today's fast-paced world, convenience is no longer a luxury; it's a necessity. In legal property matters such as rental agreements, tenants...",
    link: `<section className="pt-10 pb-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-[#003092] mb-6 leading-snug">
        How Doorstep Rental Agreement Services Save You Time and Cost
      </h1>

      <div className="text-gray-800 leading-relaxed space-y-5 text-justify">
        <p>
          Are you looking for a rental agreement? Seeking a convenient solution? Is distance
          truly an obstacle when it comes to documentation? In today's fast-paced world,
          convenience is no longer a luxury; it's a necessity.
        </p>

        <p>
          In legal property matters such as rental agreements, tenants and landlords in
          Karachi often find themselves caught in time-consuming procedures, endless paperwork,
          and multiple visits to lawyers and notary offices. However, thanks to innovative
          solutions like doorstep rental agreement services, MAVDOC brings a smarter solution
          that saves you time and travel costs.
        </p>

        <p>
          With our online-to-doorstep rental agreement service, you can fill out your rental
          agreement details online, and we’ll handle the rest. The final, ready-to-sign,
          legally compliant agreement is delivered straight to your home or office—no running
          around, no extra fees, no stress, all at an affordable price.
        </p>

        <h2 className="text-2xl font-semibold text-[#003092] mt-6">
          How MAVDOC Works for Rental Agreements
        </h2>
        <p>We offer digital convenience with physical document delivery. Here’s how it works:</p>
        <ol className="list-decimal list-inside ml-4 space-y-1">
          <li>Fill a simple online form with landlord, tenant, property, and rent details.</li>
          <li>Our legal team drafts a rental agreement compliant with Sindh Tenancy Laws.</li>
          <li>We print it on official stamp paper and get it notarised.</li>
          <li>The complete, ready-to-sign document is delivered to your doorstep.</li>
        </ol>

        <p>No visits to lawyers. No wasting time in queues. Just smart, fast, reliable service.</p>

        <h2 className="text-2xl font-semibold text-[#003092] mt-6">How You Save Time</h2>
        <p>
          Karachi's traffic and legal system can cost you hours—if not days—when handling
          something as routine as a rental agreement. With MAVDOC, you skip the hassle entirely.
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>No lawyer visits — our legal team handles all drafting.</li>
          <li>No office queues — we procure stamp paper and notarisation.</li>
          <li>No back-and-forth — you fill details once, we do the rest.</li>
        </ul>

        <p>
          Everything happens behind the scenes, and you get your final document at home without
          any stress.
        </p>

        <h2 className="text-2xl font-semibold text-[#003092] mt-6">Save Money with MAVDOC</h2>
        <p>
          Traditional documentation costs you not just money but also time, energy, and often
          hidden fees.
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Flat-rate pricing — no hidden charges</li>
          <li>No transport or fuel costs</li>
          <li>No broker commissions</li>
          <li>No repeated printing or corrections</li>
        </ul>

        <p>
          Our system eliminates unnecessary expenses and delivers legal accuracy at a
          transparent price.
        </p>

        <h2 className="text-2xl font-semibold text-[#003092] mt-6">
          Legally Accurate and Secure
        </h2>
        <p>
          DIY templates from the internet often miss critical clauses. MAVDOC ensures your
          agreement is legally solid and personalized.
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Drafting based on Sindh Rent Laws</li>
          <li>Custom clauses for furnished units, deposits, etc.</li>
          <li>Proper stamping and notarisation for enforceability</li>
        </ul>

        <p>We don’t just create documents—we protect your legal rights.</p>

        <h2 className="text-2xl font-semibold text-[#003092] mt-6">Who Is This Perfect For?</h2>
        <p>MAVDOC is ideal for:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Busy professionals with limited time</li>
          <li>Landlords managing multiple properties</li>
          <li>Tenants relocating on short deadlines</li>
          <li>Students and expats</li>
          <li>Elderly clients needing home assistance</li>
          <li>Property agents needing documentation support</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#003092] mt-6">What You Get with MAVDOC</h2>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Professionally drafted rental agreement</li>
          <li>Printed on official stamp paper</li>
          <li>Notarised and legally formatted</li>
          <li>Delivered anywhere in Karachi</li>
          <li>Digital copy via WhatsApp or email</li>
        </ul>

        <p>Everything delivered—without you stepping outside your door.</p>

        <h2 className="text-2xl font-semibold text-[#003092] mt-6">Book Now with MAVDOC</h2>
        <ol className="list-decimal list-inside ml-4 space-y-1">
          <li>Visit our website and access the rental agreement form.</li>
          <li>Enter landlord/tenant info, property address, rent terms.</li>
          <li>Make payment online or with cash on delivery.</li>
          <li>Receive your stamped, notarised agreement in 1–2 days.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#003092] mt-6">Wrap Up</h2>
        <p>
          Karachi’s rental market moves fast—don’t let legal formalities slow you down.
          Whether you're a tenant ready to move or a landlord renting out your space,
          MAVDOC turns a complicated process into a smooth experience.
        </p>

        <p className="font-semibold text-[#003092]">
          Draft online, receive your legal document at home, and save time, money, and stress.
          MAVDOC is the future of rental agreements in Karachi.
        </p>
      </div>
    </section>`,
  },
  {
    id: 3,
    title: "Types Of All Rental Agreements: In Karachi",
    image: "https://www.dummyimg.in/placeholder",
    description:
      "In Pakistan, where renting property or vehicles is becoming increasingly common, a valid rental agreement is not just a formality but a necessity. Whether you're a landlord leasing your home, a tenant moving into a flat, or someone offering or hiring a car for personal...",
    link: `    <section className="pt-10 pb-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-[#003092] mb-6 leading-snug">
        Types of All Rental Agreements in Karachi
      </h1>

      <div className="text-gray-800 leading-relaxed space-y-5 text-justify">
        <p>
          In Pakistan, where renting property or vehicles is becoming increasingly common,
          a valid rental agreement is not just a formality but a necessity. Whether you're
          a landlord leasing your home, a tenant moving into a flat, or someone hiring a car
          for personal or commercial use — a rental agreement protects both parties legally.
        </p>

        <p>
          It outlines rights, responsibilities, and expectations to avoid future disputes.
          In urban hubs like Karachi, people often hesitate to create formal contracts due to
          a lack of legal knowledge or accessibility.
        </p>

        <p>
          That’s where <strong>MAVDocs</strong> steps in. We offer a smart, secure, and
          affordable way to create your rent agreement online in Pakistan. Just provide your
          details and select your agreement type — we’ll draft and deliver a legally compliant
          document to your doorstep.
        </p>

        <h2 className="text-2xl font-semibold text-[#003092] mt-6">What is a Rental Agreement?</h2>
        <p>
          A rental agreement is a legal contract signed between a property or vehicle owner
          (lessor) and the renter (lessee). It defines the rental terms and protects the
          interests of both parties.
        </p>

        <p>Rental agreements can apply to various situations such as:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Renting residential or commercial property</li>
          <li>Leasing vehicles like cars, vans, or motorcycles</li>
          <li>Temporary office space arrangements</li>
          <li>Sub-leasing agreements</li>
        </ul>

        <p>Common clauses in rental agreements include:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Duration of the agreement</li>
          <li>Rental amount and payment schedule</li>
          <li>Security deposit</li>
          <li>Termination clause</li>
          <li>Maintenance responsibilities</li>
          <li>Other custom conditions</li>
        </ul>

        <p>
          Whether it’s a home rental agreement in Karachi or a car rental agreement,
          MAVDocs ensures compliance with Pakistani laws and local regulations like those in Sindh.
        </p>

        <h2 className="text-2xl font-semibold text-[#003092] mt-6">
          Types of Rental Agreements Offered by MAVDocs
        </h2>

        <h3 className="text-xl font-semibold mt-4">1. Home Rent Agreement in Karachi</h3>
        <p>
          Whether renting a flat in Gulshan or a house in DHA, a rental agreement is essential.
          We create customized agreements based on Karachi’s real estate laws. These documents
          include rent escalation, maintenance responsibilities, utility terms, and eviction
          conditions to ensure clarity and avoid disputes.
        </p>

        <h3 className="text-xl font-semibold mt-4">2. Car Rental Agreement</h3>
        <p>
          With the rise of car-sharing services, our car rental agreements define mileage
          limits, fuel usage, damage liability, and return conditions. MAVDocs ensures the
          document is legally recognized and personalized for your rental duration and needs.
        </p>

        <h3 className="text-xl font-semibold mt-4">3. Commercial Property Rental Agreements</h3>
        <p>
          Businesses leasing shops, offices, or warehouses require detailed contracts outlining
          usage rights, taxation, and exit clauses. We provide well-structured commercial rental
          documents that support long-term growth and reduce legal risks.
        </p>

        <h3 className="text-xl font-semibold mt-4">4. Agreement in Sindh</h3>
        <p>
          Sindh has unique regional legal structures, and MAVDocs ensures your agreement is
          tailored to meet provincial requirements. Whether you're in Karachi, Hyderabad, or
          Sukkur — our drafts align with Sindh tenancy laws.
        </p>

        <h3 className="text-xl font-semibold mt-4">5. Car Sale Agreement</h3>
        <p>
          Selling a vehicle without a proper agreement is risky. We draft agreements that
          cover ownership transfer, payment schedule, and handover conditions — protecting
          both seller and buyer.
        </p>

        <h2 className="text-2xl font-semibold text-[#003092] mt-6">Why Choose MAVDocs?</h2>
        <p>
          MAVDocs is more than just a document drafting service — it’s Pakistan’s trusted
          online legal partner. We simplify complex legal processes and make agreements
          accessible and affordable.
        </p>

        <h3 className="text-xl font-semibold mt-4">Our Core Services Include:</h3>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Online Rent Agreements (Pakistan-wide)</li>
          <li>Home Rent Agreement in Karachi</li>
          <li>Region-specific Agreement in Sindh</li>
          <li>Car Rental & Car Sale Agreements</li>
          <li>Legally reviewed and customizable documents</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#003092] mt-6">How to Draft Your Agreement</h2>
        <ol className="list-decimal list-inside ml-4 space-y-1">
          <li>
            <strong>Select Your Agreement Type:</strong> Choose from property rent,
            vehicle lease, or sale agreements.
          </li>
          <li>
            <strong>Fill in the Details:</strong> Use our simple form — no legal expertise needed.
          </li>
          <li>
            <strong>Let Us Draft It:</strong> Our legal team creates your tailored document.
          </li>
          <li>
            <strong>Receive at Your Doorstep:</strong> Get the printed, notarised agreement anywhere in Pakistan.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#003092] mt-6">Final Words</h2>
        <p>
          No matter the kind of rental or sale arrangement, MAVDocs ensures it’s legally secure
          and simple to execute. You don’t need to run after lawyers or printing shops.
        </p>

        <p className="font-semibold text-[#003092]">
          Create your rental agreement in Karachi, across Sindh, or anywhere in Pakistan —
          from the comfort of your home. With MAVDocs, legality truly comes to your doorstep.
        </p>
      </div>
    </section>`,
  },
  {
    id: 4,
    title: "What is an Affidavit? A Complete Guide by MavDocs",
    image: "https://www.dummyimg.in/placeholder",
    description:
      "In legal documentation, an affidavit holds a unique and powerful place. It’s a written statement of fact made under oath that can be used as evidence in legal matters. Whether you are applying for a visa, dealing with property matters, changing your name...",
    link: `    <section className="pt-10 pb-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-[#003092] mb-6 leading-snug">
        What is an Affidavit? A Complete Guide by MavDocs
      </h1>

      <div className="text-gray-800 leading-relaxed space-y-5 text-justify">
        <p>
          In legal documentation, an affidavit holds a unique and powerful place.
          It’s a written statement of fact made under oath that can be used as
          evidence in legal matters. Whether you're applying for a visa, handling
          property, changing your name, or submitting academic documents — an
          affidavit plays a crucial role.
        </p>

        <p>
          In Pakistan, especially in Karachi and Sindh, demand for proper affidavits
          is rising with greater legal awareness. Yet, many people are still
          unaware of how to draft a proper affidavit or where to get one. That’s
          where <strong>MAV Doc</strong> comes in — offering smart, fast, and legally
          accurate affidavit services delivered to your doorstep.
        </p>

        <h2 className="text-2xl font-semibold text-[#003092] mt-6">
          What is an Affidavit?
        </h2>
        <p>
          An affidavit is a legal document in which a person (called the
          <strong> deponent</strong>) swears under oath that their statements are
          true. It’s usually signed before a Notary Public, Commissioner for Oaths,
          or Magistrate.
        </p>
        <p>Affidavits are used in both civil and criminal proceedings as well as personal, academic, or immigration matters.</p>

        <h3 className="text-xl font-semibold mt-4">Common Terminologies in Affidavits</h3>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li><strong>Deponent:</strong> Person who declares the statement</li>
          <li><strong>Oath/Affirmation:</strong> Swearing truthfulness</li>
          <li><strong>Attesting Officer:</strong> Legal authority present during signing</li>
          <li><strong>Stamp Paper:</strong> Legal paper used for the affidavit</li>
          <li><strong>Notarization:</strong> Certification by a notary public</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#003092] mt-6">
          Why Do People Need Affidavits in Pakistan?
        </h2>

        <h3 className="text-xl font-semibold mt-4">Affidavit for Change of Name</h3>
        <p>
          Required for updating CNICs, passports, and other official IDs due to
          marriage, divorce, religious conversion, or name corrections.
        </p>

        <h3 className="text-xl font-semibold mt-4">Affidavit for University Students</h3>
        <p>
          Used to declare discipline, non-involvement in political activities,
          or drug-free status — common for hostel or admission procedures.
        </p>

        <h3 className="text-xl font-semibold mt-4">Affidavit for Property Claims</h3>
        <p>
          Necessary when declaring ownership of inherited or purchased property,
          especially during mutation or dispute processes.
        </p>

        <h3 className="text-xl font-semibold mt-4">Immigration & Passport Processes</h3>
        <p>
          Often required to confirm dependent status, family relationship, or
          other personal declarations in visa/passport documentation.
        </p>

        <h3 className="text-xl font-semibold mt-4">General Declarations</h3>
        <p>
          For legal or administrative purposes — declaring marital status, income,
          guardianship, or address.
        </p>

        <h2 className="text-2xl font-semibold text-[#003092] mt-6">
          Affidavits in Karachi & Sindh: Local Legal Standards
        </h2>
        <p>
          Karachi and other parts of Sindh have specific legal protocols for affidavits:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Use of Urdu or bilingual formats for government use</li>
          <li>Stamp paper values vary depending on affidavit type</li>
          <li>Attestation procedures differ by region</li>
        </ul>

        <p>
          MAV Doc ensures your affidavits are regionally compliant, legally accurate,
          and professionally formatted — saving you from rejection or legal issues.
        </p>

        <h2 className="text-2xl font-semibold text-[#003092] mt-6">
          How MAV Doc Simplifies the Affidavit Process
        </h2>

        <p>Forget long queues, lawyer fees, and printing struggles. With MAV Doc, you get:</p>

        <ul className="list-disc list-inside ml-4 space-y-1">
          <li><strong>Online Affidavit Drafting:</strong> Just enter your details</li>
          <li><strong>Legal Accuracy:</strong> Verified templates by experts</li>
          <li><strong>Doorstep Delivery:</strong> Printed affidavit on stamp paper delivered to you</li>
          <li><strong>Regional Compliance:</strong> Fully valid in Karachi, Sindh & Pakistan</li>
          <li><strong>Affordable Pricing:</strong> Transparent and budget-friendly</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#003092] mt-6">
          Affidavits Available at MAV Doc
        </h2>

        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Affidavit for Change of Name</li>
          <li>Affidavit for University Students</li>
          <li>General Declaration Affidavit</li>
          <li>Affidavit for Rental Agreement</li>
          <li>Property Affidavit</li>
          <li>Marriage / Divorce Affidavit</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#003092] mt-6">How It Works</h2>
        <ol className="list-decimal list-inside ml-4 space-y-1">
          <li><strong>Choose Your Affidavit Type:</strong> Select the type that fits your need</li>
          <li><strong>Enter Your Details:</strong> Fill a simple online form</li>
          <li><strong>We Draft It:</strong> Legal team prepares your affidavit accurately</li>
          <li><strong>Delivered to Your Door:</strong> You receive it on proper stamp paper anywhere in Pakistan</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#003092] mt-6">Final Words</h2>
        <p>
          In Pakistan, verbal agreements still dominate — but legal affidavits bring
          structure, clarity, and protection. Whether you need an affidavit for name
          change, university, property, or general declaration — make sure it’s legally
          sound.
        </p>
        <p className="font-semibold text-[#003092]">
          With MAV Doc, you don’t need legal knowledge or visits to court.
          Submit your details online, get your affidavit printed, notarised,
          and delivered — all from the comfort of your home. Easy. Fast. Secure.
        </p>
      </div>
    </section>`,
  },
  // Add more blog posts as needed
];

const Home = () => {
  const [currentText, setCurrentText] = useState("Search Your Agreement");
  const textArray = ["Search Your Agreement", "Search Your Affidavit", "Search Your Undertaking", "Search Your Promissory Note", "Customize Document"];

  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      navigate(`/product?search=${encodeURIComponent(searchText.trim())}`);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = textArray.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % textArray.length;
        return textArray[nextIndex];
      });
    }, 3000); // Change text every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen text-white font-sans">
      <Header />
      {/* Hero Section */}
      {/* <section
                className="relative bg-cover bg-center shadow-lg overflow-hidden"
                style={{ backgroundImage: `url(${banner1})`, height: '50vh' }}
            >
            </section> */}
      <section
        className="relative bg-cover bg-center shadow-lg overflow-hidden"
      >
        <img src={banner2} alt="" className="w-full object-contain" />
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div> */}
      </section>

      {/* Search Bar */}
      <div className="custom-search-section px-6 md:px-20 mx-4 md:mx-36 py-10">
        <div className="bg-[#112e5a] flex flex-col md:flex-row items-center justify-center w-full p-4 rounded-lg shadow-lg">

          {/* Search Header */}
          <div className="search-header w-full md:w-2/5 text-center md:text-left mb-4 md:mb-0">
            <div className="search-title text-white text-2xl font-semibold">
              <span>{currentText}</span>
            </div>
          </div>

          {/* Search Form Container */}
          <div className="search-form-container w-full md:w-2/4">
            <form onSubmit={handleSearch} className="flex items-center justify-center md:justify-start">

              {/* Search Input */}

              <div className="w-full md:w-3/4">
                <input
                  type="search"
                  placeholder="Find Your Document..."
                  autoComplete="off"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-black"
                />
              </div>
              <button
                type="submit"
                className="py-2 bg-[#f5a623] text-white px-6 text-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition-all rounded-r-md"
              >
                Search
              </button>

            </form>
          </div>
        </div>
      </div>

      {/* Cart Reviews */}
      <section className="flex justify-center items-center text-center py-8 max-[500px]:py-6 bg-[#112e5a] mx-4 my-3 rounded-lg shadow-md">
        <div className="bg-white text-black py-6 px-6 flex justify-center w-full max-[500px]:py-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full">
            {[
              {
                icon: <FaArrowDown />,
                text: "Low Prices",
              },
              {
                icon: <FaPercentage />,
                text: "Easy Process",
              },
              {
                icon: <FaTruckMoving />,
                text: "Free Delivery",
              },
            ].map(({ icon, text }, index) => (
              <div key={index} className="flex items-center justify-center gap-2 rounded-lg">
                <div className="bg-[#f5a623] rounded-full p-3 text-white max-[500px]:text-3xl max-[1025px]:text-5xl max-[1500px]:text-5xl max-[2000px]:text-5xl">
                  {icon}
                </div>
                <span className="text-lg font-medium text-black">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Button */}
      <section className="flex flex-col items-center justify-center py-5">
        {/* Heading */}
        <div className="mb-4 text-center">
          <h2 className="md:text-2xl font-bold text-gray-800">Legal documents with fast, reliable, and free delivery</h2>
        </div>
        {/* Button */}
        <div className="flex justify-center mb-4">
          <Link to={"/product"}>

            <button className="bg-[#f5a623] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#f5a177] focus:ring-4 focus:ring-blue-300 transition-transform transform hover:translate-y-[-10px] duration-300 ease-in-out">
              Order Document
            </button>
          </Link>
        </div>
      </section>

      <section className="py-7 px-6 bg-[#f7f7f7] text-center">
        <h2 className="text-3xl font-bold text-[#003092] mb-8">
          Best Seller
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]} // Register modules here
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation={true} // Enable navigation
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map((category) =>
            category.subcategories.map((subcategory) =>
              subcategory.products.map((product, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 mb-5">
                    <div className="flex justify-center mb-4">
                      <img
                        src={product.url}
                        alt={product.title}
                        className="w-96 h-64 object-contain rounded-xl"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-[#003092] mb-2 h-14">
                        {product.title}
                      </h3>
                      <p className="text-gray-500 text-sm mb-2">
                        {(product.details || product.detail)?.length > 80
                          ? `${(product.details || product.detail).slice(0, 80)}...`
                          : product.details || product.detail}
                      </p>
                      <p className="text-lg font-semibold text-[#f15722] mb-4">
                        RS: {product.price}/=
                      </p>
                      {/* <Link to="/product-detail"> */}
                      <Link to={`/product-detail/${category.id}/${subcategory.id}/${product.title}`}>
                        <button className="bg-[#f5a623] text-white py-2 px-4 rounded-lg hover:bg-[#e06b2a] transition-all">
                          Go To Detail Page
                        </button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            )
          )}

        </Swiper>
      </section>


      {/* Best Seller Section */}

      <section className="text-center pb-10  mx-4 my-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-[#003092] mb-8">Our Partners</h2>
        <Swiper
          spaceBetween={10} // Space between slides
          slidesPerView={5} // Number of slides visible at a time
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 4 },
            1440: { slidesPerView: 5 },
          }}
          loop={true} // Infinite loop effect
          autoplay={{
            delay: 2000, // Set autoplay delay
            disableOnInteraction: true, // Disable autoplay when interacting
          }}
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <div className="flex flex-col justify-center items-center space-y-2">
                <img src={partner.logo} alt={partner.name} className="h-32 w-auto" />
                <span className="text-black text-sm">{partner.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="pt-8 pb-10 px-6 bg-[#f0f4f8] text-center">
        <h2 className="text-3xl font-bold text-[#003092] mb-8">
          How we works
        </h2>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Text Explanation */}
          <div className="flex-1">
            <h3 className="text-2xl font-medium text-[#003092] mb-4">
              Easy & Simple Process
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Our process is designed to be quick and easy. Simply follow the steps, and you'll be all set in no time. We aim to provide the best experience for you!
            </p>
            <ul className="list-disc text-left space-y-2 text-gray-600">
              <li>Step 1: Sign Up or Log In</li>
              <li>Step 2: Choose Your Product</li>
              <li>Step 3: Enjoy the Service</li>
            </ul>
          </div>

          {/* Video */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <iframe
                width="100%"
                height="315"
                src="https://drive.google.com/file/d/1_W1bEG4zyxJJ72ulXGTbhdevm8l4qp7Y/view" // Replace with your video URL
                title="How It Works Video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8 px-6 bg-[#f7f7f7] text-center">
        <h2 className="text-3xl font-bold text-[#003092] mb-8">
          What Our Customers Say
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]} // Register Navigation
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000 }}
          navigation={true} // Enable navigation arrows
          breakpoints={{
            320: { slidesPerView: 1 },
            425: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
        >

          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white min-h-60 max-h-60 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 mb-5">
                {/* <div className="flex justify-center mb-4">
                  <img
                    src={"https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg"}
                    alt={review.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-[#f5a623]"
                  />
                </div> */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-[#003092] mb-2">
                    {review.name}
                  </h3>
                  <div className="flex justify-center mb-4">
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <svg
                        key={idx}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="w-5 h-5 text-yellow-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 15l-5 3 1-5-4-4 5-1L10 3l2 5 5 1-4 4 1 5-5-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm">{review.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="pt-10 pb-5 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#003092] mb-8">
          Latest Blog Posts
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000 }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {/* Slides go here */}
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 mb-5">
                <div className="mb-4">
                  {/* <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg"
                  /> */}
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-[#003092] min-h-[90px] max-h-[90px]">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    {post.description}
                  </p>
                  <Link to={`/blog/${post.id}`}>
                    <a
                      href={post.link}
                      className="text-blue-500 text-sm font-medium hover:underline"
                    >
                      Read More
                    </a>
                  </Link>
                  
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;