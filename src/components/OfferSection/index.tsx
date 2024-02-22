import {
  offerBambooStand,
  offerBlackEdition,
  offerMahoganyEdition,
} from "../../data/data";

import BoxOffer from "../BoxOffer";

const Component = () => (
  <>
    <BoxOffer
      titleOffer="Bamboo Stand"
      positionCSS="mt-10"
      amount="$25"
      offer={offerBambooStand}
      daysLeft={101}
    />
    <BoxOffer
      titleOffer="Black Edition Stand"
      positionCSS="mt-5"
      amount="$75"
      offer={offerBlackEdition}
      daysLeft={64}
    />
    <BoxOffer
      titleOffer="Mahogany Special Edition"
      positionCSS="mt-5"
      amount="$200"
      offer={offerMahoganyEdition}
      daysLeft={0}
      isDisabled={true}
    />
  </>
);

export default Component;
