import React, { useState } from 'react'
// import { useDispatch, useSelector } from "react-redux";
// import { addAnimal } from '../redux/farmerAnimals/FarmerAnimalsActions';
import FarmerNav from './FarmerNav';

function AddSell() {
  const [name, setName] = useState('')
  const [stock, setStock] = useState('')
  const [breed, setBreed] = useState('')
  const [age, setAge] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState(null)
  // const dispatch = useDispatch()

  function nameChange(e){
    setName(e.target.value)
  }

  function stockChange(e){
    setStock(e.target.value)
  }

  function breedChange(e){
    setBreed(e.target.value)
  }

  function categoryChange(e){
    setCategory(e.target.value)
  }

  function ageChange(e){
    setAge(e.target.value)
  }

  function imageChange(e){
    setImage(e.target.files[0])
    console.log(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    const data = new FormData();

    data.append("animal[name]", name);
    data.append("animal[stock]", stock);
    data.append("animal[age]", age);
    data.append("animal[breed]", breed);
    data.append("animal[category]", category);
    data.append("animal[farmer_id]", 2);
    data.append("animal[order_id]", 2);
    data.append("animal[image]", image);

    handleSubmitToApi(data)


  }

  function handleSubmitToApi(data){
    // e.preventDefault()
    //  const formData = {
    //   name:name,
    //   stock:stock,
    //   age:age,
    //   breed:breed,
    //   category:category,
    //   farmer_id:2,
    //   order_id:2,
    //   img_url:"https://robohash.org/animiquiomnis.png?size=300x300&set=set1"
    //  }

    //  dispatch(addAnimal(formData))

     fetch('/animals',{
      method: "POST",
      body:data

     })
     .then((r)=>r.json())
     .then((data)=>{
      console.log(data)
    })

  }


  return (
    <>
    <FarmerNav/>
    <div className='container mt-3 p-5'>
      <h2 className='text-center mb-5'>Insert your new animal</h2>
      <form onSubmit={handleSubmit} className="row m-auto g-3">
        
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
          <input type="text" name='name' value={name} onChange={nameChange} className="form-control" id="staticEmail"></input>
       
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Product Stock</label>         
          <input type="number" name='stock' value={stock} onChange={stockChange} className="form-control" id="staticEmail"></input>

          <label htmlFor="inputCategory" className="col-sm-2 col-form-label">Category</label> <br/> 
          <select defaultValue={category} name='category' onChange={categoryChange} className="form-select form-control form-select-lg mb-3" aria-label=".form-select-lg example">
            <option defaultValue>Select Category</option>
            <option value="One">One</option>
            <option value="Two">Two</option>
            <option value="Three">Three</option>
          </select>  
          
       
          <label htmlFor="inputBreed" className="col-sm-3 col-form-label">Breed</label>          
          <input type="text" name='breed' value={breed} onChange={breedChange} className="form-control" id="inputPassword"></input>
              
          <label htmlFor="inputAge" className="col-sm-3 col-form-label">Age</label>          
          <input type="number" name='age' value={age} onChange={ageChange} className="form-control" id="inputPassword"></input>
        
          <label htmlFor="inputImage" className="col-sm-2 col-form-label">Image</label>          
          <input onChange={imageChange} className="form-control" type="file" id="formFile"></input>

          <button className='mt-2 form-control bg-primary' type='submit'>Sell Animal</button>
      </form>
    </div>
    </>
  )
}

export default AddSell