import ForceGraph2D from "react-force-graph-2d";

function FamilyTreeGraph({ members }) {

  const nodes = members.map(member => ({
    id: member.id,
    name: member.fullName,
    relation: member.relation
  }));



  const links = members
    .filter(member => member.relatedToId)
    .map(member => ({
      source: member.relatedToId,
      target: member.id
    }));



  return (

    <div style={{ height: "600px" }}>

      <ForceGraph2D

        graphData={{
          nodes,
          links
        }}

        nodeLabel="name"

      />

    </div>

  );
}

export default FamilyTreeGraph;