import Svg, { Path } from "react-native-svg"

export const HumidityIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="#6fa3eb"
      viewBox="0 0 256 256"
      {...props}
    >
      <Path d="M174 47.75a254.19 254.19 0 00-41.45-38.3 8 8 0 00-9.18 0A254.19 254.19 0 0082 47.75C54.51 79.32 40 112.6 40 144a88 88 0 00176 0c0-31.4-14.51-64.68-42-96.25zM128 26c14.16 11.1 56.86 47.74 68.84 94H59.16C71.14 73.76 113.84 37.12 128 26z" />
    </Svg>
  )
}
