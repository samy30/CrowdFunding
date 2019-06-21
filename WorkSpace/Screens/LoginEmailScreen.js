import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import SSC from '../SSC';

export default class LoginEmailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            MDP: '',
            Email2: '',
        };
    };
pswrdrecc(){
    this.RBSheet.close();
    alert("Check your mail :) ")
};
    render() {
        return (
            <View style={[SSC.container, { justifyContent: 'space-around', alignItems: 'center', }]}>
                <Image source={require('../Image/logo.png')}
                    style={{ width: 276, height: 40 }} />
                <Text style={SSC.txt}>Se connecter par</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', }}>
                    <TouchableOpacity style={[SSC.logFG, { backgroundColor: '#dd4f43' }]}>
                        <Image style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={SSC.logFG}>
                        <Image style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>
                <Text style={SSC.txt}>Ou Se connecter par email</Text>
                <TextInput placeholder="Email"
                    style={SSC.txtin}
                    onChangeText={(Email) => this.setState({ Email })} />
                <TextInput placeholder="Mot de passe"
                    style={SSC.txtin}
                    secureTextEntry
                    onChangeText={(MDP) => this.setState({ MDP })} />

                <TouchableOpacity onPress={() => { this.RBSheet.open(); }}>
                    <Text>Mot de passe oublié?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={SSC.logM}>
                    <Text style={{ fontSize: 17, color: '#fff', }}>Se connecter</Text>
                </TouchableOpacity>
                <View flexDirection='row'>
                    <Text style={SSC.txt}>Vous n'avez pas de compte?    </Text>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Screen3'); }}>
                        <Text style={[SSC.txt, { color: '#68cefb' }]}>S'inscrire</Text>
                    </TouchableOpacity>
                </View>
                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    height={300}
                    duration={250}
                    customStyles={{
                        container: {
                            justifyContent: "space-around",
                            alignItems: "center"
                        }
                    }}
                >
                        <Text style={{ fontSize: 20, color: '#68cefb' }}>Récuperez Mot de passe</Text>
                        <TextInput placeholder="Email"
                            style={SSC.txtin}
                            onChangeText={(Email2) => this.setState({ Email2 })} />
                        <TouchableOpacity style={SSC.logM}
                        onPress={()=>{this.pswrdrecc()}}>
                            <Image source={require('../Image/mail.png')}
                                style={{ width: 33, height: 25 }} />
                            <Text style={{ fontSize: 17, color: '#fff', }}>Récuperez Mot de passe</Text>
                        </TouchableOpacity>
                    
                </RBSheet>
            </View>  
      
      
    
           
        );
    };
};