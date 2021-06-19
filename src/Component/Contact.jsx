import React from 'react';

class Contact extends React.Component{
    render(){
        var card = {
            borderRadius: "4px",
            border: "1px solid  #e6e3e3",
            transition: "0.3s",
            marginLeft: "5%",
            marginRight: "5%",
            marginBottom: "2%",
            backgroundColor: "white",
            fontSize: "18px"
          }
        var container = {
            padding: "2px 22px",
            textAlign: "justify"
          }
        var heading = {
            backgroundColor : "rgb(245, 242, 206)",
            padding:'2px',
            fontSize:'25px',
            fontFamily:'Times New Roman',
            margin:'0px'
        }
        var sub_head = {
            backgroundColor:'rgb(252, 251, 235)',
            fontSize:'20px',
            fontWeight  : 'bold'
        }
        return(
            <div>
               <div style={card}>
                    <div style={container}>
                        <h1>Contact</h1>
                             <p style={heading}> Address </p>
                             <span>
                                University Polytechnic <br/>
                                Jamia Millia Islamia , <br/>
                                Jamia Nagar, Okhla  <br/>
                                New Delhi - 110025 <br/><br/>
                             </span>

                             <p style={heading}> Staff Contact </p>

                             <div style={sub_head}> Principal </div>
                             <span>
                              Telephone : 26980665 <br/>
                              Mobile  : +91 9868856190 <br/>
                              E-mail : mahmad4@jmi.ac.in
                             </span> <br/> <br/>

                             <div style={sub_head}> Civil Head </div>
                             <span>
                              Mobile  : +91 9268761909 <br/>
                              E-mail : makhtar@jmi.ac.in
                             </span> <br/> <br/>

                             <div style={sub_head}> Computer Head </div>
                             <span>
                              Mobile  : +91 9910371407 <br/>
                              E-mail : sunil@jmi.ac.in
                             </span> <br/> <br/>

                             <div style={sub_head}> Electrical Head </div>
                             <span>
                              Mobile  : +91 8800960966 <br/>
                              E-mail : makhan2@jmi.ac.in 
                             </span> <br/> <br/>

                             <div style={sub_head}> Electronics & Communication Head </div>
                             <span>
                              Mobile  : +91 9810600687 <br/>
                              E-mail : mnfaruque@jmi.ac.in
                             </span> <br/> <br/>

                             <div style={sub_head}> Mechanical Head </div>
                             <span>
                              Mobile  : +91 9868856190 <br/>
                              E-mail : mahmad4@jmi.ac.in
                             </span> <br/> <br/><br/>

                            
                             <p style={heading}>  Controller of Examinations </p>
                             <span>
                             Dr. Nazim Husain Al-Jafri (COE) <br/>
                              Telephone : 26987338 <br/>
                              Mobile  : +91 9836219994, 9836289994 <br/>
                              E-mail : coe@jmi.ac.in
                             </span><br/><br/>
                              
                             <p style={heading}> Dean f/o Engineering & Technology </p>
                             <span>
                             Ibraheem <br/>
                              Telephone : 26985227 <br/>
                              Mobile  : +91 9810134008 <br/>
                              E-mail : ibraheem@jmi.ac.in
                             </span><br/><br/>

                             <p style={heading}> University Placement Cell </p>
                             <span>
                             Rehan Khan Suri <br/>
                             (Training and Placement Officer) <br/>
                              Telephone : 26989106 <br/>
                              Mobile : 9891195255 <br/>
                              E-mail : plcements@jmi.ac.in
                             </span><br/><br/>

                             <p style={heading}> Vice-Chancellor </p>
                             <span>
                              Prof. Najma Akhtar <br/>
                              Telephone : 26984650 <br/>
                              E-mail : vc@jmi.ac.in
                             </span><br/><br/>

                             <p style={heading}>  Registrar </p>
                             <span>
                             Dr. Nazim Husain Al-Jafri <br/>
                              Telephone : 26980337 <br/>
                              E-mail : registrar@jmi.ac.in
                             </span><br/><br/>

                           
                    </div>
               </div>
            </div>
        )
    }
}

export default Contact;