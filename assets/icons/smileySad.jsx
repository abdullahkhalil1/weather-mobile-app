import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const SmileySadIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      fill={props.fill}
      viewBox="0 0 256 256"
      {...props}
    >
      <Path d="M128 20a108 108 0 10108 108A108.12 108.12 0 00128 20zm0 192a84 84 0 1184-84 84.09 84.09 0 01-84 84zM76 108a16 16 0 1116 16 16 16 0 01-16-16zm104 0a16 16 0 11-16-16 16 16 0 0116 16zm-3.26 57a12 12 0 01-19.48 14 36 36 0 00-58.52 0 12 12 0 01-19.48-14 60 60 0 0197.48 0z" />
    </Svg>
  )
}