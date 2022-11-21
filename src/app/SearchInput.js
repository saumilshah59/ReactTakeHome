import { makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useMemo, useState } from 'react'
import { InputBase } from '@material-ui/core'

const useStyles = (error) => makeStyles({
    inputContainer: {
        border: error ? '1px solid red' : '1px solid white',
        padding: '0px 10px 0px 10px',
        borderRadius: '10px',
        filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))'
    },
    input: {
        color: error ? 'red' : 'white',
    },
})

function isValidInput(value) {
    if(value === '') return true;
    var regExpStr = /^((\d+)|(\d+[0-9,]+\d+))$/g
    var regExp = new RegExp(regExpStr)
    if(regExp.test(value)) {
        // setError(false);
        // onChange(value);
        return true;
    } else {
        // setError(true);
        return false
    }
}

function SearchInput(props) {

    const { placeholder, value, onChange, onSubmit } = props;
    const [error, setError] = useState(false)
    const classes = useStyles(error)()

    useEffect(() => {
        if(isValidInput(value))
            setError(false)
        else
            setError(true)
    }, [value])

    return (
        <>
        {error && (
            <>
                <Typography variant='subtitle1' style={{ color: 'red' }}>Wrong Format!</Typography>
            </>
            )}
        <div className={classes.inputContainer}>
            <InputBase 
                value={value} 
                className={classes.input} 
                onChange={(event) => {
                    const myValue = event.target.value;
                    onChange(myValue);
                    if(isValidInput(myValue))
                        onSubmit()
                }}
                placeholder={placeholder} 
            />
        </div>
    </>        
    )
}

export default SearchInput
