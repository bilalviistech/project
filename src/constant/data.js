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
          },
          {
            title: "Commercial Rental Agreement",
            price: 549,
            details:
              "A legal contract defining the terms & conditions for leasing commercial property between landlord and tenant.",
            url: productImg,
          },
          {
            title: "Guest House Rental Agreement",
            price: 549,
            details:
              "A legal contract defining the terms & conditions of  temporary occupancy between the guest house owner and occupant.",
            url: productImg,
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
          },
          {
            title: "Sale Full & Final Agreement",
            price: 549,
            details:
              "A final contract confirming the complete settlement and unconditional transfer of property ownership from seller to buyer.",
            url: productImg,
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
          },
          {
            title: "Car Leasing Agreement",
            price: 549,
            details:
              "A legal contract defining the terms and conditions for full and final transfer of vehicle ownership from seller to buyer.",
            url: productImg,
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
          },
          {
            title: "Change of Signature",
            price: 399,
            detail:
              "A sworn legal declaration that confirms the change or update of an individual's signature.",
            url: productImg,
          },
          {
            title: "Proof of Income Affidavit",
            price: 399,
            detail:
              "A sworn legal declaration that verifies an individual's source and level of income.",
            url: productImg,
          },
          {
            title: "Proof of Date of Birth Affidavit",
            price: 399,
            detail:
              "A sworn legal declaration that confirms the accurate date of birth of the declarant.",
            url: productImg,
          },
          {
            title: "Loss of Document Affidavit",
            price: 399,
            detail:
              "A sworn legal declaration that reports the loss or misplacement of an official document.",
            url: productImg,
          },
          {
            title: "Affidavit for Duplicate Document",
            price: 399,
            detail:
              "A sworn legal declaration that requests the issuance of a duplicate for a lost or damaged document.",
            url: productImg,
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
          },
          {
            title: "Change of Name after Marriage",
            price: 399,
            detail:
              "A sworn legal declaration that affirms a woman's name change following marriage.",
            url: productImg,
          },
          {
            title: "One & the Same Person",
            price: 399,
            detail:
              "A sworn legal declaration that confirms multiple names or identities refer to one individual.",
            url: productImg,
          },
          {
            title: "Name Correction Affidavit",
            price: 399,
            detail:
              "A sworn legal declaration that requests correction of a misspelled or misprinted name in records.",
            url: productImg,
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
          },
          {
            title: "Education Loan Affidavit",
            price: 399,
            detail:
              "A sworn legal declaration that supports an individual's application for an education loan.",
            url: productImg,
          },
          {
            title: "Loss of Certificates Affidavit",
            price: 399,
            detail: "A sworn legal declaration that reports the loss of academic certificates or mark sheets.",
            url: productImg,
          },
          {
            title: "Non political affiliation Affidavit",
            price: 399,
            detail: "A sworn legal declaration that confirms the individual has no political association.",
            url: productImg,
          },
        ],
      },
    ],
  },
];
