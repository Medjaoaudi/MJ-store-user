import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";


const StyleHeader = styled.header`
   background-color: #222;
`;
const Logo = styled(Link)`
    color: #fff;
    text-decoration:none;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`;
const StyledNav = styled.nav`
    display:flex;
    gap:20px;
`;
const NavLink = styled(Link)`
    color : #aaa;
    text-decoration:none;
`;

export default function Header() {
    const {cartProducts} = useContext(CartContext);
    return (
        <StyleHeader>
            <Center>
                <Wrapper>
                    <Logo href={'/'} >MJ-Store</Logo>
                    <StyledNav>
                        <NavLink href={'/'} >Home</NavLink>
                        <NavLink href={'/products'} >Products</NavLink>
                        <NavLink href={'/categories'} >Categories</NavLink>
                        <NavLink href={'/cart'} >Cart ({cartProducts.length})</NavLink>
                        <NavLink href={'/account'} >Account</NavLink>
                    </StyledNav>
                </Wrapper>
            </Center>
        </StyleHeader>
    )
}