import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function IDA() {

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [MobileNo, setMobileNo] = useState('');
 

  async function submit(e) {
    e.preventDefault(); 
    try {
      const response = await axios.post("http://localhost:5000/receive", {                 
        Name: Name,  
        Email:Email,
        MobileNo: MobileNo
      });
      console.log(response);
      alert("Submitted successfully!"); 
       setName('');
      setMobileNo('');
      setEmail('');
    } catch (error) {
      console.log(error);
      alert("There was an error submitting the form."); 
    }
  }


  return (
    <>

<nav className="navbar navbar-expand-lg ">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src="https://idacreations.com/img/IDA.png" alt="Logo" className="navbar-logo" style={{ height: '70px',width:'100px' }} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="/#home"className="nav-link navbar-link ">Home</a>
            </li>
            <li className="nav-item">
              <a href="/#about"className="nav-link navbar-link">About</a>
            </li>
            <li className="nav-item">
              <a href="/#services" className="nav-link navbar-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="/#clients" className="nav-link navbar-link">Clients</a>
            </li>
            <li className="nav-item">
              <a href="/#contact" className="nav-link navbar-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section id='home'>
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <img
            src="https://img.freepik.com/premium-vector/isometric-technology-flowchart_98292-11565.jpg?w=900"
            alt="Flowchart"
            style={{ maxWidth: '110%', maxHeight: '90%' }}
          />
        </div>

        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <div>
            <h4 className="type">Bringing Ideas To Our Reality</h4>
            <br></br>
          <Button variant="secondary">Explore</Button>
          </div>
        </div>
        </div>
      </div>
      </section><br></br>

{/* About  */} 

<section id='about' className="container my-5">
      <div className="text-center mb-4">
        <h3 style={{ color: 'blueviolet', fontWeight: 'bold', fontSize: '2rem' }}>IDA - AR, VR AND MR COMPANY IN INDIA</h3>
      </div>
      <div className="row">
        <div className="col-lg-6 d-flex align-items-center mb-4 mb-lg-0">
          <p style={{ fontStyle: 'italic', fontSize: '1.2rem', marginLeft: '25px' }}>
            We IDA - Industrial Design and Animation is a creative and Innovative Digital Retransformation organisation with Focus the stream on both Web 3.0 and Industry 4.0 solutions. We Transform and elevate your Insustry and Business With Immersive Technical solution with extensive and wide range of Imagination that becomes Possible.
            <br /><br />
            We @IDA Transform your needs and reinvent Your business for upcoming digital future. We create and design based on your needs with technologies like AR (Augmented Reality), VR (Virtual Reality), MR (Mixed Reality) and XR (eXtended Reality). To reshape the entire future.
            <br /><br />
            Join Us into the Immersive Future
            <br /><br />
            <Button variant="primary">Learn More</Button>
          </p>
        </div>
        <div className="col-lg-6 d-flex justify-content-center">
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQWpPZa6HdN--_HjwaU-p6-bBuge42hdCp67eeUu6JIm5N4fH_7" alt="ida" className="img-fluid" />
        </div>
      </div>
    </section>

{/* Services */}
<section id='services'>
<div>
  <center>
    <h2>OUR SERVICES</h2>
    <p>Reinvent your industry with our industrial solutions</p>
  </center>
</div>

<div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-3">
            <Card className="service-card">
              <Card.Img variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn5ybOEj6p5qWcidKk1kYEZDn4Gvxb70WO2Q&s' />
              <Card.Body>
                <Card.Title className='text'>Game Development</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-3">
            <Card className="service-card">
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx8T3mD-1ZYKMV5oZ4OLCm-V9hRvq3H_G8dQ&s" />
              <Card.Body>
                <Card.Title className='text'>Generative AI</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-3">
            <Card className="service-card">
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlE6byC9pSMAWVzDbeUngS1DKsSiU3J_cyVA&s" />
              <Card.Body>
                <Card.Title className='text'>3D Modeling</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-3">
            <Card className="service-card">
              <Card.Img variant="top"  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM1EPaw-QuhsF0j8XCVD6KV4NH1Cxcl93BsQ&s' />
              <Card.Body>
                <Card.Title className='text'>Motion Graphics</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-3">
            <Card className="service-card">
              <Card.Img variant="top"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGc7IFaxTVGNLLclyMVZs5MNR61lCtFXskmQ&s" />
              <Card.Body>
                <Card.Title className='text'>AR/VR/MR/XR</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-3">
            <Card className="service-card">
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCEEXnOhBjP7eM7JWiInmHf772Neb70aInA&s" />
              <Card.Body>
                <Card.Title className='text'>UI/UX</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-3">
            <Card className="service-card">
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFL1Y960Se9iJv2xEEad92lggK_lEYuUq-Fw&s" />
              <Card.Body>
                <Card.Title className='text'>VFX</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-3">
            <Card className="service-card">
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2eB-nqSA93QD51iHYrGdyqAz0bZhjsDLmlw&s" />
              <Card.Body>
                <Card.Title className='text'>Academic Alliances</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>

<div class="containers">
<div>
  <center>
    <h2>OUR WORKING PROGRESS</h2>
    <p>A well-structured workflow with great design execution</p>
  </center>
</div>
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="box">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLzgMS9kyiN13mkTAv2UpWEDrGRpMfH6clAw&s" alt="img"></img>
                    <div class="content">
                        <h1>Discussion</h1>
                        <p>Under the client's business, goals, and challenges for building relationships.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="box">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiBKAFSi3JEeZ18zSzRhZyqDsG9dfFvtJ_O-USwAvCj0gTXoa" alt="img"></img>
                    <div class="content">
                        <h1>Ideate</h1>
                        <p>Gather ideas and create the first concept for the future product.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="box">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4FldufHU2I0nqcGSnEi6SCMoXjO8rqrBxsNbClgDQEzzUXmR" alt="img"></img>
                    <div class="content">
                        <h1>Execution</h1>
                        <p>Provide the first draft of a project, accept minor and major revisions.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
<br></br>
<div><center>
<h2>OUR PROJECTS</h2>
<p>Have a sneak peak at the Arts we Crafted</p></center>
</div>

<div class="container our-services">
    <div class="row">
      <div class="col-12 col-md-6 col-xl-4">
        <div class="flip-container">
          <div class="flipper">
            <div class="front">
              <img class="lazyload" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUc2oyTMBAcCXOHyHpNy3pKK4PFAnneX9OQw&s" alt=""></img>
              <center><h2 className='text-danger'>Precision Strike</h2></center>
            </div>
            <div class="back">
              <h3 class="text-primary">Precision Strike</h3><br></br>
              <p class="text-dark">Precision Strike Mobile is a tactical shooting game offering strategic combat with a variety of weapons and multiplayer modes.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-4">
        <div class="flip-container">
          <div class="flipper">
            <div class="front">
              <img class="lazyload" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDZ54HWQAwQklhJyW2H9dndUwyMRDnZcRZw&s" alt=""></img>
              <center><h2 className='text-danger'>Turbo Thurst</h2></center>
            </div>
            <div class="back">
              <h3 class="text-primary">Turbo Thurst</h3><br></br>
              <p class="text-dark">Turbo Thrust is a high-octane AAA mobile racing game, featuring immersive graphics and intense, fast-paced races.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-12 col-xl-4">
        <div class="flip-container">
          <div class="flipper">
            <div class="front">
              <img class="lazyload" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlUhzBFVYk0ZkPTZsDBjOxTYpYukYqhSE-HQ&s" alt="..."></img>
              <center><h2 className='text-danger'>Startup Fest Expo</h2></center>
            </div>
            <div class="back">
              <h3 class="text-primary">Startup Fest Expo</h3><br></br>
              <p class="text-dark">Startup Fest Expo by Oneyes is a premier event showcasing innovative startups, providing a platform for networking and opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>

<br></br>

{/* clients */}

<section id='clients'>
<div>
  <center>
    <h2>OUR CLIENTS</h2>
    <p>Our clients aren't just clients; they are valued partners in progress. We take pride in understanding their<br></br>
unique needs, tailoring solutions, and fostering long-term relationships.</p>
  </center>
</div>

<div class="container my-5">
    <div class="row">
      <div class="col-lg-2 col-md-6 col-sm-12 d-flex justify-content-center mb-3">
        <img class="img service" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQTS6gvNbrqIru4tmfLYdOuHTXwhDWmJdiL6QINMlPlf98tp3lT" alt="img"/>
      </div>
      <div class="col-lg-2 col-md-6 col-sm-12 d-flex justify-content-center mb-3">
        <img class="img service" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTRVdTFQIEYwPnCK4AQF7YOPBqdzjGWUZe6MMyobHFMVwqG82Je" alt="img"/>
      </div>
      <div class="col-lg-2 col-md-6 col-sm-12 d-flex justify-content-center mb-3">
        <img class="img service" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT2gT92t5QwMI2NcuYWj3XZSJnMIIdt5VwDVbKn7XXtbhmZV8Pl" alt="img"/>
      </div>
      <div class="col-lg-2 col-md-6 col-sm-12 d-flex justify-content-center mb-3">
        <img class="img service" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSMY76Pd6nOR_JfiwyxYZPBpptI50gUBsaf-jlvWoSdjpLApjSt" alt="img"/>
      </div>
      <div class="col-lg-2 col-md-6 col-sm-12 d-flex justify-content-center mb-3">
        <img class="img service" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQZosMG19B4TdtXw1YFnd0n42TlE-Uqo-B9KgXYbxO1yhtZm7JB" alt="img"/>
      </div>
      <div class="col-lg-2 col-md-6 col-sm-12 d-flex justify-content-center mb-3">
        <img class="img service" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRBkTabueirxpxjJQSVy_89TvQxj_A0RSSuFh6mhKVHTiseFMJY" alt="img"/>
      </div>
    </div>
  </div>
  <div class="container my-5">
    <div class="row">
      <div class="col-lg-2 col-md-6 col-sm-12 d-flex justify-content-center mb-3">
        <img class="img service" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQMoFRqa9V0rnoQLdAKJQo9wpneC2jXr8l6TmBEo_4bTYoM3oLD" alt="img"/>
      </div>
      <div class="col-lg-2 col-md-6 col-sm-12 d-flex justify-content-center mb-3">
        <img class="img service" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ_B3IGL8u0PaokmIN2uhiiw8e5J6RYh650axEAp_hE-dOksv7x" alt="img"/>
      </div>
      <div class="col-lg-2 col-md-6 col-sm-12 d-flex justify-content-center mb-3">
        <img class="img service" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcReVPTXEd8m4kGUywDKsa-NUvrMrdLhEFggJrvhh5ba0Zszz7YZ" alt="img"/>
      </div>
      <div class="col-lg-2 col-md-6 col-sm-12 d-flex justify-content-center mb-3">
        <img class="img service" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTSZWwTS8oY3c3YMM8-rbjC7BazFg7bRz3sDB72vIumL6qgUW6T" alt="img"/>
      </div>
      <div class="col-lg-2 col-md-6 col-sm-12 d-flex justify-content-center mb-3">
        <img class="img service" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVYvJbzJfJmHKvntjKiBapspIkSjEHqUU-mHL4nyQtb3fEHLt" alt="img"/>
      </div>
      <div class="col-lg-2 col-md-6 col-sm-12 d-flex justify-content-center mb-3">
        <img class="img service" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlocEUeawHj--ikbWx9EYQaxOqSqEDCAzJMU6rlQOrTq995bZd" alt="img"/>
      </div>
    </div>
  </div>
</section>

{/* contact */}

  <section id="contact">
  <center>
  <h2 className='text-light'>CONTACT DETAILS</h2>
</center><br></br>
    <div class="container-fluid contact">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="row">
              <div class="col-md-6 col-sm-6">
                <div class="text-center align-items-center d-flex">
                  <div>
                    <img className='logo'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXzeH-ADYZXlPMiBJXW7mc8s1H0j-mukIz4g&s" alt="Address Icon" />
                  </div>
                  <div class="p-2 m-2">
                    <h1 class="h1">Contact Us</h1>
                    <p class="para">INDUSTRIAL DESIGN & ANIMATIONS Karunaa Conclave, No.1963, J Block, 3rd Street, 5th Main Road, Anna Nagar West, Anna Nagar, Chennai, Tamil Nadu - 600040, INDIA</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-6">
                <div class="text-center align-items-center d-flex">
                  <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51G2B_SZJB0endmNq6J883AGW__WP8p3ndg&s"style={{width:'40px'}} alt="Email Icon" class="rounded" />
                  </div>
                  <div class="p-2 m-2">
                    <h1 class="h1">Email</h1>
                    <p class="para">info@idacreations.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="container text-info">
            <form id="contactForm" onSubmit={submit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          required
          value={Name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          required
          value={Email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="mobile">MobileNo:</label>
        <input
          type="tel"
          className="form-control"
          id="mobile"
          required
          value={MobileNo}
          name="mobile"
          onChange={(e) => setMobileNo(e.target.value)}
        />
      </div>
      <br />
      <div className="text-center">
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </div>
    </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



    </>
  );
}

export default IDA;
