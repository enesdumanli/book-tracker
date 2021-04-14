import React from 'react'
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'

const Favourites = ({ route }) => {
    const items = route.params.items
    return (
        <View style={{ right: '6%', marginBottom: 20 }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={items}
                keyExtractor={item => item.name}
                renderItem={({ item }) => <View style={{ width: 200 }}>
                    <Image style={styles.image} source={item.image} />
                    <Text style={{ fontWeight: '600', fontSize: 22, width: '100%', marginLeft: '50%', flexShrink: 1 }}>{item.name}</Text>
                </View>
                }
            />
        </View>
    )
}

export default Favourites;

const styles = StyleSheet.create({

    image: {
        width: 400,
        height: 400,
        marginVertical: 20,
        resizeMode: 'contain',
        borderRadius: 10,
    },

})
