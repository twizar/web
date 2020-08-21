import Header from "./component/Header.jsx";
import Content from "./component/Content.jsx";
import React from "react";

const Main = (prop) => {
    return  <React.Fragment>
        <Header />
        <Content content={prop.content} />
    </React.Fragment>
}

export default Main;