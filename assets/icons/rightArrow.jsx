import Svg, { Path } from "react-native-svg"

export const RightArrow = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 256 256"
      fill={props.fill}
      {...props}
    >
      <Path d="M221.66 133.66l-72 72A8 8 0 01136 200v-64H40a8 8 0 010-16h96V56a8 8 0 0113.66-5.66l72 72a8 8 0 010 11.32z" />
    </Svg>
  )
}
