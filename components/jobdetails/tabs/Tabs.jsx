import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native"; 
import { SIZES } from "../../../constants";
import styles from "./tabs.style";

const TabButton = ({ name, activeTab, onHandleSearchType }) => {
  return (
    <TouchableOpacity onPress={() => onHandleSearchType(name)} style={styles.btn(name, activeTab)}>
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
};

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => ( 
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={setActiveTab} 
          />
        )}
        keyExtractor={(item) => item.toString()} 
        horizontal
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{ paddingHorizontal: SIZES.small / 2 }} 
      />
    </View>
  );
};

export default Tabs;
