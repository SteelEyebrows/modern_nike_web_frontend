import styled from 'styled-components';


export const DetailContainer =styled.div`
    display: flex;
    margin-top:30px;    
    width: 100%;
    .right_imageSet{
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        width:55%;
        .image{
            display: flex;
            width:80%;
            height:auto;
            margin: 0 auto;
        }
    }

    .left_productInfo{
        width:45%;
        .Upper{
            display:flex;
            justify-content: center;
	        align-items: center;
            height:150px;
            &__left{
                font-family: 'GmarketSansBold';
                width:70%;
                &__name{
                    font-size:1.5em;
                    font-family: 'GmarketSansBold';
                }
                &__color{
                    font-family: 'GmarketSansLight';
                }
            }
            &__right{
                font-family: 'GmarketSansLight';
                width:30%;
            }                
        }
        .colorSelector{
            display:flex;
            height:auto;
            &__color{
                img{
                    width:100px;
                    height:100px;
                    margin:4px;
                }
                &:hover {
                    opacity: 0.7;
                  }
            }
        }
        .sizeSelector{
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap:1em;
            text-align:center;
            &__inStock{
                border: 2px solid #000;
                cursor:pointer;
                &__clicked{
                    background-color:black;
                    color:white;
                }
            }
            &__soldOut{
                color:#ddd;
                border: 1px solid #ddd;
                cursor:pointer;
            }
        }

        .quantity{
            height:100px;
            font-size:1rem;
            padding:3em;
            &__controller{
                display:flex;
                margin:1em;
                p{
                    width:20px;
                }
                button{
                    width:20px;
                    height:20px;
                    border:none;
                    background:#ddd;
                    cursor:pointer;
                }
            }
        }
        .buyNow{
            height:80px;
            background-color:black;
            border-radius: 35px;
        }
    }    
`;

