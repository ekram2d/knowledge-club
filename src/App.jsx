import React, { useEffect, useState } from 'react';
import Nabvar from './Components/Nabvar/Nabvar';

const App = () => {
  const [data, userData] = useState([]);
  const[time,setTime]=useState(0);
  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then((data) => userData(data));
  }, [])

  const clcick=(id)=>{
    console.log(id);
  }
  const  mark=(time1)=>{
   let i=time+time1;
   setTime(i);
  }

 
  return (
    <>

      <Nabvar></Nabvar>
      {/* first part  */}
      <div className='flex justify-around'>

        <div>
          {

            data.map(singleData =>
              <div className="card w-96 bg-base-100 shadow-2xl gap-5">
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
                    <img className='w-10 bg-red-400 rounded-full' src='https://th.bing.com/th/id/R.cccd311820e509964ce02c3b1a2a91ed?rik=2EvXSbT7m3HPiQ&riu=http%3a%2f%2fwww.endlessicons.com%2fwp-content%2fuploads%2f2014%2f03%2fbookmark-icon-2.png&ehk=btjYl6B3zSdgzpMuDRSJJ8jx8gOQftjgPcKOAyPvssU%3d&risl=&pid=ImgRaw&r=0' onClick={()=>clcick(singleData.id)}></img>
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title">{singleData.category}</h2>
               
                  <button className='text-blue-300 text-start' onClick={()=>
                  mark(singleData.time)}>Mark as read</button>
                  <hr className='w-20'></hr>
                </div>
                
              </div>
            )


          }
        </div>

        {/* second part  */}
        <div>
          <div className='border rounded-lg p-2'>
            <p>Spent time on read: {time} min</p>
          </div>
        </div>
      </div>

    </>
  );
};

export default App;