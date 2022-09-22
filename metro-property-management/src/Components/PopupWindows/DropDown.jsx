    import React, { useEffect, useState } from 'react';
    import './PropertySearchPopup.css'
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
             * @param item  The selected city
             */
            const onClickHandler = (item) => {
                props.itemSelection(item);
            };
        
            useEffect(() => {
            setShowDropDown(showDropDown);
            }, [showDropDown]);
        
            return (
            <>
                <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
                {props.items.map(
                    (item, index)=> {
                    return (
                        <p
                        key={index}
                        onClick={() => {
                            onClickHandler(item);
                        }}
                        >
                        {item}
                        </p>
                    );
                    }
                )}
                </div>
            </>
            );
        }
    
    export default DropDown