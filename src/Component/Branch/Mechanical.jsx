import React, { Component } from 'react';
import './civil.css';
 
class Mechanical extends Component {
    componentDidMount() {
        var lab_head = document.getElementsByClassName('lab_head');
        // var lab_logo = document.getElementsByClassName('lab_logo');
        var lab = document.getElementsByClassName('lab');

        (function toggle_lab(){
            for (let i = 0; i < lab.length; i++) {
                lab_head[i].addEventListener('click', () => {
                    for (let j = 0; j < lab.length; j++) {
                        if (j != i) {
                            lab[j].style.display = "none";
                        } else {
                                if (lab[j].style.display == "block") {
                                    lab[j].style.display = "none";

                                } else {
                                    lab[j].style.display = "block";
                                }
                        }
                    }
                  
                })
            }

        })();
    }
    render() {
        var plus = {
            float: 'right',
            backgroundColor: "white",
            position: 'relative',
            top: '2px',
            right: '2px',
            borderRadius: '5px'
        }
        return (
            <div>

                <div className="comp_container">

                    <h1>Mechanical Engineering section</h1>
                    <div className="about_section">
                        <div className="data_section">
                            <span>16</span> <br />
                            <h2>Faculty</h2>
                        </div>
                        <div className="data_section">
                            <span>24</span> <br />
                            <h2>Staff</h2>
                        </div>
                        <div className="data_section">
                            <span>10</span> <br />
                            <h2>Lab</h2>
                        </div>
                        <div className="data_section">
                            <span>400+</span> <br />
                            <h2>Student</h2>
                        </div>
                    </div>
                </div>
                <div className="comp_container">
                    <h1>About the Mechanical section</h1>
                    <div style={{ color: 'white', textAlign: 'justify', fontSize: '18px' }}>
                    Functioning since 1989. The department provides deeper study of a number of engineering sciences to which students are introduced at the core curriculum level, theoretical and experimental solution of physical problems, and design of systems relevant to the present and future industries demand. <br /><br /><br />
                    </div>
                </div>
                <div className="comp_container">
                    <h1>Laboratories</h1>

                    <h3 className="lab_head" id="sft_lab"> Software Engineering Lab </h3>
                    <div className="lab" style={{ color: 'black', textAlign: 'justify', fontSize: '18px', display: 'none' }}>
                        <span><b>Location  :</b> Room No : 312 ,3rd Floor </span>
                        <div> <br />
                            <b>  About the Software Engineering lab</b> <br />
                            The Lab consists of state of the art computers and printers and is located at Room No. 312,3rd floor. The Lab is used by the under graduate students for the laboratory work supporting courses on system analysis and design, software engineering, Programming lab and the projects. The Lab consists of software for compilers and MetaEdit software to support courses on metamodeling. The Lab also provides internet facility to the students. <br />
                        </div>
                        <img src="https://www.ecs.soton.ac.uk/sites/www.ecs.soton.ac.uk/files/_1JB0738_960x533.jpg" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2af3cY0vCIF4wPd0PTI4DJN4Z7p6c_pUPhuGj_b4hR4ZThPzbDrLOwUzLSKF0hsb5F_4&usqp=CAU" />
                        <img src="https://isel.handong.edu/img/20181112.jpg" alt="software engg. lab" />
                        <img src="https://www.juit.ac.in/images/se-lab.jpg" alt="software engg. lab" />
                    </div>

                    <h3 className="lab_head">Database Lab </h3>
                    <div className="lab" style={{ color: 'black', textAlign: 'justify', fontSize: '18px', display: 'none' }}>
                        <span><b>Location  :</b> Room No : 312 ,3rd Floor </span>
                        <div> <br />
                            <b> About the Database lab</b> <br />
                            The Lab consists of state of the art computers and printers and is located at Room No. 312,3rd floor. The Lab is used by the under graduate students for the laboratory work supporting courses on system analysis and design, software engineering, Programming lab and the projects. The Lab consists of software for compilers and MetaEdit software to support courses on metamodeling. The Lab also provides internet facility to the students. <br />
                        </div>
                        <img src="https://5.imimg.com/data5/ND/IC/DV/SELLER-30219110/english-language-lab-software-500x500.jpg" />
                        <img src="https://i.ytimg.com/vi/KHulYS7nxVE/maxresdefault.jpg" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsqJEpHKQVfOJ4oqdqoR4-KEzp49RfLLTYtlqvcjPAKmqqScmrsAfi-Def6hhNnoYl6A&usqp=CAU" alt="software engg. lab" />
                        <img src="http://zcoer.in/wp-content/uploads/2015/12/Software-Lab-1.png" alt="software engg. lab" />
                    </div>

                    <h3 className="lab_head">Networking Lab</h3>
                    <div className="lab" style={{ color: 'black', textAlign: 'justify', fontSize: '18px', display: 'none' }}>
                        <span><b>Location  :</b> Room No : 312 ,3rd Floor </span>
                        <div> <br />
                            <b> About the Networking lab</b> <br />
                            The Lab consists of state of the art computers and printers and is located at Room No. 312,3rd floor. The Lab is used by the under graduate students for the laboratory work supporting courses on system analysis and design, software engineering, Programming lab and the projects. The Lab consists of software for compilers and MetaEdit software to support courses on metamodeling. The Lab also provides internet facility to the students. <br />
                        </div>
                        <img src="https://www.ecs.soton.ac.uk/sites/www.ecs.soton.ac.uk/files/_1JB0738_960x533.jpg" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2af3cY0vCIF4wPd0PTI4DJN4Z7p6c_pUPhuGj_b4hR4ZThPzbDrLOwUzLSKF0hsb5F_4&usqp=CAU" />
                        <img src="https://isel.handong.edu/img/20181112.jpg" alt="software engg. lab" />
                        <img src="https://www.juit.ac.in/images/se-lab.jpg" alt="software engg. lab" />
                    </div>

                    <h3 className="lab_head">Graphics Lab</h3>
                    <div className="lab" style={{ color: 'black', textAlign: 'justify', fontSize: '18px', display: 'none' }}>
                        <span><b>Location  :</b> Room No : 312 ,3rd Floor </span>
                        <div> <br />
                            <b> About Graphics lab </b> <br />
                            The Lab consists of state of the art computers and printers and is located at Room No. 312,3rd floor. The Lab is used by the under graduate students for the laboratory work supporting courses on system analysis and design, software engineering, Programming lab and the projects. The Lab consists of software for compilers and MetaEdit software to support courses on metamodeling. The Lab also provides internet facility to the students. <br />
                        </div>
                        <img src="https://www.ecs.soton.ac.uk/sites/www.ecs.soton.ac.uk/files/_1JB0738_960x533.jpg" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2af3cY0vCIF4wPd0PTI4DJN4Z7p6c_pUPhuGj_b4hR4ZThPzbDrLOwUzLSKF0hsb5F_4&usqp=CAU" />
                        <img src="https://isel.handong.edu/img/20181112.jpg" alt="software engg. lab" />
                        <img src="https://www.juit.ac.in/images/se-lab.jpg" alt="software engg. lab" />
                    </div>

                    <h3 className="lab_head">Hardware Lab</h3>
                    <div className="lab" style={{ color: 'black', textAlign: 'justify', fontSize: '18px', display: 'none' }}>
                        <span><b>Location  :</b> Room No : 312 ,3rd Floor </span>
                        <div> <br />
                            <b> About the Hardware lab </b> <br />
                            The Lab consists of state of the art computers and printers and is located at Room No. 312,3rd floor. The Lab is used by the under graduate students for the laboratory work supporting courses on system analysis and design, software engineering, Programming lab and the projects. The Lab consists of software for compilers and MetaEdit software to support courses on metamodeling. The Lab also provides internet facility to the students. <br />
                        </div>
                        <img src="https://bakerboucher.com/wp-content/uploads/2016/10/SWE.jpg" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH2YcoPxcbhJ9bXGmFFhvvjYh8-t5uXgPKoez0QE2Li421ekJLDYdbDSMERXaHtoReRpY&usqp=CAU" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTLvYS8Logf9seBgYDhkpAp4nOil0LLT3QgtarTGt2QI0O-Mzt2EC2S4iuerty-ACrJgY&usqp=CAU" alt="software engg. lab" />
                        <img src="https://image1.masterfile.com/getImage/NzAwLTAwMTY3NjkwZW4uMDAwMDAwMDA=AL-QB6/700-00167690en_Masterfile.jpg" alt="software engg. lab" />
                    </div>

                </div>
            </div>
        );
    }
}



export default Mechanical;
