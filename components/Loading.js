import React, {Component} from 'react';
import {Animated, View, StyleSheet} from 'react-native';
import Easing from 'react-native/Libraries/Animated/Easing';

export class Loading extends Component {
  state = {
    stagger: 250,
  };

  render() {
    return (
      <View style={styles.container}>
        <Box color={this.props.color} delay={this.state.stagger * 1} />
        <Box color={this.props.color} delay={this.state.stagger * 2} />
        <Box color={this.props.color} delay={this.state.stagger * 3} />
      </View>
    );
  }
}

class Box extends Component {
  state = {
    height: new Animated.Value(0),
    toAnimate: -10,
  };

  animateHeight() {
    Animated.sequence([
      Animated.delay(this.props.delay),
      Animated.timing(this.state.height, {
        toValue: this.state.toAnimate,
        duration: 150,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
    ]).start(() => {
      this.state.toAnimate = -this.state.toAnimate;
      this.animateHeight();
    });
  }

  componentDidMount() {
    this.animateHeight();
  }

  render() {
    return (
      <Animated.View
        style={[
          styles.box,
          {
            transform: [
              {
                translateY: this.state.height,
              },
            ],
            backgroundColor: this.props.color,
          },
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  box: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
});

export default Loading;
