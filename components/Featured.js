import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/Cart";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
background-color:#222;
color:#fff;
padding:50px 0;
`;
const Title = styled.h1`
margin:0;
font-weight:normal;
font-size:3rem;
`;
const Desc = styled.p`
color:#aaa;
font-size:.9rem;
`;
const ColumnsWrapper = styled.div`
display:grid;
grid-template-columns: 1.1fr 0.9fr;
gap:40px;
img{
    max-width:100%;
}
`;
const Column = styled.div`
display:flex;
align-items:Center;
img{
    max-width:80%;
    max-height:100%;
}

`;

const ButtonsWrapper = styled.div`
display:flex;
gap:10px;
margin-top:30px;
`;

export default function Featured({ product }) {
    const {addProduct} = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product._id);
  }
    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title>{product.title}</Title>
                            <Desc>{product.description}</Desc>
                            <ButtonsWrapper>
                                <ButtonLink href={'/product/' + product._id} outline={1} white={1
                                } >Read more</ButtonLink>
                                <Button white onClick={addFeaturedToCart}>
                                    <CartIcon />
                                    Add to cart
                                </Button>
                            </ButtonsWrapper>
                        </div>
                    </Column>
                    <Column>
                        <img src="https://th.bing.com/th/id/R.b6e1a89830879e4cdef640652dfa5f6e?rik=uOzL6vh8%2fg8yiQ&pid=ImgRaw&r=0" alt="" />
                    </Column>
                </ColumnsWrapper>
            </Center>
        </Bg>
    )
}