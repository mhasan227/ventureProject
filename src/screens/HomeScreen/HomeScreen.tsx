import React from 'react' ;
import { Modal,
         Image,
         View, 
         Text , 
         StyleSheet, Pressable,StatusBar,TouchableOpacity,FlatList,TextInput, Alert } from 'react-native' ;
import {useNavigation} from '@react-navigation/native';
import style from "./style";
import Toolbar from "../../component/Toolbar";
import * as ImagePicker from 'react-native-image-picker';
class HomeScreen extends React.Component {  
    constructor(props) {
        super(props);
        console.log(this.props);
        this.setInputValue = this.setInputValue.bind(this);
        this.state = {
          fileUri: '',
          allSavedImage: [],
          allSavedTags: [],
          modalVisible: true,
          tag : {},
          sub: "",
          name: "",
          uri : "",
        }
    } 

    setInputValue(property, val) {
      this.setState({ [property]: val });
    }

    handleSubmit = () => {
     const {modalVisible}= this.state
     let   tag = {
          sub: this.state.sub,
          name: this.state.name,
          url: this.state.uri
        }
      this.state.allSavedTags.push(tag);
      console.log(this.state.allSavedTags);
      this.setState({
        sub: "",
        name: "",
        uri: ""
      }); 
      this.setModalVisible(!modalVisible);
    }
    details = (index) => {
      console.log(index);
      let urlMM= this.state.allSavedTags[index].url;
      console.log(urlMM);
      this.props.navigation.navigate('WebViewUn',{urlMM})
     }
    chooseImage = () => {
      let options = {
        title: 'Select Image',
        customButtons: [
          { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
        ],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      
      ImagePicker.launchImageLibrary(options, (response) => {
        console.log('Response = ', response);
  
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
          alert(response.customButton);
        } else {
          const source = { uri: response.uri };
  
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          // alert(JSON.stringify(response));s
          console.log('response', JSON.stringify(response));
          this.setState({
            filePath: response,
            fileData: response.data,
            fileUri: response.assets[0].uri
          });
          console.log('response', this.state.fileUri);
          this.state.allSavedImage.push(this.state.fileUri);
          console.log('allData', this.state.allSavedImage);
        }
      });
    }

    launchCamera = () => {
      let options = {
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      ImagePicker.launchCamera(options, (response) => {
        console.log('Response = ', response);
  
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
          alert(response.customButton);
        } else {
          const source = { uri: response.uri };
          console.log('response', JSON.stringify(response));
          this.setState({
            filePath: response,
            fileData: response.data,
            fileUri: response.assets[0].uri
          });
          this.state.allSavedImage.push(this.state.fileUri);
          console.log('allData', this.state.allSavedImage);
        }
      });
  
    }
    setModalVisible = (visible) => {
      this.setState({ modalVisible: visible });
    }
    modalOpen(){
      const { modalVisible } = this.state;
      return <View style={style.centeredView}>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={style.centeredView}>
            <View style={style.modalView}>
              <Text style={style.modalText}>set Tag</Text>
              <View style={style.formBodyInputWrapper}>
                  <Text style={style.formInputLabel}>sub:</Text>
                  <TextInput
                    style={style.formInput}
                    value={this.state.sub}
                    onChangeText={(text) => this.setInputValue('sub', text)}
                  />
              </View>
              <View style={style.formBodyInputWrapper}>
                  <Text style={style.formInputLabel}>Name:</Text>
                  <TextInput
                    style={style.formInput}
                    value={this.state.name}
                    onChangeText={(text) => this.setInputValue('name', text)}
                  />
              </View>
              <View style={style.formBodyInputWrapper}>
                  <Text style={style.formInputLabel}>Uri:</Text>
                  <TextInput
                    style={style.formInput}
                    value={this.state.uri}
                    onChangeText={(text) => this.setInputValue('uri', text)}
                  />
              </View>
              <View style={{alignItems: "flex-end",padding: 10}}>
                <Pressable
                  style={[style.button, style.buttonClose]}
                  onPress={this.handleSubmit}
                >
                  <Text style={style.textStyle}>Submit</Text>
                </Pressable>
              </View>
              <Pressable
                style={[style.button, style.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={style.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        </View>
    }
    renderFileUri() {
      const { modalVisible } = this.state;
      if (this.state.fileUri) {
        return <TouchableOpacity
          onPress={() =>this.setModalVisible(!modalVisible)}
        >
        
        <Image
          source={{ uri: this.state.fileUri }}
          style={style.images}
        />
        {this.modalOpen()}
        </TouchableOpacity>
      } else {
        return <Image
        source={require('../../../assets/dummy.png')}
        style={style.images}
        />
      }
    }

		render() {   
	        return (
              <>
                <Toolbar/>
                <View>
                  <View style={{paddingTop: 5}}>
                    {this.renderFileUri()}
                  </View>
                  <View style={{padding:20}}>
                      <TouchableOpacity
                      style={style.submitButton}
                      onPress={this.chooseImage}
                      >
                        <Text style={style.submitButtonText}>Choose file</Text>
                      
                      </TouchableOpacity>
                  </View>
                  <View style={{padding:20}}>
                      <TouchableOpacity
                      style={style.submitButton}
                      onPress={this.launchCamera}
                      >
                        <Text style={style.submitButtonText}>Open Camera</Text>
                      
                      </TouchableOpacity>
                  </View>
                  <View style={{padding:5}}>
                      <Text>List View</Text>
                      <FlatList
                        data = {this.state.allSavedImage}
                        renderItem = {
                            ({item, index}) =>
                            
                                (<View style={{padding: 5,flexDirection:"row", justifyContent:'space-evenly' }}>
                                    <Image
                                      source={{ uri: item }}
                                      style={style.imagesList}
                                    />

                                    <TouchableOpacity
                                      style={style.submitButton}
                                      onPress={()=>this.details(index)}
                                    >
                                      <Text style={style.submitButtonText}>View Details</Text>
                                    
                                    </TouchableOpacity>
                                </View>
                                  
                                )
                          }
                      />
                   </View>
                  
                </View>
              </>
	        )
    }
        
  }

export default HomeScreen