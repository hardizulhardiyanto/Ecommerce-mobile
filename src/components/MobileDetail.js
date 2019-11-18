import React from "react";
import { Image } from "react-native";
import ItemImage from "../components/mobileDetail/ItemImage";


import { Container, Header, Picker, ListItem, Radio, Form, Item, Label, Input, Title, Left, Icon, Textarea, Right, Button, Body, Content, Text, Card, CardItem, Row } from "native-base";

export default class MobileDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: null,
      capacity: null,
      size: null,
      clicks: 0,
      show: false,
      liked: false,
      showModal: false,
      activeTab: "detail",
      showAlert: false
    };


  }

  componentDidMount() {
    this.props.LoadItemDetail(this.props._Id);
  }
  
  
  render() {
    
    let { MbDetail, MbTestimonials } = this.props;
    // let colors = MbDetail.colors || [];
    // let capacity = MbDetail.capacity || [];
    // let sizes = MbDetail.sizes || [];
    // let { filename, title, brand, vote, rate, price, category, stock } = MbDetail;
    // testimonials = testimonials || [];
    // let numberOfLines = MbTestimonials.length;
    
    console.log('data MB Component > ', MbDetail);


    return (
      <Container>
        <Header>
          <Right>
            <Body>
              <Title>Detail Product</Title>
            </Body>
          </Right>
        </Header>
        <Content>
          <ListItem>
            <Card>

              <ItemImage />

              <CardItem style={{ width: 200 }}>
                <Text numberOfLines={1}> Name Product </Text>
              </CardItem>
              <CardItem style={{ width: 200 }}>
                <Text> Rate </Text>
              </CardItem>
              <CardItem style={{ width: 200 }}>
                <Text> Description </Text>
              </CardItem>
              <CardItem style={{ width: 200 }}>
                <Text> Price: Rp.12.500 </Text>
              </CardItem>
              <Button full rounded
                onPress={() => this.props.navigation.navigate("Add")}>
                <Text style={{ justifyContent: "flex-start" }}>Detail</Text>
              </Button>
            </Card>
          </ListItem>
          <Row>
            <Button bordered danger style={{ margin: 20, }}
              onPress={() => this.props.navigation.navigate("Home")}
            >

              <Text>Cancle</Text>
            </Button>
            <Button bordered primary style={{
              padding: '10%', margin: 20, left: 50
            }}>
              <Text>Save</Text>
            </Button>
          </Row>
        </Content>
      </Container>
    );
  }
}

