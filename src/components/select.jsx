import React from "react";

import PropTypes from "prop-types";
import clsx from "classnames/bind";

const classes = clsx.bind({
  root: "rounded-md font-semibold pl-2",
  primary: "text-slate-800 bg-slate-300 border border-none",
  secundary: "text-slate-100 bg-slate-800",
  animated: "text-slate-800 bg-slate-300 hover:bg-slate-100 hover:shadow-xl",
  sm: "w-3/5 md:w-2/5 lg:w-1/5 h-6",
  md: "w-3/4 md:w-3/5 lg:w-1/4 h-8",
  lg: "w-full md:w-3/4 lg:w-1/3 h-10",
  xl: "w-full md:w-4/5 lg:w-1/2 h-14 text-2xl",
});

const Select = React.forwardRef(({ children, variant, size, className, ...props }, ref) => {
  return (
    <select className={classes("root", variant, size, className)} {...props} name="Select symbols" ref={ref}>
      {children}
    </select>
  );
});

Select.propTypes = {
  variant: PropTypes.oneOf(["primary", "secundary", "animated"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  className: PropTypes.string,
};

Select.defaultProps = {
  variant: "primary",
  size: "md",
  className: null,
};

export default Select;
