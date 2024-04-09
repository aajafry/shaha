/* eslint-disable react/prop-types */

export default function Input({ type, classes, name, placeholder }) {
  return (
    <input
      type={type}
      className={classes}
      name={name}
      id={name}
      placeholder={placeholder}
    />
  );
}
