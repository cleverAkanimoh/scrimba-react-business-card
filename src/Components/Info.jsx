import image from '../assets/my-image.jpg';

const Info = () => {
    return ( 
        <header>
            <img src={image} alt="clever akanimoh" width="180" height="180"/>
            <h3>Clever Akanimoh</h3>
            <h5>FullStack Developer</h5>
            <small id="website">akanimohclever.website</small>
            <div className="link-div" >
                <a href="mailto:crushclever1@gmail.com" id="email-button">Email</a>&nbsp;&nbsp;
                <a href="" id="linkedIn-button">LinkedIn</a>
            </div>
        </header>
     );
}
 
export default Info;