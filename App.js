/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Button, SafeAreaView, StatusBar} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const App = () => {
  const [value, setValue] = useState(new Date());
  const [pickerVisible, setPickerVisible] = useState(false);

  const onDateChange = (e, nextValue) => {
    if (nextValue) {
      setValue(nextValue);
    }
    setPickerVisible(false);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {pickerVisible ? (
          <DateTimePicker
            value={value}
            mode="time"
            display="spinner"
            onChange={onDateChange}
          />
        ) : (
          <Button
            title="Show Time Spinner"
            onPress={() => setPickerVisible(true)}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default App;
