const customStyles = {
    container: (provided, state) => ({
        ...provided,
        border: 'none',
        outline: 'none',
        padding: 0,
        textAlign: 'left',
        display: 'flex',
    }),
    option: (provided, state) => ({
        ...provided,
        background: state.isSelected ? 'none' : 'none',
        '&:hover': {
            background: '#f2f2f2',
        },
        borderBottom: '0.1rem solid #2F2E41',
        color: '#2F2E41',
        fontWeight: state.isSelected ? 'bold' : 'normal',
        padding: '0.5rem 1rem',
    }),
    control: (provided, state) => ({
        ...provided,
        border: state.isFocused ? 0 : 0,
        // This line disable the blue border
        boxShadow: state.isFocused ? 0 : 0,
        '&:hover': {
            border: state.isFocused ? 0 : 0
        },
        cursor: 'pointer',
    }),
    menu: (provided, state) => ({
        ...provided,
        border: state.isFocused ? 0 : 0,
        // This line disable the blue border
        boxShadow: state.isFocused ? 0 : 0,
        '&:hover': {
            border: state.isFocused ? 0 : 0
        },
        width: 'max-content',
    }),
    menuList: (provided, state) => ({
        ...provided,
        paddingTop: 0,
        paddingBottom: 0,
        borderRadius: 0,
    }),
    indicatorSeparator: (styles) => ({ display: 'none' }),
    dropdownIndicator: (provided) => ({...provided, color: '#2F2E41'}),
}

export default customStyles