import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'dripsy';
import { WebView } from 'react-native-webview';

// ...
export const WebComponentScreen = () => {
    return <WebView source={{ uri: 'https://reactnative.dev/' }} style={styles.container} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})