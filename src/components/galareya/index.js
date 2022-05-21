import { useRef, useState } from 'react';
import './style.css';
import Module from './style.module.css';
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa';

const Galareya = () => {
    const [imginfo,setImgInfo]=useState([
       
        {
            id:1,
            title:'img1'
        },
        {
            id:2,
            title:'img2'
        },
        {
            id:3,
            title:'img3'
        },
        {
            id:4,
            title:'img4'
        },
        {
            id:5,
            title:'img5'
        },
        {
            id:6,
            title:'img6'
        },
        {
            id:7,
            title:'img7'
        },
        {
            id:8,
            title:'img8'
        },
        {
            id:9,
            title:'img9'
        },
        {
            id:10,
            title:"img10"},
    ]);
    const[current,setCurrent]=useState(1)
    const imgSrc=useRef();
    const showBigImg=(e)=>{
          imgSrc.current.src=e.target.src;     
    }
   const changeLeft=()=>{
       if(current===1){
           setCurrent(imginfo.length)
       }
       else{
           setCurrent(current-1);
       }
   imgSrc.current.src=process.env.PUBLIC_URL +`/img/dev-img${current}.jpg`;
       console.log(current);
   }
   const changeRight=()=>{
    if(current===imginfo.length){
        setCurrent(1)
    }
    else{
        setCurrent(current+1)
    }
    imgSrc.current.src=process.env.PUBLIC_URL +`/img/dev-img${current}.jpg`;
     console.log(current);
}
  return (
   <div className={`${Module.flexCenter} countainer`}>
       <div className="blog">
           <div className={`${Module.flexCenter} galeriya`}>
           <div className="right-btn">
                   <FaArrowRight onClick={changeRight}/>
                </div>
               <div className='big-show'>
                  <img  ref={imgSrc} src={process.env.PUBLIC_URL +`/img/dev-img${current}.jpg`} alt={imginfo.id} />
               </div>
               <div className="left-btn">
                   <FaArrowLeft onClick={changeLeft}/>
                </div>
               <div className="show-collection">
                    <div className={`${Module.flexCenter} collection`}>
                       {
                      imginfo.map((item,index)=>{
                      return(
                        <div className="items" key={index} >
                           { <img 
                                key={index}
                                src={process.env.PUBLIC_URL+`/img/dev-img${item.id}.jpg`} 
                                alt={item.title} 
                                onClick={showBigImg}
                            /> }
                        </div>
                      )
                      })
                       }
                    </div>
                </div>
           </div>
       </div>
   </div>
  )
}

export default Galareya;