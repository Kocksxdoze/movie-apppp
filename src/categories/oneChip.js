import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
function OneChip({ name, id, categorieId }) {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleClick = () => {
    setSelectedCategory((prevCategory) => (prevCategory === name ? null : name));
  };
  return (
    <div>

      <Button variant={"chip"}
        onClick={handleClick}
        bg={categorieId === id ? "primary" : "secondary"}
      >{name}</Button>
    </div>
  );
}

export default OneChip;
