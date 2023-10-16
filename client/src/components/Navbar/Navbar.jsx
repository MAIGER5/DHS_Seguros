import { MenuArriba } from './MenuArriba';
import { MenuAbajo } from './MenuAbajo';

function Navbar() {


	return (
    <div className='mt-2'>
      <MenuArriba/>
      <MenuAbajo/>
    </div>
	);
}

export default Navbar;