import image from '../assets/my-image.jpg';

const Info = () => {
    return ( 
        <header>
            <img src={image} alt="clever akanimoh" width="100"/>
            <h3>Clever Akanimoh</h3>
            <h5>FullStack Developer</h5>
            <small>crushclever1@gmail.com</small>
            <div className="link-div" >
                <a href="" className="email-button">Email</a>
                <a href="" className="linkedIn-button">LinkedIn</a>
            </div>
        </header>
     );
}
 
export default Info;