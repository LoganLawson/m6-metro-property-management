import React, { useEffect, useState } from 'react';
// type DropDownProps = {
//     cities: string[];
//     showDropDown: boolean;
//     toggleDropDown: Function;
//     citySelection: Function;
//     };
    function DropDown(props) {
        const [showDropDown, setShowDropDown] = useState(false);

        /**
         * Handle passing the city name
         * back to the parent component
         *
         * @param city  The selected city
         */
        const onClickHandler = (city) => {
            props.citySelection(city);
        };
    
        useEffect(() => {
        setShowDropDown(showDropDown);
        }, [showDropDown]);
    
        return (
        <>
            <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
            {props.cities.map(
                (city, index)=> {
                return (
                    <p
                    key={index}
                    onClick={() => {
                        onClickHandler(city);
                    }}
                    >
                    {city}
                    </p>
                );
                }
            )}
            </div>
        </>
        );
    }

export default DropDown