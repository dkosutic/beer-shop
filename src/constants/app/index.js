import React from "react";
import loading from "../../assets/img/loading.gif";
import broken from "../../assets/img/boom.png";
import notFound from "../../assets/img/404.png";

export const Loading = () => (
  <div style={{ textAlign: "center" }}>
    <img width={500} src={loading} alt="Loading..." />
  </div>
);

export const Broken = () => (
  <div style={{ textAlign: "center" }}>
    <img width={500} src={broken} alt="Something broke..." />
  </div>
);

export const NotFound = () => (
  <div style={{ textAlign: "center", paddingTop: "50px" }}>
    <img width={500} src={notFound} alt="Not Found." />
  </div>
);

export const Empty = ({ name }) => (
  <div className="empty">
    <h2>{`${name} is empty. Add some items.`}</h2>
  </div>
);

export const linkGroup = [
  {
    link: "home",
    title: "Home"
  },
  {
    link: "favorites",
    title: "Favorites"
  },
  {
    link: "cart",
    title: "Cart"
  }
];

export const socialLinks = [
  {
    title: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com"
  },
  {
    title: "Twitter",
    icon: "twitter",
    link: "https://www.twitter.com"
  },
  {
    title: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com"
  },
  {
    title: "Github",
    icon: "github",
    link: "https://www.github.com"
  }
];

export const dataTable = {
  headers: [
    {
      name: "imageUrl",
      title: "Image",
      type: "img",
      editable: false
    },
    {
      name: "title",
      title: "Beer Name",
      type: "string",
      editable: false
    },
    {
      name: "quantity",
      title: "Quantity",
      type: "number",
      editable: true,
      action: function(item, name, value, obj) {
        if (value <= 0) {
          obj.props.removeFromCart(item);
        } else {
          item[name] = value;
          obj.props.updateItemInCart(item);
        }
      }
    },
    {
      name: "Action",
      title: "Remove",
      type: "action",
      icon: "delete",
      iconType: "bloody",
      action: function(item, obj) {
        obj.props.removeFromCart(item);
      }
    }
  ]
};

export const detailsPanel = [
  { name: "imageUrl", title: "Image", type: "img" },
  { type: "string", name: "text", title: "Description" }
];
