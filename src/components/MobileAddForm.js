import React from "react";
import {connect} from "react-redux";
import { StyleSheet, View, TextInput } from 'react-native';
import { Container, Header, Picker, ListItem, Radio, Form, Item, Label, Input, Title, Left, Icon, Textarea, Right, Button, Body, Content, Text, Card, CardItem, Row } from "native-base";
import { dispatch } from "rxjs/internal/observable/pairs";

import {postProduct} from "../actions/data";

class MobileAddForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      rate: '',
      capacity: '',
      brand: '',
      description: '',
      price: '',
      stok: '',
      colors: '',
      detail: ''
    };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleBrand = this.handleBrand.bind(this);
    this.handleDescriptions = this.handleDescriptions.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleStok = this.handleStok.bind(this);
    this.handleColors = this.handleColors.bind(this);
    this.handleDetail = this.handleDetail.bind(this);
    this.addButtonAction = this.addButtonAction.bind(this);


  }

  handleTitle(value) {
    this.setState({ title: value });
  }

  handleBrand(value) {
    this.setState({ brand: value })
  }

  handleDescriptions(value) {
    this.setState({ description: value })
  }

  handlePrice(value) {
    this.setState({ price: value })
  }

  handleStok(value) {
    this.setState({ stok: value })
  }

  handleColors(value) {
    this.setState({ colors: value })
  }

  handleDetail(value) {
    this.setState({ detail: value })
  }

  onValueChangeCapacity(value) {
    this.setState({
      capacity: value
    });
  }

  onValueChangeRate(value) {
    this.setState({
      rate: value
    });
  }

  addButtonAction() {
    console.log('state > ', this.state.title);
    
    this.props.postProduct(
      this.state.rate,
      this.state.capacity,
      this.state.title,
      this.state.brand,
      this.state.description,
      this.state.price,
      this.state.stok,
      this.state.colors,
      this.state.detail);

    this.setState({ rate: '',
    capacity: '',
    title: '',
    brand: '',
    description: '',
    price: '',
    stok: '',
    colors: '',
    detail: '' })

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

            <Item floatingLabel last>
              <Label>Title</Label>
              <Input placeholder="Enter title here" onChangeText={this.handleTitle} />
            </Item>

            <Item fixedLabel>
              <Label>Rate</Label>
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
                      selectedValue={this.state.rate}
                      onValueChange={this.onValueChangeRate.bind(this)}
                    >
                      <Picker.Item label="1" value="1" />
                      <Picker.Item label="2" value="2" />
                      <Picker.Item label="3" value="3" />
                      <Picker.Item label="4" value="4" />
                      <Picker.Item label="5" value="5" />
                    </Picker>
                  </Item>
                </Form>
              </Content>
            </Item>

            <Item floatingLabel last>
              <Label>Brand</Label>
              <Input onChangeText={this.handleBrand} />
            </Item>

            <Item>
              <Label>Description</Label>
              <Content padder>
                <Form>
                  <Textarea rowSpan={5} bordered placeholder="Textarea" onChangeText={this.handleDescriptions} />
                </Form>
              </Content>
            </Item>

            <Item floatingLabel last>
              <Label>Price</Label>
              <Input onChangeText={this.handlePrice} />
            </Item>

            <Item floatingLabel last>
              <Label>Stok</Label>
              <Input onChangeText={this.handleStok} />
            </Item>

            <Item>
              <Label>Color</Label>
              <Input onChangeText={this.handleColors} />
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
                      selectedValue={this.state.capacity}
                      onValueChange={this.onValueChangeCapacity.bind(this)}
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
                  <Textarea rowSpan={5} bordered placeholder="Textarea" onChangeText={this.handleDetail} />
                </Form>
              </Content>
            </Item>

            <Item>
              <Label>Insert Image</Label>
              <Input />
            </Item>

          </Form>

          <Row>
            <Button bordered danger style={{ margin: 20, }} onPress={() => this.props.navigation.navigate("Home")}>
              <Text>Cancle</Text>
            </Button>
            <Button bordered primary style={{
              padding: '10%', margin: 20, left: 50
            }} onPress={this.addButtonAction}>
              <Text>Save</Text>
            </Button>
          </Row>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  postProduct: (rate,
    capacity,
    title,
    brand,
    description,
    price,
    stok,
    colors,
    detail) => dispatch(postProduct(
      rate,
      capacity,
      title,
      brand,
      description,
      price,
      stok,
      colors,
      detail))
})
export default connect(
  null,
  mapDispatchToProps
)(MobileAddForm)
