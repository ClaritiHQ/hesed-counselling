import { ImageResponse } from 'next/og';
export const dynamic = 'force-static';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'100%',height:'100%',padding:'80px',background:'#fbfaf8',color:'#5a375b'}}><div style={{fontSize:28,letterSpacing:6,marginBottom:45}}>HESED COUNSELLING SERVICES</div><div style={{display:'flex',flexDirection:'column',fontSize:78,fontFamily:'serif',lineHeight:1.12}}><span>care rooted</span><span>in love</span></div><div style={{fontSize:25,marginTop:42}}>Dr. Emmanuel Werashipala · Thika Town & online</div></div>,size);}
