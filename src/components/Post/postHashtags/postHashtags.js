import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";

const tagStyle = {
    colors: "white",
    fontWeigth: 700,
    cursor: 'pointer'
}

export default function PostHashtags({children}){
    const navigate = useNavigate()
    return(
        <ReactTagify
            colors={"white"} 
            tagStyle={tagStyle}
            tagClicked={(tag) => {
                tag = tag.substring(1)
                navigate(`/hashtags/${tag}`)
            }}>
            {children}
        </ReactTagify>
    )
}