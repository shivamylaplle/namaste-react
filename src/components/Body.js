import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import  Shimmer  from "./Shimmer";
import { Link } from "react-router-dom";

const Body = ()=>{
    const[listOfRestaurants,setListOfRestaurants] = useState([]);
    const[filteredRestaurant,setFilteredRestaurant] = useState([]);
    const[searchText, setSearchText] = useState("");

    //whenever state varibale updates, react triggers a reconciliation cycle(re-renders the component)
      console.log("Body Rendered");

    useEffect(()=>{
        // console.log("useEffect caled");  
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9588816&lng=77.6865383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json);
        //optional chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // console.log("Body Rendered");

    //conditional Rendering
    // if(listOfRestaurants.length === 0){
    //     return <Shimmer />;
    // }
    

    return listOfRestaurants.length === 0 ? (<Shimmer/>) :  (
        <div className="Body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                            setSearchText(e.target.value);
                    }}/>
                    <button onClick={()=>{
                        //Filter the restaurant
                        //SearchText
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurants.filter((res)=>{
                                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        // setListOfRestaurants(filteredRestaurant);
                        setFilteredRestaurant(filteredRestaurant);
                    }}>search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                        const filteredList = listOfRestaurants.filter((res)=>{
                            return res.info.avgRating > 4.3;

                        });
                        // setListOfRestaurants(filteredList);
                        setFilteredRestaurant(filteredList);
                    
                        console.log(filteredList);

                }}>
                    Top Rated Restaurant</button>
                    
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant)=>{
                       return <Link key = {restaurant.info.id} to={"/restaurants/"+restaurant.info.id}> <RestaurantCard  resData = {restaurant}/></Link>
                    } )
                }
            </div>
        </div>
    )
}

export default Body;