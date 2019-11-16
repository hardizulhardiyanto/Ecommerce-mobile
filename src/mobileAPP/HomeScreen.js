import React from "react";
import { Image } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem, Thumbnail, List, ListItem } from "native-base";


export default class HomeScreen extends React.Component {
  render() {
    const items = ['Daniel Michael Blake Day-Lewis', 'Kiefer William Frederick Dempsey George Rufus Sutherland', 'Isabella Fiorella Elettra Giovanna Rossellini', 'Charles Philip Arthur George Mountbatten-Windsor', 'Johannes Chrysostomus Wolfgangus Theophilus Mozart'];
    const data = ['']
    return (
      <Container>
        <Header>
          <Right>
            <Body>
              <Title>Ecommerce App</Title>
            </Body>
          </Right>
          <Left>
            <Button full rounded dark
              onPress={() => this.props.navigation.navigate("Add")}>
              <Text>Add Data</Text>
            </Button>
          </Left>
        </Header>
        <Content>
          <List dataArray={items}
            Vertical
            renderRow={(item) =>
              <ListItem>
                <Card>
                  <CardItem cardBody>
                    <Image source={require('../stylesheets/xiaomi-mi-9-2.jpg')} style={{ width: 320, height: 300 }} resizeMode="contain" />
                  </CardItem>
                  <CardItem style={{ width: 200 }}>
                    <Text numberOfLines={1}>{item}</Text>
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
                    onPress={() => this.props.navigation.navigate("Detail")}>
                    <Text style={{justifyContent: "flex-start"}}>Detail</Text>
                  </Button>
                </Card>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    );
  }
}
