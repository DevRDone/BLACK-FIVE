import {Routes,Route,useLocation} from 'react-router-dom'
import {useEffect} from 'react'
import Home from './pages/Home'
import Indicacao from './pages/Indicacao'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function PageFrame(){
 const location=useLocation()
 useEffect(()=>{window.scrollTo(0,0)},[location.pathname])
 useEffect(()=>{
  const els=document.querySelectorAll('.reveal'); const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');ob.unobserve(e.target)}}),{threshold:.12}); els.forEach(el=>ob.observe(el)); return()=>ob.disconnect()
 },[location.pathname])
 return <div className="site-shell"><Navbar/><main><Routes><Route path="/" element={<Home/>}/><Route path="/indicacao" element={<Indicacao/>}/></Routes></main><Footer/></div>
}
export default function App(){return <PageFrame/>}
