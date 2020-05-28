import React from 'react'
import { NONAME } from 'dns'

export function Search(props) {
    //props item : selurh items yang lengkap (tanpa di filter)
    //state suggestion : items yang sudah di filter menggunakan state query
    // state query 

    const [query, setQuery] = React.useState('')
    const [suggestion, setSuggestion] = React.useState([])
    React.useEffect (
        
        function() {
            const filteredItem = props.items.filter(function (item) {
                return item.includes(query)
            })
            setSuggestion(filteredItem)   
        }, [query, props.items]
    )

    function handleButtonClick() {
        alert(query)
    }
    function handleInputChange(event) {
        setQuery(event.target.value)
        console.log(event.target.value)
    }

    function handleClear() {
        setQuery('')
    }
    // let item = ['alwi', 'aljabar', 'anwar', 'bintang', 'bahar', 'candra', 'celvin', 'yukafi', 'yurito']
    return (
        <div>
            <div
                style={{
                    display: 'Inline-block',
                    border: '1px solid black',
                    borderRadius: '8px',
                    fontSize: '18px',
                    padding: '10px',
                    margin: '10px',
                    marginTop: '20px',
                    marginLeft: '25%',
                    maxWidth: '50%'
                }}
            >
                <label
                    style={{
                        border: 'none',
                        outline: 'none',
                        pointer: '18px',
                        fontSize: '18px'
                    }}
                >
                    <input
                        style={{
                            border: 'none',
                            outline: 'none',
                            borderRadius: '10px',
                            fontSize: '18px',
                            pointer: '18px'
                        }}
                        value={query}
                        onChange={handleInputChange}
                        type="text"
                        size='35'
                        placeholder={props.placeholder}
                    />
                    {query.length > 0 && <button
                        style={{
                            border: 'none',
                            outline: 'none',
                            backgroundColor: 'white',
                            fontSize: '18px'
                        }}
                        onClick={handleClear}
                    >
                        &times;
                </button>}
                </label>
            </div>


            <button
                onClick={handleButtonClick}
                style={{
                    borderRadius: '8px',
                    padding: '10px 40px',
                    backgroundColor: 'yellow',
                    outline: 'none'

                }}
            >klik</button>

            {/* maping bisa melakukan maping di setiap index array kemudian di rubah menjadi value yang berbeda. mereturn dan menghasilkan array baru */}
            <div>
                <ul style={{
                    // border: '1px solid black',
                    listStyle: 'none',
                    fontSize: '18px',
                    padding: '10px',
                    margin: '0px',
                    marginTop: '0px',
                    marginLeft: '25%',
                    maxWidth: '37%'
                }}>{suggestion.map(function (items) {
                    return <li 
                    style={{
                        border: '1px solid grey',
                        borderRadius: '4px',
                        marginTop: '5px',
                        padding: '10px',
                    }}
                    
                    >{items}</li>
                })}</ul>
            </div>
        </div>

    )

}
