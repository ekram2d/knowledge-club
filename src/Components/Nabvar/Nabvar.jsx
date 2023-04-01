import React from 'react';

const Nabvar = () => {
      return (
            <>
                  <div className="navbar bg-base-100 lg:w-[80%] m-4 mx-auto rounded-lg text-amber-50" >
                        <div className="flex-1">
                              <a className="btn btn-ghost normal-case text-xl">Knowledge Club</a>
                        </div>
                        <div className="flex-none gap-2">

                              <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                          <div className="w-10 rounded-full">
                                                <img src="https://randomuser.me/api/portraits/men/22.jpg" />
                                          </div>
                                    </label>

                              </div>
                        </div>
                  </div>
            </>
      );
};

export default Nabvar;