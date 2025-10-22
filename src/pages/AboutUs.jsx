import React from "react";
import ProductTitle from "../components/ui/ProductTitle";
import aboutImg from "../assets/images/about.jpg";
import SubscribeForm from "../components/ui/SubscribeForm";

const AboutUs = () => {
  return (
    <div className="p-10">
      <ProductTitle word1={"About"} word2={"Us"} />
      <div className="grid  grid-cols-2 gap-x-12 place-items-center mb-7">
        <img className="" src={aboutImg} alt="About Us" />
        <div>
          <AbousDescription>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </AbousDescription>
          <AbousDescription>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </AbousDescription>
          <p className="font-bold text-lg text-about leading-1 my-8">
            Our Mission
          </p>
          <AbousDescription>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </AbousDescription>
        </div>
      </div>
      <ProductTitle word1={"Why"} word2={"Choose Us"} />
      <div className="grid grid-cols-3 place-items-center">
        <AboutCard title={"Quality Assurance:"}>
          We meticulously select and vet each product to ensure it meets our
          stringent quality standards.
        </AboutCard>
        <AboutCard title={"Convenience: "}>
          With our user-friendly interface and hassle-free ordering process,
          shopping has never been easier.
        </AboutCard>
        <AboutCard title={"Exceptional Customer Service:"}>
          Our team of dedicated professionals is here to assist you the way,
          ensuring your satisfaction is our top priority.
        </AboutCard>
      </div>
      <SubscribeForm className={"my-20"} />
    </div>
  );
};

const AbousDescription = ({ children }) => {
  return (
    <>
      <p className="font-normal text-lg text-about ">{children}</p> 
    </>
  );
};

const AboutCard = ({ children, title }) => {
  return (
    <div className="flex flex-col gap-y-6 border border-border-input p-8 h-full">
      <h4 className="font-semibold text-lg text-card-heading-about">{title}</h4>
      <p className="font-normal text-lg text-about">{children}</p>
    </div>
  );
};

export default AboutUs;
