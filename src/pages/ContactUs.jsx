import React from "react";
import ProductTitle from "../components/ui/ProductTitle";
import contactImage from "../assets/images/contact.jpg";
import SubscribeForm from "../components/ui/SubscribeForm";

const ContactUs = () => {
  return (
    <div className="p-10">
      <ProductTitle
        word1={"Contact"}
        word2={"Us"}
        className={"justify-center mb-6"}
      />
      <div className="grid grid-cols-2 place-items-center mb-20">
        <img src={contactImage} alt="Contact Us" />
        <div className="flex flex-col gap-y-5">
          <h4 className="font-semibold text-[26px] text-contact-h">
            Our Store
          </h4>
          <div className="font-normal text-about text-lg">
            <p>54709 Willms Station </p>
            <p>Suite 350, Washington, USA</p>
          </div>
          <div className="font-normal text-about text-lg">
            <p>Tel: (415) 555‑0132</p>
            <p>Email: greatstackdev@gmail.com</p>
          </div>
          <h4 className="font-semibold text-[26px] text-contact-h">
            Careers at Forever
          </h4>
          <p className="font-normal text-about text-lg">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-border-input px-5 py-7 w-[50%]">
            Explore Jobs
          </button>
        </div>
      </div>
      <SubscribeForm />
    </div>
  );
};

export default ContactUs;
