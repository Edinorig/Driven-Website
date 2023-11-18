import React from "react";
import BlurData from "../../components/BlurData";
import Package from "../../components/Package";
import Banner from "../../components/Banner";
import PackageBennefit from "../../components/PackageBennefit";
import Footer from "../../components/Footer";
import carService from "../../assets/img/PaintProtectionFilmPackages/carService.svg";
import carWash from "../../assets/img/PaintProtectionFilmPackages/carWash.svg";
import carIcon from "../../assets/img/PaintProtectionFilmPackages/carIcon.svg";
import saveMoney from "../../assets/img/PaintProtectionFilmPackages/saveMoney.svg";
import InformationCardBanner from "../../components/InformationCardBanner";
import maclaren from "../../assets/img/icons/MClaren.svg";

const VynilWrap = () => {
  const selectButtonsInformation = [
    {
      id: 1,
      primaryText: "Full Enhancement Detail",
      styleButton: "accentBorder",
      size: "smallSize",
      description: "Your detailed description for Full Enhancement Detail",
      hover: "hoverBorderGreen",
      hoverText: "hoverText",
      textColor: "accentColor",
      isDisabled: true,
    },
    {
      id: 2,
      primaryText: "Another Package",
      styleButton: "accentBackground",
      size: "smallSize",
      description: "Your detailed description for Another Package",
      hover: "hoverBorderGreen",
      hoverText: "hoverText",
      textColor: "mainColor",
      isDisabled: false,
    },
    {
      id: 3,
      primaryText: "Another Package",
      styleButton: "accentBackground",
      size: "smallSize",
      description: "Your detailed description for Another Package",
      hover: "hoverBorderGreen",
      hoverText: "hoverText",
      textColor: "mainColor",
      isDisabled: false,
    },
  ];
  const contentInformation = [
    {
      id: 1,
      turnaround: "1 DAY",
      content: [
        {
          id: 1,
          secondaryText:
            "Eliminating chrome from trim, grills, and other areas provides your vehicle with a sleek, sinister appearance. At Driven Customs, we wrap most vehicle's chrome surfaces in satin or gloss black. Our chrome delete package is an excellent way for your vehicle to stand out, adding significant aesthetic value.",
        },
      ],
      packagePriceCard: [
        {
          id: 1,
          color: "mainColor",
          primaryText: "Cars",
          price: "$1,164",
          backgroundCard: "backgroundDark",
        },
      ],
    },
    {
      id: 2,
      turnaround: "4+ HOURS",
      content: [
        {
          id: 1,
          secondaryText:
            "Here at Driven Customs, we unleash creativity with vinyl! Our installation team has handled diverse vehicle accent projects, from black roofs and racing stripes to carbon fiber details and custom lettering. No vehicle accent challenge is too tough for us!",
        },
      ],
      packagePriceCard: [
        {
          id: 1,
          color: "mainColor",
          primaryText: "Cars",
          price: "$300",
          backgroundCard: "backgroundDark",
        },
      ],
    },
    {
      id: 3,
      turnaround: "5+ DAYS",
      content: [
        {
          id: 1,
          secondaryText:
            "Transform your vehicle without repainting using our Full Car Color Change package at Driven Customs! Our skilled vinyl wrap installation team can cover your vehicle in a wide range of colors from our extensive selection, allowing you to choose your desired look upon arrival.",
        },
      ],
      packagePriceCard: [
        {
          id: 1,
          color: "mainColor",
          primaryText: "Starting at",
          price: "$3,500",
          backgroundCard: "backgroundDark",
        },
      ],
    },
  ];

  const informationCard = [
    {
      id: 1,
      imgSrc: carService,
      primaryText: "Self-Healing Vehicle Exterior Surface Security",
      secondaryText:
        "Of all the reasons that vehicle owners bring their cars, trucks, and otherwise to our paint protection film installation team here at Driven Customs, the most common one is peace of mind. With a clear bra, you can drive freely without flinching every single time you hear a rock ricochet against your door or worrying that your finish will be scratched when parking in a busy lot.",
    },
    {
      id: 2,
      imgSrc: carWash,
      primaryText: "Hydrophobic Protection Against Stains and Grime",
      secondaryText:
        "This is a very similar characteristic between paint protection films and our ceramic coating packages. While the primary reason most purchase a paint protection film is due to its self-healing abrasion resistance, it too has a hydrophobic, glossy surface that enhances paintwork while preventing stains, fading from the sun, and other surface degradation from the environment.",
    },
    {
      id: 3,
      imgSrc: carIcon,
      primaryText: "Worry-Free Vehicle Ownership",
      secondaryText:
        "As we mentioned, most vehicle owners either want their exterior to look flawless for the sake of their pride, or they want a perfect vehicle to know that it will continue to operate properly for many years. Nearly all of the most common concerns that every vehicle owner has will be wiped clean thanks to a paint protection film.",
    },
    {
      id: 4,
      imgSrc: saveMoney,
      primaryText: "All-Around Low-Maintenance Protection Effort",
      secondaryText:
        "Your vehicle’s surfaces that can be covered by a clear bra are sure to boast some of the most low-maintenance characteristics imaginable. This is not only by way of less frequent exterior cleaning, but also via its resistance to abrasions that would ultimately need to be buffed and polished from your finish.",
    },
  ];

  const titlePackage = "Driven Customs - Vinyl Color Vehicle Wrap Packages";

  const titleInformationBanner = "Why Choose a Clear Bra for Your Vehicle?";
  return (
    <div>
      <BlurData
        primaryText="Stunning Vinyl Color Change Wraps in Chicago, IL"
        secondaryText="Transform your vehicle's appearance with color and style swaps."
        img={maclaren}
      />
      <Package
        title={titlePackage}
        selectButtonsInformation={selectButtonsInformation}
        contentInformation={contentInformation}
        imgBg={maclaren}
      />
      <div className="wrapper-banner">
        <Banner
          content="Why settle for vehicle perfection halfway? Driven Customs offers package detailing services that eliminate the need to choose between interior and exterior care. Enjoy affordable rates and the same comprehensive quality found in our individual interior and exterior detailing packages, ensuring your vehicle receives a top-to-bottom clean.
    
            Our two combination detailing packages were designed with the diverse range of vehicles we encounter in mind. This means fair pricing that considers your specific vehicle size, while still delivering equally high-quality interior and exterior detailing services.
            
            Let Driven Customs' team of automotive enthusiasts assist you in selecting the ideal combination detailing package that perfectly suits your needs. Complete our FREE quick quote form for an accurate price estimate, with a reminder that we'll assess your vehicle's condition upon arrival for your detailing appointment."
          accentText="Discover "
          textBorderLine=" Various Styles at Driven Customs - Matte, Gloss, and More!"
        />
      </div>
      <PackageBennefit
        title="Vinyl Wraps for Commercial Vehicles: Boost Your Business’s Image!"
        content="Our team at Driven Customs is well-equipped to handle any project, regardless of its size or complexity! Businesses in and around the Chicago, Illinois area frequently turn to Driven Customs to have business imagery, graphics, and lettering applied to fleet vehicles such as cargo vans and flatbed trucks.The cost for customized vinyl vehicle wraps may vary, but we can guarantee each customer that our shop can offer competitive prices while maintaining exceptional quality, surpassing other graphic installers in the Chicago area. Reach out to our vehicle wrap installation team today to receive a quote, discuss your graphics requirements, and ensure your business gets noticed wherever you go."
      />

      {/**
        @todo: ASK DIMA IF WEE NEED THIS COMPONENT
      **/}
      <InformationCardBanner
        informationCard={informationCard}
        title={titleInformationBanner}
      />
      <Footer />
    </div>
  );
};

export default VynilWrap;
