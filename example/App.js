/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import FacebookTabBar from '../FacebookTabBar';

export default class App extends React.Component {

    render() {
        return (
            <ScrollableTabView
                style={{marginTop: 20}}
                initialPage={1}
                renderTabBar={() => <FacebookTabBar/>}
                //renderTabBar={() => <DefaultTabBar/>}
            >
                {/*<Text tabLabel='Tab #1'>My</Text>*/}
                {/*<Text tabLabel='Tab #2'>favorite</Text>*/}

                <ScrollView tabLabel="ios-paper" style={styles.tabView}>
                    <View style={styles.card}>
                        <Text>News</Text>
                    </View>
                </ScrollView>
                <ScrollView tabLabel="ios-people" style={styles.tabView}>
                    <View style={styles.card}>
                        <Text>Friends</Text>
                    </View>
                </ScrollView>
            </ScrollableTabView>
        );
    }


    // render() {
    //     return (
    //         <>
    //             <StatusBar barStyle="dark-content"/>
    //             <SafeAreaView>
    //                 <ScrollView
    //                     contentInsetAdjustmentBehavior="automatic"
    //                     style={styles.scrollView}>
    //                     <Header/>
    //                     {global.HermesInternal == null ? null : (
    //                         <View style={styles.engine}>
    //                             <Text style={styles.footer}>Engine: Hermes</Text>
    //                         </View>
    //                     )}
    //                     <View style={styles.body}>
    //                         <View style={styles.sectionContainer}>
    //                             <TouchableOpacity
    //                                 activeOpacity={0.5}
    //                                 onPress={async () => {
    //                                     let aa = await DeviceInfo.getIpAddress();
    //                                     console.log('hzjhzj', aa);
    //
    //                                     // DeviceInfo.getIpAddress().then(ipAddress => {
    //                                     //     console.log(ipAddress);
    //                                     // }).catch((e) => {console.log(e);});
    //                                 }}>
    //                                 <Text style={styles.sectionTitle}>Step One</Text>
    //                             </TouchableOpacity>
    //                             <Text style={styles.sectionDescription}>
    //                                 {DeviceInfo.getUniqueId}
    //                                 Edit <Text style={styles.highlight}>App.js</Text> to change this
    //                                 screen and then come back to see your edits.
    //                             </Text>
    //                         </View>
    //                         <View style={styles.sectionContainer}>
    //                             <Text style={styles.sectionTitle}>See Your Changes</Text>
    //                             <Text style={styles.sectionDescription}>
    //                                 <ReloadInstructions/>
    //                             </Text>
    //                         </View>
    //                         <View style={styles.sectionContainer}>
    //                             <Text style={styles.sectionTitle}>Debug</Text>
    //                             <Text style={styles.sectionDescription}>
    //                                 <DebugInstructions/>
    //                             </Text>
    //                         </View>
    //                         <View style={styles.sectionContainer}>
    //                             <Text style={styles.sectionTitle}>Learn More</Text>
    //                             <Text style={styles.sectionDescription}>
    //                                 Read the docs to discover what to do next:
    //                             </Text>
    //                         </View>
    //                         <LearnMoreLinks/>
    //                     </View>
    //                 </ScrollView>
    //             </SafeAreaView>
    //         </>
    //     );
    // }
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },

    tabView: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    card: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2, },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
});
