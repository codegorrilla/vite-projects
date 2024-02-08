import classNames from "classnames"
import {useRef} from "react"
import {useInView} from "framer-motion"

export const Title = (props)=>{

    const ref = useRef(null)

    const isInView = useInView(ref, {margin: "-50% 0px -50% 0px"})

    console.log(isInView)

    return(
        <p ref={ref} className={
            classNames("feature-title py-16 font-heading text-5xl transition-colors", isInView ? "text-black": "text-gray-300")}>
            {props.children}
        </p>
    )
}