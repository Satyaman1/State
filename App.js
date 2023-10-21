import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
const App = () => {
  const [normalName, updateName] = useState("Satya")
  let data = "Iron"

  //state 
  //  ** ky state react native ka feature h?
  // State react js ka feature h, aur react native internally react js ka use krta h jiski vjh se jitne bhi react js ke feature h vo sare react native me use kr skte hai.
  //ek state ka data dusre state me share nhi  kr skte hai ==> thum rule
  function updateNormalName() {
    updateName("Prakash")
  }
  function updateData() {
    data = "Man"
  }
  return (
    <View>
      <Text style={{ fontSize: 30 }}>State Topic</Text>
      <Text style={{ fontSize: 13 }}>{normalName}</Text>
      <Button title='update normal name on press' onPress={updateNormalName} />

      <Text style={{ fontSize: 30 }}>Upatating data varable value below</Text>
      <Text style={{ fontSize: 13 }}>{data}</Text>
      <Button title='update data value on press' onPress={updateData} />
      {/* value will not update because react native render all the variable and update every variable */}
    </View>
  );
};

export default App;
