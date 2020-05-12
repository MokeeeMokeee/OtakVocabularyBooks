import * as React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

interface SectionListsProps {}

const SectionLists: React.FC<SectionListsProps> = () => {
  const datas = [
    {title: 'D', data: ['Devian', 'Dan', 'Dominic']},
    {
      title: 'J',
      data: [
        'Jackson',
        'James',
        'Jillian',
        'James',
        'Jillian',
        'James',
        'Jillian',
        'James',
        'Jillian',
        'James',
        'Jillian',
        'James',
        'Jillian',
        'James',
        'Jillian',
        'James',
        'Jillian',
        'James',
        'Jillian',
        'James',
        'Jillian',
        'James',
        'Jillian',
      ],
    },
  ];

  const Item = ({title}: {title: string}) => (
    <View>
      <Text style={styles.item}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={datas}
        renderItem={({item, index}) => <Item title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  header: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247, 247,247, 1.0)',
  },
});

export default SectionLists;
