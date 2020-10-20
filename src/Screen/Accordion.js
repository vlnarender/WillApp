import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Accordion, Block} from 'galio-framework';

export default class AccordionPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: 'First Lesson',
          content:'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum',
        },
        {title: 'Second Lesson', content: 'Lorem ipsum dolor sit amet'},
        {title: 'Third Lesson', content: 'Lorem ipsum dolor sit amet'},
        {title: 'Fourth Lesson', content: 'Lorem ipsum dolor sit amet'},
        {title: 'Fifth Lesson', content: 'Lorem ipsum dolor sit amet'},
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Block style={styles.block}>
          <Accordion dataArray={this.state.data} opened={null} />
        </Block>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  block: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
