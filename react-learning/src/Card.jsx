import myImage from './assets/my-photo.jpg'

function Card() {
  return (
    <div className='card'>
      <img className='card-img' src={myImage} alt="My-image" />
      <h4 className='card-name'>Ashfak Ahmath</h4>
      <p className='card-text'>Full-stack Developer, Software Engineer and Undergraduate of University of Moratuwa.</p>
    </div>
  );
}
export default Card;