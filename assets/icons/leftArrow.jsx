import Svg, { Path } from "react-native-svg"

export const LeftArrow = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 256 256"
      fill={props.fill}
      {...props}
    >
      <Path d="M224 128a8 8 0 01-8 8h-96v64a8 8 0 01-13.66 5.66l-72-72a8 8 0 010-11.32l72-72A8 8 0 01120 56v64h96a8 8 0 018 8z" />
    </Svg>
  )
}
