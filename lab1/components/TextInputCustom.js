import React, { useState, forwardRef } from 'react';
import { View, Text, TextInput as RNTextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const WrapInput = ({ title, required, error, description, children }) => {
  return (
    <View style={styles.wrapContainer}>
      {title && (
        <Text style={styles.title}>
          {title} {required && <Text style={styles.required}>*</Text>}
        </Text>
      )}
      {children}
      {error && <Text style={styles.errorText}>{error}</Text>}
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  );
};

const TextInputCustom = forwardRef((props, ref) => {
  const {
    title,
    required,
    error,
    description,
    style,
    renderLeft,
    renderRight,
    showClear,
    eyePassword,
    ...rest
  } = props;

  const [isFocus, setIsFocus] = useState(false);
  const [text, setText] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(eyePassword);

  const handleFocus = () => setIsFocus(true);
  const handleBlur = () => setIsFocus(false);
  const clearText = () => setText('');
  const toggleSecureTextEntry = () => setSecureTextEntry(!secureTextEntry);

  const borderColor = error ? '#D72D2D' : isFocus ? '#007bff' : '#D1D1D1';
  const backgroundColor = error ? '#ffc0cb' : isFocus ? '#F0F8FF' : 'white';

  return (
    <WrapInput title={title} required={required} error={error} description={description}>
      <View style={[styles.container, { borderColor, backgroundColor }, style]}>
        {renderLeft && renderLeft()}
        <RNTextInput
          ref={ref}
          style={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={text}
          onChangeText={setText}
          placeholderTextColor="#aaa"
          secureTextEntry={secureTextEntry}
          {...rest}
        />
        {showClear && text.length > 0 && (
          <TouchableOpacity onPress={clearText} style={styles.iconContainer}>
            <Text>X</Text>
          </TouchableOpacity>
        )}
        {eyePassword && (
          <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.iconContainer}>
            <Text>{secureTextEntry ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity>
        )}
        {error && (
          <View style={styles.errorIconContainer}>
            <Image source={require('../assets/error.png')} style={styles.errorIcon} />
          </View>
        )}
        {renderRight && renderRight()}
      </View>
    </WrapInput>
  );
});

const styles = StyleSheet.create({
  wrapContainer: {
    marginBottom: 15,
  },
  title: {
    marginBottom: 5,
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold'
  },
  required: {
    color: 'red',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    height: 48,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#333',
  },
  iconContainer: {
    padding: 5,
  },
  errorIconContainer: {
    backgroundColor: '#FFDADA',
    borderRadius: 99,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorIcon: {
    width: 12,
    height: 12,
    tintColor: '#D72D2D',
  },
  description: {
    marginTop: 5,
    fontSize: 12,
    color: 'gray',
  },
  errorText: {
    marginTop: 5,
    fontSize: 12,
    color: 'red',
  },
});

export default TextInputCustom;