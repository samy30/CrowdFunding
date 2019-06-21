import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        };
    };

    render() {
        return (
            <View style={SSC.container}>
                                    <View flexDirection='row'>
                    <TouchableOpacity onPress={() => { this.setState({ modalVisible: true, }) }}>
                        <Image />
                        </TouchableOpacity>
                        <View flexDirection='column'>
                            <Text>FIRST LAST    NAME</Text>
                            <TouchableOpacity onPress={()=> {this.RBSheet.open();}}>
                                <View flexDirection= 'row'>
                                <Text>Favori</Text>
                                <Image/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>Deconnetion</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                <View>
                    {
                        //Historique
                    }
                </View>
                <Modal animationType='slide'
                    transparent={false}
                    visible={this.state.modalVisible}>
                    <View style={[SSC.container, { justifyContent: 'space-around', alignItems: 'center' }]}>
                        <TouchableOpacity style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => { this.setState({ modalVisible: false, }) }}>
                            <Text style={{ fontSize: 20, }}>( X )</Text>
                        </TouchableOpacity>
                        {
                            //formulaire modification
                        }
                    </View>
                    <RBSheet                        ref={ref => {                            this.RBSheet = ref;  }}
                        height={300}
                        duration={250}
                        customStyles={{
                            container: {
                                justifyContent: "space-around",
                                alignItems: "center"
                            }                        }}                    >
                        <View>
                            <Image />
                            <Text style={{ fontSize: 14, color: '#68cefb' }}>Favori</Text>
                            {
                                //favori liste
                            }
                                                    </View>
                    </RBSheet>
                </Modal>
            </View>
        );
    };
};