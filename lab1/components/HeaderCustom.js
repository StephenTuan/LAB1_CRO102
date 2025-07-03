import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

const Header = (props) => {
  const { 
    title, 
    onPressLeft, 
    iconLeft, 
    iconLeftColor,
    leftComponent,
    leftIconSize = 24,
    centerComponent,
    numberOfLines = 1,
    rightComponent,
    iconRight,
    onPressRight,
    rightIconSize = 24,
    containerStyle
  } = props;

  const renderLeft = () => {
    return (
      <View style={styles.containerLeft}>
        {leftComponent || (
          <Pressable hitSlop={15} onPress={onPressLeft}>
            {iconLeft ? (
              <Image
                source={iconLeft}
                style={{ width: leftIconSize, height: leftIconSize, tintColor: iconLeftColor }}
              />
            ) : (
              <View style={{ width: leftIconSize, height: leftIconSize }} />
            )}
          </Pressable>
        )}
      </View>
    );
  };

  const renderCenter = () => {
    return (
      centerComponent || (
        <View style={styles.containerCenter}>
          <Text style={styles.title} numberOfLines={numberOfLines}>
            {title}
          </Text>
        </View>
      )
    );
  };

  const renderRight = () => {
    return (
      <View style={styles.containerRight}>
        {rightComponent || (
            <Pressable hitSlop={15} onPress={onPressRight}>
                {iconRight ? (
                    <Image source={iconRight} style={{width: rightIconSize, height: rightIconSize}}/>
                ) : (
                    <View style={{width: rightIconSize, height: rightIconSize}}/>
                )}
            </Pressable>
        )}
      </View>
    );
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {renderLeft()}
      {renderCenter()}
      {renderRight()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  containerLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  containerCenter: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Header;