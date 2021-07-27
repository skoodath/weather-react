import { shallow } from "enzyme";
import Wrapper from "../components/wrapper";


it('Renders without crashing', () => {
  shallow(<Wrapper />);
});