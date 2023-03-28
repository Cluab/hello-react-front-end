import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from 'src/app/redux/greeting.slice';

function Greeting() {

  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings.greeting);
 
  useEffect(() => {
    dispatch(fetchGreeting() as never); // explicitly cast to AnyAction
  }, [dispatch]);

  return (
    <div>
      <p>{greeting}</p>
    </div>
  );
}
export default Greeting;
