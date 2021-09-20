import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface CategoryItemProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
}

const Checkbox = styled(
  ({ className = "", label, ...props }: CategoryItemProps) => {
    return (
      <div className={`${className}`}>
        <label className="cursor-pointer">
          <input type="checkbox" {...props} />
          <span className="capitalize ml-3">{label}</span>
        </label>
      </div>
    );
  }
)``;

export default Checkbox;
