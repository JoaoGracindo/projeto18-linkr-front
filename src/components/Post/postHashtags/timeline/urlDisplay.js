import urlMetadata from 'url-metadata';


export default function LinkDisplay({link}){

    const {url, title, image, description} =urlMetadata(link)

    return(
        <a href={url}>
            <div>
                <div>
                    <h1> {title} </h1>
                    <h2> {description} </h2>
                    <h3> {url} </h3>
                </div>
                <img src={image}/>
            </div>
        </a>
    )
}