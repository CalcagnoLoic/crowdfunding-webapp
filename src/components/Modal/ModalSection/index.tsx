import ModalOffer from "../ModalOffer";
import {
  offerNoEdge,
  offerBambooStand,
  offerBlackEdition,
  offerMahoganyEdition,
} from "../../../data/data";

const Component = () => (
  <>
    <ModalOffer
      title="Pledge with no reward"
      id="noReward"
      offer={offerNoEdge}
      isFreeOffer={true}
    />
    <ModalOffer
      title="Bamboo Stand"
      subtitle="Pledge $25 or more"
      id="bamboo"
      offer={offerBambooStand}
    />
    <ModalOffer
      title="Black Edition Stand"
      subtitle="Pledge $75 or more"
      id="blackEdition"
      offer={offerBlackEdition}
    />
    <ModalOffer
      title="Mahogany Special Edition"
      subtitle="Pledge $200 or more"
      id="mahogany"
      offer={offerMahoganyEdition}
      isDisabled={true}
    />
  </>
);

export default Component;
