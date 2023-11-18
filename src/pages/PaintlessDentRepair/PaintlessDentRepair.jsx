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
import lamborghiniUrus from '../../assets/img/icons/lamborghiniUrus.svg'

const PaintlessDentRepair = () => {
      const contentInformation = [
        {
          id: 1,
          turnaround: "HOURS TO 1 DAY",
          content: [
            {
              id: 1,
              secondaryText:
                "Even if your vehicle has suffered damage beyond what our exterior detailing and paint correction services can address, it doesn't have to be a lost cause. With our Paintless Dent Repair package, Driven Customs employs an eco-friendly repair method to restore your vehicle's body to its original factory-like condition. This process takes significantly less time and costs a fraction of what traditional auto body repair shops charge.Our package is designed to eliminate dings, dents, body creases, and hail damage. Visit our Chicago, Illinois vehicle detailing shop today for an assessment and a competitive price quote for your vehicle!",
            },
          ],
          packagePriceCard: [
            {
              id: 1,
              color: "mainColor",
              primaryText: "STARTING AT",
              price: "$125",
              backgroundCard: "backgroundAccent",
            }
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

      const titlePackage = "Driven Customs - Paintless Dent Repair Package";
      return (
        <div>
          <BlurData
            primaryText="Precision Paintless Dent Repair Services in Chicago, IL by Driven Customs"
            secondaryText="When Dent Disasters Strike, Count on Driven Customs to Restore Your Vehicle's Flawless Appearance"
            img={lamborghiniUrus}
          />
          <Package 
          title={titlePackage}
          contentInformation={contentInformation} 
          imgBg={lamborghiniUrus}
          />
          <div className="wrapper-banner">
            <Banner
              content="If minor surface defects are bothering you, we understand that fender benders creating dents or divots in your vehicle’s exterior bodywork can be incredibly frustrating. But rest assured, everything will be just fine - our Paintless Dent Repair package is here to resolve your issue effectively.We employ proven techniques that are gentle on the paintwork and surrounding areas, using specialized tools to gently pop out the dent from behind the affected surface. Your car will leave our Chicago, Illinois shop looking as if nothing ever happened!If your vehicle has minor dings, dents, or surface creases that haven't damaged the paintwork or body integrity, our paintless dent repair service at Driven Customs will do the trick! Contact us for more information, and after a physical evaluation, we will provide you with an immediate quote."

              accentText="Don't Stress "
              textBorderLine=" About Repainting Your Car - Trust Driven Customs for Expert Solutions!"
            />
          </div>
          <PackageBennefit
            title="What Issues Can Be Addressed by Paintless Dent Repair?"
            content="Our team at Driven Customs offers both Paintless Dent Repair and paint correction services, each serving distinct purposes for our customers.Paint correction primarily focuses on enhancing an automobile's finish gloss through polishing, removing defects, stains, and surface abrasions. In contrast, Paintless Dent Repair is a comprehensive process employed after a damaging impact or dent that hasn't compromised the vehicle's integrity.Importantly, these two services complement each other. After repairing a dent, it's often necessary to correct the paintwork around the affected area, ensuring seamless blending with the surrounding surfaces. At Driven Customs, we prioritize the integration of both procedures for a thorough vehicle restoration experience."
          />
                {/**
        @todo: ASK DIMA IF WEE NEED THIS COMPONENT
      **/}
          <InformationCardBanner informationCard={informationCard} />
          <Footer />
        </div>
      );
}

export default PaintlessDentRepair;
