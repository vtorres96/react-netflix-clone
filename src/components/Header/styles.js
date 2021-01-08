import styled from 'styled-components';

export const Container = styled.header`
	position: fixed;
	z-index: 999;
	top:0px;
	left: 0px;
	right:0px;
	height: 70px;
	display:flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 30px;
	background: transparent;
	transition:  all ease 0.5s;

	&.black {
		background:#141414;  
	}
`;

export const Logo = styled.div`
	height: 25px;    
`;

export const ImageLogo = styled.img`
	width: 100px;
	margin: -38px 0 0 0;
`;

export const UserAvatar = styled.div`
	height: 35px;
`;

export const ImageAvatar = styled.img`
	height: 100%;
	border-radius: 3px;
`;