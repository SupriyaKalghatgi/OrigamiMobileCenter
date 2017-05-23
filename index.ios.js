/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View, Image
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body,
 Text, H3, H2, H1,
 Button, Icon, IconNB, Badge, Card, CardItem, List, ListItem,
 Thumbnail, CheckBox, DeckSwiper, Fab, Spinner, Tab, Tabs, TabHeading, Toast, InputGroup, Form,
 Label, Input, Textarea, Item, Switch, Radio, Picker, Separator, Segment } from 'native-base';

export default class OrigamiMobileCenter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    }
  }

  render() {
    return (
      <Container style={{backgroundColor: 'red'}}>
        <Header>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />

        </Header>


        <Content padder style={{marginBottom: 100, height: 2000, backgroundColor: 'black'}}>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>one</Text>
                  <Text note>two</Text>
                </Body>
              </Left>
              <Right>
                <Body>
                  <Text>ldjklscfv sdkcmvklsdjc klsdjclksdcs ksdjcpskdcsn</Text>
                </Body>
              </Right>
            </CardItem>

            <CardItem cardBody>
              <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuz2jBYskYpDXla3GTdEBKYa9eov1LK4Db61EsXhdjhPLcL-25uw'}} />
            </CardItem>

            <CardItem style={{ justifyContent: 'space-around' }}>
              <Button transparent>
                <Icon active name="md-heart" />
                <Text>three</Text>
              </Button>
              <Text>250</Text>
              <Text>Order in 2 hours</Text>
            </CardItem>

          </Card>



          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>five</Text>
                  <Text note>six</Text>
                </Body>
              </Left>
              <Right>
                <Body>
                  <Text>ldjklscfv sdkcmvklsdjc klsdjclksdcs ksdjcpskdcsn</Text>
                </Body>
              </Right>
            </CardItem>

            <CardItem cardBody>
              <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuz2jBYskYpDXla3GTdEBKYa9eov1LK4Db61EsXhdjhPLcL-25uw'}} />
            </CardItem>

            <CardItem style={{ justifyContent: 'space-around' }}>
              <Button transparent>
                <Icon active name="md-heart" />
                <Text>seven</Text>
              </Button>
              <Text>500</Text>
              <Text>Order in 2 hours</Text>
            </CardItem>

          </Card>


          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>one</Text>
                  <Text note>three</Text>
                </Body>
              </Left>
              <Right>
                <Body>
                  <Text>ldjklscfv sdkcmvklsdjc klsdjclksdcs ksdjcpskdcsn</Text>
                </Body>
              </Right>
            </CardItem>

            <CardItem cardBody>
              <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuz2jBYskYpDXla3GTdEBKYa9eov1LK4Db61EsXhdjhPLcL-25uw'}} />
            </CardItem>

            <CardItem style={{ justifyContent: 'space-around' }}>
              <Button transparent>
                <Icon active name="md-heart" />
                <Text>five</Text>
              </Button>
              <Text>950</Text>
              <Text>Order in 2 hours</Text>
            </CardItem>

          </Card>


          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>abc</Text>
                  <Text note>xyz</Text>
                </Body>
              </Left>
              <Right>
                <Body>
                  <Text>ldjklscfv sdkcmvklsdjc klsdjclksdcs ksdjcpskdcsn</Text>
                </Body>
              </Right>
            </CardItem>

            <CardItem cardBody>
              <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuz2jBYskYpDXla3GTdEBKYa9eov1LK4Db61EsXhdjhPLcL-25uw'}} />
            </CardItem>

            <CardItem style={{ justifyContent: 'space-around' }}>
              <Button transparent>
                <Icon active name="md-heart" />
                <Text>pqr</Text>
              </Button>
              <Text>450</Text>
              <Text>Order in 2 hours</Text>
            </CardItem>

          </Card>
        </Content>


        <Footer>
          <FooterTab>
            <Button active full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

AppRegistry.registerComponent('OrigamiMobileCenter', () => OrigamiMobileCenter);
