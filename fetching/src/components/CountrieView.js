import React, {useState} from 'react';
import OneCountrieView from './OneCountrieView';

const CountrieView = (props) => {
    const{
        nameCountrie,
        oficialName,
        languages,
        coatOfArms,
        button
        } = props

    const [showDetail, setshowDetail] = useState(false);
    const [click, setClick] = useState(0);

    const handleShowDetail = () =>{
        let sum=click
        setClick(sum+=1)
        if (click%2===0) {
        setshowDetail(true)
        }
        else
        setshowDetail(false)
    }

    

    if (button) {
        return (
            <div>
                <h3 onClick={handleShowDetail}>{nameCountrie}</h3>
                 
                {(()=>{
                    if(showDetail){
                        return(
                            <OneCountrieView
                                nameCountrie = {nameCountrie}
                                oficialName = {oficialName}
                                languages = {languages}
                                coatOfArms={coatOfArms}
                            />
                        )
                    }
                })()} 
            </div>
            )     
        
    }
    return (
        <div>
            <h3>{nameCountrie}</h3>  
        </div>
        )



}

export default CountrieView;
