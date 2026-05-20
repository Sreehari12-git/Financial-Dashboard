import Tree from "react-d3-tree";

function FamilyTreeGraph({ members }) {

  // Find root member (member without parent)
  const rootMember = members.find(member => !member.relatedToId);

  // Recursive function to build tree
  const buildTree = (member) => {
    const children = members.filter(
      m => m.relatedToId === member.id
    );

    return {
      name: member.fullName,
      attributes: {
        relation: member.relation
      },
      children: children.map(child => buildTree(child))
    };
  };

  const treeData = rootMember ? buildTree(rootMember) : {};

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <Tree
        data={treeData}
        orientation="vertical"
        pathFunc="step"
        translate={{ x: 500, y: 100 }}
        collapsible={false}
      />
    </div>
  );
}

export default FamilyTreeGraph;