import React from "react";
import { Image, View, TouchableOpacity, Alert } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem, Thumbnail, List, ListItem } from "native-base";

export default function MobileItem(props) {

    let {
        _id,
        itemId,
        filename,
        title,
        rate,
        description,
        price,
        testimonials,
        showDetail,
        colRate,
        navigation


    } = props;

    let itemImage = { uri: filename };

    return (

        <List>
            <ListItem>
                <Card>
                    <View>
                        <CardItem cardBody>
                            <Image source={itemImage} style={{ width: 320, height: 300 }} resizeMode="contain" />
                        </CardItem>
                        <CardItem style={{ width: 200 }}>
                            <Text numberOfLines={1}>{title}</Text>
                        </CardItem>
                        <CardItem style={{ width: 200 }}>
                            <Text>{rate}</Text>
                        </CardItem>
                        <CardItem style={{ width: 200 }}>
                            <Text> {description} </Text>
                        </CardItem>
                        <CardItem style={{ width: 200 }}>
                            <Text>{price}</Text>
                        </CardItem>
                        <TouchableOpacity>
                            <Button full rounded onPress={() => {showDetail(_id); props.navigation.navigate('Detail')}}>
                                <Text>Detail</Text>
                            </Button>
                        </TouchableOpacity>
                    </View>
                </Card>
            </ListItem>
        </List>
    );
}

