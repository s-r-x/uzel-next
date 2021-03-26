import React from "react";
import ContentLoader from "react-content-loader";

const SinglePostPlaceholder = (props: any) => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="var(--content-loader-secondary-color)"
    foregroundColor="var(--content-loader-primary-color)"
    {...props}
  >
    <rect x="130" y="19" rx="2" ry="2" width="140" height="10" />
    <rect x="130" y="38" rx="2" ry="2" width="140" height="10" />
    <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
  </ContentLoader>
);

export default SinglePostPlaceholder;
