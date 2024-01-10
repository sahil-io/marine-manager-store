import {FC, SVGAttributes} from "react";

const MinusIcon: FC<SVGAttributes<SVGElement>> = (props) => {
    return (
        <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M6 12L18 12" stroke="#131A29" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        </svg>
    )
}

export default MinusIcon