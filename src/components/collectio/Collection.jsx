import React from 'react'
import '../collectio/collection.css'
import im1 from '../../img/bukhary.png'
import im2 from '../../img/muslem.jpeg'
import im3 from '../../img/Tirmidzi.png'
import im4 from '../../img/أنس_بن_مالك.png'
import im5 from '../../img/أبو_داود_السجستاني.png'
import im6 from '../../img/ابن_ماجة.png'
import im7 from '../../img/bnhanbl.jpg'
import { Link } from 'react-router-dom'
export const Collection = () => {
  return (
    <div className='collection'>
      <h1> اختر القسم الذى تريده </h1>
      <div className='categorys'>
        <Link to='/hadith' className="category">
          <img src={im1} alt="" />
          <h3>البخارى </h3>
          <p>1 : 500</p>
        </Link>
        <Link to='/muslim' className="category">
          <img src={im2} alt="" />
          <h3> مسلم  </h3>
          <p>1 : 500</p>
        </Link>
        <Link to='/tirmidzi' className="category">
          <img src={im3} alt="" />
          <h3>الترمذي </h3>
          <p>1 : 500</p>
        </Link>
        <Link to='/malik' className="category">
          <img src={im4} alt="" />
          <h3>مالك بن أنس  </h3>
          <p>1 : 500</p>
        </Link>
        <Link to='/daood' className="category">
          <img src={im5} alt="" />
          <h3>ابو داوود  </h3>
          <p>1 : 500</p>
        </Link>
        <Link to='/magah' className="category">
          <img src={im6} alt="" />
          <h3>ابن ماجه </h3>
          <p>1 : 500</p>
        </Link>
        <Link to='/ahmed' className="category">
          <img src={im7} alt="" />
          <h3> أحمد بن حنبل  </h3>
          <p>1 : 500</p>
        </Link>
      </div>
    </div>
  )
}
