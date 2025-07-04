import React from 'react';
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';
import { ThemeProvider, useTheme } from './ChoThem/Theme';
import Block from './ChoThem/Block';
import Banner from './ChoThem/Banner';
import Button from './ChoThem/Buttonnn';
import ThemedTextInput from './ChoThem/TextInput';

const RegistrationScreen = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme();

  return (
    <ScrollView style={[styles.registrationContainer, { backgroundColor: theme.background }]}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10}}>
            <Text style={{color: theme.text}}>Dark Mode</Text>
            <Switch value={isDarkMode} onValueChange={toggleTheme} />
        </View>
      <Banner imageUrl="https://reactnative.dev/img/logo-og.png" />

      <Block title="Thông tin cá nhân">
        <ThemedTextInput placeholder="Họ và tên" />
        <ThemedTextInput placeholder="Email" />
        <ThemedTextInput placeholder="Số điện thoại" />
      </Block>

      <Block title="Thông tin khóa học">
        <ThemedTextInput placeholder="Tên khóa học" />
        <ThemedTextInput placeholder="Cấp độ" />
        <ThemedTextInput placeholder="Lịch học mong muốn" />
      </Block>

      <Block title="Thông tin liên hệ">
        <ThemedTextInput placeholder="Địa chỉ" />
        <ThemedTextInput placeholder="Thành phố" />
        <ThemedTextInput placeholder="Quốc gia" />
      </Block>

      <Button title="Đăng ký" onPress={() => alert('Đăng ký thành công!')} />
    </ScrollView>
  );
};

const ChoThemCustom = () => (
    <ThemeProvider>
        <RegistrationScreen />
    </ThemeProvider>
)

export default ChoThemCustom;

const styles = StyleSheet.create({
  registrationContainer: {
    flex: 1,
  },
});