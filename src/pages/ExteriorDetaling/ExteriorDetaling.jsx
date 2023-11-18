import React from "react";
import BlurData from "../../components/BlurData";
import Package from "../../components/Package";
import Banner from "../../components/Banner";
import InformationCardBanner from "../../components/InformationCardBanner";
import PackageBennefit from "../../components/PackageBennefit";
import Footer from "../../components/Footer";
import carService from "../../assets/img/PaintProtectionFilmPackages/carService.svg";
import carWash from "../../assets/img/PaintProtectionFilmPackages/carWash.svg";
import carIcon from "../../assets/img/PaintProtectionFilmPackages/carIcon.svg";
import saveMoney from "../../assets/img/PaintProtectionFilmPackages/saveMoney.svg";
import ferariF40 from "../../assets/img/icons/LamborghiniO.svg";

const ExteriorDetaling = () => {
  const selectButtonsInformation = [
    {
      id: 1,
      primaryText: "Exterior Single-Step Polish",
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
      primaryText: "Exterior Coating Maintenance",
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
      primaryText: "EExterior Enhancement Correction",
      styleButton: "accentBackground",
      size: "smallSize",
      description: "Your detailed description for Another Package",
      hover: "hoverBorderGreen",
      hoverText: "hoverText",
      textColor: "mainColor",
      isDisabled: false,
    },
    {
      id: 4,
      primaryText: "Restoration Detail",
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
      turnaround: "3-8 HOURS",
      content: [
        {
          id: 1,
          secondaryText:
            "This service caters to vehicles in good condition requiring a deep cleaning. Our detailing team conducts a one-step polish to enhance shine and shields cleaned surfaces with a polymer sealant.Optional Upgrade: Elevate your detail with Gtechniq EXO - a one-year, glossy, and highly hydrophobic ceramic coating.",
        },
      ],
      primaryTextList: "Key Features:",
      primaryTextListStyle: "accentColor",
      secondaryTextStyle: "mainColorSecondaryText",
      secondaryTextListStyle: "mainSecondaryTextList",
      secondaryTextList: [
        {
          id: 1,
          content: "Dual-Bucket Hand Wash for Thorough Cleaning",
        },
        {
          id: 2,
          content: "Intensive Cleaning for Wheels and Trim",
        },
        {
          id: 3,
          content: "Paint Decontamination: Removing Bugs, Tar, and Sap",
        },
        {
          id: 4,
          content: "Single Polishing Step for a Brilliant Shine",
        },
        {
          id: 5,
          content:
            "Includes Interior Mini Detail. Upgrade to a Full Interior Detail and Save $100 on Both Services.",
        },
      ],
      packagePriceCard: [
        {
          id: 1,
          color: "mainColor",
          primaryText: "Cars",
          price: "$350",
          backgroundCard: "backgroundDark",
        },
        {
          id: 2,
          color: "darkColor",
          primaryText: "Midsize",
          price: "$450",
          backgroundCard: "backgroundAccent",
        },
        {
          id: 3,
          color: "mainColor",
          primaryText: "Over-Size",
          price: "$600",
          backgroundCard: "backgroundDark",
        },
      ],
    },
    {
      id: 2,
      turnaround: "5-6 HOURS",
      content: [
        {
          id: 1,
          secondaryText:
            "Our recommended annual service for previously ceramic coated vehicles.Once the car is cleaned and decontaminated, we add a coat of Gtechniq EXO to the paint to refresh the hydrophobic efficacy and help maintain a super high gloss. We also coat your windshield to ensure clear vision in bad weather.",
        },
      ],
      primaryTextList: "Key Features:",
      primaryTextListStyle: "accentColor",
      secondaryTextStyle: "mainColorSecondaryText",
      secondaryTextListStyle: "mainSecondaryTextList",
      secondaryTextList: [
        {
          id: 1,
          content: "Thorough Two-Bucket Hand Wash for Superior Cleaning",
        },
        {
          id: 2,
          content:
            "Intensive Cleaning for Wheels and Trim for a Spotless Finish",
        },
        {
          id: 3,
          content:
            "Decontaminate Paint: Removing Bugs, Tar, and Sap for a Clean Surface",
        },
        {
          id: 4,
          content:
            "Polish as Needed and Apply a Fresh Layer of Gtechniq EXO Protectant to the Paint, Along with G1 Windshield Protectant for Enhanced Protection.",
        },
        {
          id: 5,
          content:
            "Includes Interior Mini Detail. Upgrade to a Full Interior Detail and Enjoy $100 Savings on Both Services.",
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
        {
          id: 2,
          color: "darkColor",
          primaryText: "Midsize",
          price: "$1,446",
          backgroundCard: "backgroundAccent",
        },
        {
          id: 3,
          color: "mainColor",
          primaryText: "Over-Size",
          price: "$1,728",
          backgroundCard: "backgroundDark",
        },
      ],
    },
    {
      id: 3,
      turnaround: "1-2 DAYS",
      content: [
        {
          id: 1,
          secondaryText:
            "Our Exterior Enhancement Correction will restore your paint to make it more aesthetically appealing.  We perform a two-step compound and then polish to remove paint defects and bring back that deep luster.  One it's looking great we lock-in the shine with a coat of Gtechniq EXO - a one-year, shiny and highly-hydrophobic ceramic coating.   Optional: Upgrade to Gtechniq Crystal Serum Light for up to 5 years of durability plus protection on the entire exterior of your vehicle including paint, glass, trim and wheel faces.",
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
            "Comprehensive Coverage, Building on Our Single Step Polish Package",
        },
        {
          id: 2,
          content:
            "Introducing a Second Step of Paint Correction, Achieving a Swirl-Free Finish (Eliminating Approximately 85% of Visible Defects).",
        },
        {
          id: 3,
          content:
            "Choose between Gtechniq EXO Paint Protectant or Upgrade to Gtechniq Crystal Serum Light Ceramic Coating for Complete Exterior Protection on Your Vehicle.",
        },
        {
          id: 4,
          content:
            "Includes Interior Mini Detail. Upgrade to a Full Interior Detail and Enjoy $100 Savings on Both Services.",
        },
      ],
      packagePriceCard: [
        {
          id: 1,
          color: "mainColor",
          primaryText: "Cars",
          price: "$995",
          backgroundCard: "backgroundDark",
        },
        {
          id: 2,
          color: "darkColor",
          primaryText: "Midsize",
          price: "$1195",
          backgroundCard: "backgroundAccent",
        },
        {
          id: 3,
          color: "mainColor",
          primaryText: "Over-Size",
          price: "$1495",
          backgroundCard: "backgroundDark",
        },
      ],
    },
    {
      id: 4,
      turnaround: "5+ DAYS",
      content: [
        {
          id: 1,
          secondaryText:
            "Experience the ultimate package for your special vehicles. Our dedicated team at Driven Customs meticulously cleans, restores, and protects every surface as if it were our own car.Our detailing experts work diligently, panel-by-panel, to eliminate potential scratches from your vehicle’s paint, including door jambs and under the hood. We perform a deep interior clean and meticulously clean the undercarriage, ensuring no detail is overlooked. Though time-consuming and labor-intensive, this process guarantees that your vehicle will be as flawless as possible. Upon completion, every surface is safeguarded with top-quality coatings for lasting protection.Please note that an in-person vehicle inspection is required to provide an accurate quote. Call us today to schedule a consultation.",
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
            "A Tailored, Professional Detailing Project Crafted Just for You",
        },
        {
          id: 2,
          content:
            "A special towel to remove drops of ENVY from other car enthusiasts!",
        },
      ],
      packagePriceCard: [
        {
          id: 1,
          color: "darkColor",
          primaryText: "Starts at",
          price: "$10,000",
          backgroundCard: "backgroundAccent",
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

  const titlePackage =
    "Driven Customs - Exterior Vehicle Detailing Packages in Chicago, IL";

  return (
    <div>
      <BlurData
        primaryText="Top-Tier Exterior Vehicle Detailing Packages in Chicago, IL by Driven Customs"
        secondaryText="Revitalizing Automotive Exteriors: Thorough Cleaning and Restoration"
        img={ferariF40}
      />
      <Package
        title={titlePackage}
        contentInformation={contentInformation}
        selectButtonsInformation={selectButtonsInformation}
        imgBg={ferariF40}
      />
      <div className="wrapper-banner">
        <Banner
          content="Even if you've diligently cared for your vehicle, you might notice its exterior losing its luster. At Driven Customs, we offer solutions through our comprehensive exterior vehicle detailing and enhancement packages! Whether it's a basic exterior maintenance or a full-scale paint correction, your vehicle's journey to exterior perfection begins here.Another crucial reason to opt for our complete exterior vehicle detailing service is to preserve your investments in paint protection films, ceramic coatings, or vibrant color-change vinyl vehicle wraps.Regardless of the need, we're always ready to bring out the ultimate shine and brilliance of your vehicle at Driven Customs! Contact us for more details and to schedule your exterior detailing package today. Explore our additional services to enhance your vehicle even further."
          accentText="Revitalizing "
          textBorderLine=" Lackluster Vehicle Exteriors with Our Expert Exterior Detailing Services - Driven Customs"
        />
      </div>
      <PackageBennefit
        title="Driven Customs Collaborates With You on Perfecting Your Vehicle"
        content="At Driven Customs, every decision regarding your vehicle's exterior is made collaboratively and with your explicit permission. We engage with you throughout the entire process, detailing, decontaminating, and correcting the paintwork. We keep you informed every step of the way, sharing insights into our findings and suggesting more intricate detailing services if necessary.To maintain our unparalleled customer service and the exceptional quality our exterior vehicle detailing team delivers, we continuously train in innovative detailing techniques and upgrade our equipment. If you're seeking a reliable automotive detailing shop, your search ends here - Driven Customs is prepared for your vehicle!Explore our combination vehicle detailing packages for a comprehensive interior and exterior clean. Click here to learn more about these specialized detailing services."
      />
      {/**
        @todo: ASK DIMA IF WEE NEED THIS COMPONENT
      **/}
      <InformationCardBanner informationCard={informationCard} />
      <Footer />
    </div>
  );
};

export default ExteriorDetaling;
