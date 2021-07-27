import { shallow } from "enzyme";
import App from '../App';


it('Renders without crashing', () => {
  shallow(<App />);
});