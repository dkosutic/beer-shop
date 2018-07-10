import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import { Provider } from "react-redux";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import HyperLinkButton from "../components/HyperLinkButton";
import LinkGroup from "../components/LinkGroup";
import LocationLink from "../components/LocationLink";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ItemGrid from "../components/ItemGrid";
import SimpleTable from "../components/SimpleTable";
import Popup from "../components/Popup";
import store from "../redux/store";
import { linkGroup, socialLinks } from "../constants/app/index";

storiesOf("Button", module)
  .add("neutral", () => <Button type="neutral"> Neutral Button </Button>)
  .add("primary", () => <Button type="primary"> Primary Button </Button>)
  .add("bloody", () => <Button type="bloody"> Bloody Button </Button>)
  .add("disabled", () => <Button disabled={true}> Disabled Button </Button>);

storiesOf("IconButton", module).add("home", () => (
  <IconButton iconName="home" />
));

storiesOf("HyperLinkButton", module).add("default", () => (
  <HyperLinkButton title="Facebook" link="http://www.facebook.com" />
));

storiesOf("LocationLink", module)
  .addDecorator(story => <Router initialEntries={["/"]}>{story()}</Router>)
  .add("default", () => <LocationLink title="Home" link="home" />);

storiesOf("LinkGroup", module)
  .addDecorator(story => <Router initialEntries={["/"]}>{story()}</Router>)
  .add("default", () => <LinkGroup links={linkGroup} />);

storiesOf("Card", module).add("default", () => <Card {...cardProps} />);

storiesOf("ItemGrid", module).add("default", () => <ItemGrid items={items} />);

storiesOf("Header", module).add("default", () => <Header />);

storiesOf("Footer", module).add("default", () => (
  <Footer items={socialLinks} />
));

storiesOf("Layout", module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .addDecorator(story => <Router initialEntries={["/"]}>{story()}</Router>)
  .add("default", () => <Layout nav={linkGroup} footer={socialLinks} />);

storiesOf("SimpleTable", module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .addDecorator(story => <Router initialEntries={["/"]}>{story()}</Router>)
  .add("default", () => <SimpleTable {...dataTable} />);

storiesOf("Popup", module)
  .add("click", () => (
    <Popup
      type="click"
      text="Ferrari 812 Superfast not only introduces a number of innovative features but also marks the gait of Ferrari's 70 years since its operation in 1947. This new car will take Ferrari to a new era of 12-cylinder engine while continuing Ferrari F12 Berlinetta and Ferrari F12 TDF."
    >
      <div style={{ marginTop: "150px" }}>
        <Card {...cardProps} />
      </div>
    </Popup>
  ))
  .add("hover", () => (
    <Popup
      type="hover"
      text="Ferrari 812 Superfast not only introduces a number of innovative features but also marks the gait of Ferrari's 70 years since its operation in 1947. This new car will take Ferrari to a new era of 12-cylinder engine while continuing Ferrari F12 Berlinetta and Ferrari F12 TDF."
    >
      <div style={{ marginTop: "150px" }}>
        <Card {...cardProps} />
      </div>
    </Popup>
  ));

const cardProps = {
  imageUrl:
    "https://2.bp.blogspot.com/-3CCKjKD8IsM/WT4xkFtcpUI/AAAAAAAABDs/pSaXjvO93ls5F4Ar9n35cCntbCNCsyaAQCLcB/s640/582281_620.jpg",
  text:
    "Ferrari 812 Superfast not only introduces a number of innovative features but also marks the gait of Ferrari's 70 years since its operation in 1947. This new car will take Ferrari to a new era of 12-cylinder engine while continuing Ferrari F12 Berlinetta and Ferrari F12 TDF.",
  title: "Ferrari"
};

const items = [];
for (let i = 0; i < 10; i++) {
  items.push(cardProps);
}

const dataTable = {
  headers: [
    { name: "imageUrl", title: "Image", type: "img", editable: false },
    { name: "title", title: "Beer Name", type: "string", editable: false },
    {
      name: "quantity",
      title: "Quantity",
      type: "string",
      editable: true
    }
  ],
  rows: [
    {
      id: 0,
      title: "Ipa",
      quantity: 1,
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/09/14/11/35/beer-1669273__340.png"
    },
    {
      id: 0,
      title: "King Henry",
      quantity: 3,
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/09/14/11/35/beer-1669273__340.png"
    },
    {
      id: 0,
      title: "Kentucky Brunch",
      quantity: 5,
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/09/14/11/35/beer-1669273__340.png"
    }
  ]
};
