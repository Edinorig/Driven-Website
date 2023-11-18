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
import mustang from "../../assets/img/icons/Chalanger.svg";

const InteriorDetaling = () => {
  const contentInformation = [
    {
      id: 1,
      content: [
        {
          id: 1,
          secondaryText:
            "NOTE: The starting price of this package reflects detailing for an average condition automobile. Prices are subject to change based on the overall condition of the vehicle. Price increase factors include, but are not limited to, excess soiling, stains, or pet hair.Combine this with any Exterior Detail and save $100",
        },
      ],
      primaryTextList: "Key Features:",
      primaryTextListStyle: "accentColor",
      secondaryTextStyle: "mainColorSecondaryText",
      secondaryTextListStyle: "mainSecondaryTextList",
      secondaryTextList: [
        {
          id: 1,
          content:
            "Thoroughly Vacuum Floors and Trunk Area for a Clean Interior Finish",
        },
        {
          id: 2,
          content:
            "Carefully Wipe Down Vinyl or Plastic Floor Mats for a Spotless Interior Appearance",
        },
        {
          id: 3,
          content:
            "Precisely Vacuum Cloth Seats for a Fresh and Clean Interior Feel",
        },
        {
          id: 4,
          content:
            "Gently Wipe Down Leather Seats for a Supple and Clean Interior Surface",
        },
        {
          id: 5,
          content:
            "Thoroughly Clean Console, Cup Holders, Crevices, and Vents for a Pristine Interior Finish",
        },
        {
          id: 6,
          content:
            "Clean Dash and Apply UV Protection for a Shiny and Protected Interior Surface",
        },
        {
          id: 7,
          content:
            "Carefully Clean All Interior Trim and Plastics for a Fresh and Tidy Interior Ambiance",
        },
        {
          id: 8,
          content:
            "Clean and Condition Door Panels and Pockets for a Refreshed Interior Look and Feel",
        },
        {
          id: 9,
          content:
            "Thoroughly Clean Door Jambs for a Complete Interior Detailing Experience",
        },
        {
          id: 10,
          content:
            "Meticulously Clean Glass Inside and Out for Crystal Clear Visibility",
        },
        {
          id: 11,
          content:
            "Delicately Clean Vehicle Headliner for a Fresh and Spotless Interior Appearance",
        },
        {
          id: 12,
          content: "Shampoo Cloth Floor Mats for a Deep and Fresh Clean Look",
        },
        {
          id: 13,
          content:
            "Thoroughly Shampoo Carpeting in Cabin and Trunk for a Deep and Revitalized Interior Feel",
        },
        {
          id: 14,
          content:
            "Effectively Shampoo Cloth Seats for a Fresh and Revitalized Interior Appearance",
        },
        {
          id: 15,
          content:
            "Perform a Deep Clean and Condition Leather Seats for a Supple and Luxurious Interior Feel",
        },
        {
          id: 16,
          content:
            "Apply Protective Treatment to Leather and Vinyl Surfaces for Long-lasting Durability and Shine",
        },
        {
          id: 17,
          content:
            "Trunk and Spare Tire Areas are Thoroughly Cleaned for a Complete Interior Detailing Experience",
        },
        {
          id: 18,
          content:
            "Thorough Two-Bucket Hand Wash for a Detailed Exterior Cleaning",
        },
      ],
      packagePriceCard: [
        {
          id: 1,
          color: "mainColor",
          primaryText: "Cars",
          price: "From $250",
          backgroundCard: "backgroundDark",
        },
        {
          id: 2,
          color: "darkColor",
          primaryText: "Midsize",
          price: "From $350",
          backgroundCard: "backgroundAccent",
        },
        {
          id: 3,
          color: "mainColor",
          primaryText: "Over-Size",
          price: "From $450",
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
        "Of all the reasons that vehicle owners bring their cars, trucks, and otherwise to our paint protection film installation team here at Chicago Auto Pros, the most common one is peace of mind. With a clear bra, you can drive freely without flinching every single time you hear a rock ricochet against your door or worrying that your finish will be scratched when parking in a busy lot.",
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
  return (
    <div>
      <BlurData
        primaryText="Comprehensive Interior Vehicle Detailing Services in Chicago, IL by Driven Customs"
        secondaryText="Safeguard the Intricacies of Your Vehicle’s Interior with Driven Customs"
        img={mustang}
      />
      <Package
        title={titlePackage}
        contentInformation={contentInformation}
        imgBg={mustang}
      />
      <div className="wrapper-banner">
        {/**
        @todo: ASK DIMA IF WEE NEED THIS COMPONENT
      **/}
        <Banner
          content="Why settle for vehicle perfection halfway? Driven Customs offers package detailing services that eliminate the need to choose between interior and exterior care. Enjoy affordable rates and the same comprehensive quality found in our individual interior and exterior detailing packages, ensuring your vehicle receives a top-to-bottom clean.

        Our two combination detailing packages were designed with the diverse range of vehicles we encounter in mind. This means fair pricing that considers your specific vehicle size, while still delivering equally high-quality interior and exterior detailing services.
        
        Let Driven Customs team of automotive enthusiasts assist you in selecting the ideal combination detailing package that perfectly suits your needs. Complete our FREE quick quote form for an accurate price estimate, with a reminder that we'll assess your vehicle's condition upon arrival for your detailing appointment."
          accentText="The Best "
          textBorderLine="vehicle Detailing Comes In Pairs"
        />
      </div>
      <PackageBennefit
        title="Save Your Time with Expert Interior Detailing Services by Driven Customs"
        content="Interior detailing can be a time-consuming task for most people. Often, vehicle owners may rush through the process, leaving certain areas inadequately cleaned. This oversight can lead to the accumulation of dust and grime, potentially causing lasting damage to the interior.At Driven Customs, our interior vehicle detailing service is designed to save you time. Instead of spending hours trying to rejuvenate your car's interior with ineffective store-bought products, trust our professionals to handle it for you.If your vehicle requires more than just interior detailing, we offer specialized package detailing services that ensure your car shines both inside and out. Contact one of our interior vehicle detailing experts today for more information about our comprehensive services."
      />
      {/**
        @todo: ASK DIMA IF WEE NEED THIS COMPONENT
      **/}
      <InformationCardBanner informationCard={informationCard} />
      <Footer />
    </div>
  );
};

export default InteriorDetaling;
