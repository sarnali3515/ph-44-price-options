import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='bg-blue-500 rounded p-4 flex flex-col  text-white'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-3xl'> /month</span>
            </h2>
            <h4 className='text-3xl my-8 text-center'>{name} membership</h4>

            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, index) => <Feature feature={feature} key={index}></Feature>)
                }
            </div>
            <button className='mt-12 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-900'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;