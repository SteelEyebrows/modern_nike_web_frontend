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
		margin-left: auto;
		margin-right: auto;
		margin-top: 1rem;
        margin-bottom: 1rem;
        padding:5px;
        width: 100%;
        max-width: 300px;
		height: min-content;
		overflow: hidden;
		transition: 0.3s;
        background:green;
        .colors{
            font-family: 'GmarketSansLight';
        }
		&:hover {
			
		}
	}
    .label{
        display:flex;
        .name{
            width:60%;
            height:50px;
            background:red;
            font-family: 'GmarketSansBold';
        }
        .price{
            width:40%;
            height:50px;
            background:pink;
            font-family: 'GmarketSansLight';
        }
    }

	.image {
        display: block;
        width: 100%;
        height: auto;
	}
`;