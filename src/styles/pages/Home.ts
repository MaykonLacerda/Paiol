import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }
  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }

  button {
    margin: 45px;
    box-shadow:inset 0px 1px 0px 0px #276873;
	background-color:transparent;
	border-radius:6px;
	border:1.5px solid #FFF;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Roboto;
	font-size:30px;
	font-weight:bold;
	padding:6px 100px;
	text-decoration:none;
    text-shadow:0px 1px 0px #3d768a;
    transition: 0.25s;
    &:hover {
        border:1.5px solid #29668f;
        color:#29668f;
  }
  &:active {
	position:relative;
	top:1px;
}
`
