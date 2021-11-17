import React, { useState } from "react";
import Button from "../../Components/Button";
import Text from "../../Components/Text";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Button onClick={() => setCount(count - 1)}> - </Button>
      <Text count={count} />
      <Button onClick={() => setCount(count + 1)}> + </Button>
    </>
  );
}

export default Counter;
