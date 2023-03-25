import styled from "styled-components";

export default function ShareBar(reposted_by){
    return(
        <StyledBar>
            <div>
				<img src="assets/share.svg"/>
				<p>Re-posted by <span>{reposted_by}</span></p>
			</div>
        </StyledBar>
    )
}

const StyledBar = styled.div`
	width: 611px;
	height: 50px;
	position: absolute;
	top: -33px;
	left: 0px;
	background-color: #1E1E1E;
	border-radius: 16px 16px 0px 0px;
	z-index: -1;
    display: ${props => !props.reposted_by && "none"};

	div{
		display: flex;
		align-items: center;
		margin: 11px 13px;

	}

	img{
		width: 20px;
		height: 12px;
		margin-right: 6px;
	}

	p{
		font-family: 'Lato';
		font-size: 11px;
		line-height: 13px;
		color: #FFFFFF;
	}

	span{
		font-weight: 700;
	}
`
