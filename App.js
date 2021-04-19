import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { Container, Content, Text, StyleProvider, View, StyleSheet  } from 'native-base';
import { SafeAreaView } from 'react-native';

//import { StyleSheet, Text, View } from 'react-native';
//import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default function App() {
  return (
    <View style ={{justifyContent:'center',alignItems:'center',marginTop: 60}}>
        <Text>
          Your Component with static style
        </Text>
      </View>
    );
};
