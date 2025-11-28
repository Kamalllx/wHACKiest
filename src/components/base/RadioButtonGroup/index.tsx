import React, { ComponentPropsWithoutRef } from "react";
import { mediaQueries } from "@/utils/responsive";
import styled, { DefaultTheme, ThemeProps } from "styled-components";

import { RadioContextProvider } from "./RadioContext";

type RadioButtonGroupProps = ComponentPropsWithoutRef<"div"> & {
  /**
   * The name of each of the RadioButtons in the RadioButtonGroup
   */
  name: string;
  /**
   * The default value of the selected RadioButton in the RadioButtonGroup
   */
  defaultValue?: string;
  /**
   * Callback for when the radioButton value is changed
   */
  onSelect: (value: string) => void;
};

export type RadioButtonGroupType = React.FC<RadioButtonGroupProps>;

const RadioButtonGroup: RadioButtonGroupType = ({
  className,
  name,
  defaultValue,
  onSelect,
  children,
  ...rest
}) => (
  <StyledRadioButtonGroup className={className} {...rest}>
    <RadioContextProvider
      name={name}
      defaultValue={defaultValue}
      onSelect={onSelect}
    >
      {children}
    </RadioContextProvider>
  </StyledRadioButtonGroup>
);

const StyledRadioButtonGroup = styled.div<
  RadioButtonGroupType & ThemeProps<DefaultTheme>
>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 64px;
  cursor: pointer;
  outline: 2px solid transparent;
  outline-offset: 2px;

  &:focus {
    outline: none;
  }

  ${mediaQueries.medium} {
    padding: 8px 48px;
    justify-content: flex-start;
    overflow-x: scroll;
  }

  ${mediaQueries.largeMobile} {
    padding: 8px 32px;
    justify-content: flex-start;
    overflow-x: scroll;
  }

  ${mediaQueries.smallMobile} {
    padding: 4px 16px;
    overflow-x: scroll;
  }
`;

export default RadioButtonGroup;

