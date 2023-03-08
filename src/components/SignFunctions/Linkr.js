import styled from "styled-components";

export default function Linkr(){

    return(
        <LinkrSpace>
            <div>
                <h1>linkr</h1>
                <h2>save, share and discover the best links on the web</h2>
            </div>
        </LinkrSpace>
    )
}


const LinkrSpace = styled.div`

    background-color: #151515;
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;

    div{
        width: 442px;
        margin-left: 144px;

    }

    h1{
        font-family: 'Passion One';
        font-style: normal;
        font-weight: 700;
        font-size: 106px;
        line-height: 117px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
    }

    h2{
        font-family: 'Oswald', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 43px;
        line-height: 64px;

        color: #FFFFFF;


    }

    @media(max-width: 1121px){

        display: flex;
        justify-content: center;
        height: 175px;

        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 0px;
            width: 237px;
            

            h1{
                font-size: 72px;
                line-height: 84px;
            }
            h2{
                font-size: 23px;
                line-height: 34px;
            }
        }
    }



`