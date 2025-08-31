import productImg from "@/assets/images/productImg.jpg";

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
