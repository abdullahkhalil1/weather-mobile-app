import Svg, { Path } from "react-native-svg"

export const CloudIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      fill={props.fill}
      viewBox="0 0 256 256"
      {...props}
    >
      <Path d="M184 208a16 16 0 11-16-16 16 16 0 0116 16zm-64-16a16 16 0 1016 16 16 16 0 00-16-16zm-48 0a16 16 0 1016 16 16 16 0 00-16-16zM236 92a80.09 80.09 0 01-80 80H76a56 56 0 010-112 56.76 56.76 0 016.39.36A80.08 80.08 0 01236 92zm-24 0a56.06 56.06 0 00-112-3.31 12 12 0 11-24-1.38c.06-1.11.15-2.21.26-3.31H76a32 32 0 000 64h80a56.06 56.06 0 0056-56z" />
    </Svg>
  )
}
