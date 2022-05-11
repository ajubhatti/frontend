import React from "react";
import AddressIcon from "../../Assets/address.svg";
import EmailIcon from "../../Assets/email.svg";
import PhoneIcon from "../../Assets/phone.svg";
import FaxIcon from "../../Assets/fax.svg";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  const cards = [
    {
      title: "Address",
      subTitle: "153 Williamson Plaza, 09514",
      icon: AddressIcon,
    },
    {
      title: "Email",
      subTitle: "support@htmlstream.com",
      icon: EmailIcon,
    },
    {
      title: "Phone Number",
      subTitle: "+1 (062) 109-9222",
      icon: PhoneIcon,
    },
    {
      title: "Fax",
      subTitle: "+1 (062) 109-9223",
      icon: FaxIcon,
    },
  ];
  return (
    <section className="contact">
      <div className="container position-relative space-2 space-top-md-5 space-bottom-md-3 z-index-2">
        <div className="w-lg-80 text-center mx-auto">
          <h1 className="display-3 font-size-md-down-5 font-weight-semi-bold">
            Got a question?
          </h1>
          <p className="lead">We'd love to talk about how we can help you.</p>
        </div>
      </div>
      <div className="clearfix space-2">
        <div className="row no-gutters">
          {cards.length > 0 &&
            cards.map((item) => {
              return <ContactCard key={item.title} {...item} />;
            })}
        </div>
      </div>
      <hr className="my-0" />
      <ContactForm />
    </section>
  );
};

export default ContactUs;
