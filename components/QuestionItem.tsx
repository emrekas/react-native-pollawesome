import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';

const getRandomColor = () => `rgb(${Math.floor(Math.random() * 230)},
                                  ${Math.floor(Math.random() * 150)},
                                  ${Math.floor(Math.random() * 200)})`;

const QuestionItem = (props: {
  title: string;
  id: string;
  createdBy: string;
  date: string;
  onPress: Function;
}) => {
  const color = getRandomColor();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => props.onPress()}
      style={styles.item}
    >
      <View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 0,
          }}
        >
          <View style={{ flex: 9 }}>
            <View style={{ margin: 10, marginBottom: 0 }}>
              <Text numberOfLines={2} style={[styles.title, { color }]}>
                {props.title}
              </Text>
            </View>

            <View style={styles.auditContainer}>
              <Text style={styles.audit}>{props.createdBy}</Text>
              <Text style={styles.audit}>{props.date}</Text>
            </View>
          </View>

          <View style={styles.shapeContainer}>
            <View style={[styles.shape, { backgroundColor: color }]} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default QuestionItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
    elevation: 4,
    paddingRight: 0,
    marginVertical: 4,
    marginHorizontal: 4,
  },
  auditContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  audit: {
    fontSize: 10,
    color: 'gray',
  },
  shapeContainer: {
    flex: 1,
    margin: 0,
    overflow: 'hidden',
    height: '100%',
  },
  shape: {
    width: 50,
    height: '120%',
    transform: [{ skewY: '5deg' }],
    left: 15,
    top: 0,
  },
  title: { fontSize: 14 },
});
