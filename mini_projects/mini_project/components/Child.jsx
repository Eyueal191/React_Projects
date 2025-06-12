import { forwardRef, useImperativeHandle, useRef } from "react";

const Child = forwardRef((props, ref) => {
   let localRef = useRef()
    useImperativeHandle(ref, ()=>{
        return {
        getfocus: ()=>{localRef.current.focus()},
        getblur:()=>{localRef.current.blur()}}
    })
  return (
    <input
      type="text"
      ref={localRef}
      className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
});

export default Child;
