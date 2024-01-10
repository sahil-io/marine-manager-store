import {FC, memo, SVGAttributes} from "react";

const CloseIcon: FC<SVGAttributes<SVGElement>> = (props) => {
    return <svg viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M480-438 270-228q-9 9-21 9t-21-9q-9-9-9-21t9-21l210-210-210-210q-9-9-9-21t9-21q9-9 21-9t21 9l210 210 210-210q9-9 21-9t21 9q9 9 9 21t-9 21L522-480l210 210q9 9 9 21t-9 21q-9 9-21 9t-21-9L480-438Z"></path>
    </svg>
}

export default memo(CloseIcon)