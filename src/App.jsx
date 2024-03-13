import "./App.css";
// import Accordion from "./components/accordion";
// import RandomColor from "./components/random-color";
// import StarRating from "./components/star-rating";
// import ImageSlider from "./components/image-slider";
// import LoadMoreData from "./components/load-more-button";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabsTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutocomplete from "./components/search-autocomplete-with-api";

function App() {
  return (
    <>
      {/* Accordion component */}
      {/* <Accordion /> */}
      {/* Random color component */}
      {/* <RandomColor /> */}
      {/* Star rating component */}
      {/* <StarRating numStars={10} /> */}
      {/* Image slider component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"1
        0"}
      /> */}
      {/* Load more products component */}
      {/* <LoadMoreData /> */}
      {/* Load tree view/menu UI/recursive navigation menu component */}
      {/* <TreeView menus={menus} /> */}
      {/* QR Code Generator component */}
      {/* <QRCodeGenerator /> */}
      {/* Light/Dark Theme Switcher component */}
      {/* <LightDarkMode /> */}
      {/* Scroll Indicator component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* Custom Tabs component */}
      {/* <TabsTest /> */}
      {/* Custom Modal component */}
      {/* <ModalTest /> */}
      {/* Github Profile Finder component */}
      {/* <GithubProfileFinder /> */}
      {/* Search Autocomplete component */}
      <SearchAutocomplete />
    </>
  );
}

export default App;
