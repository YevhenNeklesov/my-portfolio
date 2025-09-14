import icons from "../assets/icons/symbol-defs.svg";

export default function SvgIcon({
  name,
  prefix = "icon",
  color = "#333",
  size = 24,
  ...props
}) {
  const symbolId = `${icons}#${prefix}-${name}`; // важный момент!
  return (
    <svg width={size} height={size} aria-hidden="true" {...props}>
      <use href={symbolId} fill={color} />
    </svg>
  );
}
