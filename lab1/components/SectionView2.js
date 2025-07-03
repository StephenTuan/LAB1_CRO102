import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const SectionView2 = ({ sections }) => {
  const renderChild = (item, index) => {
    return (
      <View key={index} style={styles.colum}>
        <Text style={styles.titleChild}>{item.time}</Text>
        <Text style={styles.contentChild}>{item.description}</Text>
      </View>
    );
  };

  const renderSection = (section, index) => {
    return (
      <View key={index} style={styles.section}>
        <Text style={styles.titleSection}>{section.title}</Text>
        <View style={styles.sectionBody}>
          
          {section.data.map(renderChild)}
          <View>
            {section.titleImage && <Text style={styles.titleChild}>{section.titleImage}</Text>}
            {section.url && <Image source={{ uri: section.url }} style={styles.image} />}
          </View>
          {section.textbtn && (
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{section.textbtn}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {sections.map(renderSection)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  colum: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
  container: {
    flex: 1,
  },
  section: {
    marginVertical: 10,
  },
  titleSection: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 15,
  },
  sectionBody: {
    marginHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerChild: {
    flexDirection: 'colum',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  titleChild: {
    fontSize: 14,
    color: 'gray',
  },
  contentChild: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SectionView2;