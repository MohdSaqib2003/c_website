import React from 'react'
import './Alumni/alumni.css'
import {NavLink,Switch,Router, Route} from 'react-router-dom'
import Robert from './Alumni/Robert'
import Jack from './Alumni/Jack'
import Karan from './Alumni/Karan'



class Alumni extends React.Component{
    render(){
        return (
            <div>
                 <Switch>
                     <Route path="/Alumni/" component={Home_alumni} exact/>
                     <Route path="/Alumni/Robert" component={Robert}/>
                     <Route path="/Alumni/Jack" component={Jack}/>
                     <Route path="/Alumni/Karan" component={Karan}/>
                 </Switch>
            </div>
        )
    }
}
export default Alumni;




class Home_alumni extends React.Component {
    render() {
        let card = {
            borderRadius: "4px",
            border: "1px solid  #e6e3e3",
            transition: "0.3s",
            marginLeft: "5%",
            marginRight: "5%",
            marginBottom: "2%",
            backgroundColor: "white",
            fontSize: "18px"
        }
        let container = {
            padding: "2px 22px",
            textAlign: "justify"
        }

        return (
            <div>

                <div style={card}>
                    <div style={container}>
                    <h1 className="alumni_head">Notable Alumni</h1>

                        <div className="alumni">

                            <div className="alumnus">
                                <img  src={process.env.PUBLIC_URL + "/polytechnic/male.jpg"} alt="Cinque Terre" width="600" height="400" />
                           <div >
                            <h3>Robert Ben</h3>
                            Batch : 2003 <br/>
                            Robert Ben currently working as a Senior Software Enginner at Japan Times in Tokyo city. Robert Ben received Master Of Technology degree from Stanford University in 2010 <br/>
                            <NavLink to="/Alumni/Robert" className="alum_link"> <span>Read More&raquo;</span> </NavLink>
                            </div>
                        </div>

                         <div className="alumnus">
                                <img src={process.env.PUBLIC_URL + "/polytechnic/male.jpg"} alt="Cinque Terre" width="600" height="400" />
                             <div>
                            <h3>Jack Morris </h3>
                            Batch : 2003 <br/>
                            Jack Morris currently working as a Senior Software Enginner at Japan Times in Tokyo city. Jack Morris received Master Of Technology degree from Stanford University in 2010 <br/>
                            <span> <NavLink to="/Alumni/Jack" className="alum_link">Read More&raquo;</NavLink></span>
                            </div>
                        </div>

                         <div className="alumnus" >
                                <img  src={process.env.PUBLIC_URL + "/polytechnic/male.jpg"} alt="Cinque Terre" width="600" height="400" />
                            <div >
                            <h3>Karan Singhania </h3>
                            Batch : 2003 <br/>
                            Karan Singhania currently working as a Senior Software Enginner at Japan Times in Tokyo city. Karan Singhania received Master Of Technology degree from Stanford University in 2010. <br/>
                            <span> <NavLink to="/Alumni/Karan" className="alum_link">Read More&raquo;</NavLink></span>
                            </div>
                        </div>

                         <div className="alumnus" >
                                <img  src={process.env.PUBLIC_URL + "/polytechnic/male.jpg"} alt="Cinque Terre" width="600" height="400" />
                            <div >
                            <h3>Anchal </h3>
                            Batch : 2003 <br/>
                            Anchal currently working as a Senior Software Enginner at Japan Times in Tokyo city. Anchal received Master Of Technology degree from Stanford University in 2010. <br/>
                            <span>Read More&raquo;</span>
                            </div>
                        </div>
                        
                         <div className="alumnus" >
                                <img  src={process.env.PUBLIC_URL + "/polytechnic/male.jpg"} alt="Cinque Terre" width="600" height="400" />
                            <div >
                            <h3>Rohit Suri </h3>
                            Batch : 2003 <br/>
                            Rohit Suri currently working as a Senior Software Enginner at Japan Times in Tokyo city. Rohit Suri received Master Of Technology degree from Stanford University in 2010. <br/>
                            <span>Read More&raquo;</span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            </div >
        )
    }
}