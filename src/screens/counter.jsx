import React, { useState } from "react";
import { View, Text, Button } from "react-native";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <View>
      <Text>{count}</Text>
      <Button title="+" onPress={incrementCount} />
      <Button title="-" onPress={decrementCount} />
    </View>
  );
}

export default { Counter };
