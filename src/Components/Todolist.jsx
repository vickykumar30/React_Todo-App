import React, { useState } from 'react'

const Todolist = () => {

    const [activity, setActivity] = useState("");
    const [listData, setlistData] = useState([]);

    function addActivity() {
        // setlistData([...listData, activity])
        // console.log(listData)
        setlistData((listData) => {
            const updatedList = [...listData, activity]
            console.log(updatedList)
            setActivity('');
            return updatedList
        })
    }

    function removeActivity(i) {
        const updatedListData = listData.filter((elem, id) => {
            return i != id;
        })
        setlistData(updatedListData);
    }

    function removeAll() {
        setlistData([])
    }
    return (

        <>
            <div className="container">
                <div className="header">TODO LIST</div>
                <input type="text" placeholder='Add Activity' value={activity} onChange={(e) => setActivity(e.target.value)} />
                <button onClick={addActivity}>Add</button>
                <p className='List-heading'> <i class="fa-solid fa-face-smile"></i> Here is your list <i class="fa-solid fa-face-smile"></i></p>
                {listData != [] && listData.map((data, i) => {
                    return (
                        <>
                            <p Ikey={i}>
                                <div className='listData'>{data}</div>
                                <div className="btn-position"><button onClick={() => removeActivity(i)}>Remove <i class="fa-solid fa-trash"></i></button></div>
                            </p>
                        </>
                    )
                })}

                {listData.length >= 1 &&
                    <button onClick={removeAll}>Remove All <i class="fa-solid fa-trash"></i></button>}
            </div>
        </>
    )
}

export default Todolist
