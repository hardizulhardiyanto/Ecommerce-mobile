import React from "react";
import { Image, View , TouchableOpacity} from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem, Thumbnail, List, ListItem } from "native-base";
import { connect } from 'react-redux'
import { loadData } from '../actions/data'
import InfiniteScroll from "react-infinite-scroll-component";


import MobileItem from './MobileItem';



class MobileHomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            hasMore: true
        }
    }

    componentDidMount() {
        this.props.loadItems()
    }

    

    
    render() {
        let { items } = this.props;
        
        return (
            <Container>
                <Header>
                    <Right>
                        <Body>
                            <Title>Ecommerce App</Title>
                        </Body>
                    </Right>
                    <Left>
                        <Button full rounded dark>
                        <TouchableOpacity 
                            onPress={() => this.props.navigation.navigate("Add")}>
                            <Text>Add Data</Text>
                        </TouchableOpacity>
                        </Button>
                    </Left>
                </Header>
                    <Content>
                        {items.map((item, i) => (
                            <MobileItem
                                Key={item.itemId}
                                {...item}
                            />

                        ))}
                    </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => ({ ...state.data });
const mapDispatchToProps =  dispatch => ({
    loadItems: ( page = 1 ) =>
    dispatch(loadData({ headers: {sortBy: "", limit: 4, page } })) 
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MobileHomeScreen);
