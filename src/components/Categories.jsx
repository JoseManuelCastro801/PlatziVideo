import React, { Children } from 'react'

import '../assets/styles/components/Categories.scss'

const Categories = ({Children}) => (

    <div>
        <h3 className="categories__title">Mi lista</h3>
        {Children}
    </div>
    

)

export default Categories ;