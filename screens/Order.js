import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'

const Order = ({ route }) => {
    const items = route.params.items
    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={items}
                keyExtractor={item => item.name}
                renderItem={({ item }) => <View>
                    <Text style={{ fontFamily: '', fontWeight: '500', fontSize: 20 }}>{item.name}</Text>
                </View>
                }
            />
            <View><Text style={{ fontWeight: 'bold', fontSize: 20 }}>+___________________________________</Text></View>
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginRight: 35 }}>{items.length * 5} $</Text>
        </View>
    )
}

export default Order

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20%',
    },

})