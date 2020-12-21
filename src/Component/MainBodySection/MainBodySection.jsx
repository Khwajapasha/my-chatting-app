import React from "react";
import { AllAccordions } from "./AccordionComponent/AllAccordions";
import { AllAlert } from "./AlertComponent/AllAlert";
import { AllBadges } from "./BadgesComponent/AllBadges";
import { AllBreadcrumb } from "./BreadcrumbsComponent/AllBreadcrumb";
import {AllButtons} from "./ButtonComponent/AllButtons"
import {AllGroupsButton} from "./ButtonsGroupsComponent/AllGroupsButton"
import { AllCards } from "./CardsComponent/AllCards";
import { AllCarousel } from "./CarouselsComponent/AllCarousel"
import { AllDropDown } from "./DropDownComponent/AllDropDown";
export const MainBodySection = () => {
  return (
    <div>
      <AllAlert />
      <AllAccordions />
      <AllBadges />
      <AllBreadcrumb />
      <AllButtons />
      <AllGroupsButton />
      <AllCards/>
      <AllCarousel/>
      <AllDropDown/>
    </div>
  );
};
