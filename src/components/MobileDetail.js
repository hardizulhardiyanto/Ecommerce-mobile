import React from "react";
import { request } from "../helpers/accessAPI";
import { Image, View } from "react-native";
// import ItemImage from "../components/mobileDetail/ItemImage";


import { Container, Header, Picker, ListItem, Radio, Form, Item, Label, Input, Title, Left, Icon, Textarea, Right, Button, Body, Content, Text, Card, CardItem, List, Items, Row } from "native-base";

export default class MobileDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      colors: [''],
      capacities: [],
      sizes: [],
      testimonials: [],
      _id: '',
      itemId: '',
      title: '',
      price: '',
      description: '',
      detail: '',
      brand: '',
      stock: '',
      filename: '',
      vote: '',
      rate: ''

    };


  }



  render() {
    let http = "http://192.168.42.234:3001"


    let {
      title,
      filename,
      brand,
      vote,
      rate,
      price,
      stock,
      colors,
      description,
      detail } = this.props.productDetail;

    const items = ['Daniel Michael Blake Day-Lewis', 'Kiefer William Frederick Dempsey George Rufus Sutherland', 'Isabella Fiorella Elettra Giovanna Rossellini', 'Charles Philip Arthur George Mountbatten-Windsor', 'Johannes Chrysostomus Wolfgangus Theophilus Mozart'];



    let uri = http + filename
    let fileImage = { uri }
    // let capacity = productDetail.capacity || [];
    // let sizes = productDetail.sizes || [];
    // testimonials = testimonials || [];
    // let numberOfLines = MbTestimonials.length;
    // let itemImage = { uri: filename };

    return (
      <Container>
        <Header style={{ backgroundColor: '#156cb3' }}>
          <Right>
            <Body>
              <Title>Detail Product</Title>
            </Body>
          </Right>
        </Header>
        <Content>
          <ListItem>
            <Card>
              <List dataArray={items}
                horizontal
                renderRow={(item) =>
                  <ListItem>
                    <Card>
                      <CardItem style={{ backgroundColor: '#156cb3' }}>
                        <Image source={require('../stylesheets/xiaomi-mi-9-2.jpg')} style={{ width: 300, height: 300, justifyContent: 'center' }} resizeMode="contain" />
                      </CardItem>
                    </Card>
                  </ListItem>
                }>
              </List>

              {/* <CardItem cardBody>
                <Image source={fileImage} style={{ width: 320, height: 300 }} resizeMode="contain" />
              </CardItem> */}
              <CardItem>
                <Text style={{ fontSize: 30 }}> {title} </Text>
              </CardItem>
              <Item style={{ width: 300 }}>
                <Text style={{ color: 'blue' }}> {`brand : ${brand}. (${vote}Votes)`} </Text>
              </Item>
              <Item>
                <Label>Rate : </Label>
                <Text> {rate} </Text>
              </Item>
              <Item stackedLabel>
                <Label style={{ fontSize: 17 }}>Description : </Label>
                <Text style={{ width: 280 }} >
                  {description}
                </Text>
              </Item>
              <Item>
                <Label>Price : </Label>
                <Text> {price} </Text>
              </Item>
              <Item>
                <Label>Colors : </Label>
                <Text> {colors} </Text>
              </Item>
              <Item>
                <Label>Stock : </Label>
                <Text> {stock} </Text>
              </Item>
              <Item stackedLabel>
                <Label style={{ fontSize: 17 }} >Detail : </Label>
                <Text style={{ width: 280 }} >
                  {detail}
                </Text>
              </Item>

              <Button full rounded success
                onPress={() => this.props.navigation.navigate("Home")} style={{ margin: 20 }}>
                <Text style={{ justifyContent: "flex-start" }}>Back</Text>
              </Button>
            </Card>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

