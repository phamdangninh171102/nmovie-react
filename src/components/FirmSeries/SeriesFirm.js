import React from 'react';
import { useSelector } from 'react-redux';
import { mappingDataItemFirm } from '../../helps/Helps';
import FirmList from '../FirmList/FirmList';
import './firmSeries.css'

function FirmSeries(props) {
    const dataFirm = useSelector(state => state.firmSeries)
    const itemsFirm = dataFirm.items
    console.log(dataFirm.type_list);
    
    if(!itemsFirm){
        return
    }

    let itemFirmMap = []

    if(itemsFirm){
        itemFirmMap = itemsFirm.map(item =>(
            mappingDataItemFirm(item)
        ))
    }    
    return (
       <FirmList　title='FirmSeries' list = {itemFirmMap} />
    );
}

export default FirmSeries;