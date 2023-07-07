import React from 'react';
import Layout from '../components/Layout/Layout';

const About = () => {
  return (
    <Layout title={'About us- Ecommerce app'}>
        <div className='row about'>
        <div className='col-md-6'>
            <img
                src="/images/about-us.png"
                alt="About"
                style={{width: '100%'}}
            />
        </div>
        <div className='col-md-4 about'>
                
                <p className='text-justify mt-2'>
                    Lorem ipsum dolor sit amet. Et adipisci esse est tenetur eius est quisquam asperiores 
                    ea veniam porro? In fuga explicabo et recusandae dolor et voluptatem vitae ab excepturi
                    autem.Cum assumenda maxime est internos quidem et error perferendis. Id doloribus necessitatibus 
                    ut nihil necessitatibus qui fuga nihil.Sed reiciendis iure rem ipsa provident eos sapiente 
                    mollitia vel quia doloribus aut quia porro ut temporibus eligendi non perferendis molestiae? 
                    Ut sequi 
                </p>
        </div>
        </div>
    </Layout>
  );
};

export default About;