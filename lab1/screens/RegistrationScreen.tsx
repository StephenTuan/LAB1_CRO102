import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text,ScrollView } from 'react-native';
import { useTheme } from '../components/ChoThem/Theme';
import Block from '../components/ChoThem/Block';
import Banner from '../components/ChoThem/Banner';
import Buttonnn from '../components/ChoThem/Buttonnn';
import ThemedTextInput from '../components/ChoThem/TextInput';


const getStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  themeButton: {
    padding: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    alignItems: 'center',
    width:'50%',
    alignSelf: 'center',
    marginBottom: 5
  },
  themeButtonText: {
    color: theme.colors.buttonText,
    fontWeight: 'bold',
  },
});

const RegistrationScreen = () => {
  const { theme, toggleTheme } = useTheme();

  if (!theme || !theme.colors) {
    return null;
  }

  const themedStyles = getStyles(theme);

  return (
    <ScrollView>
      <View style={themedStyles.container}>
      <Block title="Thông tin cá nhân">
        <ThemedTextInput placeholder="Họ và tên" />
        <ThemedTextInput placeholder="Email" />
        <ThemedTextInput placeholder="Số điện thoại" />
      </Block>
      <Block title="Thông tin khóa học">
        <ThemedTextInput placeholder="Tên khóa học" />
        <ThemedTextInput placeholder="Giảng viên" />
        <ThemedTextInput placeholder="Lịch học" />
      </Block>
      <Block title="Thông tin liên hệ">
        <ThemedTextInput placeholder="Địa chỉ" />
        <ThemedTextInput placeholder="Thành phố" />
        <ThemedTextInput placeholder="Quốc gia" />
      </Block>
      <Banner imageUrl={'https://reactnative.dev/img/logo-og.png'}/>
      <Buttonnn  />
      <TouchableOpacity onPress={toggleTheme} style={themedStyles.themeButton}>
        <Text style={themedStyles.themeButtonText}>Switch to {theme.dark ? 'Light' : 'Dark'} Mode</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

export default RegistrationScreen;