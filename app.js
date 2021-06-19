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

function Header(){
  
  var menu_toggle = () => {
    var menu_icon = document.getElementById("menu_icon");
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
  

  // var count = 1;
  //  setInterval(()=>{
  //    if(count%2==0)
  //     $('#central').text("NAAC Accredited 'A' Grade");
  //     else
  //     $('#central').text("A Central University");
  //     count++;
  // },1000)


  
  //  setInterval(()=>{
  //    $('#central').text("A central University");
  // },1000)

  //  var mn = document.getElementById('menu');
  // var hide_menu = () =>{
  //   if(window.innerWidth<=840){
  //      mn.style.display = "none"
  //   }
  // }
  // var at = document.getElementById('abt');
  // at.onclick = "hide_menu";
  //  at.addEventListener('click',hide_menu);

  // var size = ()=>{
  //   var s = document.getElementById('size');
  //   s.innerHTML = window.innerWidth;
  // }
  //  setInterval(size,100);
  


//   var jmi_ani = document.getElementById('central');
//   // var jmi_str = jmi_ani.textContent;
//   var jmi_str = "(A Central University)";
//   var i = 0;
//   var j = 0;
//   jmi_ani.style.height = 10+"px";
//   jmi_ani.textContent = "";
//   function ani_end_jamia(){
//     jmi_ani.textContent+=jmi_str[i];
//      i++;
//   }
//   setInterval(()=>{
//      if(i!=jmi_str.length-1){
//        ani_end_jamia();
//      }else{
//        i = 0;
//        jmi_ani.textContent = ""
//       j++;
//       if(j%2!=0){
//         jmi_str = "(NAAC Accredited '\A\' Grade)";
//       }else{
//         jmi_str = "(A Central University)";
//       }
//      }
//   },100)




  return (
    <div>
          <header className='header'>
            {/* <div id="size"> </div> */}
         <a href="polytechnic.html"> 
        <img src={process.env.PUBLIC_URL+"/polytechnic/jamia.png"} className="jamia_logo"/>
      </a>

     <a href="polyjmi.jpg" target="_blank">
       <img src={process.env.PUBLIC_URL+"/polytechnic/polyjmi.jpg"} className="polytechnic_logo"/>
     </a>
     <h1 className="university_polytechnic"> <span> UNIVERSITY &nbsp; POLYTECHNIC </span> </h1> <br/>
      <h3 className="jamia_millia_islamia"> JAMIA MILLIA ISLAMIA  <br/> <p id="central">(A central university)</p> </h3>


      <li id="menu">
        <img src={process.env.PUBLIC_URL+"/polytechnic/menu.png"} alt="" id="menu_icon" height="30px" width="35px" onClick={menu_toggle}/> 
        <span id="menu_text" > MENU </span>
       </li>
<div className="out_nav" id="out_nav">
  
  <div className="nav">




    <ul>
      <li> <NavLink to="/"> HOME </NavLink> </li>
      <li id="abt"> <NavLink activeClassName="active_class" to="/about"> ABOUT  </NavLink>  </li>
      <li> <NavLink activeClassName="active_class" to="/news"> NEWS </NavLink>    </li>
      <li> <NavLink activeClassName="active_class" to="/staff"> STAFF </NavLink>   </li>
      <li> <NavLink activeClassName="active_class" to="/student"> STUDENT </NavLink>  </li>
      <li> 
          <a href="#" className="arrow"> BRANCH  </a> 
            <div className="sub"> 
              <ul>
                   <a href="#">Civil </a>
                   <a href="#">Computer </a>
                   <a href="#">Electrical </a>
                   <a href="#">E&C </a>
                   <a href="#">Mechanical </a>
              </ul>
             </div>
      </li>
      <li> <NavLink activeClassName="active_class" to="/placement"> PLACEMENT </NavLink> </li>
      <li> <NavLink activeClassName="active_class" to="/alumni"> ALUMNI </NavLink> </li>
      
      <li> <NavLink activeClassName="active_class" to="/gallery"> GALLERY </NavLink> </li>
       <li> <NavLink activeClassName="active_class" to="/contact"> CONTACT </NavLink> </li>
      <li> <input type="search" placeholder="Search" className="search_bar" id="search_bar"/>  </li>
      <li> <input type="button" className="submit_button" /></li> 
    </ul>
  </div>
</div>

</header>
{/* <span id="size"></span> */}
    </div>
  )
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
      
{/* <footer>
     
     <div className="contact"> 
      <span className="about_us"> CONTACT </span> <br/> 
      <img src={process.env.PUBLIC_URL+"/polytechnic/adress_icon.png"} alt="" height="20px" width="15px"/> 
      <span className="address"> &nbsp;&nbsp;University Polytechnic,<br/> 
        &nbsp; &nbsp;&nbsp; &nbsp;Jamia Millia Islamia,<br/>
        &nbsp; &nbsp;&nbsp; &nbsp;Jamia Nagar, Okhla, <br/>
        &nbsp; &nbsp;&nbsp; &nbsp;New Delhi-110025</span> <hr/> <br/>
   
        <span className="call"> <img src={process.env.PUBLIC_URL+"/polytechnic/call.png"} alt="" height="" width="15px"/>
         &nbsp; +91 9548097513 
       </span> <hr/> <br/> 
        <span className="msg"> <img src={process.env.PUBLIC_URL+"/polytechnic/message.png"} alt="" height="" width="20px"/>
         &nbsp;polytechnic@jmi.ac.in 
       </span> <hr/> <br/> &nbsp; &nbsp; &nbsp;
        <span className="social_media">
     <a href="#"> <img src={process.env.PUBLIC_URL+"/polytechnic/facebook.png"} alt="" height="30px" width="30px"/></a> &nbsp; &nbsp;
     <a href="#"> <img src={process.env.PUBLIC_URL+"/polytechnic/twitter.png"} alt="" height="30px" width="30px"/></a>  &nbsp; &nbsp;
     <a href="#"> <img src={process.env.PUBLIC_URL+"/polytechnic/linkedin.png"} alt="" height="30px" width="30px"/></a>
     </span> <hr/> <br/> <br/> <br/>
   </div> 
   
   <div className="link">
     <span className="important_link"> INPORTANT LINKS </span> <br/> <br/>
     &nbsp;&nbsp; <a href="http:\\www.jmi.ac.in" target="_blank"><span className="jamia_link"> Jamia Official Site </span></a> &nbsp;&nbsp;<br/> <hr/> <br/>
     &nbsp;&nbsp; <a href="http:\\www.jmicoe.in" target="_blank"><span className="jamia_link"> Jamia Exam Controller  </span></a> &nbsp;&nbsp;<br/> <hr/> <br/>
     &nbsp;&nbsp; <a href="http:\\jmi.ucanapply.com" target="_blank"> <span className="jamia_link"> Admission in Jamia </span></a> &nbsp;&nbsp;<br/> <hr/> <br/>
     <br/> <br/> <br/>
   </div>
   
   <div className="suggestion">
    <span className="suggest"> SUGGESTION </span> <br/><br/>
     <form action="#" method="POST">
       <input type="text" name="name" placeholder="Name" className="suggest_name"/> <br/><br/>
       <input type="email" name="email" placeholder="E-mail" className="suggest_email"/> <br/><br/>
       <textarea name="textarea" cols="25" rows="6" placeholder="Message" className="suggest_text"></textarea> <br/> <br/>
      <input type="submit" name="suggestion" className="suggest_submit"/> 
   </form>
    
   </div>
   
   </footer> */}



<footer>
           <div className="pic">
               <img src={process.env.PUBLIC_URL+"/polytechnic/jamia.png"} alt="" height="120"/><br/><br/>
           </div>
        <div className="contact">
            <span className="about_us"> ADDRESS </span> <br/>
            <img src={process.env.PUBLIC_URL+"/polytechnic/adress_icon.png"} alt="" height="20px" width="15px"/>
            <span className="address"> &nbsp;&nbsp;University Polytechnic,<br/>
                &nbsp; &nbsp;&nbsp; &nbsp;Jamia Millia Islamia,<br/>
                &nbsp; &nbsp;&nbsp; &nbsp;Jamia Nagar, Okhla, <br/>
                &nbsp; &nbsp;&nbsp; &nbsp;New Delhi-110025</span>
            <hr/>
           
            <br/><br/>
        </div>

        <div className="link">
            <span className="important_link"> CONTACT </span> <br/> 
            &nbsp;&nbsp; <a href="http:\\www.jmi.ac.in" target="_blank"><span className="jamia_link"> 
                <span className="call"> <img src={process.env.PUBLIC_URL+"/polytechnic/call.png"} alt="" height="" width="15px"/>
                    &nbsp; 
                </span>
                +91 9548097513

                </span></a> &nbsp;&nbsp;<br/>
            <hr/> 
            &nbsp;&nbsp; <a href="http:\\www.jmicoe.in" target="_blank"><span className="jamia_link"> 
                <span className="msg"> <img src={process.env.PUBLIC_URL+"/polytechnic/message.png"} alt="" height="" width="20px"/>
                    &nbsp;
                </span>
                polytechnic@jmi.ac.in
                </span></a> &nbsp;&nbsp;<br/>
            <hr/>
            &nbsp;&nbsp; <a href="http:\\jmi.ucanapply.com" target="_blank"> <span className="jamia_link"> 
              <span className="social_media">
                <a href="#"> <img src={process.env.PUBLIC_URL+"/polytechnic/facebook.png"} alt="" height="30px" width="30px"/></a> &nbsp; &nbsp;
                <a href="#"> <img src={process.env.PUBLIC_URL+"/polytechnic/twitter.png"} alt="" height="30px" width="30px"/></a> &nbsp; &nbsp;
                <a href="#"> <img src={process.env.PUBLIC_URL+"/polytechnic/linkedin.png"} alt="" height="30px" width="30px"/></a>
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
                <input type="text" name="name" placeholder="Name" className="suggest_name"/> <br/>
                <input type="email" name="email" placeholder="E-mail" className="suggest_email"/> <br/>
                <textarea name="textarea" cols="19" rows="3" placeholder="Message" className="suggest_text"></textarea>
                <input type="submit" name="suggestion" className="suggest_submit"/>
            </form>

        </div><br/>

    </footer>     

    {/* <h1 className="sqbb"></h1> */}

  <div className="copyright">
    Copyright &copy; 2021 - All Rights Reserved | <a href="#"> Privacy Policy </a> | <a href="#"> Terms and conditions </a> | <a href="#"> Help </a> <br/>
 </div> 
     </div>
  )
}
}

export default App;











































































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
  var menu_toggle = () =>{ 
  // function menu_toggle(){
    var menu_icon = document.getElementById("menu_icon");
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
  









  // var count = 1;
  //  setInterval(()=>{
  //    if(count%2==0)
  //     $('#central').text("NAAC Accredited 'A' Grade");
  //     else
  //     $('#central').text("A Central University");
  //     count++;
  // },1000)


  
  //  setInterval(()=>{
  //    $('#central').text("A central University");
  // },1000)

  //  var mn = document.getElementById('menu');
  // var hide_menu = () =>{
  //   if(window.innerWidth<=840){
  //      mn.style.display = "none"
  //   }
  // }
  // var at = document.getElementById('abt');
  // at.onclick = "hide_menu";
  //  at.addEventListener('click',hide_menu);

  // var size = ()=>{
  //   var s = document.getElementById('size');
  //   s.innerHTML = window.innerWidth;
  // }
  //  setInterval(size,100);
  


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

}

render(){
  return (
    <div>
          <header className='header'>
            {/* <div id="size"> </div> */}
         <a href="polytechnic.html"> 
        <img src={process.env.PUBLIC_URL+"/polytechnic/jamia.png"} className="jamia_logo"/>
      </a>

     <a href="polyjmi.jpg" target="_blank">
       <img src={process.env.PUBLIC_URL+"/polytechnic/polyjmi.jpg"} className="polytechnic_logo"/>
     </a>
     <h1 className="university_polytechnic"> <span> UNIVERSITY &nbsp; POLYTECHNIC </span> </h1> <br/>
      <h3 className="jamia_millia_islamia"> JAMIA MILLIA ISLAMIA  <br/> <p id="central">(A central university)</p> </h3>


      <li id="menu">
        <img src={process.env.PUBLIC_URL+"/polytechnic/menu.png"} alt="" id="menu_icon" height="30px" width="35px" onClick={this.menu_toggle} /> 
        <span id="menu_text" > MENU </span>
       </li>
<div className="out_nav" id="out_nav">
  
  <div className="nav">




    <ul>
      <li> <NavLink to="/"> HOME </NavLink> </li>
      <li id="abt"> <NavLink activeClassName="active_class" to="/about"> ABOUT  </NavLink>  </li>
      <li> <NavLink activeClassName="active_class" to="/news"> NEWS </NavLink>    </li>
      <li> <NavLink activeClassName="active_class" to="/staff"> STAFF </NavLink>   </li>
      <li> <NavLink activeClassName="active_class" to="/student"> STUDENT </NavLink>  </li>
      <li> 
          <a href="#" className="arrow"> BRANCH  </a> 
            <div className="sub"> 
              <ul>
                   <a href="#">Civil </a>
                   <a href="#">Computer </a>
                   <a href="#">Electrical </a>
                   <a href="#">E&C </a>
                   <a href="#">Mechanical </a>
              </ul>
             </div>
      </li>
      <li> <NavLink activeClassName="active_class" to="/placement"> PLACEMENT </NavLink> </li>
      <li> <NavLink activeClassName="active_class" to="/alumni"> ALUMNI </NavLink> </li>
      
      <li> <NavLink activeClassName="active_class" to="/gallery"> GALLERY </NavLink> </li>
       <li> <NavLink activeClassName="active_class" to="/contact"> CONTACT </NavLink> </li>
      <li> <input type="search" placeholder="Search" className="search_bar" id="search_bar"/>  </li>
      <li> <input type="button" className="submit_button" /></li> 
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
      
{/* <footer>
     
     <div className="contact"> 
      <span className="about_us"> CONTACT </span> <br/> 
      <img src={process.env.PUBLIC_URL+"/polytechnic/adress_icon.png"} alt="" height="20px" width="15px"/> 
      <span className="address"> &nbsp;&nbsp;University Polytechnic,<br/> 
        &nbsp; &nbsp;&nbsp; &nbsp;Jamia Millia Islamia,<br/>
        &nbsp; &nbsp;&nbsp; &nbsp;Jamia Nagar, Okhla, <br/>
        &nbsp; &nbsp;&nbsp; &nbsp;New Delhi-110025</span> <hr/> <br/>
   
        <span className="call"> <img src={process.env.PUBLIC_URL+"/polytechnic/call.png"} alt="" height="" width="15px"/>
         &nbsp; +91 9548097513 
       </span> <hr/> <br/> 
        <span className="msg"> <img src={process.env.PUBLIC_URL+"/polytechnic/message.png"} alt="" height="" width="20px"/>
         &nbsp;polytechnic@jmi.ac.in 
       </span> <hr/> <br/> &nbsp; &nbsp; &nbsp;
        <span className="social_media">
     <a href="#"> <img src={process.env.PUBLIC_URL+"/polytechnic/facebook.png"} alt="" height="30px" width="30px"/></a> &nbsp; &nbsp;
     <a href="#"> <img src={process.env.PUBLIC_URL+"/polytechnic/twitter.png"} alt="" height="30px" width="30px"/></a>  &nbsp; &nbsp;
     <a href="#"> <img src={process.env.PUBLIC_URL+"/polytechnic/linkedin.png"} alt="" height="30px" width="30px"/></a>
     </span> <hr/> <br/> <br/> <br/>
   </div> 
   
   <div className="link">
     <span className="important_link"> INPORTANT LINKS </span> <br/> <br/>
     &nbsp;&nbsp; <a href="http:\\www.jmi.ac.in" target="_blank"><span className="jamia_link"> Jamia Official Site </span></a> &nbsp;&nbsp;<br/> <hr/> <br/>
     &nbsp;&nbsp; <a href="http:\\www.jmicoe.in" target="_blank"><span className="jamia_link"> Jamia Exam Controller  </span></a> &nbsp;&nbsp;<br/> <hr/> <br/>
     &nbsp;&nbsp; <a href="http:\\jmi.ucanapply.com" target="_blank"> <span className="jamia_link"> Admission in Jamia </span></a> &nbsp;&nbsp;<br/> <hr/> <br/>
     <br/> <br/> <br/>
   </div>
   
   <div className="suggestion">
    <span className="suggest"> SUGGESTION </span> <br/><br/>
     <form action="#" method="POST">
       <input type="text" name="name" placeholder="Name" className="suggest_name"/> <br/><br/>
       <input type="email" name="email" placeholder="E-mail" className="suggest_email"/> <br/><br/>
       <textarea name="textarea" cols="25" rows="6" placeholder="Message" className="suggest_text"></textarea> <br/> <br/>
      <input type="submit" name="suggestion" className="suggest_submit"/> 
   </form>
    
   </div>
   
   </footer> */}



<footer>
           <div className="pic">
               <img src={process.env.PUBLIC_URL+"/polytechnic/jamia.png"} alt="" height="120"/><br/><br/>
           </div>
        <div className="contact">
            <span className="about_us"> ADDRESS </span> <br/>
            <img src={process.env.PUBLIC_URL+"/polytechnic/adress_icon.png"} alt="" height="20px" width="15px"/>
            <span className="address"> &nbsp;&nbsp;University Polytechnic,<br/>
                &nbsp; &nbsp;&nbsp; &nbsp;Jamia Millia Islamia,<br/>
                &nbsp; &nbsp;&nbsp; &nbsp;Jamia Nagar, Okhla, <br/>
                &nbsp; &nbsp;&nbsp; &nbsp;New Delhi-110025</span>
            <hr/>
           
            <br/><br/>
        </div>

        <div className="link">
            <span className="important_link"> CONTACT </span> <br/> 
            &nbsp;&nbsp; <a href="http:\\www.jmi.ac.in" target="_blank"><span className="jamia_link"> 
                <span className="call"> <img src={process.env.PUBLIC_URL+"/polytechnic/call.png"} alt="" height="" width="15px"/>
                    &nbsp; 
                </span>
                +91 9548097513

                </span></a> &nbsp;&nbsp;<br/>
            <hr/> 
            &nbsp;&nbsp; <a href="http:\\www.jmicoe.in" target="_blank"><span className="jamia_link"> 
                <span className="msg"> <img src={process.env.PUBLIC_URL+"/polytechnic/message.png"} alt="" height="" width="20px"/>
                    &nbsp;
                </span>
                polytechnic@jmi.ac.in
                </span></a> &nbsp;&nbsp;<br/>
            <hr/>
            &nbsp;&nbsp; <a href="http:\\jmi.ucanapply.com" target="_blank"> <span className="jamia_link"> 
              <span className="social_media">
                <a href="#"> <img src={process.env.PUBLIC_URL+"/polytechnic/facebook.png"} alt="" height="30px" width="30px"/></a> &nbsp; &nbsp;
                <a href="#"> <img src={process.env.PUBLIC_URL+"/polytechnic/twitter.png"} alt="" height="30px" width="30px"/></a> &nbsp; &nbsp;
                <a href="#"> <img src={process.env.PUBLIC_URL+"/polytechnic/linkedin.png"} alt="" height="30px" width="30px"/></a>
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
                <input type="text" name="name" placeholder="Name" className="suggest_name"/> <br/>
                <input type="email" name="email" placeholder="E-mail" className="suggest_email"/> <br/>
                <textarea name="textarea" cols="19" rows="3" placeholder="Message" className="suggest_text"></textarea>
                <input type="submit" name="suggestion" className="suggest_submit"/>
            </form>

        </div><br/>

    </footer>     

    {/* <h1 className="sqbb"></h1> */}

  <div className="copyright">
    Copyright &copy; 2021 - All Rights Reserved | <a href="#"> Privacy Policy </a> | <a href="#"> Terms and conditions </a> | <a href="#"> Help </a> <br/>
 </div> 
     </div>
  )
}
}

export default App;
