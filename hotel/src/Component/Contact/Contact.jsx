import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faLinkedin, faReddit, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import backgroundImage from './img.jpg';

const ShareContainer = styled.div`
  span {
    display: block;
    margin: 3rem auto;
    font-size: 50px;
    padding: 1rem;
    margin: 1rem;
    color: white; /* Set text color to be visible against the video background */
  }
`;

const ShareButtons = styled.div`
  i {
    font-size: 100px;
    margin: 20px;
  }

  .instagram {
    color: #ff0081;
  }

  .XfaXTwitter {
    color: #0a0909;
  }

  .linkedin {
    color: #0077b5;
  }

  .reddit {
    color: #cb2027;
  }

  .whatsapp {
    color: #25D366;
  }

  .Youtube {
    color: #f70610;
  }

  .instagram,
  .XfaXTwitter,
  .linkedin,
  .reddit,
  .whatsapp,
  .Youtube {
    opacity: 0.8;
  }

  .instagram:hover,
  .XfaXTwitter:hover,
  .linkedin:hover,
  .reddit:hover,
  .whatsapp:hover,
  .Youtube:hover {
    opacity: 0.5;
  }
`;

const ImageContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh; /* Set the height as needed */
  width: 100%; /* Set the width as needed */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageDiv = styled.div`
  background-color: rgba(255, 255, 255, 0.7); /* Background color with opacity */
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;
const Contact = () => {
  return (
    <>
      
      <center>
      <ImageContainer>
      <ImageDiv>
      <ShareContainer>
       
        <h1><ShareButtons>
          <a className="instagram" target="_blank" href="https://www.instagram.com/explore/tags/beachresort/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className="XfaXTwitter" target="_blank" href="https://twitter.com/RameshReddyHind/status/1743945306851422656">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a className="linkedin" target="_blank" href="https://www.linkedin.com/in/ashwin-kumar-38b7b1228/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="reddit" target="_blank" href="https://www.reddit.com/user/Acrobatic-Scene-9765/comments/19750j2/hotel_grand_project/">
            <FontAwesomeIcon icon={faReddit} />
          </a>
          <a className="whatsapp" target="_blank" href="https://wa.me/+919633318412">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a className="Youtube" target="_blank" href="https://www.youtube.com/@phantomyt03">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </ShareButtons></h1>
      </ShareContainer> 
      </ImageDiv></ImageContainer></center>
    
    </>
  );
};

export default Contact;
