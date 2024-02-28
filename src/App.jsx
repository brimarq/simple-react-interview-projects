import "./App.css";
// import Accordion from "./components/accordion";
// import RandomColor from "./components/random-color";
// import StarRating from "./components/star-rating";
// import ImageSlider from "./components/image-slider";
// import LoadMoreData from "./components/load-more-button";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

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
      <TreeView menus={menus} />
    </>
  );
}

export default App;
