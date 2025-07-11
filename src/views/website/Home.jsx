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

const blogPosts = [
  // {
  //     title: "The Future of E-Commerce",
  //     image: "https://via.placeholder.com/300x200",
  //     description:
  //         "Explore the trends and technologies shaping the future of online shopping. Stay ahead with innovative strategies and insights.",
  //     link: "/blog/future-of-ecommerce",
  // },
  {
    title: "5 Tips for Better Online Marketing",
    image: "https://www.dummyimg.in/placeholder",
    description:
      "Learn the essential tips for improving your online marketing strategy. Increase engagement and drive more sales.",
    link: "/blog/online-marketing-tips",
  },
  {
    title: "How to Boost Website Conversions",
    image: "https://www.dummyimg.in/placeholder",
    description:
      "Discover proven strategies to increase your website's conversion rates and turn visitors into loyal customers.",
    link: "/blog/website-conversion-tips",
  },
  {
    title: "How to Boost Website Conversions",
    image: "https://www.dummyimg.in/placeholder",
    description:
      "Discover proven strategies to increase your website's conversion rates and turn visitors into loyal customers.",
    link: "/blog/website-conversion-tips",
  },
  {
    title: "How to Boost Website Conversions",
    image: "https://www.dummyimg.in/placeholder",
    description:
      "Discover proven strategies to increase your website's conversion rates and turn visitors into loyal customers.",
    link: "/blog/website-conversion-tips",
  },
  {
    title: "How to Boost Website Conversions",
    image: "https://www.dummyimg.in/placeholder",
    description:
      "Discover proven strategies to increase your website's conversion rates and turn visitors into loyal customers.",
    link: "/blog/website-conversion-tips",
  },
  {
    title: "How to Boost Website Conversions",
    image: "https://www.dummyimg.in/placeholder",
    description:
      "Discover proven strategies to increase your website's conversion rates and turn visitors into loyal customers.",
    link: "/blog/website-conversion-tips",
  },
  {
    title: "How to Boost Website Conversions",
    image: "https://www.dummyimg.in/placeholder",
    description:
      "Discover proven strategies to increase your website's conversion rates and turn visitors into loyal customers.",
    link: "/blog/website-conversion-tips",
  },
  {
    title: "How to Boost Website Conversions",
    image: "https://www.dummyimg.in/placeholder",
    description:
      "Discover proven strategies to increase your website's conversion rates and turn visitors into loyal customers.",
    link: "/blog/website-conversion-tips",
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
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-[#003092] mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    {post.description}
                  </p>
                  <a
                    href={post.link}
                    className="text-blue-500 text-sm font-medium hover:underline"
                  >
                    Read More
                  </a>
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