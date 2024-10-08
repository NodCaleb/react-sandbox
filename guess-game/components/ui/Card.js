import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function Card({children}) {
    return (
        <View style={styles.card}>{children}</View>
    );
}

export default Card;

const deviceWith = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop:  deviceWith < 380 ? 28 : 36,
        marginHorizontal: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,                           //Android
        shadowColor: 'black',                   //iOS
        shadowOffset: { width: 0, height: 2 },  //iOS
        shadowRadius: 6,                        //iOS
        shadowOpacity: 0.25                     //iOS
    }
  });