import Svg, { Path } from "react-native-svg"

export const ArrowDownIcon = (props) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill={props.fill}
            viewBox="0 0 256 256"
            {...props}
        >
            <Path d="M213.66 101.66l-80 80a8 8 0 01-11.32 0l-80-80A8 8 0 0148 88h160a8 8 0 015.66 13.66z" />
        </Svg>
    )
}
