import React, {Fragment, useEffect} from 'react';
import PushController from './PushController';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {notificationActions} from '../../actions/notification';
import Loader from '../../components/Loader/Loader';
import {GET_API} from '../../util/api';
import Header from '../Header/Header';
import {connect} from 'react-redux';
import dateformat from 'dateformat';

const PushNotification = (props) => {
  useEffect(() => {
    getNotificationData();
  }, [props.notificationData]);
  const cleanAll = () => {
    GET_API('clear-all/my/notification').then((data) => {
      console.log('clear-all/my/notification', data);
      if (data.status) getNotificationData();
    });
  };
  const MarkeAllAsRead = () => {
    GET_API('read-all/my/notification').then((data) => {
      console.log('read-all/my/notification', data);
      if (data.status) getNotificationData();
    });
  };
  const getNotificationData = () => {
    props.notificationsAction();
  };
  if (!props.notificationStatus) {
    return (
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
        <Header />
        <SafeAreaView style={{alignSelf: 'center', justifyContent: 'center'}}>
          <View
            style={{
              textAlign: 'center',
            }}>
            <Text>No record Found</Text>
          </View>
        </SafeAreaView>
      </SafeAreaView>
    );
  } else {
    return (
      <text style={{flex: 1, backgroundColor: '#fff'}}>
        <Fragment>
          <SafeAreaView>
            {props.notificationData.length == 0 ? (
              <View style={{justifyContent: 'center', alignSelf: 'center'}}>
                <Text>No record Found</Text>
              </View>
            ) : (
              <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View style={styles.listHeader}>
                  <View>
                    <Text
                      style={{
                        color: '#f2A884',
                        fontSize: 22,
                        fontWeight: 'bold',
                      }}>
                      Notifications
                    </Text>
                  </View>
                  <View style={{alignItems: 'flex-end'}}>
                    <TouchableOpacity onPress={() => cleanAll()}>
                      <Text style={{color: '#f2A884', fontSize: 18}}>
                        Clean All
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => MarkeAllAsRead()}>
                      <Text style={{color: '#CCC'}}>Mark all as read</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.body}>
                  {props.notificationData.map((e, i) => {
                    return <_renderItem item={e} key={i} />;
                  })}
                </View>
              </ScrollView>
            )}
          </SafeAreaView>
          {/* <PushController /> */}
        </Fragment>
      </text>
    );
  }
};
const _renderItem = ({item}) => (
  <View key={item.title}>
    {item.is_read ? null : (
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
        }}>
        <Text style={{fontSize: 20, fontStyle: 'italic', fontWeight: '600'}}>
          {item.date} {dateformat(item.date_timestamp, 'mmm d')}
        </Text>
        <Text style={{fontSize: 18, fontWeight: '600'}}>
          {dateformat(item.date_timestamp, 'h:MM TT')}
        </Text>
      </View>
    )}
    <TouchableOpacity activeOpacity={item.is_read ? 0.5 : 1}>
      <View style={styles.card}>
        {item.is_read ? <View style={styles.cardTop}></View> : null}
        <View>
          <Text style={styles.title}>{item.message_title}</Text>
          <Text style={styles.message}>
            Order #{item.order_id} {item.message}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  cardTop: {
    height: 74,
    width: 10,
    position: 'absolute',
    marginLeft: -11,
    marginTop: 6,
    backgroundColor: '#EBA984',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  card: {
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    shadowColor: '#F2A884',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 44,
    padding: 20,
  },
  title: {fontSize: 18, fontWeight: '600', paddingTop: 10, color: '#f2A884'},
  message: {
    fontSize: 13,
    paddingBottom: 15,
  },
  engine: {position: 'absolute', right: 0},
  body: {
    padding: 20,
  },
  sectionContainer: {marginTop: 32, paddingHorizontal: 24},
  sectionTitle: {fontSize: 24, fontWeight: '600'},
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {fontWeight: '700'},
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

const mapStateToProps = (state) => {
  return {
    notificationData: state.notificationReducer.notificationData,
    notificationStatus: state.notificationReducer.notificationStatus,
  };
};
const actionCreater = {
  notificationsAction: notificationActions.notificationAction,
};
export default connect(mapStateToProps, actionCreater)(PushNotification);
