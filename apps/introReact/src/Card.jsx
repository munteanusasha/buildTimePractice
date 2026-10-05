import profilePic from './assets/sponge-bob.png';

function Card(){
    return(
    <div className="card">
        <img className="card-image" src={profilePic} alt="sponge-bob" />
        <h2 className="card-title">Name</h2>
        <p className="card-text">i learn make react projects</p>
    </div>
    );
}

export default Card;