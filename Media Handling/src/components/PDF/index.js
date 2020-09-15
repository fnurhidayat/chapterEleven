import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4'
  },
  title: {
    fontSize: '16pt',
    fontWeight: 'bold'
  },
  section: {
    margin: 2,
    padding: 5,
    textAlign: 'center',
    fontSize: '12pt'
  }
});

// Create Document Component
export default () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Hotline Bling</Text>
        <View style={styles.section}>
          <Text>You used to call me on my</Text>
          <Text>You used to, you used to</Text>
          <Text>Yeah</Text>
        </View>
        <View style={styles.section}>
          <Text>You used to call me on my cell phone</Text>
          <Text>Late-night when you need my love</Text>
          <Text>Call me on my cell phone</Text>
          <Text>Late-night when you need my love</Text>
          <Text>And I know when that hotline bling</Text>
          <Text>That can only mean one thing</Text>
          <Text>I know when that hotline bling</Text>
          <Text>That can only mean one thing</Text>
        </View>
        <View style={styles.section}>
          <Text>Ever since I left the city, you</Text>
          <Text>Got a reputation for yourself now</Text>
          <Text>Everybody knows and I feel left out</Text>
          <Text>Girl, you got me down, you got me stressed out</Text>
          <Text>'Cause ever since I left the city, you</Text>
          <Text>Started wearing less and goin' out more</Text>
          <Text>Glasses of champagne out on the dance floor</Text>
          <Text>Hangin' with some girls I've never seen before</Text>
        </View>
      </View>
    </Page>
  </Document>
);

