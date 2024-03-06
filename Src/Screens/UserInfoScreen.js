
//import React from 'react';
//importing Essential Libraires 
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useUserContext } from '../State/UserContext';
import styles from '../Styles/Styles';


const UserInfoScreen = () => {
    
  const { state, fetchUsers } = useUserContext();
  const { users, loading, error } = state;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
//Fetching User Details From API to User Details Screen
  const fetchUserDetails = async (userId) => {
    try {
      const response = await fetch(`https://reqres.in/api/users/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user details! Try Again!');
      }
  
      const userDetails = await response.json();
      return userDetails.data; 
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  };
//Logic to Searching By User ID
  const handleUserPress = (userId) => {
    const user = users.find((u) => u.id === userId);
    setSelectedUser(user);
    toggleModal();
  };


  useEffect(() => {
    fetchUsers();
  }, []);


  const handleSearch = async () => {
    try {
      if (!searchQuery) {
        
        console.warn('Please Enter User ID');
        return;
      }

      const userDetails = await fetchUserDetails(searchQuery);

      
      if (userDetails) {
        setSelectedUser(userDetails);
        toggleModal();
      } else {
        
        console.warn('User Not found! Try Again With Differrent ID');
      }
    } catch (error) {
      console.error(error.message);
      
    }
  };


  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }
  //User Details Area 
  return (
    <View>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="User ID"
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
        <TouchableOpacity style={styles.searchbtn}
        onPress={handleSearch}>
        <Text style={{ color: 'white',fontSize:15,width:70,textAlign:'center'  }}>Search</Text>

        </TouchableOpacity>
        
      </View>
      <Text style={styles.txt}>Available Users</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.button} onPress={() => handleUserPress(item.id)}>
            <View style={styles.row}>
              <Text style={styles.label}>ID       </Text>
              <Text style={styles.value} >{item.id}</Text>

              </View>
              <View style={styles.row}>
              <Text style={styles.label}>Name</Text>
                    <Text style={styles.value}>{item.first_name} 
                   
              
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      
       <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        toggleModal();
      }}>
      <View style={styles.modalContainer}>
        {selectedUser && (
          <View style={styles.userDetailsContainer}>
            
            <Image style={styles.avatar} source={{ uri: selectedUser.avatar }} />
            
            <View style={styles.row}>
            <Text style={styles.labelpop}>First Name</Text>
            <Text style={styles.valuepop}>{selectedUser.first_name}</Text>
            </View>

            <View style={styles.row}>

            <Text style={styles.labelpop}>Last Name </Text>
            <Text style={styles.valuepop}>{selectedUser.last_name}</Text>
            </View>
             
              
            <View style={styles.row}>
            <Text style={styles.labelpop}>Email        </Text>
            <Text style={styles.valuepop}>{selectedUser.email}</Text>
            </View>
            <View style={styles.row}>
            <TouchableOpacity
              style={styles.closebtn}
              onPress={toggleModal}>
              
              <Text style={{ color: 'white',fontSize:17,textAlign:'center'  }}>Close</Text>
            </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </Modal>
    </View>
  );
};

 
 

 
  


export default UserInfoScreen;