

const Sr = ({sear, setSear, setCat}) => {
   
    return (
        <div className="sr">
            <div className="it1">
                <input type="text" className="inp" placeholder="search in the world" onChange={(e)=>setSear(e.target.value)
                    
                }/>
            </div>
            <div className="it2">
                
                <select name="countrie" id="cnt" onChange={(e)=>setCat(e.target.value)}>
                    <option value="" hidden>Filtre par region</option>
                    <option value="africa" >Afrique</option>
                    <option value="Asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="Americas">Americas</option>
                </select>
            </div>
        </div>
    );
}

export default Sr;
