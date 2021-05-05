import { Link } from 'react-router-dom';
import './Css/Card.css';
import Avatar from '@material-ui/core/Avatar';

const UserCard = (props) => {
  return (
    <div>
      <div className='image-container'>
        <Avatar
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: '#03265e'
          }}
        >
          {props.name.charAt(0)}
        </Avatar>
      </div>
      <h2>{props.name}</h2>
      <h3>{props.username}</h3>
      <h3>{props.email}</h3>

      <Link to={`/${props.id}`}>
        <button>MORE INFO</button>
      </Link>
    </div>
  );
};

export default UserCard;
