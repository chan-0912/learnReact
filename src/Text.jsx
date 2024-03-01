import React,{memo} from "react";


const Text = memo((props)=>{
    const {children} = props
    console.log(children)
    return <p>{children}</p>
})

export default Text;