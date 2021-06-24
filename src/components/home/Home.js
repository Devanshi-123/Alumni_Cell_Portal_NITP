import React from 'react';
import Head from "../head/Head";
import CarouselContainer from "./C";
import Cards from "./cards";
import App1 from "./newsletter/App1";
import './home.scss';
import { TextField } from '@material-ui/core'
import LandingPage from "./LandingPage/index";
import App2 from "./MailUs/App2";
import announcements from '../announcements/announcements';
import events from '../announcements/events';
import updates from '../announcements/updates';
import Contact from "./MailUs/Contact";
function Home() {
  return (
    <>
     
      {/* <LandingPage /> */}
      
 <CarouselContainer />
  

		  <div className='myAE container-fluid'>
			  <div className='row announcements-events'>
				  <div className='announcement-block announcement-events-block col-lg-4 col-md-4 col-sm-10 col-xs-10'>
					 
					  <h1
						  className='text-center'
						  style={{ fontFamily: 'calibri', color:'white', backgroundColor: 'rgb(249,86,31)', borderRadius:'10px 10px 10px 10px'}}
					  >
						  ANNOUNCEMENTS
							</h1>

					  <div className='announcement'>
						  <ul>
							  {announcements.map((announcement, idx) => {
								  return (
									  <div className='py-1'>
										  <li className='bold' key={idx}>
											  {announcement.content}
										  </li>
										  <ol>
											  <a
												  style={{
													  textDecoration:
														  'none',
												  }}
												  href={announcement.link}
												  rel='noopener noreferrer'
												  target='_blank'
											  // download={`${event.downloadName}.pdf`}
											  >
												  {announcement.linkContent}
											  </a>
										  </ol>
									  </div>
								  )
							  })}
						  </ul>
					  </div>
				  </div>
				  <div className='social-block announcement-events-block col-lg-4 col-md-4 col-sm-10 col-xs-10'>
					  <h1
						  className='text-center'
						  style={{ fontFamily: 'calibri', color:'white', backgroundColor: 'rgb(245,178,10)', borderRadius: '10px 10px 10px 10px' }}
					  >
						  SOCIAL MEDIA
							</h1>

					  <div className='social'>
						  <ul>

							  {/*<ol>
										TIME :<span>{event.time}</span>
									</ol>*/}
							  {events.map((event, idx) => {
								  return (
									  <div className='py-1'>
										  <li className='bold' key={idx}>
											  {event.content}
										  </li>
										  <ol>
											  <a
												  style={{
													  textDecoration:
														  'none',
												  }}
												  href={event.link}
												  rel='noopener noreferrer'
												  target='_blank'
											  // download={`${event.downloadName}.pdf`}
											  >
												  {event.linkContent}
											  </a>
										  </ol>
										 
										 
									  </div>
								  )
							  })}
						  </ul>
					  </div>
				  </div>
				  <div className='update-block announcement-events-block col-lg-4 col-md-4 col-sm-10 col-xs-10'>
					  <h1
						  className='text-center'
						  style={{ fontFamily: 'calibri', color:'white', backgroundColor: 'black', borderRadius: '10px 10px 10px 10px' }}
					  >
						  UPDATES
							</h1>

					  <div className='update'>
						  <ul>

							  {/*<ol>
										TIME :<span>{event.time}</span>
									</ol>*/}
							  {updates.map((update, idx) => {
								  return (
									  <div className='py-1'>
										  <li className='bold' key={idx}>
											  {update.content}
										  </li>
										  <ol>
											  <a
												  style={{
													  textDecoration:
														  'none',
												  }}
												  href={update.link}
												  rel='noopener noreferrer'
												  target='_blank'
											  // download={`${event.downloadName}.pdf`}
											  >
												  {update.linkContent}
											  </a>
										  </ol>


									  </div>
								  )
							  })}
						  </ul>
					  </div>
				  </div>
			  </div>
			  </div>
		  <div className='announcement-events-block col-lg-12' style={{marginTop:"20px"}}>
			  <h1
				  className='text-center'
				  style={{ fontFamily: 'calibri', color: 'white', backgroundColor: 'black', borderRadius: '10px 10px 10px 10px' }}
			  >
				  CONTACT US
							</h1>
			  <div className="contact">
				  <Contact />
				  </div>
			 
		  </div>
      
    
    </>
  );
}

export default Home;
