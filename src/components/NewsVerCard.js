import React, { useEffect, useState } from 'react';
import axios from "axios";
import  {Pagination}  from './Pagination';
import ViewCard from './ViewCard';
import ViewCardgrid from './ViewCardgrid';

const NewsVerCard = ({view}) => {
    const [state, setState] = useState([]);
    const [currpage, setCurrpage] = useState(1)
    const [cardPerPage] = useState(6)
    const [openNews, setOpenNews] = useState(false)

    var d = new Date().toString();
    var index = d.lastIndexOf(':')
    let samay = (d.substring(0, index))


    useEffect(() => {
        const fetchApi = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setState(res.data)
        }
        fetchApi();
    }, [])
    

    const indexOfLastCard = currpage * cardPerPage;
    const indexOfFirstCard = indexOfLastCard - cardPerPage;
    const currCard = state.slice(indexOfFirstCard, indexOfLastCard )
    

    //change page
   const paginate =(pageNumber)=>{
       setCurrpage(pageNumber)
   }
   

    return (
<>
        <div className="verticalCard1">
        {
            view ? 

                <ViewCard currCard={currCard} samay={samay} setOpenNews={setOpenNews} openNews={openNews}/>
                : <ViewCardgrid currCard={currCard} samay={samay} setOpenNews={setOpenNews} openNews={openNews} />
                
            
        }
            <Pagination totalPage= {state.length/8} currpage = {currpage}  cardPerPage= {cardPerPage} paginate={paginate} />
            </div>
            </>


    )


}


export default NewsVerCard
