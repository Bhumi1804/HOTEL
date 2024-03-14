import React from 'react';
import './Gallery.css'; // Make sure to import your CSS file

function Gallery() {
  return (
    <div>
      <input type="radio" name="Photos" id="check1" defaultChecked />
      <input type="radio" name="Photos" id="check2" />
      <input type="radio" name="Photos" id="check3" />
      <input type="radio" name="Photos" id="check4" />
      <input type="radio" name="Photos" id="check5" />
      <input type="radio" name="Photos" id="check6" />

      <div className="container">
        <h2 className='btn-primary'>OUR PHOTOS</h2>
        <div className="top-content">
          {/* <h3>PHOTO GALLERY</h3> */}
          <label htmlFor="check1">ROOMS</label>
          <label htmlFor="check2">BATHROOM</label>
          <label htmlFor="check3">DINING</label>
          <label htmlFor="check4">EXTERIOR</label>
          <label htmlFor="check5">AMENITIES</label>
        </div>
        <div className="photo-gallery rooms-container">
          <div className="pic rooms">
            <img src="room1.jpg" alt="Room 1" />
          </div>
          <div className="pic rooms">
            <img src="room2.jpg" alt="Room 2" />
          </div>
          <div className="pic rooms">
            <img src="room3.jpg" alt="Room 3" />
          </div>
          <div className="pic rooms">
            <img src="room4.jpg" alt="Room 4" />
          </div>
          <div className="pic rooms">
            <img src="room5.jpg" alt="Room 5" />
          </div>
        </div>
        <div class="photo-gallery bathroom-container">
                <div class="pic bathroom">
                    <img src="bathroom1.jpg" alt="bathroom 1"/>
                </div>
                <div class="pic bathroom">
                    <img src="bathroom2.jpg" alt="bathroom 2"/>
                </div>
                <div class="pic bathroom">
                    <img src="bathroom3.jpg" alt="bathroom 3"/>
                </div>
                <div class="pic bathroom">
                    <img src="bathroom4.jpg"  alt="bathroom 4"/>
                </div>
                <div class="pic bathroom">
                    <img src="bathroom5.jpg" alt="bathroom 5"/>
                </div>
            </div>
            <div class="photo-gallery dining-container">
                <div class="pic dining">
                    <img src="dining1.jpg"  alt="dining 1"/>
                </div>
                <div class="pic dining">
                    <img src="dining2.jpg" alt="dining 2"/>
                </div>
                <div class="pic dining">
                    <img src="dining3.jpg" alt="dining 3"/>
                </div>
                <div class="pic dining">
                    <img src="dining4.jpg" alt="dining 4"/>
                </div>
                <div class="pic dining">
                    <img src="dining5.jpg" alt="dining 5"/>
                </div>
            </div>
            <div class="photo-gallery exterior-container">
                <div class="pic exterior">
                    <img src="exterior1.jpg" alt="exterior 1"/>
                </div>
                <div class="pic exterior">
                    <img src="exterior2.jpg" alt="exterior 2"/>
                </div>
                <div class="pic exterior">
                    <img src="exterior3.jpg" alt="exterior 3"/>
                </div>
                <div class="pic exterior">
                    <img src="exterior4.jpg" alt="exterior 4"/>
                </div>
                <div class="pic exterior">
                    <img src="exterior5.jpg" alt="exterior 5"/>
                </div>
            </div>
            <div class="photo-gallery amenities-container">
                <div class="pic common areas">
                    <img src="common1.jpg" alt="common 1"/>
                </div>
                <div class="pic amenities">
                    <img src="common2.jpg"  alt="common 2"/>
                </div>
                <div class="pic common areas">
                    <img src="common3.jpg"  alt="common 3"/>
                </div>
                <div class="pic common areas">
                    <img src="common4.jpg"  alt="common 4"/>
                </div>
                <div class="pic common areas">
                    <img src="common5.jpg"  alt="common 5"/>
                </div>
            </div>
        {/* Other photo gallery containers go here */}
      </div>
    </div>
  );
}

export default Gallery;

