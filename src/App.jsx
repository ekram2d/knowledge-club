import React, { useEffect, useState } from 'react';
import Nabvar from './Components/Nabvar/Nabvar';
import Question from './Question/Question';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [data, userData] = useState([]);
  const [time, setTime] = useState(0);

  const [aray, setArray] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then((data) => userData(data));
  }, [])

  const clcick = (single) => {
    let array = [];
    //  console.log(single);

    let chek = aray.find((x) => x === single);

    if (chek === undefined) {
      array = [...aray, single];


      setArray(array);

    } else {
      showToastMessage();
    }

  }
  const mark = (time1) => {
    let i = time + time1;
    setTime(i);
  }

  // totast 
  const showToastMessage = () => {
    toast.error('Already Exists!!!', {
      position: toast.POSITION.TOP_RIGHT
    });
  };


  return (
    <>


      {/* navbar section ....................................................... */}


      <Nabvar></Nabvar>
      <ToastContainer />



      {/* first part ............................ */}



      <div className='lg:flex justify-around'>

        <div>
          {

            data.map(singleData =>
              <div className="card lg:w-96 bg-white shadow-2xl gap-5">
                <figure><img src={singleData.img} alt="Shoes" /></figure>

                <div className='flex justify-between'>
                  <div className='flex justify-around items-center gap-2'>
                    <img className='w-16 rounded-full' src={singleData.userimg} >
                    </img>
                    <h1>
                      <p>{singleData.name}</p>
                      <p>Mar 14(4 days ago)</p>
                    </h1>
                  </div>
                  <div className='flex items-center gap-1'>
                    <p>{singleData.time} min read</p>
                    <img className='w-10 bg-red-400 rounded-full' src='https://th.bing.com/th/id/R.cccd311820e509964ce02c3b1a2a91ed?rik=2EvXSbT7m3HPiQ&riu=http%3a%2f%2fwww.endlessicons.com%2fwp-content%2fuploads%2f2014%2f03%2fbookmark-icon-2.png&ehk=btjYl6B3zSdgzpMuDRSJJ8jx8gOQftjgPcKOAyPvssU%3d&risl=&pid=ImgRaw&r=0' onClick={() => clcick(singleData)}></img>
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title">{singleData.category}</h2>

                  <button className='text-blue-500 text-start font-bold' onClick={() =>
                    mark(singleData.time)}>Mark as read</button>
                  <hr className='w-20 rounded-3xl'></hr>
                </div>

              </div>
            )


          }
        </div>



        {/* second part ..................................... */}
        <div>
          <div className='border rounded-lg p-2 w-full '>
            <p>Spent time on read: {time} min</p>
          </div>

          <div className='mt-4 rounded-sm p-2 bg-gray-300'>
            <p className='font-bold text-black text-2xl'>Bookmarked Blogs: {aray.length}</p>
            <div>
              {
                aray.map(x =>

                  <p className='drop-shadow-2xl rounded-lg  text-black bg-white p-2 m-2'>{x.category}</p>
                )


              }
            </div>
          </div>
        </div>
      </div>




      {/* qustion section ------------------------------------ */}




      <Question></Question>

    </>
  );
};

export default App;