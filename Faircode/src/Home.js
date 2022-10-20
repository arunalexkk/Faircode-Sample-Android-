import React, { useState, useEffect } from 'react';
import { useSelector ,useDispatch} from 'react-redux'
import {View, Text, FlatList,TextInput,SafeAreaView} from 'react-native';
import {getList,searchlist} from './redux/action';
import styles from './styles';

export default function SampleList() {
  const [search, setNumber] = useState(null);
  const searchdataList = search => dispatch(searchlist(search));
    const {lists,favorites} = useSelector(state => state.listReducer);
    const dispatch = useDispatch();
    const fetchDetails = () => dispatch(getList());
    useEffect(() => {
        fetchDetails();

    }, []);

  /********** search method *************** */

  const onChangeNumbers=()=>{
    if(search === ""){
      fetchDetails()
      setNumber("")
    }else{
    searchdataList(search);

    }

}

/********** empty list design *************** */

const empty =()=>{
  return(
  <SafeAreaView  style={styles.maincontainer}>
<Text style={styles.nolist}>No List!!</Text>
  </SafeAreaView>
  )
}

 /********** UI design *************** */


return (
        <SafeAreaView style={styles.maincontainer}>
          <Text style={styles.header}>Details</Text>
          <TextInput
          style={styles.textinput}
          onChangeText={(text) =>
            setNumber(text)
          }
          autoCapitalize='none'
          onSubmitEditing={onChangeNumbers}
          value={search}
          placeholder="Search"
          placeholderTextColor={"grey"}
          keyboardType="default"
        />
            <FlatList
              data={lists}
              ListEmptyComponent={empty}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => {
                return (
                    <View style={styles.container}>
        
                        <View style={styles.holder}>
                          <View style={styles.headertext}>
                          <Text style={styles.title_text}>
                          <Text>
                            {item.id}.      
                          </Text>
                            {item.title.charAt(0).toUpperCase()+item.title.slice(1)}
                          </Text>
                          </View>
                          </View>
                          <Text style={styles.body_text}>
                            {item.body}
                          </Text>
                     
                      
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
      );
  }