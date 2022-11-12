import React from 'react' 
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        {/* <a href={CV} download className='btn'>Downloads CV</a> */}
        <a href='https://jmistudent-my.sharepoint.com/:w:/g/personal/gulrez2107307_st_jmi_ac_in/EUATpaOOEVZFv0ooI4F37-sBogcm6GU01zBretBbnxw7bw?e=Tfdn5G' className='btn' target='_blank'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

 export default CTA
