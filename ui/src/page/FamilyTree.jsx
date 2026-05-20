import { useEffect, useState } from "react"
import Cards from "../components/Cards"
import { getFamilyTree } from "../api/familyApi";
import FamilyTreeGraph from "../components/FamilyTreeGraph.jsx";

const FamilyTree = () => {
    return (
        <>
        <Cards/>
        <FamilyTreeGraph />
    </>
    )
}

export default FamilyTree
