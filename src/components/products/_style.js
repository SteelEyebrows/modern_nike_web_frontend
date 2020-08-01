import styled, { keyframes } from 'styled-components';

export const ProductList =styled.div`
    display: grid;
	padding: 1rem;
	background: #ededed;

	@media (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 1rem;
	}

	.container {
        opacity: 0;
		max-width: 300px;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		margin-top: 1rem;
		margin-bottom: 1rem;
		height: min-content;
		overflow: hidden;
		transition: 0.3s;
		text-align: center;
        background:green;
		&:hover {
			
		}
	}
    .label{
        display:flex;
        .name{
            background:red;
            width:60%;
            height:50px;
        }
        .price{
            background:pink;
            width:40%;
            height:50px;
        }
    }
	.image {
        display: block;
        width: 100%;
        height: auto;
	}
`;