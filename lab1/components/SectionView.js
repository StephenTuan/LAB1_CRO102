import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const SectionView = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.content}>
        <View style={styles.colum}>
            <Text style={styles.label}>{props.t1}</Text>
            <Text style={styles.value}>{props.d1}</Text>
        </View>
        <View style={styles.colum}>
            <Text style={styles.label}>{props.t2}</Text>
            <Text style={styles.value}>{props.d2}</Text>
        </View>
        <View style={styles.colum}>
            <Text style={styles.label}>{props.t3}</Text>
            <Text style={styles.value}>{props.d3}</Text>
        </View>
        <View style={styles.colum}>
            {props.t4 && <Text style={styles.label}>{props.t4}</Text>}
            {props.d4 && <Text style={styles.value}>{props.d4}</Text>}
        </View>
        <View style={styles.colum}>
            {props.t5 && <Text style={styles.label}>{props.t5}</Text>}
            {props.url && <Image style={styles.image} source={{uri: props.url}} />}
        </View>
        {props.textbtn && (
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{props.textbtn}</Text>
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default SectionView

const styles = StyleSheet.create({
    container: {
        margin: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    colum: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    label: {
        fontSize: 14,
        color: 'gray',
    },
    value: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginTop: 5,
    },
    button: {
        backgroundColor: 'blue',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 15,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    }

})