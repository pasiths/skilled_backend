import { useEffect, useState } from 'react';
import Banner from '../Components/Banner'
import BannerRec from '../Components/BannerRec'
import JobPortalContent from '../Components/JobPortalContent'

function HomePage() {

    const [loginSuccess, setLoginSuccess] = useState(null);

  useEffect(() => {
    // Get loginSuccess message from localStorage on component mount
    const successMessage = localStorage.getItem("loginSuccess");
    if (successMessage) {
      setLoginSuccess(successMessage);
    }
  }, []);


    return (
        <div>
             {loginSuccess ? <Banner /> : <BannerRec/>}
            
            
            <JobPortalContent />
        </div>
    )
}

export default HomePage