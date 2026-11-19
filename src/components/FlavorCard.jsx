import React from 'react'
import styles from "../cssComponents/FlavorCard.module.css"


const FlavorCard = ({name, isSoldOut, scoopsSelected, addScoop, removeScoop}) => {
const dynamicClass = isSoldOut ? styles.soldOut : "";  
    
  return (
   <div className={`${dynamicClass} ${styles.flavorCard}`}>
{isSoldOut && <span className={styles.soldOutBadge}>SOLD OUT</span>}
    <h2>{name}</h2>
<h4>{scoopsSelected} scoop selected</h4>
<button className={styles.addButton} onClick={()=>addScoop(name)} disabled={isSoldOut}>Add scoop</button>
<button className={styles.removeButton} onClick={()=>removeScoop(name)} disabled={scoopsSelected===0}>Remove scoop</button>

   </div>
  )
}

export default FlavorCard