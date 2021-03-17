import "./Story.css";
import React from "react";
import Head from '../head/Head';
function Story() {
  return (
     <div>
     <Head 
         title="STORIES"
     />
      <div>
     
       <div className="App-left">
         <img
           className="circle-img-left"
           alt="alt"
           src="https://static.toiimg.com/photo/msid-64957021,width-96,height-65.cms"
         />
         <p>
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
           
         </p>
       </div>
       <div className="App-right">
         <img
           className="circle-img-right"
           alt="alt"
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJUwRoKYp-r2ZBZvrZdKj8E_f7emeyUtWSA&usqp=CAU"
         />
         <p>
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
           
         </p>
       </div>
     </div></div> 
   
  );
}

export default Story;