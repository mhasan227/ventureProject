import {StyleSheet} from 'react-native';
import colors from '../../config/colors';
export default StyleSheet.create({
      submitButton: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        paddingHorizontal: 24,
        paddingVertical: 6,
      },
      submitButtonText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700',
        color: colors.white,
      },
      images: {
        alignSelf: "center",
        width: 150,
        height: 150,
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 3
      },
      imagesList: {
        width: 50,
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 3
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        //alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        width: '60%',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      formBodyInputWrapper: {
        marginBottom: 4,
      },
      formInputLabel: {
        marginBottom: 4,
        color: colors.black
      },
      formInput: {
        backgroundColor: '#fdecf5',
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 6,
        fontSize: 14,
        height: 38,
        paddingHorizontal: 8,
        justifyContent: 'center',
      },
    
});