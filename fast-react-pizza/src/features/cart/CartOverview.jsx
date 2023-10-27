import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className='flex items-center justify-between px-4 py-4 bg-stone-800 text-stone-200 text-sm uppercase md:text-base sm:px-6'>
      <p className='font-semibold text-stone-300 space-x-4'>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link href='#'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
