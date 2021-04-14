import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import images from '../components/Images'

const Home = ({ navigation }) => {

    const liked = require('../images/liked.png');
    const unliked = require('../images/unliked.png');

    const order = require('../images/order.png');

    const [likes, setLikes] = useState([]);
    const [isRefreshing, setRefreshing] = useState(false);
    const [orders, setOrders] = useState([]);

    const refreshHandler = () => {
        setRefreshing(true);
        setLikes([]);
        setOrders([]);
        setTimeout(() => {
            setRefreshing(false)
        }, 700)
    }

    const orderPressHandler = (item) => {
        setOrders([...orders, item])
        Alert.alert('Added', `${item.name} added to your cart. Total ${orders.length + 1} books in your cart.`, [], { cancelable: true })
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => navigation.navigate('Order', { items: orders })}
                    style={styles.button1}>
                    <Text style={styles.text}>Order Cart</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Favourites', { items: likes })}
                    style={styles.button2}>
                    <Text style={styles.text}>Favourites</Text></TouchableOpacity>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={2}
                key={2}
                data={images}
                keyExtractor={item => item.name}
                renderItem={({ item }) => <View style={styles.imgContainer}>
                    <Image style={styles.image} source={item.image} />
                    <Text style={{ textAlign: 'center', flexShrink: 1 }}>{item.name}</Text>
                    <View style={styles.icons}>
                        <TouchableOpacity onPress={() => setLikes([...likes, item])}>
                            <Image style={styles.heart}
                                source={likes.includes(item) ? liked : unliked}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => orderPressHandler(item)}>
                            <Image style={styles.order}
                                source={order}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                }
                refreshing={isRefreshing}
                onRefresh={refreshHandler}
            />
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        right: '6%',
        marginBottom: 15,
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: 20,
        resizeMode: 'contain',
        borderRadius: 10,
        borderBottomWidth: 2,
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 35,
        paddingVertical: 10,
        backgroundColor: '#CFD8B3',
        opacity: 0.4
    },
    button1: {
        marginHorizontal: 40,
        backgroundColor: '#4ea8de',
        borderRadius: 20,

    },
    button2: {
        marginHorizontal: 40,
        backgroundColor: '#5390d9',
        borderRadius: 20,
    },
    text: {
        fontWeight: '700',
        color: 'black',
        fontSize: 20,
        padding: 15,

    },
    heart: {
        marginLeft: 70,
        width: 25,
        height: 25,
        marginTop: 5,

    },
    imgContainer: {
        width: 200,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingVertical: 10,
    },
    order: {
        width: 25,
        height: 25,
        marginLeft: 15,
    },
    icons: {
        flexDirection: 'row',

    }
});