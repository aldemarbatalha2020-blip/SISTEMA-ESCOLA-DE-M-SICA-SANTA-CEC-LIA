import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Santa Cecília · Gestão',description:'O cuidado com a escola, em um só lugar.',icons:{icon:'/logo.png'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
