import React, { useEffect, useState } from 'react'
import { getFamilyTree } from '../api/familyApi'

const MemberCard = ({ user, relation }) => {
  const getColors = (rel) => {
    switch (rel) {
      case 'self':
        return { bg: '#2563eb', text: '#ffffff', border: '#1d4ed8' };
      case 'wife':
        return { bg: '#fdf2f8', text: '#db2777', border: '#fbcfe8' };
      case 'son':
        return { bg: '#ecfdf5', text: '#059669', border: '#a7f3d0' };
      case 'daughter':
        return { bg: '#ff6973', text: '#7c0be6', border: '#f50521' };
      default:
        return { bg: '#ffffff', text: '#334155', border: '#e2e8f0' };
    }
  };

  const colors = getColors(relation);

  return (
    <div
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
        borderColor: colors.border,
        borderWidth: '1px',
        borderStyle: 'solid',
        padding: '10px 20px',
        borderRadius: '12px',
        minWidth: '120px',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
        fontWeight: '600',
        fontSize: '14px',
      }}
    >
      <div style={{ textTransform: 'capitalize' }}>{user}</div>
      {relation && (
        <div style={{ fontSize: '11px', opacity: 0.7, fontWeight: 'normal', marginTop: '2px' }}>
          {relation}
        </div>
      )}
    </div>
  );
};

const TreeBranch = ({ node }) => {
  if (!node) return null;

  const members = node.familyMember || [];

  const spouses = members.filter(
    (m) => m.relation === 'wife' || m.relation === 'husband'
  );
  const children = members.filter(
    (m) => m.relation !== 'wife' && m.relation !== 'husband'
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
        <MemberCard user={node.user} relation={node.relation ?? 'self'} />

        {spouses.map((spouse, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '24px', height: '2px', backgroundColor: '#94a3b8' }} />
            <MemberCard user={spouse.user} relation={spouse.relation} />
          </div>
        ))}

        {children.length > 0 && (
          <div
            style={{
              position: 'absolute',
              bottom: '-20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              height: '20px',
              backgroundColor: '#94a3b8',
            }}
          />
        )}
      </div>

      {children.length > 0 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '20px',
            position: 'relative',
          }}
        >
          {children.map((child, index) => {
            const isFirst = index === 0;
            const isLast = index === children.length - 1;

            return (
              <div
                key={index}
                style={{
                  position: 'relative',
                  padding: '20px 20px 0 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '2px',
                    height: '20px',
                    backgroundColor: '#94a3b8',
                  }}
                />

                {children.length > 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: isFirst ? '50%' : '0',
                      right: isLast ? '50%' : '0',
                      height: '2px',
                      backgroundColor: '#94a3b8',
                    }}
                  />
                )}

                <TreeBranch node={child} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

function FamilyTreeGraph() {
  const [familyData, setFamilyData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFamilyTree();
  }, []);

  const fetchFamilyTree = async () => {
    try {
      const data = await getFamilyTree();
      setFamilyData(data);
    } catch (err) {
      console.error(err);
      setError('Failed to load family tree.');
    }
  };

  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div
      style={{
        padding: '60px 20px',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        backgroundColor: '#f8fafc',
        minHeight: '100vh',
      }}
    >

      <div style={{ display: 'inline-block', overflowX: 'auto', padding: '20px' }}>
        {familyData ? <TreeBranch node={familyData} /> : <p>Loading...</p>}
      </div>
    </div>
  );
}

export default FamilyTreeGraph;

