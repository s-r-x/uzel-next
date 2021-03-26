import React from "react";
import ContentLoader from "react-content-loader";

const PostsListPlaceholder = (props) => (
  <ContentLoader
    speed={2}
    width="100%"
    viewBox="0 0 400 550"
    title="Идет загрузка..."
    backgroundColor="var(--content-loader-secondary-color)"
    foregroundColor="var(--content-loader-primary-color)"
    {...props}
  >
    <rect x="0" y="403" rx="2" ry="2" width="140" height="10" />
    <rect x="0" y="420" rx="2" ry="2" width="140" height="10" />
    <rect x="0" y="10" rx="2" ry="2" width="400" height="380" />
    <rect x="0" y="445" rx="0" ry="0" width="392" height="60" />
  </ContentLoader>
);

export default PostsListPlaceholder;
