import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outline";
}

const ContainedButton = styled(
  ({
    children,
    className,
    ...props
  }: PropsWithChildren<Omit<ButtonProps, "variant">>) => {
    return (
      <button
        className={`bg-black py-3.5 md:py-2.5 px-6 text-sm text-white ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
)``;

const OutlinedButton = styled(
  ({
    children,
    className,
    ...props
  }: PropsWithChildren<Omit<ButtonProps, "variant">>) => {
    return (
      <button
        className={`border-black border py-3.5 md:py-2.5 px-6 text-sm text-black bg-white ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
)``;

const Button = styled(
  ({
    children,
    variant = "contained",
    ...props
  }: PropsWithChildren<ButtonProps>) => {
    return (
      <>
        {variant === "contained" && (
          <ContainedButton {...props}>{children}</ContainedButton>
        )}
        {variant === "outline" && (
          <OutlinedButton {...props}>{children}</OutlinedButton>
        )}
      </>
    );
  }
)``;

export default Button;
