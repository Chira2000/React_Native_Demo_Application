import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffffff',
    padding: 20,
    margin: 10,
    borderRadius: 5,
    marginLeft: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    

  },
  label: {
    color: '#000000',
    fontSize: 16,
    marginRight: 5,
  },
  value: {
    color: '#000000',
    fontSize: 16,
    marginLeft:30,
    
  },

  labelpop: {

    marginLeft:50,
    fontWeight:'bold',
    
     
  },

  valuepop: {
    marginLeft:50,
    
     
  },

  searchbtn:{

    backgroundColor:'#3a86a8',
    padding:5,
    borderBottomRightRadius:10,
    

  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    
    
  },
  searchInput: {
    flex: 1,
    borderColor: '#eeeeee',
    borderWidth: 3,
    padding: 5,
    marginRight: 30,
    marginLeft:10,
    borderRadius: 5,
    backgroundColor:'#f7f7f7'
    

  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'right',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
    
  },
  closebtn: {
    backgroundColor: '#3a86a8',
    padding: 5,
    marginLeft: 134,
    alignSelf: 'center',
    
    marginTop: 10,
    borderBottomRightRadius:10,
  },

  txt:{fontSize:20,
       fontWeight:'bold',
       marginLeft:22,
       color:'black'
  
  
  },
  
  userDetailsContainer: {
    backgroundColor: '#fff',
    padding: 5,
  
    width: '90%',
    
    overflow: 'hidden',
    alignSelf: 'center', 
    alignItems: 'flex-start', 
    position: 'relative',
    borderBottomRightRadius:30,
    borderTopLeftRadius:30,
    
    
  },

  
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
    
    
  },

});

export default styles;