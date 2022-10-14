import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({names,deleteName}) => {
    
    return names.map(person=>(
        
        <tr key={person.name}>
            <td>{person.name}</td>
            <td>{person.phone}</td>
            
            <td className='delete-btn' onClick={()=>deleteName(person.name)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}
