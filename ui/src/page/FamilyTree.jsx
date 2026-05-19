import { useEffect, useState } from "react"
import Cards from "../components/Cards"
import { getFamilyTree } from "../api/familyApi";
import FamilyTreeGraph from "../components/FamilyTreeGraph.jsx";

const FamilyTree = () => {
    const [members,setMembers] = useState([]);

    useEffect(() => {
        fetchTree();
    },[])

    const fetchTree = async () => {
        const data =  await getFamilyTree();
        setMembers(data);
    }


    return (
        <>
        <Cards/>
        <FamilyTreeGraph members={members} />
    </>
    )
}

export default FamilyTree
