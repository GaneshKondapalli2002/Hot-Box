import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type RootStackParamList = {
  start: undefined;
  Login: undefined;
  Register: undefined;
  home: undefined; // Add this line
};

type homeProps = {
  navigation: NavigationProp<ParamListBase>;
};

const home: React.FC<homeProps> = ({ navigation }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  const getFirstDayOfWeek = () => {
    const date = new Date(currentDate);
    const day = date.getDay();
    const firstDay = new Date(date);
    firstDay.setDate(date.getDate() - day + 1);
    return firstDay;
  };

  const getWeekDates = () => {
    const firstDay = getFirstDayOfWeek();
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(firstDay);
      date.setDate(firstDay.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const handlePreviousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hot-Box</Text>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePreviousWeek} style={styles.navButton}>
          <Text style={styles.navButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>
          {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </Text>
        <TouchableOpacity onPress={handleNextWeek} style={styles.navButton}>
          <Text style={styles.navButtonText}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      {/* Week Days */}
      <View style={styles.weekContainer}>
        {getWeekDates().map((date, index) => (
          <View
            key={index}
            style={[
              styles.dayContainer,
              isToday(date) && styles.todayContainer, // Highlight today's date
            ]}
          >
            <Text style={[styles.dayText, isToday(date) && styles.todayText]}>
              {daysOfWeek[index]}
            </Text>
            <Text style={[styles.dateText, isToday(date) && styles.todayText]}>
              {date.getDate()}
            </Text>
          </View>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Login')}>
          <FontAwesome name="home" size={20} style={styles.footerIcon} />
          <Text style={styles.footerText}>Sign</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Calendar')}>
          <FontAwesome name="calendar" size={20} style={styles.footerIcon} />
          <Text style={styles.footerText}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('JobPostForm')}
        >
          <FontAwesome name="plus" size={20} style={styles.footerIcon} />
          <Text style={styles.footerText}>Post Job</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Profile')}>
          <FontAwesome name="user" size={20} style={styles.footerIcon} />
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F9FA', // Light gray background
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF', // White background for header
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  navButton: {
    padding: 10,
  },
  navButtonText: {
    fontSize: 20,
    color: '#007BFF', // Blue navigation buttons
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  footerIcon: {
    marginBottom: 5,
  },
  footerText: {
    fontSize: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '400',
    color: '#0B204E',
    marginTop: 40,
    textAlign: 'center',
  },
  footerItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, // Ensure items take equal space
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Spread out the footer items evenly
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    position: 'absolute', // Ensure footer stays at the bottom
    bottom: 0,
    left: 0,
    right: 0,
  },
  dayContainer: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 20, // Rounded for selected day
    backgroundColor: '#FFFFFF',
  },
  todayContainer: {
    backgroundColor: '#007BFF', // Highlight for today's date
    borderRadius: 20,
  },
  dayText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
  },
  dateText: {
    fontSize: 16,
    color: '#555',
  },
  todayText: {
    color: '#FFFFFF', // White text for highlighted day
  },
});

export default home;
