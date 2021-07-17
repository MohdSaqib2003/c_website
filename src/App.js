import './App.css';
import './fonts/font.ttf';
import './fonts/monotype_font.ttf';
import './fonts/Rakkas.ttf';
import $ from 'jquery'
import React from 'react';
import Front_center from  './Component/Front_center'
import About from  './Component/About'
import News from  './Component/News'
import Staff from './Component/Staff'
import Student from './Component/Student'
import Placement from './Component/Placement'
import Alumni from './Component/Alumni'
import Gallery from './Component/Gallery'
import Contact from  './Component/Contact'
import Civil from './Component/Branch/Civil';
import Computer from './Component/Branch/Computer';
import Electrical from './Component/Branch/Electrical';
import EandC from './Component/Branch/EandC';
import Mechanical from './Component/Branch/Mechanical';

import {NavLink , Route, Switch } from 'react-router-dom';
import { render } from '@testing-library/react';

function App() {

  return (
   <div>
<Header/>

        <main>
            <Switch>
                {/* <Route path="/" component={Front_center}/> */}
                <Route path="/" component={Front_center} exact/>
                <Route path="/about" component={About}/>
                <Route path="/news" component={News}/>
                <Route path="/staff" component={Staff}/>
                <Route path="/student" component={Student}/>
                <Route path="/placement" component={Placement}/>
                <Route path="/alumni" component={Alumni}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/civil" component={Civil}/>
                <Route path="/computer" component={Computer}/>
                <Route path="/electrical" component={Electrical}/>
                <Route path="/eandc" component={EandC}/>
                <Route path="/mechanical" component={Mechanical}/>

            </Switch>
        </main>
  <div>
    {/* <NavLink to="/"> Front </NavLink>
    <NavLink to="/about"> about </NavLink>
    <NavLink to="/contact"> Contact </NavLink> */}
  </div>
<Footer/>
    </div>
  );
}

// function Header(){
class Header extends React.Component{
  constructor(prop){
    super(prop);
  } 
  
  componentDidMount(){
  // var menu_toggle = () =>{ 
    var menu_icon = document.getElementById("menu_icon");
  function menu_toggle(){
    // alert('HEllo MAN');
    var out_nav =  document.getElementById("out_nav");
    if(out_nav.style.display=="block"){
         out_nav.style.display="none";
         menu_icon.src = process.env.PUBLIC_URL+"./polytechnic/menu.png";
       }
       else{
         out_nav.style.display="block";    
         out_nav.style.position="relative";
         out_nav.style.top="-18px";
         menu_icon.src = process.env.PUBLIC_URL+"./polytechnic/cross_mark.png";
     }
  }
  
   
  var search_bar_width = ()=>{
    var s_bar = document.getElementById('search_bar');
    if(window.innerWidth > 840 && window.innerWidth < 1150 ){
      s_bar.style.width = 240+"px";
    }
    else{
     s_bar.style.width = window.innerWidth-1021+"px";
    }
  }
   setInterval(search_bar_width,100);
  menu_icon.addEventListener('click',menu_toggle);
   





  var jmi_ani = document.getElementById('central');
  // var jmi_str = jmi_ani.textContent;

  var jmi_str = "(A Central University)";
  var i = 0;
  var j = 0;
  jmi_ani.style.height = 10+"px";
  jmi_ani.style.color = "green";
  jmi_ani.textContent = "";
  function ani_end_jamia(){
    jmi_ani.textContent+=jmi_str[i];
     i++;
  }
  setInterval(()=>{
     if(i!=jmi_str.length-1){
       ani_end_jamia();
     }else{
       i = 0;
       jmi_ani.textContent = ""
      j++;
      if(j%2!=0){
        jmi_str = "   (NAAC Accredited '\A\' Grade)   ";
      }else{
        jmi_str = "   (A Central University)   ";
      }
     }
  },100)
  


  function search_google(){
     var search_text = document.getElementById('search_bar');
    if(search_text.value!=""){
      //  window.location.assign(`https://www.google.com/search?=jamia+polytechnic+${search_text.value}`);
       window.open("https://www.google.com/search?q=jmi+polytechnic+"+search_text.value,'_blank');
    } 
  }
 document.getElementById('srch_btn').addEventListener('click',search_google);
  

}

render(){
  return (
    <div>
          <header className='header'>
            {/* <div id="size"> </div> */}
         <NavLink to="/">
        <img src={process.env.PUBLIC_URL+"/polytechnic/jamia.png"} className="jamia_logo"/>
      </NavLink>

     {/* <a href="polyjmi.jpg" target="_blank"> */}
       <img src={process.env.PUBLIC_URL+"/polytechnic/polyjmi.jpg"} className="polytechnic_logo"/>
     {/* </a> */}
     <NavLink to="/" style={{textDecoration:"none"}}>
     <h1 className="university_polytechnic"> <span> UNIVERSITY &nbsp; POLYTECHNIC </span> </h1> <br/>
     </NavLink>
      <h3 className="jamia_millia_islamia"> JAMIA MILLIA ISLAMIA  <br/> <p id="central">(A central university)</p> </h3>


      <li id="menu">
        <img src={process.env.PUBLIC_URL+"/polytechnic/menu.png"} alt="" id="menu_icon" height="30px" width="35px" /> 
        <span id="menu_text" > MENU </span>
       </li>
<div className="out_nav" id="out_nav">
  
  <div className="nav">




    <ul>
      <li className="menu_ani"> <NavLink to="/"> HOME </NavLink> </li>
      <li className="menu_ani" id="abt"> <NavLink activeClassName="active_class" to="/about"> ABOUT  </NavLink>  </li>
      <li className="menu_ani" > <NavLink activeClassName="active_class" to="/news"> NEWS </NavLink>    </li>
      <li className="menu_ani"> <NavLink activeClassName="active_class" to="/staff"> STAFF </NavLink>   </li>
      <li className="menu_ani"> <NavLink activeClassName="active_class" to="/student"> STUDENT </NavLink>  </li>
      <li> 
          <a href="#" className="arrow"> BRANCH  </a> 
            <div className="sub"> 
              <ul>
                   {/* <a href="#" className="menu_ani">Civil </a> */}
                   <NavLink activeClassName="active_class menu_ani" to="/civil"> Civil </NavLink>
                   <NavLink activeClassName="active_class menu_ani" to="/computer"> Computer </NavLink>
                   <NavLink activeClassName="active_class menu_ani" to="/electrical"> Electrical </NavLink>
                   <NavLink activeClassName="active_class menu_ani" to="eandc"> E&amp;C </NavLink>
                   <NavLink activeClassName="active_class menu_ani" to="Mechanical"> Mechanical </NavLink>
                   {/* <a href="#" className="menu_ani">Computer </a> */}
                   {/* <a href="#" className="menu_ani">Electrical </a>
                   <a href="#" className="menu_ani">E&C </a>
                   <a href="#" className="menu_ani">Mechanical </a> */}
              </ul>
             </div>
      </li>
      <li className="menu_ani"> <NavLink activeClassName="active_class" to="/placement"> PLACEMENT </NavLink> </li>
      <li className="menu_ani"> <NavLink activeClassName="active_class" to="/alumni"> ALUMNI </NavLink> </li>
      
      <li className="menu_ani"> <NavLink activeClassName="active_class" to="/gallery"> GALLERY </NavLink> </li>
      <li className="menu_ani"> <NavLink activeClassName="active_class" to="/contact"> CONTACT </NavLink> </li>
      <li> <input type="search" placeholder="Search" className="search_bar" id="search_bar"/>  </li>
      <li>  <input type="button" className="submit_button" id="srch_btn" /> </li>
    </ul>
  </div>
</div>

</header>
{/* <span id="size"></span> */}
    </div>
  )



  }
}






class Footer extends React.Component{

  componentDidMount=()=>{
    // setInterval(()=>{
    //   $('.sqbb').text(window.innerWidth);
    // },100);

  }
  render(){
    return (
    <div>
      

<footer>
           <div className="pic">
           {/* <span className="sqbb">HEllo</span> */}
               <img src={process.env.PUBLIC_URL+"/polytechnic/jamia.png"} alt="" height="120"/><br/><br/>
           </div>
        <div className="contact">
            <span className="about_us"> ADDRESS <span className="bor_bott"></span> </span> <br/>
            <img src={process.env.PUBLIC_URL+"/polytechnic/adress_icon.png"} alt="" height="20px" width="15px"/>
            <span className="address"> &nbsp;&nbsp;University Polytechnic,<br/>
                &nbsp; &nbsp;&nbsp; &nbsp;Jamia Millia Islamia,<br/>
                &nbsp; &nbsp;&nbsp; &nbsp;Jamia Nagar, Okhla, <br/>
                &nbsp; &nbsp;&nbsp; &nbsp;New Delhi-110025</span>
            <hr/>
           
            <br/><br/>
        </div>

        <div className="link">
            <span className="important_link"> CONTACT  </span> <br/> 
            &nbsp;&nbsp; <span className="jamia_link"> 
                <span className="call"> <img src={process.env.PUBLIC_URL+"/polytechnic/call.png"} alt="" height="" width="15px"/>
                    &nbsp; 
                </span>
                +91 9548097513
                </span> &nbsp;&nbsp;<br/>
            <hr/> 
            &nbsp;&nbsp; <span className="jamia_link"> 
                <span className="msg"> <img src={process.env.PUBLIC_URL+"/polytechnic/message.png"} alt="" height="" width="20px"/>
                    &nbsp;
                </span>
                polytechnic@jmi.ac.in
                </span> &nbsp;&nbsp;<br/>
            <hr/>
            &nbsp;&nbsp; <a href="http:\\jmi.ucanapply.com" target="_blank"> <span className="jamia_link"> 
              <span className="social_media">
                <a href="https://fb.com" target="_blank"> <img id="fb" src={process.env.PUBLIC_URL+"/polytechnic/facebook.png"} alt="" height="30px" width="30px"/></a> &nbsp; &nbsp;
                <a href="https://twitter.com" target="_blank"> <img id="twrr" src={process.env.PUBLIC_URL+"/polytechnic/twitter.png"} alt="" height="30px" width="30px"/></a> &nbsp; &nbsp;
                <a href="https://linkedin.com" target="_blank"> <img id="insta" src={process.env.PUBLIC_URL+"/polytechnic/linkedin.png"} alt="" height="30px" width="30px"/></a>
            </span>    
            
            </span></a> &nbsp;&nbsp;
            <br/>
            <hr/>
             <br/>
            {/* <br/> <br/>  */}
        </div>

        <div className="suggestion">
            <span className="suggest"> SUGGESTION </span> <br/>
            <form action="#" method="POST">
                <input type="text" name="name" placeholder="Name" className="suggest_name" autoComplete="OFF"/> <br/>
                <input type="email" name="email" placeholder="E-mail" className="suggest_email" autoComplete="OFF"/> <br/>
                <textarea name="textarea" cols="19" rows="3" placeholder="Message" className="suggest_text"></textarea>
                <input type="submit" name="suggestion" className="suggest_submit"/>
            </form>

        </div>

        <div className="suggestion">
            <span className="suggest"> LOCATION </span> <br/>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3786.451047654455!2d77.28065243234957!3d28.5634643286692!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfa52d7407045faf9!2sUniversity%20Polytechnic!5e1!3m2!1sen!2sin!4v1624809167344!5m2!1sen!2sin" height="130" width="250" style={{border:'0',borderRadius:'2px'}} allowfullscreen="" loading="lazy" ></iframe>
        </div><br/>

    </footer>     

    {/* <h1 className="sqbb"></h1> */}

  <div className="copyright">
    {/* Copyright &copy; 2021 - All Rights Reserved | <a href="#"> Privacy Policy </a> | <a href="#"> Terms and conditions </a> | <a href="#"> Help </a> <br/> */}
    Copyright © 2021 University Polytechnic, JMI, New Delhi. All Rights Reserved.
 </div> 
     </div>
  )
}
}

export default App;
