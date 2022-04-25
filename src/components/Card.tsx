import Robot from '../models/robot'

interface Props {
  robot: Robot
    
}

const Card = (props:Props) => {

  const {robot} = props;
    return(
      <div className='bg-dark-green grow dib br3 pa3 ma2 bw2 shadow-5'>
        <img alt='robots' src={'https://robohash.org/'+robot.username} />
        <div>
          <h2>{robot.name}</h2>
          <p>{robot.email}</p>
        </div>
      </div>
    );
}

export default Card;
