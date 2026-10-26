const data=[['1 cliente','R$ 300',20],['3 clientes','R$ 900',42],['5 clientes','R$ 1.500',62],['10 clientes','R$ 3.000',88]]
export default function EarningsBars(){return <div className="earnings-bars">{data.map(([label,val,height])=><div className="bar-col" key={label}><strong>{val}</strong><div className="bar" style={{height:`${height}%`}}/><span>{label}</span></div>)}</div>}
