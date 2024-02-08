import classNames from "classnames"

const FeatureCard = (props)=>{
    return(
        <>
            <div 
            className={classNames(
                "absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br gradient", props.gradient)}
            >
                {props.children}
            </div>
        </>
    )
}

export const Todo = (props)=>{
    return(
        <FeatureCard id = {props.id} gradient = "from-[#f7f0ff] to-[#a78afe]">
            <span />
        </FeatureCard>
    )
}


export const Colors = (props)=>{
    return(
        <FeatureCard id = {props.id} gradient = "from-[#f5fbff] to-[#addeff]">
            <span />
        </FeatureCard>
    )
}

export const Availability = (props)=>{
    return(
        <FeatureCard id = {props.id} gradient = "from-[#f5fff7] to-[#adf8ff]">
            <span />
        </FeatureCard>
    )
}

export const Music = (props)=>{
    return(
        <FeatureCard id = {props.id} gradient = "from-[#f7fff5] to-[#adffd8]">
            <span />
        </FeatureCard>
    )
}

export const ScheduleLinks = (props)=>{
    return(
        <FeatureCard id = {props.id} gradient = "from-[#fff7f5] to-[#ffd8ad]">
            <span />
        </FeatureCard>
    )
}

export const Team = (props)=>{
    return(
        <FeatureCard id = {props.id} gradient = "from-[#fef5ff] to-[#ffade1]">
            <span />
        </FeatureCard>
    )
}