
import { useEffect, useState } from "react";
import apiHashtags from "../../../services/apiHashtags";
import { Container, TagsContainer, Header } from "./styledTrending";
import TagName from "./TagName";

export default function TrendingTags() {
    const [tags, setTags] = useState([])
    useEffect(() => getTrendingList(), [])
    console.log(tags)
    function getTrendingList(){
        apiHashtags.getTrending()
        .then(res => {
            setTags(res.data)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <Container>
            <Header>trending</Header>
            <TagsContainer>
                {tags ? tags.map((tag) => {
                    return <TagName key={`${tag}`} name={"# " + tag} />;
                }) : <></>}
            </TagsContainer>
        </Container>
    );


}

