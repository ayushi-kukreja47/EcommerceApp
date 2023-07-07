import React from 'react';
import Layout from '../components/Layout/Layout';

const Policy = () => {
  return (
    <Layout title={'privacy policy'}>
        <div className='row policy'>
            <div className='col-md-6'>
            <img
                src="/images/privacy.png"
                alt="policy"
                style={{width: '100%'}}
            />
            </div>
            <div className='col-md-4'>
                <p>add privacy policy</p><br/>
                <p>add privacy policy</p><br/>
                <p>add privacy policy</p><br/>
                <p>add privacy policy</p><br/>
               
            </div>
        </div>
    </Layout>
  );
};

export default Policy;