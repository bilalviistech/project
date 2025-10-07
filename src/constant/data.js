import productImg from "@/assets/images/productImg.webp";
import one80Design from "@/assets/images/180 Design.png";
import AhmekStore from "@/assets/images/Ahmek Store.webp";
import HumanThatWrites from "@/assets/images/Human That Writes.webp";
import Saassociate from "@/assets/images/Sa associate.jpg";
import UmarRealEstate from "@/assets/images/Umar Real Estate.webp";
import rentalAgreementBlogImage from "@/assets/images/rentalAgreementBlogImage.jpg"
import affidavitBlogImage from "@/assets/images/affidavitBlogImage.jpg"

export const mycategories = [
  {
    id: 1,
    name: "Agreement",
  },
  {
    id: 2,
    name: "Affidavit",
  },
  {
    id: 3,
    name: "Customize",
  },
];

export const products = [
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
            price: 350,
            details:
              "A legal contract defining the terms & conditions of both landlord and tenant for residential property occupancy.",
            url: productImg,
            longDetail: `<div class="max-w-4xl mx-auto py-8 bg-white text-gray-800">

  <p class="mb-6 text-base leading-relaxed">
    <span class="font-bold text-[#003092]">Secure your rental terms with a professionally drafted Rental Agreement from MavDocs.</span>Whether you are a homeowner, taking and giving your property on rent, In your document, we cover all aspects, including rent amount, duration, security deposit, and responsibilities, ensuring legal validity and a hassle-free process.
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
            title: "Commercial Rental Agreement",
            price: 350,
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
            price: 350,
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
            price: 350,
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
            price: 350,
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
            price: 350,
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
            price: 350,
            details:
              "A legal contract defining the terms and conditions for full and final transfer of vehicle ownership from seller to buyer.",
            url: productImg,
            longDetail: `<div class="max-w-4xl mx-auto py-8 bg-white text-gray-800">

  <p class="mb-6 text-base leading-relaxed">
    <span class="font-bold text-[#003092]">Secure your sale terms with a professionally drafted Car Sale Agreement from MavDocs</span> Whether you're selling or buying a vehicle, in your document, we cover all aspects, including full payment terms, car condition details, transfer timelines, and mutual responsibilities, ensuring legal validity and a hassle-free process.
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
  {
    id: 2,
    categoryId: 2,
    categoryName: "Affidavit",
    subcategories: [
      {
        id: 1,
        name: "General Affidavit",
        products: [
          {
            title: "General Affidavit",
            price: 350,
            details:
              "A sworn legal declaration that confirms an individual's current residential address.",
            url: productImg,
            longDetail: `<div class="max-w-4xl mx-auto py-8 bg-white text-gray-800">
  <p class="mb-6 text-base leading-relaxed">
    <span class="font-bold text-[#003092]">Secure your legal statement with a professionally drafted General Affidavit from MavDocs.</span>Whether you need to declare a fact, statement, or legal position, in your document, we cover all necessary declarations clearly, ensuring legal validity and a hassle-free process.
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
            title: "Address Proof Affidavit",
            price: 350,
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
            price: 350,
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
            price: 350,
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
            price: 350,
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
            price: 350,
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
            price: 350,
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
            price: 350,
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
            price: 350,
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
            price: 350,
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
            price: 350,
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
            price: 350,
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
            price: 350,
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
            price: 350,
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
            price: 350,
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

export const partners = [
  { name: "180 Design", logo: one80Design },
  { name: "Ahmek Store", logo: AhmekStore },
  { name: "Human That Writes", logo: HumanThatWrites },
  { name: "Sa Associate", logo: Saassociate },
  { name: "Umar Real Estate", logo: UmarRealEstate },
];

export const reviews = [
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
];

export const blogPosts = [
  {
    id: 1,
    title:
      "What is a Rental Agreement? A Simple Guide for Tenants and Landlords in Karachi",
    image: rentalAgreementBlogImage,
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
    image: rentalAgreementBlogImage,
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
    image: rentalAgreementBlogImage,
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
    image: affidavitBlogImage,
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
];