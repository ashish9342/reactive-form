import checkPropTypes from "check-prop-types";

export const findByTestArr = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);

export const checkProps = (component, conformProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformProps,
    "prop",
    component.name
  );
  return propError;
};
