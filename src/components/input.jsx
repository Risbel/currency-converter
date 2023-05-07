import React from "react";

import PropTypes from "prop-types";
import clsx from "classnames/bind";

const classes = clsx.bind({
  root: "rounded-md text-center font-semibold",
  primary: "text-slate-900 bg-gray-200 border border-gray-600",
  secundary: "text-slate-300 bg-gray-800",
  sm: "w-3/5 md:w-2/5 lg:w-1/5 h-6",
  md: "w-3/4 md:w-3/5 lg:w-1/4 h-8 text-xl",
  lg: "w-full md:w-3/4 lg:w-1/3 h-10 text-2xl",
  xl: "w-full md:w-4/5 lg:w-1/2 h-14 text-3xl",
});

const Input = React.forwardRef(({ variant, size, className, ...props }, ref) => {
  return <input className={classes("root", variant, size, className)} {...props} ref={ref} />;
});

Input.propTypes = {
  variant: PropTypes.oneOf(["primary", "secundary"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  className: PropTypes.string,
};

Input.defaultProps = {
  variant: "primary",
  size: "md",
  className: null,
};

export default Input;
