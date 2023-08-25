import { Dimensions, StyleSheet } from "react-native";

const HomePageStyles = StyleSheet.create({

    mainContainer: {
        flex: 1, 
        paddingHorizontal: 10, 
        justifyContent: 'center',
      },
      listTab: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 20,
      },    
      btnTab: {
        width: Dimensions.get('window').width / 2.5, 
        flexDirection: 'row',
        borderWidth: 0.5, 
        borderColor: 'black', 
        backgroundColor: 'lightgrey',
        borderRadius: 20,
        padding: 10, 
        margin: 10,
        marginTop: 60, 
        justifyContent: 'center',
      },
      textTab: {
        fontSize: 16, 
        color: 'black',
      },
      btnTabActive: {
        backgroundColor: '#D3D3D3',
      },
      textTabActive: {
        color: '#fff',
      },
      itemContainer: {
        flexDirection: 'row',
        paddingVertical: 15, 
      }
      
});

export default HomePageStyles;