import React, {useState, useEffect} from 'react'
import { useMediaQuery } from 'react-responsive';
import toast, { Toaster } from 'react-hot-toast';
import { generateOTP, verifyOTP } from '../../helper/helper';
import { useAuthStore } from '../../store/store';
import { useNavigate } from 'react-router-dom';

const Recovery = () => {
  
  const breakpoints_desktop = useMediaQuery({ query: "(min-width: 790px)" });

  const { username } = useAuthStore(state => state.auth);
    const [OTP, setOTP] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        generateOTP(username).then((OTP) => {
            console.log(OTP)
            if(OTP) return toast.success('OTP has been send to your email!');
            return toast.error('Problem while generating OTP!')
          })
    }, [username]);

    async function onSubmit(e){
        e.preventDefault();
        try {
          let { status } = await verifyOTP({ username, code : OTP })
          if(status === 201){
            toast.success('Verify Successfully!')
            return navigate('/reset')
          }  
        } catch (error) {
          return toast.error('Wrong OTP! Check email again!')
        }
    }

    // handler of resend OTP
  function resendOTP(){

    let sentPromise = generateOTP(username);

    toast.promise(sentPromise ,
      {
        loading: 'Sending...',
        success: <b>OTP has been send to your email!</b>,
        error: <b>Could not Send it!</b>,
      }
    );

    sentPromise.then((OTP) => {
      console.log(OTP)
    });
    
  }

  return (
    <>
    <Toaster position='top-center' reverseOrder={false}></Toaster>
    <div
      className="d-flex aligns-items-center justify-content-center card text-center w-60 position-absolute top-50 start-50 translate-middle"
      style={{
        width: breakpoints_desktop ? "50%" : "90%",
        marginTop: breakpoints_desktop ? "70px" : "100px",
      }}
    >

      <div className="card-body">
        <div
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            justifyContent: "space-between",
          }}>
          <h2 style={{ fontWeight: "700", alignItems: "center", marginBottom: '20px' }}> Recovery </h2>
          <h5 style={{ fontWeight: "300", alignItems: "center", marginBottom: '10%' }}> Enter OTP to recover password </h5>
        </div>
        <form onSubmit={onSubmit}>
        <div style={{ width: breakpoints_desktop ? "100%" : "50" }}>
          <p style={{ fontWeight: "300", alignItems: "center"}}> Enter 6 digit OTP sent to your email address</p>
          {/* <div
            style={{ display: "flex", marginBottom: "10px", marginTop: "18px" }}> */}

            <input
              style={{
                height: "45px",
                borderRadius: "0px",
                backgroundColor: "#F7F8FA",
                marginRight: "8px",
              }}
              id='username' type="number" className="form-control" placeholder="Enter OTP" onChange={(e) => setOTP(e.target.value)}
            />

          {/* </div> */}
        </div>
        <button
          style={{
            height: "45px",
            marginTop: "15px",
            borderRadius: "25px",
            width: "50%",
          }}
          type="submit" className="btn btn-primary"> Recover
        </button>
        <p
          style={{
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: "600",
            marginTop: "15px",
            textAlign: "center",
          }}
          onClick={resendOTP}>
                <span>Can't get OTP? </span>Resend
              </p>
        </form>
      </div>
    </div>
    </>
  )
}

export default Recovery
