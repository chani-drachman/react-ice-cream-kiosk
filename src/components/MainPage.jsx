import React, { useState } from 'react'
import FlavorCard from './FlavorCard'
import styles from "../cssComponents/MainPage.module.css"
import OrderSummary from './OrderSummary'
import Header from './Header'

const MainPage = () => {
    const [flavors, setFlavors]=useState(     [{name:"vanilla",isSoldOut:false, scoopsSelected:0},
          {name:"chocklate",isSoldOut:false, scoopsSelected:0},
          {name:"coffee",isSoldOut:true, scoopsSelected:0}, 
          {name:"strawberry",isSoldOut:false, scoopsSelected:0},
          {name:"melon",isSoldOut:false, scoopsSelected:0}, 
          {name:"mango",isSoldOut:true, scoopsSelected:0},
          {name:"lemon",isSoldOut:false, scoopsSelected:0},
          {name:"carmel",isSoldOut:false, scoopsSelected:0},
          {name:"Pistachio",isSoldOut:false, scoopsSelected:0},
        ])
    const [scoopLimit, setScoopLimit]=useState(20)
    const [showOnlyAvailable, setShowOnlyAvailable]=useState(false)
    const toggleShowAvailable=()=>{
      setShowOnlyAvailable(prev=>prev=!prev)
    }

    const addScoop=(flavorName)=>{
      setFlavors(prevFlavors=>prevFlavors.map((flavor)=>{
      if(flavor.name===flavorName){
        return{
          ...flavor,scoopsSelected: flavor.scoopsSelected+1
        }
      }
    return flavor;}))
    }
    const removeScoop=(flavorName)=>{
      setFlavors(prevFlavors=>prevFlavors.map((flavor)=>{
        if(flavor.name===flavorName){
          return{
         ...flavor, scoopsSelected:flavor.scoopsSelected-1}
        }
        return flavor;
      }))
    }
    const availableFlavors = flavors.filter(flavor => 
  !showOnlyAvailable || !flavor.isSoldOut
)
 
  return (
    <>
   <Header/>
    <button className={styles.toggleButton} onClick={toggleShowAvailable}>
  {showOnlyAvailable ? "Show All" : "Show Available Only"}
</button>
    <div className={styles.flavorsSection}>

    {availableFlavors.length > 0 ? (
      availableFlavors.map((flavor, index) => (
        <FlavorCard
          key={flavor.name}
          name={flavor.name}
          isSoldOut={flavor.isSoldOut}
          scoopsSelected={flavor.scoopsSelected}
          addScoop={addScoop}
          removeScoop={removeScoop}
        />
      ))
    ) : (
      <p className={styles.noFlavorsMessage}>
        הכל נמכר! אין טעמים זמינים כרגע 🍦
      </p>
    )}

  </div>


    
    <OrderSummary flavors={flavors} scoopLimit={scoopLimit}/>
    
    </>
  )
}

export default MainPage