import React, { ComponentPropsWithoutRef } from "react";

import PageWrapper from "./PageWrapper";

type Props = ComponentPropsWithoutRef<"div">;

const Layout: React.FC<Props> = ({ children }) => (
  <PageWrapper>{children}</PageWrapper>
);

export default Layout;

