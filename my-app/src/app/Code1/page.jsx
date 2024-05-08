"use client";

function handleClick(e) {
    alert("Hello World");
}
function KeyPress(e) {
    console.log(e.key, e.shiftKey, e.ctrlKey, e.altKey);
    if(e.altKey && e.key === 'k'){
        alert('alt + k')
        // alert('control + a')
    }
}
function handleBlur(e) {
    !isNaN(e.target.value) ? alert("is a number") : alert("is not a number");
}

function handleFocus(e) {
    console.log('focusing',e.target.value);
}

export default function Home() {
    return (
        <main>
            
           
            <button
                onClick={handleClick}
                className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >Click me</button>
           <div
        
        className="bg-green-500 hover:bg-gray-700 text-white font-bold py-4 w-1/2 px-2 mt-4 gap-2 rounded"
           onMouseEnter={() => {
            //    alert("I am in the div");
            console.log('I am in the div');
           }}
           onMouseLeave={() => { 
            console.log('I am out of the div');
            // alert("I am out of the div");

        }}
           
           >This is a Div and I am in the Code 1 Page</div>
         <input 
        //   onBlur={(e) => {
        //     !isNaN(e.target.value)
        //       ? alert("is a number")
        //       : alert("is not a number");
        //   }}
        //   onChange={(e) => {
        //     console.log(e.target.value);
        //   }}
        // onKeyDown={KeyPress}
        // onBlur={handleBlur}
        onFocus={handleFocus}
          className="bg-cyan-500	 hover:bg-rose-500	 text-white font-bold py-4 w-1/2 px-2 mt-4 gap-2 rounded"

        //   className="text-black"
         />




           {/* <div 
         className="bg-cyan-500	 hover:bg-rose-500	 text-white font-bold py-4 w-1/2 px-2 mt-4 gap-2 rounded"
        //   onFocus={handleFocus}
           >
            Hello Guys I am a Full Stack
           </div> */}
        </main>
    )}
      