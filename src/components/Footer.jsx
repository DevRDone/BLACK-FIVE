import Logo from './Logo'; import {CAMPAIGN_DATES} from '../config'
export default function Footer(){return <footer><div className="container footer-inner"><Logo compact/><p>Black Friday Five Delivery · {CAMPAIGN_DATES} · Condições sujeitas a análise comercial</p><span>© Five Delivery</span></div></footer>}
