import  react,{useState} from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker  from '@react-native-community/datetimepicker';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import CustomDropdown from "./CustomDropdown";

export default function Booking() {
  const [jetType,setJetType]=useState(null)
  const [tripType,setTripType]=useState(null)

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date; 
    setDate(currentDate); 
    setShow(false)
  };

  const [time, setTime] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || time; 
    setTime(currentTime); 
    setShowTime(false)
  };

  const options = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
  ];

  const [selectedPassenger, setSelectedPassenger] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <View style={styles.jettype}>

            <TouchableOpacity style={styles.text} title='Electric Jet' onPress={()=>setJetType('ElectricJet')}>
              <Text style={[styles.text, jetType === 'ElectricJet' && styles.selectedText]}>Electric Jet</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.text} title='Electric Jet' onPress={()=>setJetType('FossilJet')}>
              <Text style={[styles.text, jetType === 'FossilJet' && styles.selectedText]}>Fossil Jet</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.text} title='Electric Jet' onPress={()=>setJetType('EVolt')}>
              <Text style={[styles.text, jetType === 'EVolt' && styles.selectedText]}>E-Volt</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.triptype}>

            <TouchableOpacity style={styles.text} title='Electric Jet' onPress={()=>setTripType('Oneway')}>
              <Text style={[styles.text, tripType === 'OneWay' && styles.selectedText]}>One-Way</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.text} title='Electric Jet' onPress={()=>setTripType('RoundTrip')}>
              <Text style={[styles.text, tripType === 'RoundTrip' && styles.selectedText]}>Round-Trip</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.text} title='Electric Jet' onPress={()=>setTripType('MultiTrip')}>
              <Text style={[styles.text, tripType === 'MultiTrip' && styles.selectedText]}>Multi-Trip</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.extradetails}>

            <TouchableOpacity style={styles.datepicker} onPress={()=>setShow(true)}>

                {show && (<DateTimePicker
                value={date}
                onChange={onChange}
                />)}

              <Text style={styles.text}> 

              <Entypo name="calendar" color="white" size={24} />
              {date
                ? date.toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
                : "Select Date"}
              </Text>
            </TouchableOpacity>

              
            <CustomDropdown
              label="Passengers"
              options={options}
              selectedValue={selectedPassenger}
              onValueChange={setSelectedPassenger}
            />

            
        </View>

        <View style={styles.preferredtime}>
            <TouchableOpacity style={styles.text} onPress={() => setShowTime(true)}>
              {showTime && (
                <DateTimePicker
                value={time}
                mode="time"
                
                display="default"
                onChange={onChangeTime}
              />
              )}
              <Text style={styles.text}>
                <EvilIcons name="clock" color="white" size={24} />{" "}
                  {time
                  ? time.toLocaleTimeString(undefined, {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "Select Time"}
              </Text>
            </TouchableOpacity>
        </View>

        

        <View style={styles.submit}>
          <TouchableOpacity>
            <Text style={styles.text}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: "#f0f0f0",
  },
  rectangle:{
    width:wp('85%'),
    backgroundColor:'black',
   
  },
  jettype:{
    flexDirection: "row",
    justifyContent: "space-around",
    padding: hp('2%'),
     

  },
  triptype:{
    flexDirection: "row",
    gap:wp('6%'),
    justifyContent:'flex-start',
    marginLeft: wp('5%'),
     
  },
  extradetails:{
    flexDirection: "row",
    margin:wp('4%'),
    gap:wp('6%'),
  },
  preferredtime:{
    margin:wp('3%')
  },
  submit:{
    
    alignSelf:'flex-end',
    margin:wp('5%'),
    backgroundColor:'orange',
    padding:10,
    borderRadius:10
  },
  text:{
    color:'white'
  },
  datepicker:{
    marginTop:hp('3%')
  },
  selectedText:{
    color: 'yellow',  
    fontWeight: 'bold',
  }
});