import React from "react";
import Spinner from "./spinner";

import PropTypes from "prop-types";
import clsx from "classnames/bind";

const classes = clsx.bind({
  root: "rounded-md font-semibold",
  animated: "transition-shadow hover:shadow-xl active:opacity-90",
  primary: "text-slate-300 bg-gray-800 border border-gray-600",
  secundary: "text-slate-900 bg-gray-200",
  disabled: "bg-gray-700 opacity-60",
  sm: "px-1 py-1 text-xs font-light",
  md: "py-2 px-4",
  lg: "py-3 px-6 text-2xl",
  xl: "py-4 px-8",
});

const Button = ({ variant, size, disabled, className, submit, isLoading, children, ...props }) => {
  return (
    <button
      type={submit ? "submit" : "button"}
      className={classes("root", variant, !disabled && "animated", size, disabled && "disabled", className)}
      {...props}
    >
      <div className="w-auto flex items-center gap-2">
        {isLoading && <Spinner size="xs" />}
        {children}
      </div>
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secundary"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  submit: PropTypes.bool,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: "primary",
  size: "md",
  submit: false,
  isLoading: false,
  disabled: false,
  className: null,
};

export default Button;
