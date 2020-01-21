const WEBVIEW_REF = "WEBVIEW_REF";
import * as React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  CheckBox,
  TouchableOpacity,
} from 'react-native';
import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems,
  SafeAreaView,
} from 'react-navigation';
import {WebView} from 'react-native-webview';



export default class Faculty extends React.Component {
    constructor(props) {
        super(props);
        this.state = { canGoBack: false };
      }

      render() {
        return (
          <View style={styles.container}>
            <View style={styles.topbar}>
              <TouchableOpacity
                disabled={!this.state.canGoBack}
                onPress={this.onBack.bind(this)}
                >
                <Text style={this.state.canGoBack ? styles.topbarText : styles.topbarTextDisabled}>Go Back</Text>
              </TouchableOpacity>
            </View>
            <WebView
              ref={WEBVIEW_REF}
              style={{flex: 1}}
              onNavigationStateChange=
                {this.onNavigationStateChange.bind(this)}
              source={{uri: 'https://docs.google.com/forms/d/e/1FAIpQLSereZQ4NmtgBDBhRpl529QOgxciLgXcqWzFsovCoYIdGF6bEg/viewform'}}
              />
          </View>
        );
      }

      onBack() {
        this.refs[WEBVIEW_REF].goBack();
      }

      onNavigationStateChange(navState) {
        this.setState({
          canGoBack: navState.canGoBack
        });
      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
      },
      topbar: {
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      topbarTextDisabled: {
        color: 'gray'
      }
    });