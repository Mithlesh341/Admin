import React from 'react'
import './Approved.css'
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StoreContext } from '../../StoreContext/StoreContext';
import axios from 'axios';
function Approved() {
  
     const {reviewlist,fetchReviewList} = useContext(StoreContext);
   useEffect(() => {
    fetchReviewList(); // Fetch the review data when the component mounts
    console.log(reviewlist)
}, []); 

    const [status,setStatus]=useState("Pending");
    const [id,setId]=useState('');
    const updateStatus=async(e)=>
    {
        e.preventDefault();
        console.log(e.target.value+" "+e.target.id);
        setStatus(e.target.value);
        setId(e.target.id);
        let res=axios.post("http://localhost:5500/api/review/update",{status:e.target.value,id:e.target.id});
        window.location.reload()
        if(res.status==200)
        {
          
          fetchReviewList();

            //     setReviewList(prevList =>
            //       prevList.map(review => 
            //         review._id === reviewId ? { ...review, status: newStatus} : review
            //        )
            //     );
            //     alert("Review status updated successfully!");
            //     fetchReviewList(); // Refresh the list to reflect changes
            //   } else {
            //     alert("Error updating status: " + data.message);
            //   }
            // } catch (error) {
            //   console.error("Error updating review:", error);
            // }
        }
    }
  return (
    // <div>
    //    <div className='order add'>
    //   <h3>Order Page</h3>
    //   <div className="order-list">
    //     {orders.map((order, index)=>(
    //       <div key={index} className="order-item">
    //          <img src={assets.parcel_icon} alt="" />
    //          <div><p className='order-item-food'>
    //           {order.items.map((item, index) =>{
    //             if (index === order.items.length-1) {
    //               return item.name + " X " + item.quantity
    //             }
    //             else{
    //               return item.name + " x " + item.quantity + ", "
    //             }
    //           })}
    //           </p>
    //           <p className="order-item-name">
    //             {order.address.firstName+" " + order.address.lastName}

    //           </p>

    //           <div className="order-item-address">
    //             <p>{order.address.street+","}</p>
    //             <p>{order.address.city+", "+order.address.state+", "+ order.address.country+", "+order.address.zipcode}</p>
    //           </div>
    //           <p className='order-item-phone'>{order.address.phone}</p>
    //           </div>
    //           <p>Items : {order.items.length}</p>
    //           <p>${order.amount}</p>

    //           <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
    //             <option value="Food Processing">Food Processing</option>
    //             <option value="Out For Delivery">Out For Delivery</option>
    //             <option value="Delivered">Delivered</option>
    //           </select>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    // </div>
    <>
      <div id="topclass" className='list add flex-col'>
        <h1 style={{ textAlign: 'center', marginTop: 2, marginBottom: 2, paddingBottom: 5 }}>Approved Review List</h1>
        <div className="list-table">
          <div className="list-table-format title">
            <b>Image</b>
            <b>Product Name</b>
            <b>Product Category</b>
            <b>Rating</b>
            <b>Review Title</b>
            <b>Review</b>
            <b>UserName</b>
          </div>
          {reviewlist.map((item, index) => {
            return (
              <>
              { item.status==="Approved" && (
              <div key={index} className='list-table-format'>
                <img src={`http://localhost:5500/uploads/${item.image}`} alt="" />
                <p>{item.productName}</p>
                <p>{item.productCategory}</p>
                <p>{item.rating}</p>
                <p>{item.reviewTitle}</p>
                <p>{item.review}</p>
                <p>{item.userName}</p>
              </div>
              )
            }
            </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Approved
