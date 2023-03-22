import { StyledPost } from "./styled"
import LikeButton from "../LikeButton"

export default function PostComponent({id, pic_url, name, description, url_metadata, liked, likersNames, likesCount}){
    return(
        <StyledPost>
        <div className='leftContainer'>
        <img className='user-img' src={pic_url} alt={`${name}'s`} />
          <LikeButton post_id={id} liked={liked} likersNames={likersNames} likesCount={likesCount}/>
        </div>
        <div className='rightWrapper'>
          <div className='nameContainer'>
            <p>
              {name}
            </p>
            <div className='post-options'>

            </div>
          </div>
          <div className='contentContainer'>
            <div className='description' >
              {description}
            </div>
            <div className='link'>
              <div className='metadata-text'>
                <div className='metadata-title'>
                  {url_metadata.title}
                </div>
                <div className='metadata-description'>
                  {url_metadata.description}
                </div>
                <div className='metadata-url'>
                  <a href={`${url_metadata.url}`} target="_blank" rel='noreferrer'>{url_metadata.url}</a>
                </div>

              </div>
              <img className='metadata-img' src={`${url_metadata.image}`} alt={`${url_metadata.image}`} />
            </div>
          </div>
        </div>
      </StyledPost>
    )
}