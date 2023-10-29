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

const ExteriorDetaling = () => {

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
          isDisabled: true
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
          isDisabled: false
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
          isDisabled: false
        },
        {
          id: 4,
          primaryText: "Another Package",
          styleButton: "accentBackground",
          size: "smallSize",
          description: "Your detailed description for Another Package",
          hover: "hoverBorderGreen",
          hoverText: "hoverText",
          textColor: "mainColor",
          isDisabled: false
        },
      ];
    
      const contentInformation = [
        {
          id: 1,
          title: "Chicago Auto Pros - Combination Vehicle Detailing Packages",
          subTitle:
            "All prices are starting at and are dependent upon vehicle size and inspection",
          turnaround: "1 DAY",
          content: [
            {
              id: 1,
              primaryText: "EXTERIOR:",
              secondaryText:
                "Our Comprehensive Detailing Package begins with meticulous exterior care. We start by hand washing and thoroughly decontaminating your vehicle. Our paint correction process targets up to 85% of paint defects, erasing swirls, scratches, and imperfections, followed by a polishing step for added clarity, depth, and a stunning gloss. To finish, we apply a premium silica spray sealant. Consider upgrading to a paint sealant or a Ceramic Coating for maximum shine and long-lasting protection.",
            },
            {
              id: 2,
              primaryText: "INTERIOR:",
              secondaryText:
                "Chicago Auto Pros elevates interior detailing. Our team provides a rejuvenating service, eliminating dirt, debris, and odors, restoring that new car scent. We use hot water extraction for deep carpet cleaning, gentle shampoo for cloth seats, and a pH-neutral leather cleaner with conditioner for leather seats.Stains on the headliner vanish with specialized detergents, and the trunk and spare tire areas are thoroughly cleaned. Our interior detailing ensures a fresh, like-new interior you'll adore.",
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
          hello: "world",
          title: "Auto Pros - Combination Vehicle Detailing Packages",
          subTitle:
            "are starting at and are dependent upon vehicle size and inspection",
          turnaround: "2 DAY",
          content: [
            {
              id: 1,
              primaryText: "EXTERIOR:",
              secondaryText:
                "Our Comprehensive Detailing Package begins with meticulous exterior care. We start by hand washing and thoroughly decontaminating your vehicle. Our paint correction process targets up to 85% of paint defects, erasing swirls, scratches, and imperfections, followed by a polishing step for added clarity, depth, and a stunning gloss. To finish, we apply a premium silica spray sealant. Consider upgrading to a paint sealant or a Ceramic Coating for maximum shine and long-lasting protection.",
            },
            {
              id: 2,
              primaryText: "INTERIOR:",
              secondaryText:
                "Chicago Auto Pros elevates interior detailing. Our team provides a rejuvenating service, eliminating dirt, debris, and odors, restoring that new car scent. We use hot water extraction for deep carpet cleaning, gentle shampoo for cloth seats, and a pH-neutral leather cleaner with conditioner for leather seats.Stains on the headliner vanish with specialized detergents, and the trunk and spare tire areas are thoroughly cleaned. Our interior detailing ensures a fresh, like-new interior you'll adore.",
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
          hello: "world",
          title: "Auto Pros - Combination Vehicle Detailing Packages",
          subTitle:
            "are starting at and are dependent upon vehicle size and inspection",
          turnaround: "2 DAY",
          content: [
            {
              id: 1,
              primaryText: "EXTERIOR:",
              secondaryText:
                "Our Comprehensive Detailing Package begins with meticulous exterior care. We start by hand washing and thoroughly decontaminating your vehicle. Our paint correction process targets up to 85% of paint defects, erasing swirls, scratches, and imperfections, followed by a polishing step for added clarity, depth, and a stunning gloss. To finish, we apply a premium silica spray sealant. Consider upgrading to a paint sealant or a Ceramic Coating for maximum shine and long-lasting protection.",
            },
            {
              id: 2,
              primaryText: "INTERIOR:",
              secondaryText:
                "Chicago Auto Pros elevates interior detailing. Our team provides a rejuvenating service, eliminating dirt, debris, and odors, restoring that new car scent. We use hot water extraction for deep carpet cleaning, gentle shampoo for cloth seats, and a pH-neutral leather cleaner with conditioner for leather seats.Stains on the headliner vanish with specialized detergents, and the trunk and spare tire areas are thoroughly cleaned. Our interior detailing ensures a fresh, like-new interior you'll adore.",
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
          id: 4,
          hello: "world",
          title: "Auto Pros - Combination Vehicle Detailing Packages",
          subTitle:
            "are starting at and are dependent upon vehicle size and inspection",
          turnaround: "2 DAY",
          content: [
            {
              id: 1,
              primaryText: "EXTERIOR:",
              secondaryText:
                "Our Comprehensive Detailing Package begins with meticulous exterior care. We start by hand washing and thoroughly decontaminating your vehicle. Our paint correction process targets up to 85% of paint defects, erasing swirls, scratches, and imperfections, followed by a polishing step for added clarity, depth, and a stunning gloss. To finish, we apply a premium silica spray sealant. Consider upgrading to a paint sealant or a Ceramic Coating for maximum shine and long-lasting protection.",
            },
            {
              id: 2,
              primaryText: "INTERIOR:",
              secondaryText:
                "Chicago Auto Pros elevates interior detailing. Our team provides a rejuvenating service, eliminating dirt, debris, and odors, restoring that new car scent. We use hot water extraction for deep carpet cleaning, gentle shampoo for cloth seats, and a pH-neutral leather cleaner with conditioner for leather seats.Stains on the headliner vanish with specialized detergents, and the trunk and spare tire areas are thoroughly cleaned. Our interior detailing ensures a fresh, like-new interior you'll adore.",
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
    
  return (
    <div>
        <BlurData
          primaryText="Chicago's Top-Tier Vehicle Detailing Packages"
          secondaryText="INTERIOR AND EXTERIOR VEHICLE DETAILING PACKAGES COMBINED"
        />
      <Package
        contentInformation={contentInformation}
        selectButtonsInformation={selectButtonsInformation}
      />
      <div className="wrapper-banner">
        <Banner
          content="Why settle for vehicle perfection halfway? Chicago Auto Pros offers package detailing services that eliminate the need to choose between interior and exterior care. Enjoy affordable rates and the same comprehensive quality found in our individual interior and exterior detailing packages, ensuring your vehicle receives a top-to-bottom clean.

        Our two combination detailing packages were designed with the diverse range of vehicles we encounter in mind. This means fair pricing that considers your specific vehicle size, while still delivering equally high-quality interior and exterior detailing services.
        
        Let Chicago Auto Pros' team of automotive enthusiasts assist you in selecting the ideal combination detailing package that perfectly suits your needs. Complete our FREE quick quote form for an accurate price estimate, with a reminder that we'll assess your vehicle's condition upon arrival for your detailing appointment."
          accentText="The Best "
          textBorderLine="vehicle Detailing Comes In Pairs"
        />
      </div>
      <PackageBennefit
        title="A More Cost-Effective Way To Completely Clean Your Ride"
        content="Perhaps the most notable reason that our detailing team here at Chicago Auto Pros have created the option for package detailing is to help bring cost-effective, complete vehicle detailing to all in the Chicago area. Without the ability to select options that take care of both the interior and exterior of a vehicle, many are forced to choose one or the other. This leaves their ride with lackluster results and not nearly the same value they would have had they had both areas detailed adequately.
      Our goal at Chicago Auto Pros is to not leave customers between a rock and a hard place and instead work WITH them to help them achieve the best aesthetic and value possible for their car, truck, SUV, or motorcycle. We collaborate with our customers, and have found this effort to be immensely beneficial both for their satisfaction and in fulfilling our mission of vehicle detailing excellence daily.
      Contact our vehicle detailing crew today to learn more about our two combination vehicle detailing packages, and dont forget to let us know if you have any special requests at the time of your appointment - we will be sure to fulfill them."
      />
      <InformationCardBanner informationCard={informationCard} />
      <Footer />
    </div>
  );
};

export default ExteriorDetaling;
