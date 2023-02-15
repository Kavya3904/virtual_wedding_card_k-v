import  React , {useState} from "react";
import './App.css';
import Iframe from 'react-iframe';

import CountdownTimer from './components/countdown/CountdownTimer'
import Slider from "./components/slider";
import Address from "./components/Address";
function App() {

const [names , setNames] =useState('Karthik')
console.log(names)
const THREE_DAYS_IN_MS = new Date('05 14 2023');
  

  const dateTimeAfterThreeDays =  THREE_DAYS_IN_MS;

// function change(){

//   if(names === 'Karthik'){
//     setNames('karthikmal')
//   }
//   else{
//     setNames('Karthik')
//   }
// }
  return (
    <div className="App">
    
<div className="row">

    <div className="cover-wrapper main-cover">
      {/* <img className=" " alt=""> */}
      <div className="cover-wrapper-border1"></div>
    </div>

</div>

<div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className="text-center gap-md">
        <div className="text-lg cursive-text">Time left for Wedding 💝</div>
        <div className="d-flex flex-center" id="counter">
          {/* <div className="var-text" id="day"></div>
          <div className="cursive-text r-text-sm right-gap-sm">days</div>
          <div className="var-text" id="hour">00</div>
          <div className="cursive-text r-text-sm right-gap-sm">hours</div>
          <div className="var-text" id="minute">00</div>
          <div className="cursive-text r-text-sm right-gap-sm">minutes</div>
          <div className="var-text" id="second">00</div>
          <div className="cursive-text r-text-sm right-gap-sm">seconds left</div> */}
         
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
          {/* <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      /> */}
        </div>
      </div>
    </div>
  </div>
</div>
{/* <button className="translate-btn" onClick={change}>translate</button> */}
<div className="container gap-md">
  <div className="row">
    <div className="col-md-12 text-center">
      <div className="cursive-text-meow save-date">Save the date</div>
      <div className="wed-date wed-date-anime">MAY 14, 2023</div>
   <div className="wed-place">At bride's residence</div> 
    </div>
  </div>
</div>
{/* <div className="img">dgsddfgdfgdfgf</div> */}

<Address  />
<h2 className="made-for"> Made for eachother 🕊</h2>
      <Slider  />

 
<div className="bg-brown">
  {/* <div className="gap-md"> */}
    {/* <div className="row">
      <div className="col-md-12 text-center">
        <div className="second-cover-wrapper main-second-cover">
      
          <div className="cover-wrapper-border brown"></div>
        </div>
      </div>
    </div> */}
  {/* </div> */}

  {/* <div className="container gap-md">
    <div className="row"> */}
      <div className="col-md-12 text-center mrg-det ">
        The marriage will be solemnized at the bride’s residence on 14th May 2023 in presence of our family and close relatives.<br/>
        Muhurtham: <b>11 am - 11:45 am</b>
      </div>
    {/* </div>
  </div> */}

  <div className="gap-md">
    <div className="row">
      <div className="col-md-12 text-center">
      <div style={{paddingBottom:"10px"}}><strong><em>Google map location of Groom's residence</em></strong></div>
     
       <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.487466638019!2d75.85992281480544!3d11.299037191968212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf8395564267597b5!2zMTHCsDE3JzU2LjUiTiA3NcKwNTEnNDMuNiJF!5e0!3m2!1sen!2sin!4v1674555523393!5m2!1sen!2sin"
        width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
      
      </div>
    </div>
  </div>

  <div className="container gap-md">
    <div className="row">
      <div className="col-md-12 text-center rec-dt ">
        The wedding reception for our friends and relatives will start from <b>5:30 pm  to 9 pm</b> on 14th may in the <strong>groom</strong> residence .
      </div>
    </div>
  </div>

  <div className="gap-md">
    <div className="row">
      <div className="col-md-12 text-center">
        <div style={{paddingBottom:"10px"}}><strong><em>Google map location of bride’s  residence</em></strong></div>
       {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.487466638019!2d75.85992281480544!3d11.299037191968212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf8395564267597b5!2zMTHCsDE3JzU2LjUiTiA3NcKwNTEnNDMuNiJF!5e0!3m2!1sen!2sin!4v1674555523393!5m2!1sen!2sin" 
        width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
       
        <Iframe url="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3912.2365291411156!2d75.90936011480566!3d11.317414691955804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDE5JzAyLjciTiA3NcKwNTQnNDEuNiJF!5e0!3m2!1sen!2sin!4v1675926648434!5m2!1sen!2sin"
        width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
     
       </div>
    </div>
  </div>

  <div className="container gap-md">
    <div className="row">
      <div className="col-md-12 text-center">
        Save to your calendar: <a target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=Mjk1ZXN1Z3I5dGplNzFxajNkc3ZlMDMxb2EgYWJoaXNoZWthcmF2aW5kYW5AbQ&amp;tmsrc=abhishekaravindan%40gmail.com" className="c-white">Click here!!</a>
      </div>
    </div>
  </div>

  <div className="container gap-md">
    <div className="row">
      <div className="col-md-12 text-center " style={{fontSize:"17px" }}>
      <em style={{fontWeight:"600"}}>  Reach us:</em> <br/>
      <b> <em> Mobile:</em></b>  +919495356831
       <b><em> Email:</em></b> kavya3904@gmail.com
      </div>
    </div>
  </div>

  <div className="container gap-md">
    <div className="row">
      <div className="col-md-12 text-center share-det">
        <p>WITH LOVE : Vyshak , Nisha , Gopinath , Kavya </p>
      </div>
    </div>
  </div>

  <div className="container disc-box">
    <div className="row">
      <div className="col-md-12 text-center">
        Pre-wedding party starts from 3pm at Bride's houses for friends and relatives on 13th May 2023.
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default App;
