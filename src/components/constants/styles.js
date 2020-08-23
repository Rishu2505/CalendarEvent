//Styles.js
// React Native Bottom Navigation - Example using React Navigation V5 with Calender //
// https://github.com/Rishu2505/CalendarEvent.git //
import { StyleSheet } from "react-native"
import colors from './colors'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Fontsize from "./fontsize";

export default StyleSheet.create({
    textinputstyle: {
        width: '90%',
        height: wp(11),
        borderRadius: 5,
        backgroundColor: 'white',
        alignSelf: 'center',
        textAlign: 'left',
        textAlignVertical: 'center',
        fontSize: Fontsize.textinputMtext,
        padding: 8,
        color: colors.headingblack,
    },
    shadowStyle: {
        shadowColor: '#000', elevation: 3, shadowOffset: {
            width: 0,
            height: 0.5,
            padding: 10,
        }, shadowRadius: 5, shadowOpacity: 0.5,
        borderRadius: wp(3),
        margin: 20,
        backgroundColor: '#FFFFFF',
        padding: 2,
    }

})