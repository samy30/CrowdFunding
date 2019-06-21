import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Modal } from 'react-native';
import DatePicker from 'react-native-datepicker';
import SSC from '../SSC';
import { ScrollView } from 'react-native-gesture-handler';

export default class SigningScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      prenom: '',
      Adresse: '',
      Email: '',
      MDP: '',
      MDP2: '',
      date: "21-06-2019",
      modalVisible: false,
    };
  };

  signin() {
    if (this.state.nom!='' && this.state.prenom!='' && this.state.Adresse!='' && this.state.Email!='' && this.state.MDP2!='' && this.state.MDP!=''){
    if (this.state.MDP == this.state.MDP2) {
      this.props.navigation.navigate('Screen4');
      alert("Inscription réussite ✔️");
      //api add
    } else {
      alert("Mot de passe !");
    }
  } else{
alert("Remplir tout les champs");
  };
  };

  render() {
    return (
      <View style={[SSC.container, { justifyContent: 'space-around', alignItems: 'center' }]}>
        <Image source={require('../Image/logo.png')}
          style={{ width: 276, height: 40 }} />
        <TextInput placeholder="Nom"
          style={SSC.txtin}
          onChangeText={(nom) => this.setState({ nom })} />
        <TextInput placeholder="Prénom"
          style={SSC.txtin}
          onChangeText={(prenom) => this.setState({ prenom })} />
        <DatePicker style={{ width: 200 }}
          date={this.state.date}
          mode="date"
          placeholder="Date de naissance"
          format="DD-MM-YYYY"
          minDate="01-01-1900"
          maxDate="31-12-2099"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={(date) => { this.setState({ date: date }) }}
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: { marginLeft: 36 },
          }} />
        <TextInput placeholder="Adresse"
          style={SSC.txtin}
          onChangeText={(Adresse) => this.setState({ Adresse })} />
        <TextInput placeholder="Email"
          style={SSC.txtin}
          onChangeText={(Email) => this.setState({ Email })} />
        <TextInput placeholder="Mot de passe"
          style={SSC.txtin}
          onChangeText={(MDP) => this.setState({ MDP })}
          secureTextEntry />
        <TextInput placeholder="Resaisir mot de passe"
          style={SSC.txtin}
          onChangeText={(MDP2) => this.setState({ MDP2 })}
          secureTextEntry />
        <TouchableOpacity style={SSC.logM}
          onPress={() => { this.signin() }} >
          <Text style={{ fontSize: 17, color: '#fff', }}>S'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {this.setState({modalVisible: true,})}}>
                            <Text style={[SSC.txt, { color: '#68cefb' }]}>Conditions générales d'utilisation de l'application</Text>
                        </TouchableOpacity>

                        {/* POPUP popup POPUP popup POPUP */}
                        <Modal animationType='slide'
                    transparent={false}
                    visible={this.state.modalVisible}>
                      <View style={[SSC.container, {justifyContent:'space-around', alignItems:'center'}]}>
                    <TouchableOpacity style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}
                        onPress={()=> {this.setState({modalVisible: false,})}}>
                        <Text style={{fontSize: 20,}}>( X )</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize: 20, color: '#68cefb'}}>Conditions générales d'utilisation de l'application</Text>
                    <ScrollView>
                    <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                    <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                    <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                    <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                    <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                    <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                    <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                    <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                    <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                    <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
             </ScrollView>
             </View>
                </Modal>
      </View>
    );
  };
};