import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/HeaderCustom';
import SectionView from '../components/SectionView';
import SectionView2 from '../components/SectionView2';
import TextInputCustom from '../components/TextInputCustom';

const backIcon = require('../assets/back.png');
const userIcon = require('../assets/user.png');

const eventInfo = [
  {
    title: 'Lịch trình',
    url: 'https://icdn.dantri.com.vn/thumb_w/960/2019/02/16/10-1550333970807.jpg',
    titleImage: "Hình ảnh",
    data: [
      { titleCon: 'Địa điểm', description: 'Hồ Tràm, Vũng Tàu' },
      { titleCon: 'Thời gian', description: '09:00 AM - 12:00 AM, 12/12/2024' },
      { titleCon: 'Phương tiện di chuyển', description: 'Xe bus' },
      { titleCon: 'Thời gian', description: '21:00 - 22:00' },
    ],
  },
  {
    title: 'Khách sạn',
    textbtn: 'Chi tiết',
    data: [
      { titleCon: 'Tên khách sạn', description: 'Hồng Quỳnh' },
      { titleCon: 'Giờ mở cửa', description: '06:00 AM - 12:00 AM' },
      { titleCon: 'Địa điểm', description: '234 Quang Trung, Hồ Chí Minh' },
    ],
  },
];

const HomeScreen = () => {
  return (
    <ScrollView>
      <View>
        <Header 
          title="Header" 
          iconLeft={backIcon}
          iconRight={userIcon}
        />
        <Header 
          title="Trang chủ"
          iconLeft={backIcon}
        />
        <Header 
          iconLeft={backIcon}
        />
      </View>
      <View>
        <SectionView 
          title="Lịch trình"
          t1="Địa điểm"
          d1="Hồ Tràm, Vũng Tàu"
          t2="Thời gian"
          d2="09:00 AM - 12:00 AM, 12/12/2024"
          t3="Phương tiện di chuyển"
          d3="Xe bus"
          t4="Thời gian"
          d4="21:00 - 22:00"
          t5="Hình ảnh"
          url='https://icdn.dantri.com.vn/thumb_w/960/2019/02/16/10-1550333970807.jpg'
        />
        <SectionView 
          title="Khách sạn"
          t1="Tên khách sạn"
          d1="Hồng Quỳnh"
          t2="Giờ mở cửa"
          d2="06:00 AM - 12:00 AM"
          t3="Địa điểm"
          d3="234 Quang Trung, Hồ Chí Minh"
          textbtn="Chi tiết"
        />
      </View>
      <View>
        <SectionView2 sections={eventInfo} />
      </View>
      <View style={{padding: 10}}>
        <TextInputCustom title="Title" placeholder="Placeholder" required />
        <TextInputCustom title="Title" placeholder="Placeholder" required isFocus />
        <TextInputCustom title="Title" placeholder="Placeholder" required />
        <TextInputCustom title="Title" placeholder="Placeholder" required error="Error" description="Description" />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;