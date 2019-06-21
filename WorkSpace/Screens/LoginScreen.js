import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,} from 'react-native';
import SSC from '../SSC';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };

    render() {
        return (
            <View style={[SSC.container, { justifyContent: 'space-around', alignItems: 'center', }]}>
                <TouchableOpacity onPress={()=> {this.props.navigation.navigate('Screen4')}}>
                <Image source={require('../Image/logo.png')}
                    style={{ width: 276, height: 40 }} />
                    </TouchableOpacity>
                <Image source={require('../Image/photo.png')}
                    style={{ width: 276, height: 214 }} />
                <Text style={SSC.txt}>Se connecter par</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', }}>
                    <TouchableOpacity style={[SSC.logFG, { backgroundColor: '#dd4f43' }]}>
                        <Image style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={SSC.logFG}>
                        <Image style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>
                <Text style={SSC.txt}>Ou</Text>
                <TouchableOpacity style={SSC.logM}
                    onPress={() => { this.props.navigation.navigate('Screen2'); }}>
                    <View flexDirection='row'>
                        <Image source={require('../Image/mail.png')}
                        style={{ width: 33, height: 25 }} />
                        <Text style={{ fontSize: 17, color: '#fff', }}>Se connecter par email</Text>
                    </View>
                </TouchableOpacity>
                <View flexDirection='row'>
                    <Text style={SSC.txt}>Vous n'avez pas de compte?    </Text>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Screen3'); }}>
                        <Text style={[SSC.txt, { color: '#68cefb' }]}>S'inscrire</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
};