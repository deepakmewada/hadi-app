import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingLeft:30,
        paddingRight:30,
        height:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingTop:100
    },
    input: {
      borderBottomWidth:1,
      borderBottomColor:'#d5d5d5',
      height:44,
      fontSize:15,
      paddingTop: 6,
      paddingBottom: 6,
      marginBottom:18,
      width:'100%',
      textTransform:'uppercase'
    },
    inputSm: {
      borderBottomWidth:1,
      borderBottomColor:'#d5d5d5',
      height:42,
      fontSize:14,
      paddingTop: 4,
      paddingBottom: 4,
      width:100,
      textTransform:'uppercase'
    },
    link: {
        color:'#009a8e',
        textDecorationLine:'underline',
        textAlign:'right',
        marginBottom:18,
        width:'100%',
    },
    button: {
        height:48,
        width:'100%',
        backgroundColor:'#009a8e',
        color:'#ffffff',
        fontSize:15,
        textTransform:'uppercase',
        fontWeight:"600",
        borderRadius:2
    },
    smallButton: {
        height:36,
        backgroundColor:'#b2e1dd',
        color:'#009a8e',
        display:'flex',
        fontSize:13,
        textTransform:'uppercase',
        fontWeight:"600",
        borderRadius:2
    },
    row: {
        display:'flex',
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'flex-start',
        marginBottom:18
    },
    radioWrapper: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:12
    },
    radioLabel: {
        fontSize:14
    },
    socialBtnWrap: {
        display:'flex',
        marginTop:36,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'stretch'
    },
    listWrap: {
        display:'flex',
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:18,
        paddingHorizontal:30,
        borderBottomWidth:1,
        borderBottomColor:'#d5d5d5',
        fontWeight:'600'
    },
    iconListWrap: {
        display: 'flex', width: '100%', 
        flexDirection:'row', 
        borderBottomColor:'#d5d5d5',
        borderBottomWidth:1,
        paddingVertical:24,
        paddingHorizontal:30,
        color: '#858585',
    }
});