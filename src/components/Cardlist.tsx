import Card from './Card'
import Robot from '../models/robot'

interface Props {
  robots: Robot[]
}

const Cardlist = (props: Props) => {

  const {robots} = props;

    const cardComponent =robots.map((user, i) =>{
        return <Card key={user.id} robot={robots[i]}/>
    });

    return <div>{cardComponent}</div>
};

export default Cardlist;
