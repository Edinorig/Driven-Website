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

const PackageDetaling = () => {
  const selectButtonsInformation = [
    {
      id: 1,
      primaryText: "Full Enhancement Detail",
      styleButton: "accentBackground",
      size: "largeSize",
      description: "Your detailed description for Full Enhancement Detail",
      hover: "hoverBorderGreen",
      hoverText: "hoverText",
      textColor: "accentColor",
      isDisabled: true,
    },
    {
      id: 2,
      primaryText: "Full Maintenance Detail",
      styleButton: "accentBorder",
      size: "largeSize",
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
          primaryText: "EXTERIOR:",
          secondaryText:
            "Our Full Enhancement detailing package begins with a meticulous hand wash and thorough decontamination of your vehicle. Subsequently, we execute a paint correction process aiming to eliminate up to 85% of paint defects, resulting in a significantly improved finish. During the correction, we employ a compound designed to remove swirls, scratches, and random defects before polishing, enhancing optical clarity, depth, and gloss on your vehicle’s surface. To complete the process, we apply a high-quality silica spray sealant. We also recommend considering an upgrade to a paint sealant or, more beneficially, a Ceramic Coating for extended shine and enduring protection.",
        },
        {
          id: 2,
          primaryText: "INTERIOR:",
          secondaryText:
            "At Driven Customs, we proceed to rejuvenate your vehicle’s interior with our specialized interior detailing service. This includes a thorough cleaning of all interior surfaces, eliminating dirt, debris, and odors to restore your vehicle's fresh scent.Our team employs a hot water extractor to shampoo and deep-clean the carpeting, while cloth seats undergo a thorough shampooing, and leather seats are cleaned using a pH-neutral leather cleaner and enriched with a safe conditioner.Special detergents are used to gently remove any stains from the headliner, and we ensure the trunk and spare tire areas are also meticulously cleaned for a comprehensive interior refresh.",
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
      id: 2,
      turnaround: "6+ HOURS",
      content: [
        {
          id: 1,
          primaryText: "EXTERIOR:",
          secondaryText:
            "Our Full Maintenance detailing package encompasses our Exterior Maintenance Detail, enhancing shine and providing protection to maintain your paint's freshness.Through our meticulous car wash, utilizing the advanced two-bucket method along with new mitts and towels, your vehicle undergoes comprehensive decontamination. Additionally, we perform a clay-bar treatment, ensuring thorough cleansing and revitalization.",
        },
        {
          id: 2,
          primaryText: "INTERIOR:",
          secondaryText:
            "At Driven Customs, we proceed to revitalize your vehicle’s interior with our specialized interior detailing service. This comprehensive process involves deep cleaning all interior surfaces to eliminate dirt, debris, and odors, restoring that delightful new car scent.Our team utilizes a hot water extractor to thoroughly shampoo and deep-clean the carpeting. Cloth seats undergo a meticulous shampooing, while leather seats are cleaned using a pH-neutral leather cleaner and enriched with a safe conditioner.Stubborn stains on the headliner are gently removed with specialized detergents, ensuring a spotless finish. Moreover, the trunk and spare tire areas receive the same thorough cleaning for a complete interior refresh.",
        },
      ],
      packagePriceCard: [
        {
          id: 1,
          color: "mainColor",
          primaryText: "Cars",
          price: "$590",
          backgroundCard: "backgroundDark",
        },
        {
          id: 2,
          color: "darkColor",
          primaryText: "Midsize",
          price: "$755",
          backgroundCard: "backgroundAccent",
        },
        {
          id: 3,
          color: "mainColor",
          primaryText: "Over-Size",
          price: "$920",
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

  const titlePackage =
    "Driven Customs - Combination Vehicle Detailing Packages in Chicago";
  const subTitlePackage =
    "*All prices are starting at and may vary based on vehicle size and inspection.";

  return (
    <div>
      <BlurData
        primaryText="Top-Tier Vehicle Detailing Packages in Chicago by Driven Customs"
        secondaryText="Combined Interior and Exterior Vehicle Detailing Packages"
        img={maclaren}
      />
      <Package
        title={titlePackage}
        subTitle={subTitlePackage}
        contentInformation={contentInformation}
        selectButtonsInformation={selectButtonsInformation}
      />
      <div className="wrapper-banner">
        <Banner
          content="Why settle for partial perfection when your vehicle deserves a complete makeover? At Driven Customs, our package detailing services offer the best of both worlds – exceptional interior and exterior detailing, all in one go. We understand the diversity of vehicles we encounter daily, which is why our combination detailing packages are tailored to individual needs. This ensures fairness in pricing, meaning a compact car owner won't be charged the same as someone with a large pickup truck. Regardless of your vehicle's size, rest assured you'll receive top-notch interior and exterior detailing tailored to your specific needs.Let our team of car enthusiasts at Driven Customs guide you through our two combination vehicle detailing packages, ensuring all your requirements are met perfectly. Fill out our FREE quick quote form for an accurate estimate. Remember, we'll assess your car's condition upon your detailing appointment to provide the most precise service."
          accentText="Exceptional "
          textBorderLine=" Vehicle Detailing Always Comes in Pairs at Driven Customs"
        />
      </div>
      <PackageBennefit
        title="A More Affordable Approach to Thoroughly Clean Your Vehicle"
        content="Our detailing team at Driven Customs has introduced package detailing precisely to make complete vehicle detailing accessible and affordable for everyone in the Chicago area. Often, without the option for comprehensive interior and exterior detailing, vehicle owners are left with a choice between one or the other. This compromise results in subpar outcomes and significantly less value than if both areas were thoroughly detailed.At Driven Customs, we aim to work alongside our customers, not against them, ensuring they achieve the best aesthetic and value for their car, truck, SUV, or motorcycle. Collaboration with our clients has proven incredibly beneficial, enhancing their satisfaction and aligning with our commitment to daily excellence in vehicle detailing.Reach out to our vehicle detailing crew today to discover more about our two combination vehicle detailing packages. Feel free to communicate any special requests during your appointment - we are here to fulfill them to your satisfaction."
      />
      {/**
        @todo: ASK DIMA IF WEE NEED THIS COMPONENT
      **/}
      <InformationCardBanner informationCard={informationCard} />
      <Footer />
    </div>
  );
};

export default PackageDetaling;
