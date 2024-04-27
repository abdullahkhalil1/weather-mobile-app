import Svg, { Path } from "react-native-svg"

export const SearchIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="white"
      viewBox="0 0 256 256"
      {...props}
    >
      <Path d="M232.49 215.51L185 168a92.12 92.12 0 10-17 17l47.53 47.54a12 12 0 0017-17zM44 112a68 68 0 1168 68 68.07 68.07 0 01-68-68z" />
    </Svg>
  )
}
