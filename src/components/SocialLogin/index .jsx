import React, { useState } from 'react';
import Wrapper from './style';
import google from '../../assets/google.png';
import meta from '../../assets/meta.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import dropDown from '../../assets/drop-down.png';

const SocialLogin = () => {
  const [isActive, setIsActive] = useState(null);
  const [formData, setFormData] = useState({
    google: { enabled: false, clientId: '', clientSecret: '' },
    meta: { enabled: false, appId: '', appSecret: '' },
    twitter: { enabled: false, consumerKey: '', consumerSecret: '' },
    linkedIn: { enabled: false, clientId: '', clientSecret: '' },
  });

  const [errors, setErrors] = useState({});

  const handleActivation = (platform) => {
    setIsActive(isActive === platform ? null : platform);
  };

  const handleToggleEnable = (platform) => {
    setFormData({
      ...formData,
      [platform]: {
        ...formData[platform],
        enabled: !formData[platform].enabled,
      },
    });
  };

  const handleChange = (platform, field, value) => {
    setFormData({
      ...formData,
      [platform]: { ...formData[platform], [field]: value },
    });
  };

  const handleSave = () => {
    let newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((platform) => {
      if (formData[platform].enabled) {
        if (!formData[platform].clientId || !formData[platform].clientSecret) {
          newErrors[platform] = 'All fields are mandatory when enabled.';
          isValid = false;
        }
      }
    });

    setErrors(newErrors);

    if (isValid) {
      alert('Successfully Saved!');
    }
  };

  return (
    <Wrapper>
      <div className='container'>
        <h1>Social Login</h1>
        <section className='sections'>
          {Object.entries({
            google: { img: google, title: 'Google' },
            meta: { img: meta, title: 'Meta' },
            twitter: { img: twitter, title: 'X (Twitter)' },
            linkedIn: { img: linkedin, title: 'LinkedIn' },
          }).map(([platform, { img, title }]) => (
            <section key={platform} className={platform}>
              <div className='section'>
                <img src={img} alt={title} />
                <h2>{title}</h2>
                <div className='down' onClick={() => handleActivation(platform)}>
                  <img
                    src={dropDown}
                    alt='Drop-Down'
                    className={isActive === platform ? 'rotated' : ''}
                  />
                </div>
              </div>
              {isActive === platform && (
                <div className='content'>
                  <div>
                    <span>Enable</span>
                    <input
                      type='checkbox'
                      checked={formData[platform].enabled}
                      onChange={() => handleToggleEnable(platform)}
                    />
                  </div>
                  {formData[platform].enabled && (
                    <>
                      <div>
                        <span>{platform === 'meta' ? 'Facebook App_Id' : 'Client_Id'}</span>
                        <input
                          type='text'
                          placeholder='Enter the Client_Id'
                          value={formData[platform].clientId}
                          onChange={(e) => handleChange(platform, 'clientId', e.target.value)}
                        />
                      </div>
                      <div>
                        <span>{platform === 'meta' ? 'App Secret' : 'Client_Secret'}</span>
                        <input
                          type='text'
                          placeholder='Enter the Client_Secret'
                          value={formData[platform].clientSecret}
                          onChange={(e) => handleChange(platform, 'clientSecret', e.target.value)}
                        />
                      </div>
                      {errors[platform] && <p className='error'>{errors[platform]}</p>}
                    </>
                  )}
                </div>
              )}
            </section>
          ))}
        </section>
        <div className='save'>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default SocialLogin;