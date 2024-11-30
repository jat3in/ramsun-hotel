import logo from "../../assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  const hotelInfo = {
    name: "Ramson Stay Inn",
    description: [
      "Hotel Ramson's Stay Inn, rated 4.3/5, is a popular 3-star choice in Shillong, Meghalaya, known for smooth check-ins, friendly management, and couple-friendly policies.",
      "Highly recommended among tourists, it stands out for its great customer satisfaction and flexible policies.",
    ],
  };

  const contactInfo = {
    phone: "+91 69094 22848",
    email: "Ramsonstayinn@gmail.com",
    address:
      "Ramson Stay Inn, Neigrihms-Mawpat Junction, Lumkhyriem, Itshyrwat, Shillong, Meghalaya 793019",
    mapLink: "https://maps.app.goo.gl/uVvgMMub9K8HPFvd8",
  };

  const CompanyLogo = () => (
    <div className="sm:col-span-2">
      <a
        href="/"
        aria-label="Go home"
        title="Company"
        className="inline-flex items-center"
      >
        <img src={logo} alt="" className="size-8" />
        <span className="ml-2 text-xl font-bold tracking-wide text-primary uppercase">
          {hotelInfo.name}
        </span>
      </a>
      <div className="md:mt-6 mt-2 lg:max-w-sm">
        {hotelInfo.description.map((text, index) => (
          <p
            key={index}
            className={`${index > 0 ? "mt-4" : ""} text-sm text-gray-800`}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );

  const ContactSection = () => (
    <div className="space-y-2 text-sm max-w-sm">
      <p className="text-base font-bold tracking-wide text-gray-900">
        Contacts
      </p>
      <div className="flex">
        <p className="mr-1 text-gray-800">Phone:</p>
        <a
          href={`tel:${contactInfo.phone}`}
          aria-label="Call us"
          title="Call us"
          className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          {contactInfo.phone}
        </a>
      </div>
      <div className="flex">
        <p className="mr-1 text-gray-800">Email:</p>
        <a
          href={`mailto:${contactInfo.email}`}
          aria-label="Our email"
          title="Our email"
          className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          {contactInfo.email}
        </a>
      </div>
      <div className="flex">
        <p className="mr-1 text-gray-800">Address:</p>
        <a
          href={contactInfo.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Our address"
          title="Our address"
          className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          {contactInfo.address}
        </a>
      </div>
    </div>
  );

  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="flex  w-full justify-between md:flex-row flex-col gap-4">
        <CompanyLogo />
        <ContactSection />
      </div>

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright {year} {hotelInfo.name}. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li></li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
