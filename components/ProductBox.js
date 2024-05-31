import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/Cart";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductWrapper = styled.div`


`;
const WhiteBox = styled(Link)`
background-color:#fff;
padding:20px;
height:120px;
text-align:center;
display:flex;
align-items:center;
justify-content:center;
border-radius:10px;
img{
    max-width:100%;
    max-height:90px;
}
`;
const Title = styled(Link)`
  font-weight: normal;
  font-size:1rem;
  color:inherit;
  text-decoration:none;
  margin:0;
`;
const ProductInfoBox = styled.div`
  margin-top: 7px;
`;
const PriceRow = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin-top:3px;
`;
const Price = styled.div`
font-size:1.5rem;
font-weight:600;
`;

export default function ProductBox({ _id, title, description, price, images }) {
    const { addProduct } = useContext(CartContext);
    const url = '/product/' + _id;
    return (
        <ProductWrapper>
            <WhiteBox href={url}>
                <div>
                    <img src={images?.[0]} alt="" />
                </div>
            </WhiteBox>
            <ProductInfoBox>
                <Title href={url}>{title}</Title>
                <PriceRow>
                    <Price>(TDN){price}</Price>
                    <Button onClick={() => addProduct(_id)} primary outline><CartIcon />Add.To.Cart</Button>
                </PriceRow>
            </ProductInfoBox>
        </ProductWrapper>

    );
}