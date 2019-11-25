import React from "react";
import { connect } from "react-redux";

import {
  StyleSheet,
  View,
  TextInput,
  AppRegistry,
  Text,
  PixelRatio,
  TouchableOpacity,
  Image,
} from 'react-native';

import { Container, Header, Picker, ListItem, Radio, Form, Item, Label, Input, Title, Left, Icon, Textarea, Right, Button, Body, Content, Card, CardItem, Row } from "native-base";

import ImagePicker from 'react-native-image-picker';


import { postProduct } from "../../actions/data";

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
      detail: '',
      uploadImg: null,
      filename: ''
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


  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let dataRes = response.fileName;
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({

          uploadImg: source,
          filename: dataRes

        });
      }
    });
  }

  addButtonAction() {

    
    this.props.postProduct(
      this.state.rate,
      this.state.capacity,
      this.state.title,
      this.state.brand,
      this.state.description,
      this.state.price,
      this.state.stok,
      this.state.colors,
      this.state.detail,
      this.state.filename);

    // this.setState({
    //   rate: '',
    //   capacity: '',
    //   title: '',
    //   brand: '',
    //   description: '',
    //   price: '',
    //   stok: '',
    //   colors: '',
    //   detail: '',
    //   filename: ''
    // })

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
                      <Picker.Item label="16GB" value="16GB" />
                      <Picker.Item label="32GB" value="32GB" />
                      <Picker.Item label="64GB" value="64GB" />
                      <Picker.Item label="128GB" value="128GB" />
                      <Picker.Item label="256GB" value="256GB" />
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

              <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>

                <View style={styles.ImageContainer}>

                  {this.state.uploadImg === null ? <Text>Select a Photo</Text> :
                    <Image style={styles.ImageContainer} source={this.state.uploadImg} />
                  }

                </View>

              </TouchableOpacity>

            </Item>

          </Form>

          <Row>
            <Button bordered danger style={{ margin: 20, padding: 30 }} onPress={() => this.props.navigation.navigate("Home")}>
              <Text>Cancle</Text>
            </Button>
            <Button bordered primary style={{ margin: 20, padding:40 , left: 70
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
  postProduct: (
    rate,
    capacity,
    title,
    brand,
    description,
    price,
    stok,
    colors,
    detail,
    filename) => dispatch(postProduct( rate, capacity, title, brand, description, price, stok, colors, detail, filename))
})

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF8E1'
  },

  ImageContainer: {
    borderRadius: 10,
    width: 100,
    height: 100,
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CDDC39',

  },
});

export default connect(
  null,
  mapDispatchToProps
)(MobileAddForm)
