import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

import { IONS, Train } from "./constants";

interface IonProps extends ComponentPropsWithoutRef<"img"> {
  train: Train;
}

const Ion: React.FC<IonProps> = ({ train, children, ...rest }) => {
  return (
    <div {...rest}>
      <IonWrapper>
        <ChildrenWrapper>{children}</ChildrenWrapper>
        <IonImage
          height={52}
          loading="lazy"
          src={IONS[train]}
          alt={`Image of a train with windows, with wHACKiest ${train} team members inside.`}
        />
      </IonWrapper>
    </div>
  );
};

const IonWrapper = styled.div`
  z-index: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  margin-right: 24px;
  height: 180px;

  @media (max-width: 1024px) {
    height: 152px;
  }
`;

const ChildrenWrapper = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  height: 100%;
  padding-bottom: 40px;
`;

const IonImage = styled.img`
  height: 180px;

  @media (max-width: 1024px) {
    height: 152px;
  }
`;

export default Ion;


