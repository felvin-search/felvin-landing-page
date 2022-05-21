import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

import styled from "styled-components";
import SubmitEmail from "../helpers/updateSheet";
import updateSheetValues from "../helpers/updateSheet";
const SearchForm = styled.div`
  margin-top: 1rem;
  padding: 0;
  outline: none;
  position: relative;
  display: flex;
  border: black solid 1.2px;
  border-radius: 3rem;
  height: 3.8rem;
  width: clamp(20rem, 40vw, 35rem);
  overflow: hidden;
  background: white;
`;

const Input = styled(motion.input)`
  border: none;
  padding-left: 2rem;
  font-size: larger;
  background: transparent;
  color: black;
  height: 100%;
  width: 60%;
  &:focus {
    outline: none;
  }
`;
const Wishlist = styled(motion.div)`
  //padding: 1em;
  font-size: larger;
  border-radius: 2rem;
  margin-left: auto;
  height: 100%;
  width: 40%;
  cursor: pointer;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
function WishlistBar() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const [clicked, setClicked] = useState(false);
  const [email, setEmail] = useState("");
  const handleWishlist = () => {
    if (email.length) {
      setClicked(true);
      sequence();
      SubmitEmail(email)
    }
    
  };
  const sequence = async () => {
    await controls1.start({ width: 0 });
    await controls2.start({ width: "100%" });
    return await controls1.start({ display: "none" });
  };
  return (
    <SearchForm>
      <Input
        animate={controls1}
        transition={{ duration: 0.1 }}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Your Email"
      />
      <Wishlist
        animate={controls2}
        transition={{ duration: 0.4 }}
        onClick={handleWishlist}
      >
        {!clicked ? "Get early access" : "You are now on the list 😎"}
      </Wishlist>
    </SearchForm>
  );
}

export default WishlistBar;
