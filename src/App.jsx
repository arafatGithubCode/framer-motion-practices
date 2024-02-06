// import CTwo from "./lecture/CTwo";
// import Text from "./lecture/Text";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Post from "./lecture/pageAanimation/Post";
import Nav from "./lecture/pageAanimation/Nav";
import Article from "./lecture/pageAanimation/Article";

// import Drag from "./Drag";

// import Gestures from "./Gestures";

// import Lec3 from "./lecture/Lec3";
// import Scroll from "./lecture/Scroll";
// import Revise from "./Animate";
// import ScrollTrigger from "./lecture/ScrollTrigger";

// import Drag from "./lecture/Drag";

export default function App() {
  return (
    <>
      {/* <Text /> */}
      {/* <CTwo /> */}
      {/* <Drag /> */}
      {/* <Lec3 /> */}
      {/* <Scroll /> */}
      {/* <ScrollTrigger /> */}
      {/* <Revise /> */}
      {/* <Gestures /> */}
      {/* <Drag /> */}
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/post" element={<Post />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
