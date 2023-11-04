import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useStyleTheme } from './DashboardScreen.style';
import { Divider } from 'components';

const templates = ['ჯეოსელი', 'გადარიცხვა', 'კომუნალურები', 'ინტერნეტი', 'ანაბარი'];
const payments = ['სესხის გადასახადი', 'კომუნალურები', 'სწავლის გადასახადი', 'ჯეოსელი'];
const assets = ['ანაბრები', 'სესხები'];
const offers = ['შეთავაზება 1', 'შეთავაზება 2'];
const transactions = [
  'ტრანზაქცია 1',
  'ტრანზაქცია 2',
  'ტრანზაქცია 3',
  'ტრანზაქცია 4',
  'ტრანზაქცია 5',
];

export const tempData = {
  templates,
  payments,
  assets,
  offers,
  transactions,
};

export const Templates = ({ data }: { data: string[] }) => {
  const styles = useStyleTheme();

  const renderItem = ({ item }: { item: string }) => {
    return (
      <View style={[styles.item, { borderWidth: 1, borderRadius: 10 }]}>
        <Text>{item}</Text>
      </View>
    );
  };

  return (
    <>
      <View
        style={{
          paddingLeft: 24,
          paddingVertical: 32,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          backgroundColor: 'white',
        }}
      >
        <Text>შაბლონები</Text>
        <FlatList
          horizontal
          data={data}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 12,
            marginTop: 12,
            paddingRight: 10,
          }}
        />
      </View>
      <Divider />
    </>
  );
};

export const Payments = ({ data }: { data: string[] }) => {
  const styles = useStyleTheme();

  const renderItem = ({ item }: { item: string }) => {
    return (
      <View
        style={[
          styles.item,
          {
            height: 130,
            borderWidth: 1,
            borderRadius: 10,
            justifyContent: 'center',
            paddingHorizontal: 16,
          },
        ]}
      >
        <Text>{item}</Text>
      </View>
    );
  };

  return (
    <>
      <View style={{ backgroundColor: '#fff', paddingLeft: 24, paddingVertical: 32 }}>
        <Text>მოახლოებული გადახდები</Text>
        <FlatList
          horizontal
          data={data}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 12,
            marginTop: 12,
            paddingRight: 10,
          }}
        />
      </View>
      <Divider />
    </>
  );
};

export const Assets = ({ data }: { data: string[] }) => {
  const renderItem = ({ item, index }: { item: string; index: number }) => {
    return (
      <View style={[{ flexDirection: 'row', marginTop: 20 }]}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: 'lightgrey',
          }}
        />
        <View
          style={{
            flex: 1,
            marginLeft: 10,
            borderBottomWidth: index < data.length - 1 ? 1 : 0,
            borderBottomColor: 'lightgrey',
          }}
        >
          <Text>{item}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={{ backgroundColor: '#fff', paddingHorizontal: 24, paddingVertical: 32 }}>
        <Text>აქტივები და ვალდებულებები</Text>
        <FlatList data={data} renderItem={renderItem} />
      </View>
      <Divider />
    </>
  );
};

export const Offers = ({ data }: { data: string[] }) => {
  const styles = useStyleTheme();

  const renderItem = ({ item }: { item: string }) => {
    return (
      <View
        style={[
          styles.item,
          {
            height: 130,
            borderWidth: 1,
            borderRadius: 10,
            justifyContent: 'center',
            paddingHorizontal: 16,
            width: 200,
          },
        ]}
      >
        <Text>{item}</Text>
      </View>
    );
  };

  return (
    <>
      <View style={{ backgroundColor: '#fff', paddingLeft: 24, paddingVertical: 32 }}>
        <Text>შეთავაზებები</Text>
        <FlatList
          horizontal
          data={data}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 12,
            marginTop: 12,
            paddingRight: 10,
          }}
        />
      </View>
      <Divider />
    </>
  );
};

export const Pension = () => {
  return (
    <>
      <View style={{ backgroundColor: '#fff', paddingLeft: 24, paddingVertical: 32 }}>
        <Text>საპენსიო ფონდი</Text>
        <View style={[{ flexDirection: 'row', marginTop: 20 }]}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: 'lightgrey',
            }}
          />
          <View style={{ marginLeft: 10, justifyContent: 'center' }}>
            <Text children="დანაზოგი" />
            <Text children="$1000" />
          </View>
        </View>
      </View>
      <Divider />
    </>
  );
};

export const Banker = () => {
  return (
    <>
      <View style={{ backgroundColor: '#fff', paddingLeft: 24, paddingVertical: 32 }}>
        <Text>ჩემი ბანკირი</Text>
        <View style={[{ flexDirection: 'row', marginTop: 20 }]}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: 'lightgrey',
            }}
          />
          <View style={{ marginLeft: 10, justifyContent: 'center' }}>
            <Text children="ბანკირი" />
            <Text children="მთავარი ფილიალი" />
          </View>
        </View>
      </View>
      <Divider />
    </>
  );
};

export const Transactions = ({ data }: { data: string[] }) => {
  const renderItem = ({ item, index }: { item: string; index: number }) => {
    return (
      <View style={[{ flex: 1, flexDirection: 'row', marginTop: 20 }]}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: 'lightgrey',
          }}
        />
        <View
          style={{
            flex: 1,
            marginLeft: 10,
            borderBottomWidth: index < data.length - 1 ? 1 : 0,
            borderBottomColor: 'lightgrey',
          }}
        >
          <Text>{item}</Text>
        </View>
      </View>
    );
  };

  const footer = () => {
    return (
      <View
        style={{
          flex: 1,
          borderWidth: 1,
          borderRadius: 20,
          marginTop: 20,
          padding: 5,
          alignItems: 'center',
          borderColor: 'lightgrey',
        }}
      >
        <Text children="ყველა" style={{ color: '#922a69', fontWeight: '600' }} />
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={{ backgroundColor: '#fff', paddingHorizontal: 24, paddingTop: 32 }}>
        <Text>ბოლო ტრანზაქციები</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          style={{ marginTop: 10, paddingBottom: 30 }}
          ListFooterComponent={footer}
        />
      </View>
    </View>
  );
};
