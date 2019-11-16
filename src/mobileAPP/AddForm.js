import React from "react";
import { StyleSheet, View } from 'react-native';
import { Container, Header, Picker, ListItem, Radio, Form, Item, Label, Input, Title, Left, Icon, Textarea, Right, Button, Body, Content, Text, Card, CardItem, Row } from "native-base";

export default class Test extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
    
    };
    
  }
  onValueChange2(value: String) {
    this.setState({
      selected2: value
    });
  }

  



  render() {
    return (
      <Container>
        <Header>
          <Right>
            <Body>
              <Title>Add Your Product</Title>
            </Body>
          </Right>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Categori</Label>
              <Input />
            </Item>

            <Item floatingLabel last>
              <Label>Title</Label>
              <Input />
            </Item>

            <Item floatingLabel last>
              <Label>Brand</Label>
              <Input />
            </Item>

            <Item>
              <Label>Description</Label>
              <Content padder>
                <Form>
                  <Textarea rowSpan={5} bordered placeholder="Textarea" />
                </Form>
              </Content>
            </Item>

            <Item floatingLabel last>
              <Label>Price</Label>
              <Input />
            </Item>

            <Item floatingLabel last>
              <Label>Stok</Label>
              <Input />
            </Item>

            <Item>
            <Label>Color</Label>
              <Input />
            </Item>

            <Item fixedLabel>
              <Label>Capacity</Label>
              <Content padder>
                <Form>
                  <Item picker>
                    <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="arrow-down" />}
                      style={{ width: undefined }}
                      placeholder="Select your SIM"
                      placeholderStyle={{ color: "#bfc6ea" }}
                      placeholderIconColor="#007aff"
                      selectedValue={this.state.selected2}
                      onValueChange={this.onValueChange2.bind(this)}
                    >
                      <Picker.Item label="16GB" value="key0" />
                      <Picker.Item label="32GB" value="key1" />
                      <Picker.Item label="64GB" value="key2" />
                      <Picker.Item label="128GB" value="key3" />
                      <Picker.Item label="256GB" value="key4" />
                    </Picker>
                  </Item>
                </Form>
              </Content>
            </Item>


            <Item>
              <Label>Detail Product</Label>
              <Content padder>
                <Form>
                  <Textarea rowSpan={5} bordered placeholder="Textarea" />
                </Form>
              </Content>
            </Item>

          </Form>

          <Row>
            <Button bordered danger style={{ margin: 20, }} onPress={() => this.props.navigation.navigate("Home")}>
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

