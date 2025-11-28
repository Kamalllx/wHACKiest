import * as Fathom from "fathom-client";
import React, { FormEvent, useCallback, useMemo, useState } from "react";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/base";
import { Body, BodyBold, theme } from "@/styles";
import { useDeviceSize } from "@/utils";
import { mediaQueries } from "@/utils/responsive";
import styled from "styled-components";

import {
  SignUpState,
  getResultMessage,
  signupRequest,
  validateEmailAddress,
} from "./utils";

interface MailingListSignupProps
  extends React.ComponentPropsWithoutRef<"form"> {
  placeholder: string;
  mobilePlaceholder?: string;
}

interface CheckErrorsProps {
  $hasErrors: boolean;
}

const MailingListSignup: React.FC<MailingListSignupProps> = ({
  mobilePlaceholder,
  placeholder,
  ...rest
}) => {
  const [email, setEmail] = useState("");
  const [hasErrors, setHasErrors] = useState(false);
  const [signUpState, updateSignUpState] = useState(SignUpState.INITIAL);
  const isLargeMobileOrSmaller = useDeviceSize("largeMobile");

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (email === "") {
        updateSignUpState(SignUpState.EMPTY);
        setHasErrors(true);
        return;
      }

      if (validateEmailAddress(email)) {
        updateSignUpState(SignUpState.SUBMITTING);
        signupRequest(email)
          .then(({ alreadySignup }) => {
            if (alreadySignup) {
              updateSignUpState(SignUpState.DUPLICATE);
              setHasErrors(true);
              Fathom.trackEvent("Sign Up: Duplicate"); // Sign Up: Duplicate
            } else {
              updateSignUpState(SignUpState.SUBMITTED);
              Fathom.trackEvent("Sign Up: Success"); // Sign Up: Success
            }
          })
          .catch(() => {
            updateSignUpState(SignUpState.ERROR);
            Fathom.trackEvent("Sign Up: Error"); // Sign Up: Error
          });
      } else {
        updateSignUpState(SignUpState.INVALID);
        setHasErrors(true);
        Fathom.trackEvent("Sign Up: Invalid"); // Sign Up: Invalid
      }
    },
    [email]
  );

  const refinedPlaceholder =
    mobilePlaceholder && isLargeMobileOrSmaller
      ? mobilePlaceholder
      : placeholder;

  const resultMessage = useMemo(
    () => getResultMessage(signUpState),
    [signUpState]
  );

  return (
    <form
      onSubmit={onSubmit}
      onBlur={() => updateSignUpState(SignUpState.INITIAL)}
      {...rest}
    >
      <InputWrapper>
        <FormWrapper>
          <StyledInput
            value={email}
            $hasErrors={hasErrors}
            onChange={(e: any) => {
              setEmail(e.target.value);
              setHasErrors(false);
            }}
            placeholder={refinedPlaceholder}
            aria-label="Sign up for the latest news from wHACKiest!"
            aria-required
          />
          <ButtonWrapper>
            <Button
              size="small"
              color="white"
              classification="primary"
              text="Submit"
              isSubmitted={signUpState === SignUpState.SUBMITTED}
              disabled={signUpState === SignUpState.SUBMITTING || hasErrors}
              onClick={(e: any) => {
                if (
                  signUpState !== SignUpState.SUBMITTED &&
                  signUpState !== SignUpState.SUBMITTING
                )
                  onSubmit(e);
              }}
              aria-label="Submit email"
            >
              {signUpState === SignUpState.SUBMITTED ? (
                <BodyBold>Submit</BodyBold>
              ) : signUpState === SignUpState.SUBMITTING ? (
                <Spinner
                  color="white"
                  size={isLargeMobileOrSmaller ? 18 : 24}
                />
              ) : (
                <BodyBold>Submit</BodyBold>
              )}
            </Button>
          </ButtonWrapper>
        </FormWrapper>
        {(hasErrors || signUpState === SignUpState.SUBMITTED) && (
          <ResultText $hasErrors={hasErrors}>{resultMessage}</ResultText>
        )}
      </InputWrapper>
    </form>
  );
};

const FormWrapper = styled.div`
  border-radius: 100px;
  display: flex;
  background-color: ${theme.colors.secondary.navy};
`;

const StyledInput = styled.input<CheckErrorsProps>`
  font-family: "Satoshi";
  font-size: 16px;
  width: 80%;
  height: 100%;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 2%;
  border: none;
  outline: none;
  ::placeholder {
    color: ${({ theme }) => theme.colors.text.dark.gray};
  }
  background: transparent;
  padding-left: 15px;
  color: ${({ $hasErrors }) =>
    $hasErrors
      ? ({ theme }) => theme.colors.state.error
      : ({ theme }) => theme.colors.text.dark.white};
  &:disabled {
    cursor: not-allowed;
    filter: grayscale(1);
  }
  ${mediaQueries.tablet} {
    padding: 12px 16px;
  }
  ${mediaQueries.largeMobile} {
    width: 60%;
  }
  ${mediaQueries.smallMobile} {
    padding: 8px 16px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  ${mediaQueries.medium} {
    width: 100%;
  }
  ${mediaQueries.tablet} {
    width: 100%;
  }
  ${mediaQueries.largeMobile} {
    width: 90%;
  }
`;

const ButtonWrapper = styled.div`
  margin: 8px;
`;

const ResultText = styled(Body)<CheckErrorsProps>`
  color: ${({ $hasErrors }) =>
    $hasErrors
      ? ({ theme }) => theme.colors.state.error
      : ({ theme }) => theme.colors.state.success};
  margin-top: 8px;
`;

export default MailingListSignup;


