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
    name: "Customize Draft",
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
            longDetail: `<div class="max-w-4xl mx-auto px-4 py-8 bg-white text-gray-800">
  <h1 class="text-3xl md:text-4xl font-bold text-[#003092] mb-6">
    Secure your rental terms with a professionally drafted Commercial Rental Agreement from MavDocs.
  </h1>

  <p class="mb-6 text-base leading-relaxed">
    Whether you are a business owner or leasing your commercial space, in your document, we cover all aspects, including rent amount, lease duration, security terms, maintenance responsibilities, and commercial usage clauses, ensuring legal validity and a hassle-free process.
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
            longDetail: `<div class="max-w-4xl mx-auto px-4 py-8 bg-white text-gray-800">
  <h1 class="text-3xl md:text-4xl font-bold text-[#003092] mb-6">
    Secure your rental terms with a professionally drafted Guest House Rental Agreement from MavDocs.
  </h1>

  <p class="mb-6 text-base leading-relaxed">
    Whether you are managing a guest house or renting it temporarily, in your document, we cover all aspects, including stay duration, rent, guest responsibilities, and service terms, ensuring legal validity and a hassle-free process.
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
            longDetail: `<div class="max-w-4xl mx-auto px-4 py-8 bg-white text-gray-800">
  <h1 class="text-3xl md:text-4xl font-bold text-[#003092] mb-6">
    Secure your transaction with a professionally drafted Sale Part Payment Agreement from MavDocs.
  </h1>

  <p class="mb-6 text-base leading-relaxed">
    Whether you are buying or selling under an installment or token arrangement, in your document, we cover all aspects, including initial payment terms, remaining balance, timelines, and responsibilities, ensuring legal validity and a hassle-free process.
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
            longDetail: `<div class="max-w-4xl mx-auto px-4 py-8 bg-white text-gray-800">
  <h1 class="text-3xl md:text-4xl font-bold text-[#003092] mb-6">
    Secure your transaction with a professionally drafted Sale Full & Final Agreement from MavDocs.
  </h1>

  <p class="mb-6 text-base leading-relaxed">
    Whether you're completing a final sale of property, vehicle, or any asset, in your document, we cover all aspects, including full payment confirmation, possession terms, and seller/buyer responsibilities, ensuring legal validity and a hassle-free process.
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
            longDetail: `<div class="max-w-4xl mx-auto px-4 py-8 bg-white text-gray-800">
  <h1 class="text-3xl md:text-4xl font-bold text-[#003092] mb-6">
    Secure your rental terms with a professionally drafted Car Rental Agreement from MavDocs.
  </h1>

  <p class="mb-6 text-base leading-relaxed">
    Whether you're renting a car or offering your vehicle for rent, in your document, we cover all aspects, including rental duration, fuel policy, liability clauses, and damage responsibilities, ensuring legal validity and a hassle-free process.
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
            title: "Car Leasing Agreement",
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
            longDetail: "",
          },
          {
            title: "Change of Signature",
            price: 399,
            detail:
              "A sworn legal declaration that confirms the change or update of an individual's signature.",
            url: productImg,
            longDetail: "",
          },
          {
            title: "Proof of Income Affidavit",
            price: 399,
            detail:
              "A sworn legal declaration that verifies an individual's source and level of income.",
            url: productImg,
            longDetail: "",
          },
          {
            title: "Proof of Date of Birth Affidavit",
            price: 399,
            detail:
              "A sworn legal declaration that confirms the accurate date of birth of the declarant.",
            url: productImg,
            longDetail: "",
          },
          {
            title: "Loss of Document Affidavit",
            price: 399,
            detail:
              "A sworn legal declaration that reports the loss or misplacement of an official document.",
            url: productImg,
            longDetail: "",
          },
          {
            title: "Affidavit for Duplicate Document",
            price: 399,
            detail:
              "A sworn legal declaration that requests the issuance of a duplicate for a lost or damaged document.",
            url: productImg,
            longDetail: "",
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
            longDetail: "",
          },
          {
            title: "Change of Name after Marriage",
            price: 399,
            detail:
              "A sworn legal declaration that affirms a woman's name change following marriage.",
            url: productImg,
            longDetail: "",
          },
          {
            title: "One & the Same Person",
            price: 399,
            detail:
              "A sworn legal declaration that confirms multiple names or identities refer to one individual.",
            url: productImg,
            longDetail: "",
          },
          {
            title: "Name Correction Affidavit",
            price: 399,
            detail:
              "A sworn legal declaration that requests correction of a misspelled or misprinted name in records.",
            url: productImg,
            longDetail: "",
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
            longDetail: "",
          },
          {
            title: "Education Loan Affidavit",
            price: 399,
            detail:
              "A sworn legal declaration that supports an individual's application for an education loan.",
            url: productImg,
            longDetail: "",
          },
          {
            title: "Loss of Certificates Affidavit",
            price: 399,
            detail:
              "A sworn legal declaration that reports the loss of academic certificates or mark sheets.",
            url: productImg,
            longDetail: "",
          },
          {
            title: "Non political affiliation Affidavit",
            price: 399,
            detail:
              "A sworn legal declaration that confirms the individual has no political association.",
            url: productImg,
            longDetail: "",
          },
        ],
      },
    ],
  },
];
