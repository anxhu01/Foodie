import React from 'react'
import './Add.css'
import {assets} from '../../assets/assets'
const Add = () => {
  return (
    <div className='add'>
      <form className='flex-col' >
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={assets.upload_area} alt="" />
          </label>
          <input type="file" id='image' hidden required />
        </div>
        <div className="app-product-name flex-col">
          <p>Product Name</p>
          <input type="text" name='name' placeholder='Type here' />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea  name='description' rows="6" placeholder='Write here' required ></textarea>
        </div>
        <div className="add-category-price">
            <div className="add-category flex-col">
                <p>Category</p>
                <select name='category' required>
                    <option value="Cake">Cake</option>
                    <option value="Salad">Salad</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Desert">Desert</option>
                    <option value="Pasta">Pasta</option>
                </select>
            </div>
            <div className="add-price flex-col">
                <p>Price</p>
                <input type="number" name='price' placeholder='₹200'  />
            </div>
        </div>
        <button type='submit' className='add-button'>ADD</button>
      </form>
    </div>
  )
}

export default Add
