import {  Link } from "@tanstack/react-router";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import useDocStore from "../../store/docStore";

 const Pagination = (props: {link1?:string,name1?:string,link2?:string,name2?:string}) => {
  const store = useDocStore();
return (
      <div className="flex justify-between w-8/12 bottom-0 ">
      {
        props.name1 && props.link1 &&
      <Link
          to={props.link1}
          onClick={() => {
            store.setSelectedTab(props.name1!);
          }}
          className="flex flex-col items-start justify-center  ml-10 h-28 rounded-xl float-left w-72 px-3 py-5  text-xl my-10 "
        >
          <h1 className="text-sm text-zinc-500">Previous</h1>
          <div className="flex text-lg items-center">
            <GoArrowLeft size={10} className="mr-3" />
          {props.name1} 
          </div>
        </Link>
      }

      {
        props.name2 && props.link2 &&
        <Link
          to={props.link2}
          onClick={() => {
            store.setSelectedTab(props.name2!);
          }}
          className="flex flex-col items-end justify-center ml-10 h-28 rounded-xl float-left w-72 px-3 py-5 text-xl my-10 "
        >
          <h1 className="text-sm text-zinc-500">Next</h1>
          <div className="flex text-lg items-center">
          {props.name2} 
            <GoArrowRight size={10} className="ml-3" />
          </div>
        </Link>
      }
      </div>

)
}

export default Pagination
