import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={285}
    height={200}
    viewBox="0 0 285 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="41" y="6" rx="0" ry="0" width="134" height="125" />
    <rect x="48" y="170" rx="0" ry="0" width="120" height="22" />
    <circle cx="77" cy="150" r="14" />
    <circle cx="128" cy="151" r="14" />
  </ContentLoader>
);

export default Skeleton;
