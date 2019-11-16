import React from "react";
import { Image } from "react-native";

import { Container, Header, Picker, ListItem, Radio, Form, Item, Label, Input, Title, Left, Icon, Textarea, Right, Button, Body, Content, Text, Card, CardItem, Row } from "native-base";

export default function ({ filename }) {
    return(

    <CardItem cardBody>
        <Image source={require('../../stylesheets/xiaomi-mi-9-2.jpg')} style={{ width: 320, height: 300 }} resizeMode="contain" />
    </CardItem>

    )
}