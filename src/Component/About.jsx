import React from 'react'
import $ from 'jquery'


class About extends React.Component {
  componentDidMount = () => {

    $('.history ul li:even').css({ 'background-color': 'rgb(250,250,250)', 'padding': '10px' });
    $('.history ul li:odd').css({ 'background-color': 'rgb(245,245,245)', 'padding': '10px' });
    $('.history li span').css({ 'display': 'block', 'font-size': '25px', 'font-weight': 'bold' });
    $('.history li').css({ 'list-style-type': 'none' })
    $('.history div').css({ 'position': 'relative', 'right': '18px' })
  }






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
        {/* About Polytechnic */}

        <div style={card}>
          <div style={container}>
            <h2 style={{ fontSize: '30px', color: 'darkcyan' }}><b>About Polytechnic</b></h2>
            <p>
              University Polytechnic is one the of oldest Department of Jamia Millia Islamia.
              It came under faculty of Engineering and Technology of the Jamia Millia Islamia, University.
              Diploma course offered by University Polytechnic
              is recognised by All India Council for Technical Education (AICTE).
              University Polytechnic offers 3 years duration Diploma Engineering course in following brances:
            </p>
            <ul>
              <b>
                <li> Diploma in Civil Engineering </li>
                <li> Diploma in Computer Engineering</li>
                <li> Diploma in Electrical Engineering</li>
                <li> Diploma in Electronics Engineering</li>
                <li> Diploma in Mechanical Engineering</li>
              </b>
            </ul>
          </div>
        </div>

        {/* Vission */}
        <div style={card}>
          <div style={container}>
            <h2 style={{ fontSize: '25px', color: 'darkcyan' }}><b>Vission</b></h2>
            <p style={{ fontFamily: 'Brush Script MT', fontSize: '30px' }}>
              Right on the top is a star with the inscription“Allah O Akbar.”
              When in dark nights poor travellers have to traverse jungles and there is no one to show them the way,
              they chart their course with the help of stars.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div style={card}>
          <div style={container}>
            <h2 style={{ fontSize: '25px', color: 'darkcyan' }}><b>Mission</b></h2>
            <p style={{ fontFamily: 'Brush Script MT', fontSize: '30px' }}>
              To provide an education that transforms students through rigorous
              coursework and by providing an understanding of the needs of
              society and industry and collaborate with other academic and
              research institutes around the world to
              strengthen the education and research ecosystem.

            </p>
          </div>
        </div>



        <div style={card} className="history">
          <div style={container}>

            <div className="at_a_glance">
              <h1 style={{ color: "lightblue", textAlign: 'center', textShadow: '1px 1px 1px black' }}>HISTORY OF UNIVERSITY POLYTECHNIC</h1>
            </div>


            <ul>

              <li>
                <span>1957</span>
                The present University Polytechnic was established on the initiative of Dr. K. L. Shrimali,
                then Rural development and Higher education minister. This department, namely ‘Rural Institute’
                ran two courses (i). ‘Rural services’ and (ii). ‘Civil and Rural Engineering’ with an intake of
                30 students in each course and was governed by the ministry of education. The classes were held
                in tents and sometimes even in open air. The first principal was Mr. M. Farhatullah
              </li>
              <li>
                <span>1960</span>
                The first batch of this institute passed out. The tents were also replaced by hutments
                covered with asbestos (popularly known as dumpoos) Mr. Mir Najabat Ali took over as Principal.
              </li>
              <li>
                <span>1966</span>
                Mr. Jalaluddin became Principal of the Rural Institute
              </li>

              <li>
                <span>1976</span>
                The name was changed to ‘Department of Technology’ and was bought under the Faculty of
                Natural Sciences of JMI.
              </li>

              <li>
                <span>1979</span>
                Bachelor in Engineering (civil) was introduced as a part time course, running in evening.
                This course catered to the students who had passed diploma in engineering and were engaged
                in jobs during the day time.
              </li>

              <li>
                <span>1980</span>
                Two year Certificate courses were introduced in the Department of Technology, to impart
                theoretical and practical knowledge in Refrigeration and Air-conditioning, Electronics
                and Draughtsman (civil).
              </li>

              <li>
                <span>1983</span>
                Three Year Diploma in Electronics was introduced. Also a four year course of ‘Aircraft
                Maintenance Engineering’ was started.
              </li>

              <li>
                <span>1985</span>
                Faculty of Engineering was established and the Department of Technology was transferred
                from the Faculty of Natural Sciences to the Faculty of Engineering. The Bachelor in
                Engineering (civil) course was also transferred from Department of Technology to the
                Department of Civil Engineering of the Faculty of Engineering.
              </li>

              <li>
                <span>1988</span>
                Jamia Millia Islamia was accorded the status of a Central University by an act of the Parliament.
                The Department of Technology was hence forth named as ‘University Polytechnic’.
                The intake in Diploma Engineering courses remained forty students in each branch.
                The last batch of the Aircraft Maintenance Engineering passed out in this year and
                the course was discontinued.
              </li>



              <li>
                <span>1989</span>
                The construction of a new building for the University Polytechnic was started by the efforts
                of the then Principal, Mr. Jalaluddin. Diploma in Electrical Engineering and Diploma in
                Mechanical Engineering courses were also introduced.


              </li>

              <li>
                <span>1991</span>
                The New building of the University Polytechnic was inaugurated on 18th May by
                Dr. Manmohan Singh, who was then Chairman of University Grants Commission. Also, this year,
                a course under the scheme of ‘Community Polytechnic’ of the ministry of labour was introduced,
                in various trades. This scheme catered mainly to the needs of the economically and
                academically backward sections of society.


              </li>

              <li>
                <span>1995</span>
                After serving the Polytechnic for a period of more than 36 years (including 28 yrs as Principal),
                Mr. Jalaluddin retired from the post of Principal of University Polytechnic and
                Mr. Iqbal Azam became the next Principal in the month of March.
              </li>

              <li>
                <span>1997</span>
                The existing diploma courses being run in the day time were also started in the
                evening under self financing scheme
              </li>

              <li>
                <span>1998</span>
                ‘Diploma in Computer Engineering’ was introduced in the University Polytechnic.
              </li>

              <li>
                <span>2000</span>
                The certificate courses were discontinued due to legal problems
              </li>

              <li>
                <span>2001</span>
                The Diploma in Computer Engineering was also introduced in the evening under the self-finance scheme.
              </li>

              <li>
                <span>2006</span>
                The intake is increased from forty students to sixty students in both regular as well as
                evening courses of Diploma Engineering.The Community Polytechnic was closed in
                this year because of the Labour ministry withdrawing the scheme.
              </li>

              <li>
                <span>2008</span>
                The old workshop complex was demolished.
              </li>

              <li>
                <span>2009</span>
                Construction of a new five story building started.
              </li>

              <li>
                <span>2010</span>
                Prof. N.U. Khan took charge as the Director of the University Polytechnic.
              </li>

              <li>
                <span>2013</span>
                On 05th September the new building was inaugurated by Dr. M. M. Pallam Raju,
                HRD Minister, Govt. of India and handed over to the University Polytechnic.
              </li>

              <li>
                <span>2014</span>
                Mr. Iqbal Azam took back the charge of Principal, University Polytechnic from Prof. N.U. Khan on 30th June.
              </li>

              <li>
                <span>2016</span>
                Four year evening course of Diploma Engineering is converted into three year self-financed course.
              </li>

              <li>
                <span>2019</span>
                After serving the Polytechnic for a period of more than 20 years as Principal,
                Mr. Iqbal Azam retired from the post of Principal University Polytechnic.
                Dr. Mumtaz Ahmad, Head Mechanical Engineering Section took charge as Acting
                Principal of the University Polytechnic on 14th of January.
              </li>


            </ul>




          </div>

        </div>



      </div>
    )
  }
}

export default About;